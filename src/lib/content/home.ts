import { m } from '#lib/paraglide/messages.js';
import type { IconName } from '#lib/components/Icon.svelte';
import type { LatLon } from '#lib/geo.ts';

type Text = () => string;

export type Stat = {
	value: number;
	decimals?: number;
	prefix?: string;
	suffix: string;
	label: Text;
};
export type Feature = { icon: IconName; title: Text; text: Text };
export type MapCity = LatLon & { name: Text; labelSide?: 'left' | 'right' };

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

/** Benefits of the Prague location, shown next to the office card. */
export const locationBenefits: Feature[] = [
	{ icon: 'pin', title: m.location_central_title, text: m.location_central_text },
	{ icon: 'clock', title: m.location_timezone_title, text: m.location_timezone_text },
	{ icon: 'shield', title: m.location_eu_title, text: m.location_eu_text },
	{ icon: 'send', title: m.location_reach_title, text: m.location_reach_text }
];

/** Centre of the Europe map in the company section. */
export const prague: LatLon = { lat: 50.08, lon: 14.44 };

/** Hubs plotted around Prague on the Europe map, at their real coordinates. */
export const mapCities: MapCity[] = [
	{ name: m.city_berlin, lat: 52.52, lon: 13.4 },
	{ name: m.city_vienna, lat: 48.21, lon: 16.37 },
	{ name: m.city_munich, lat: 48.14, lon: 11.58, labelSide: 'left' },
	{ name: m.city_warsaw, lat: 52.23, lon: 21.01 },
	{ name: m.city_budapest, lat: 47.5, lon: 19.04 },
	{ name: m.city_copenhagen, lat: 55.68, lon: 12.57 },
	{ name: m.city_stockholm, lat: 59.33, lon: 18.07 },
	{ name: m.city_amsterdam, lat: 52.37, lon: 4.9 },
	{ name: m.city_paris, lat: 48.86, lon: 2.35 },
	{ name: m.city_london, lat: 51.51, lon: -0.13 },
	{ name: m.city_rome, lat: 41.9, lon: 12.5 },
	{ name: m.city_bucharest, lat: 44.43, lon: 26.1, labelSide: 'left' }
];

export const ctaPoints: Text[] = [m.cta_point_1, m.cta_point_2, m.cta_point_3];
