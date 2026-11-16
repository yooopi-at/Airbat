import type { Path } from '$app/types';
import { m } from '#lib/paraglide/messages.js';

export type NavItem = { path: Path; hash: string; label: () => string };

export const navItems: NavItem[] = [
	{ path: '', hash: '#products', label: m.nav_products },
	{ path: '', hash: '#who-we-serve', label: m.nav_audiences },
	{ path: '', hash: '#company', label: m.nav_company },
	{ path: 'contact', hash: '', label: m.nav_contact }
];

export const legalItems: NavItem[] = [
	{ path: 'privacy-policy', hash: '', label: m.legal_privacy },
	{ path: 'terms-and-conditions', hash: '', label: m.legal_terms },
	{ path: 'imprint', hash: '', label: m.legal_imprint }
];
