import { fail, type RequestEvent } from '@sveltejs/kit';
import type { LeadSource } from '#lib/content/lead.ts';
import { parseLead } from './lead.ts';
import { sendLead } from './mailer.ts';

/** Shared form action for the contact and sign-up pages. */
export async function handleLeadAction(event: RequestEvent, source: LeadSource) {
	const result = parseLead(await event.request.formData());

	// Pretend success to bots that filled the honeypot.
	if (result.status === 'spam') return { success: true as const };
	if (result.status === 'invalid') {
		return fail(400, { errors: result.errors, values: result.values });
	}

	const sent = await sendLead(result.data, source);
	if (!sent) return fail(502, { sendFailed: true });
	return { success: true as const };
}
