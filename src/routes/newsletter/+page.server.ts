import { fail } from '@sveltejs/kit';
import { parseNewsletter } from '#lib/server/lead.ts';
import { sendNewsletterSignup } from '#lib/server/mailer.ts';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const result = parseNewsletter(await request.formData());

		if (result.status === 'spam') return { success: true as const };
		if (result.status === 'invalid') {
			return fail(400, { errors: result.errors, email: result.values.email });
		}

		const sent = await sendNewsletterSignup(result.data.email);
		if (!sent) return fail(502, { sendFailed: true });
		return { success: true as const };
	}
} satisfies Actions;
