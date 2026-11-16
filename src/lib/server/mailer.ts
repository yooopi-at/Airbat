import * as env from '$app/env/private';
import nodemailer, { type Transporter } from 'nodemailer';
import type { LeadSource } from '#lib/content/lead.ts';
import type { Lead } from './lead.ts';

let transporter: Transporter | undefined;

function requireEnv(name: string, value: string | undefined): string {
	if (!value) throw new Error(`Missing environment variable ${name}`);
	return value;
}

function getTransporter(): Transporter {
	transporter ??= nodemailer.createTransport({
		host: requireEnv('SMTP_HOST', env.SMTP_HOST),
		port: env.SMTP_PORT,
		secure: env.SMTP_SECURE,
		auth: env.SMTP_USER
			? { user: env.SMTP_USER, pass: requireEnv('SMTP_PASS', env.SMTP_PASS) }
			: undefined
	});
	return transporter;
}

async function send(subject: string, text: string, replyTo?: string): Promise<boolean> {
	try {
		await getTransporter().sendMail({
			from: requireEnv('MAIL_FROM', env.MAIL_FROM),
			to: requireEnv('MAIL_TO', env.MAIL_TO),
			replyTo,
			subject,
			text
		});
		return true;
	} catch (error) {
		// Never log form contents or addresses (personal data), only the failure itself.
		const reason = error instanceof Error ? error.name : 'unknown';
		console.error(`[mailer] failed to send "${subject}" (${reason})`);
		return false;
	}
}

/** Sends a lead from the contact / sign-up form to the sales inbox. */
export function sendLead(lead: Lead, source: LeadSource): Promise<boolean> {
	const body = [
		`Source: ${source}`,
		`Monthly volume: ${lead.turnover}`,
		`Name: ${lead.name}`,
		`Email: ${lead.email}`,
		`Company: ${lead.company}`,
		`Phone: ${lead.phone}`,
		'',
		'Message:',
		lead.message || '(none)'
	].join('\n');

	return send(`New lead via website (${source})`, body, lead.email);
}

/** Notifies the team about a newsletter sign-up. */
export function sendNewsletterSignup(email: string): Promise<boolean> {
	return send(
		'New newsletter sign-up via website',
		`Email: ${email}\nConsent given at: ${new Date().toISOString()}`
	);
}
