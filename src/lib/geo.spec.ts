import { describe, expect, it } from 'vitest';
import { distanceKm, offsetKm } from './geo.ts';

const prague = { lat: 50.08, lon: 14.44 };

describe('offsetKm', () => {
	it('places points east as positive x and south as positive y', () => {
		const vienna = offsetKm(prague, { lat: 48.21, lon: 16.37 });
		expect(vienna.x).toBeGreaterThan(0);
		expect(vienna.y).toBeGreaterThan(0);
	});

	it('returns zero for the origin itself', () => {
		expect(offsetKm(prague, prague)).toEqual({ x: 0, y: 0 });
	});
});

describe('distanceKm', () => {
	it('is close to real distances from Prague', () => {
		// Real great-circle distances: Vienna ≈ 252 km, London ≈ 1,035 km.
		const vienna = distanceKm(prague, { lat: 48.21, lon: 16.37 });
		const london = distanceKm(prague, { lat: 51.51, lon: -0.13 });
		expect(vienna).toBeGreaterThan(230);
		expect(vienna).toBeLessThan(270);
		expect(london).toBeGreaterThan(1000);
		expect(london).toBeLessThan(1100);
	});
});
