import { defineEnvVars } from '@sveltejs/kit/env';

/** Optional at startup so the site runs without SMTP; the mailer reports missing values on send. */
const optional = (value: string | undefined) => value || undefined;

export const variables = defineEnvVars({
	SMTP_HOST: { schema: optional, description: 'SMTP server hostname' },
	SMTP_PORT: {
		description: 'SMTP server port (default 587)',
		schema: (value) => {
			if (!value) return 587;
			const port = Number(value);
			if (!Number.isInteger(port) || port <= 0)
				throw new Error('SMTP_PORT must be a positive integer');
			return port;
		}
	},
	SMTP_SECURE: {
		description: '"true" for implicit TLS (port 465), otherwise STARTTLS',
		schema: (value) => value === 'true'
	},
	SMTP_USER: { schema: optional, description: 'SMTP username' },
	SMTP_PASS: { schema: optional, description: 'SMTP password' },
	MAIL_FROM: { schema: optional, description: 'Sender address for form notifications' },
	MAIL_TO: { schema: optional, description: 'Recipient address for form notifications' }
});
