/**
 * Company master data used in the contact blocks and the imprint.
 * All values are placeholders; replace them with the real company details before launch.
 */
export const company = {
	name: 'Airbat',
	legalName: 'Airbat GmbH',
	street: 'Jičínská 226/17, Žižkov',
	postalCode: '130 00',
	city: 'Prague',
	country: 'Tschechien',
	phone: '+43 1 000 00 00',
	/** Phone number in E.164 format, used for tel: links. */
	phoneE164: '+43100000000',
	email: 'hello@example.com',
	salesEmail: 'sales@example.com',
	vatId: 'ATU00000000',
	registerNumber: 'FN 000000a',
	registerCourt: 'Handelsgericht Wien',
	managingDirector: 'Max Mustermann',
	founded: 2024,
	/**
	 * Sales contact shown in the home page CTA band. Placeholder name: replace with the real
	 * person (with their consent) and add their photo as `src/lib/assets/images/sales-contact.jpg`.
	 */
	salesContact: { name: 'Erika Musterfrau' }
} as const;
