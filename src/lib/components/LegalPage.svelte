<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageHero from './PageHero.svelte';
	import { m } from '#lib/paraglide/messages.js';

	let { title, children }: { title: string; children: Snippet } = $props();
</script>

<svelte:head>
	<title>{title} – Airbat</title>
</svelte:head>

<PageHero {title} />

<div class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
	<!-- Remove this notice once the text has been reviewed by a lawyer. -->
	<p role="note" class="mb-10 rounded-2xl bg-lime/30 p-4 text-sm font-medium ring-1 ring-lime">
		{m.legal_draft_notice()}
	</p>
	<div
		class="prose max-w-none prose-slate prose-headings:font-display prose-headings:font-semibold prose-a:text-primary"
	>
		{@render children()}
	</div>
</div>
