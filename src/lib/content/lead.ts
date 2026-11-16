/** Shared (client + server) definitions for the lead and newsletter forms. */

export const turnoverOptions = ['lt10', '10_25', '25_50', '50_100', 'gt100'] as const;
export type TurnoverOption = (typeof turnoverOptions)[number];

export const leadFields = [
	'turnover',
	'name',
	'email',
	'company',
	'phone',
	'message',
	'consent'
] as const;
export type LeadField = (typeof leadFields)[number];

export type FieldError = 'required' | 'email' | 'too_long' | 'choice' | 'consent' | 'phone';

export type LeadSource = 'contact' | 'sign-up';

/** Name of the hidden anti-spam field. Real users never fill it in. */
export const HONEYPOT_FIELD = 'website';

/** Shape returned by the lead form actions via `fail()` / success. */
export type LeadActionData =
	| { success: true }
	| {
			success?: false;
			errors?: Partial<Record<LeadField, FieldError>>;
			values?: Partial<Record<LeadField, string>>;
			sendFailed?: boolean;
	  };

export type NewsletterActionData =
	| { success: true }
	| {
			success?: false;
			errors?: Partial<Record<'email' | 'consent', FieldError>>;
			email?: string;
			sendFailed?: boolean;
	  };
