import type { Attachment } from 'svelte/attachments';

/**
 * Fades an element in when it scrolls into view.
 * Does nothing when the user prefers reduced motion or IntersectionObserver is unavailable,
 * so content is always visible without JavaScript.
 */
export const reveal: Attachment<HTMLElement> = (node) => {
	if (
		typeof IntersectionObserver === 'undefined' ||
		matchMedia('(prefers-reduced-motion: reduce)').matches
	) {
		return;
	}

	const rect = node.getBoundingClientRect();
	if (rect.top < window.innerHeight) return; // already visible on load

	node.dataset.reveal = 'hidden';
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				node.dataset.reveal = 'shown';
				observer.disconnect();
			}
		},
		{ rootMargin: '0px 0px -10% 0px' }
	);
	observer.observe(node);

	return () => observer.disconnect();
};
