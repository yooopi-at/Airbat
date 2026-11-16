import { describe, expect, it } from 'vitest';
import { HONEYPOT_FIELD } from '#lib/content/lead.ts';
import { parseLead, parseNewsletter } from './lead.ts';

const valid = {
	turnover: '10_25',
	name: 'Jane Doe',
	email: 'jane@example.com',
	company: 'Example Ltd',
	phone: '+43 1 234 5678',
	message: 'Hello',
	consent: 'on'
};

function formData(fields: Record<string, string>): FormData {
	const data = new FormData();
	for (const [key, value] of Object.entries(fields)) data.set(key, value);
	return data;
}

function without(key: keyof typeof valid): Record<string, string> {
	const copy: Record<string, string> = { ...valid };
	delete copy[key];
	return copy;
}

describe('parseLead', () => {
	it('accepts a complete, valid submission and trims values', () => {
		const result = parseLead(formData({ ...valid, name: '  Jane Doe  ' }));
		expect(result).toEqual({
			status: 'valid',
			data: {
				turnover: '10_25',
				name: 'Jane Doe',
				email: 'jane@example.com',
				company: 'Example Ltd',
				phone: '+43 1 234 5678',
				message: 'Hello'
			}
		});
	});

	it('allows an empty message', () => {
		expect(parseLead(formData({ ...valid, message: '' })).status).toBe('valid');
	});

	it.each(['name', 'email', 'company', 'phone'] as const)('requires %s', (field) => {
		const result = parseLead(formData(without(field)));
		expect(result.status).toBe('invalid');
		if (result.status === 'invalid') expect(result.errors[field]).toBe('required');
	});

	it('requires a known turnover option', () => {
		const result = parseLead(formData({ ...valid, turnover: 'lots' }));
		expect(result.status === 'invalid' && result.errors.turnover).toBe('choice');
	});

	it('requires consent', () => {
		const result = parseLead(formData(without('consent')));
		expect(result.status === 'invalid' && result.errors.consent).toBe('consent');
	});

	it('rejects a malformed email', () => {
		const result = parseLead(formData({ ...valid, email: 'not-an-email' }));
		expect(result.status === 'invalid' && result.errors.email).toBe('email');
	});

	it('rejects a malformed phone number', () => {
		const result = parseLead(formData({ ...valid, phone: 'call me' }));
		expect(result.status === 'invalid' && result.errors.phone).toBe('phone');
	});

	it('rejects line breaks in single-line fields', () => {
		const result = parseLead(formData({ ...valid, name: 'Jane\r\nBcc: x@example.com' }));
		expect(result.status === 'invalid' && result.errors.name).toBe('required');
	});

	it('enforces length limits', () => {
		const result = parseLead(
			formData({ ...valid, name: 'a'.repeat(121), message: 'b'.repeat(2001) })
		);
		expect(result.status === 'invalid' && result.errors).toMatchObject({
			name: 'too_long',
			message: 'too_long'
		});
	});

	it('echoes submitted values back on failure', () => {
		const result = parseLead(formData({ ...valid, email: 'bad' }));
		expect(result.status === 'invalid' && result.values.company).toBe('Example Ltd');
	});

	it('flags submissions with the honeypot filled as spam', () => {
		expect(parseLead(formData({ ...valid, [HONEYPOT_FIELD]: 'http://spam' })).status).toBe('spam');
	});
});

describe('parseNewsletter', () => {
	it('accepts a valid email with consent', () => {
		expect(parseNewsletter(formData({ email: 'jane@example.com', consent: 'on' }))).toEqual({
			status: 'valid',
			data: { email: 'jane@example.com' }
		});
	});

	it('requires a valid email and consent', () => {
		const result = parseNewsletter(formData({ email: 'nope' }));
		expect(result.status === 'invalid' && result.errors).toEqual({
			email: 'email',
			consent: 'consent'
		});
	});

	it('flags the honeypot as spam', () => {
		expect(
			parseNewsletter(formData({ email: 'a@b.co', consent: 'on', [HONEYPOT_FIELD]: 'x' })).status
		).toBe('spam');
	});
});
