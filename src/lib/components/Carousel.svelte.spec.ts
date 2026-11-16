import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import Carousel from './Carousel.svelte';

const items = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo'];

const item = createRawSnippet((name: () => string) => ({
	render: () => `<p class="h-40">${name()}</p>`
}));

function renderCarousel() {
	return render(Carousel<string>, { items, item, label: 'Test carousel' });
}

describe('Carousel', () => {
	it('renders every item as a labelled slide', async () => {
		renderCarousel();

		await expect.element(page.getByRole('region', { name: 'Test carousel' })).toBeVisible();
		const slides = page.getByRole('group');
		expect(slides.all()).toHaveLength(items.length);
		await expect.element(page.getByRole('group', { name: '1 of 5' })).toHaveTextContent('Alpha');
	});

	it('starts on the first slide with "previous" disabled', async () => {
		renderCarousel();

		await expect.element(page.getByRole('button', { name: 'Previous' })).toBeDisabled();
		await expect
			.element(page.getByRole('button', { name: 'Go to slide 1' }))
			.toHaveAttribute('aria-current', 'true');
	});

	it('moves forward and back with the arrow buttons', async () => {
		renderCarousel();

		await page.getByRole('button', { name: 'Next' }).click();
		await expect
			.element(page.getByRole('button', { name: 'Go to slide 2' }))
			.toHaveAttribute('aria-current', 'true');
		await expect.element(page.getByRole('button', { name: 'Previous' })).toBeEnabled();

		await page.getByRole('button', { name: 'Previous' }).click();
		await expect
			.element(page.getByRole('button', { name: 'Go to slide 1' }))
			.toHaveAttribute('aria-current', 'true');
	});

	it('jumps to a slide via its dot', async () => {
		renderCarousel();

		await page.getByRole('button', { name: 'Go to slide 5' }).click();
		await expect
			.element(page.getByRole('button', { name: 'Go to slide 5' }))
			.toHaveAttribute('aria-current', 'true');
		await expect.element(page.getByRole('button', { name: 'Next' })).toBeDisabled();
	});
});
