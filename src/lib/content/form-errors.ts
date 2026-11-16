import { m } from '#lib/paraglide/messages.js';
import type { FieldError } from './lead.ts';

/** Maps server-side validation codes to localized messages. */
export const fieldErrorMessages: Record<FieldError, () => string> = {
	required: m.error_required,
	email: m.error_email,
	too_long: m.error_too_long,
	choice: m.error_choice,
	consent: m.error_consent,
	phone: m.error_phone
};
