export type LatLon = { lat: number; lon: number };

const KM_PER_DEGREE = 111.32;

/**
 * Offset of `point` from `origin` in km, using a local equirectangular projection
 * (x grows east, y grows south, matching SVG coordinates). Accurate to a few percent
 * within ~1,500 km of the origin, which is enough for an illustrative map.
 */
export function offsetKm(origin: LatLon, point: LatLon): { x: number; y: number } {
	const cosLat = Math.cos((origin.lat * Math.PI) / 180);
	return {
		x: (point.lon - origin.lon) * cosLat * KM_PER_DEGREE,
		y: (origin.lat - point.lat) * KM_PER_DEGREE
	};
}

/** Approximate distance between two points in km, based on `offsetKm`. */
export function distanceKm(origin: LatLon, point: LatLon): number {
	const { x, y } = offsetKm(origin, point);
	return Math.hypot(x, y);
}
