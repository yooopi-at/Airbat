/**
 * Company master data used in the contact blocks and the imprint.
 * All values are placeholders; replace them with the real company details before launch.
 */
export const company = {
	name: 'Airbat',
	legalName: 'Airbat GmbH',
	street: 'Musterstraße 1',
	postalCode: '1010',
	city: 'Wien',
	country: 'Österreich',
	phone: '+43 1 000 00 00',
	/** Phone number in E.164 format, used for tel: links. */
	phoneE164: '+43100000000',
	email: 'hello@example.com',
	salesEmail: 'sales@example.com',
	vatId: 'ATU00000000',
	registerNumber: 'FN 000000a',
	registerCourt: 'Handelsgericht Wien',
	managingDirector: 'Max Mustermann',
	founded: 2024
} as const;
