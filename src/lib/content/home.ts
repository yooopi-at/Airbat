import { m } from '#lib/paraglide/messages.js';
import type { IconName } from '#lib/components/Icon.svelte';

type Text = () => string;

export type Stat = {
	value: number;
	decimals?: number;
	prefix?: string;
	suffix: string;
	label: Text;
};
export type Feature = { icon: IconName; title: Text; text: Text };
export type Office = { city: string; country: Text; gradient: string };

/** Headline figures. Placeholder values: replace with real, verifiable numbers before launch. */
export const stats: Stat[] = [
	{ value: 3.5, decimals: 1, suffix: 'bn+', label: m.stat_reach },
	{ value: 400, suffix: '+', label: m.stat_partners },
	{ value: 140, suffix: '+', label: m.stat_countries },
	{ value: 250, suffix: 'k', label: m.stat_transactions },
	{ value: 600, suffix: '+', label: m.stat_operators },
	{ value: 18, suffix: '%', label: m.stat_roi }
];

export const products: Feature[] = [
	{ icon: 'signal', title: m.product_credit_title, text: m.product_credit_text },
	{ icon: 'wifi', title: m.product_data_title, text: m.product_data_text },
	{ icon: 'layers', title: m.product_bundle_title, text: m.product_bundle_text },
	{ icon: 'sparkle', title: m.product_offers_title, text: m.product_offers_text }
];

export const audiences: Feature[] = [
	{ icon: 'building', title: m.audience_distributors_title, text: m.audience_distributors_text },
	{ icon: 'signal', title: m.audience_operators_title, text: m.audience_operators_text },
	{ icon: 'grid', title: m.audience_superapps_title, text: m.audience_superapps_text },
	{ icon: 'store', title: m.audience_retail_title, text: m.audience_retail_text },
	{ icon: 'star', title: m.audience_creators_title, text: m.audience_creators_text },
	{ icon: 'wallet', title: m.audience_ewallets_title, text: m.audience_ewallets_text },
	{ icon: 'send', title: m.audience_remittance_title, text: m.audience_remittance_text }
];

export const platformFeatures: Feature[] = [
	{ icon: 'plug', title: m.platform_access_title, text: m.platform_access_text },
	{ icon: 'clock', title: m.platform_funding_title, text: m.platform_funding_text },
	{ icon: 'trending', title: m.platform_scale_title, text: m.platform_scale_text }
];

/** Office locations. Placeholder cities: replace with the real offices. */
export const offices: Office[] = [
	{ city: 'Vienna', country: m.country_austria, gradient: 'from-primary to-ink' },
	{ city: 'Munich', country: m.country_germany, gradient: 'from-lime to-primary' },
	{ city: 'Istanbul', country: m.country_turkey, gradient: 'from-primary to-lime' },
	{ city: 'Bengaluru', country: m.country_india, gradient: 'from-ink-soft to-primary' }
];

export const ctaPoints: Text[] = [m.cta_point_1, m.cta_point_2, m.cta_point_3];
