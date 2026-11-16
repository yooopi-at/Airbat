import {
	HONEYPOT_FIELD,
	turnoverOptions,
	type FieldError,
	type LeadField,
	type TurnoverOption
} from '#lib/content/lead.ts';

export type Lead = {
	turnover: TurnoverOption;
	name: string;
	email: string;
	company: string;
	phone: string;
	message: string;
};

export type ParseResult<T, F extends string> =
	| { status: 'valid'; data: T }
	| {
			status: 'invalid';
			errors: Partial<Record<F, FieldError>>;
			values: Partial<Record<F, string>>;
	  }
	| { status: 'spam' };

const MAX_LENGTH = {
	name: 120,
	email: 254,
	company: 160,
	phone: 30,
	message: 2000
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9 ()./-]{6,30}$/;

/** Control characters (incl. CR/LF) are never valid in single-line fields. */
function hasControlChars(value: string): boolean {
	for (let i = 0; i < value.length; i++) {
		const code = value.charCodeAt(i);
		if (code < 0x20 || code === 0x7f) return true;
	}
	return false;
}

function text(formData: FormData, key: string): string {
	const value = formData.get(key);
	return typeof value === 'string' ? value.trim() : '';
}

function isSpam(formData: FormData): boolean {
	return text(formData, HONEYPOT_FIELD) !== '';
}

function checkSingleLine(value: string, max: number): FieldError | undefined {
	if (!value) return 'required';
	if (value.length > max) return 'too_long';
	if (hasControlChars(value)) return 'required';
	return undefined;
}

function checkEmail(value: string): FieldError | undefined {
	return (
		checkSingleLine(value, MAX_LENGTH.email) ?? (EMAIL_PATTERN.test(value) ? undefined : 'email')
	);
}

function isTurnover(value: string): value is TurnoverOption {
	return (turnoverOptions as readonly string[]).includes(value);
}

/** Validates the contact / sign-up lead form. Never trust client-side validation alone. */
export function parseLead(formData: FormData): ParseResult<Lead, LeadField> {
	if (isSpam(formData)) return { status: 'spam' };

	const values = {
		turnover: text(formData, 'turnover'),
		name: text(formData, 'name'),
		email: text(formData, 'email'),
		company: text(formData, 'company'),
		phone: text(formData, 'phone'),
		message: text(formData, 'message')
	};
	const consent = formData.get('consent') === 'on';

	const errors: Partial<Record<LeadField, FieldError>> = {};
	if (!isTurnover(values.turnover)) errors.turnover = 'choice';

	const nameError = checkSingleLine(values.name, MAX_LENGTH.name);
	if (nameError) errors.name = nameError;

	const emailError = checkEmail(values.email);
	if (emailError) errors.email = emailError;

	const companyError = checkSingleLine(values.company, MAX_LENGTH.company);
	if (companyError) errors.company = companyError;

	const phoneError =
		checkSingleLine(values.phone, MAX_LENGTH.phone) ??
		(PHONE_PATTERN.test(values.phone) ? undefined : 'phone');
	if (phoneError) errors.phone = phoneError;

	if (values.message.length > MAX_LENGTH.message) errors.message = 'too_long';
	if (!consent) errors.consent = 'consent';

	if (!isTurnover(values.turnover) || Object.keys(errors).length > 0) {
		// Echo values back so the form keeps them, but cap their size.
		const echoed: Partial<Record<LeadField, string>> = {};
		for (const [key, value] of Object.entries(values)) {
			echoed[key as LeadField] = value.slice(0, MAX_LENGTH.message);
		}
		return { status: 'invalid', errors, values: echoed };
	}

	return { status: 'valid', data: { ...values, turnover: values.turnover } };
}

/** Validates the footer newsletter form. */
export function parseNewsletter(
	formData: FormData
): ParseResult<{ email: string }, 'email' | 'consent'> {
	if (isSpam(formData)) return { status: 'spam' };

	const email = text(formData, 'email');
	const errors: Partial<Record<'email' | 'consent', FieldError>> = {};
	const emailError = checkEmail(email);
	if (emailError) errors.email = emailError;
	if (formData.get('consent') !== 'on') errors.consent = 'consent';

	if (Object.keys(errors).length > 0) {
		return { status: 'invalid', errors, values: { email: email.slice(0, MAX_LENGTH.email) } };
	}
	return { status: 'valid', data: { email } };
}
