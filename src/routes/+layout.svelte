<script lang="ts">
	import type { Path } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '#lib/paraglide/runtime.js';
	import { m } from '#lib/paraglide/messages.js';
	import Header from '#lib/components/layout/Header.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{#each locales as locale (locale)}
		<link
			rel="alternate"
			hreflang={locale}
			href={new URL(localizeHref(page.url.pathname, { locale }), page.url.origin).href}
		/>
	{/each}
</svelte:head>

<div id="top">
	<a
		href="#main"
		class="sr-only z-[60] rounded-full bg-lime px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
	>
		{m.skip_to_content()}
	</a>
	<Header />
	<main id="main" tabindex="-1" class="outline-none">
		{@render children()}
	</main>
	<Footer />
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Path)}>{locale}</a>
	{/each}
</div>
