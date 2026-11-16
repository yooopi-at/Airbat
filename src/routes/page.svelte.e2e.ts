import { expect, test } from '@playwright/test';

test('home page renders the hero and section anchors', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
	for (const id of ['products', 'who-we-serve', 'company']) {
		await expect(page.locator(`#${id}`)).toBeAttached();
	}
	await expect(page.locator('#who-we-serve [aria-roledescription="carousel"]')).toBeVisible();
});

test('German locale is served under /de', async ({ page }) => {
	await page.goto('/de');
	await expect(page.locator('html')).toHaveAttribute('lang', 'de');
	await expect(page.getByRole('link', { name: 'Kontakt' }).first()).toBeVisible();
});

test('contact form shows validation errors on empty submit', async ({ page }) => {
	await page.goto('/contact');
	await page.getByRole('button', { name: 'Send request' }).click();
	await expect(page.getByText('Please check the highlighted fields.')).toBeVisible();
	await expect(page.getByText('This field is required.').first()).toBeVisible();
});

test('legal pages are reachable from the footer', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('contentinfo').getByRole('link', { name: 'Imprint' }).click();
	await expect(page.getByRole('heading', { level: 1, name: 'Imprint' })).toBeVisible();
});
