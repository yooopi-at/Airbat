<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '#lib/actions/reveal.ts';

	type Props = {
		id?: string;
		tone?: 'light' | 'dark' | 'white';
		eyebrow?: string;
		title?: string;
		intro?: string;
		children: Snippet;
		class?: string;
	};

	let {
		id,
		tone = 'light',
		eyebrow,
		title,
		intro,
		children,
		class: className = ''
	}: Props = $props();

	const headingId = $derived(id ? `${id}-title` : undefined);

	const tones = {
		light: 'bg-paper text-ink',
		white: 'bg-white text-ink',
		dark: 'bg-ink text-paper'
	};
</script>

<section {id} aria-labelledby={title ? headingId : undefined} class="{tones[tone]} {className}">
	<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
		{#if title}
			<header class="mb-12 max-w-3xl" {@attach reveal}>
				{#if eyebrow}
					<p
						class="mb-3 text-sm font-semibold tracking-widest uppercase {tone === 'dark'
							? 'text-lime'
							: 'text-primary'}"
					>
						{eyebrow}
					</p>
				{/if}
				<h2 id={headingId} class="text-3xl font-semibold text-balance sm:text-4xl lg:text-5xl">
					{title}
				</h2>
				{#if intro}
					<p class="mt-5 text-lg {tone === 'dark' ? 'text-paper/70' : 'text-slate'}">{intro}</p>
				{/if}
			</header>
		{/if}
		{@render children()}
	</div>
</section>
