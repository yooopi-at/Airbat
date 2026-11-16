import type { Path } from '$app/types';
import { localizeHref, type Locale } from '#lib/paraglide/runtime.js';

/**
 * Returns the localized version of a route path, to pass to `resolve()` from `$app/paths`:
 * `resolve(localePath('contact'))` → `contact` (en) or `de/contact` (de).
 * Paths are written without a leading slash, as SvelteKit 3's `resolve` expects.
 */
export function localePath(path: Path, locale?: Locale): Path {
	const localized = localizeHref(`/${path}`, locale ? { locale } : undefined);
	return localized.replace(/^\//, '') as Path;
}
