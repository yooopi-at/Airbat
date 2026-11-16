<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import type { Feature } from '#lib/content/home.ts';

	let { feature, tone = 'light' }: { feature: Feature; tone?: 'light' | 'dark' } = $props();
</script>

<article
	class="group h-full rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 {tone ===
	'dark'
		? 'bg-ink-soft text-paper ring-1 ring-paper/10 hover:ring-lime'
		: 'bg-white text-ink ring-1 ring-ink/5 hover:shadow-xl hover:ring-lime'}"
>
	<div
		class="mb-6 grid size-12 place-items-center rounded-2xl transition-colors group-hover:bg-lime group-hover:text-ink {tone ===
		'dark'
			? 'bg-paper/10 text-lime'
			: 'bg-primary/10 text-primary'}"
	>
		<Icon name={feature.icon} />
	</div>
	<h3 class="text-xl font-semibold">{feature.title()}</h3>
	<p class="mt-3 {tone === 'dark' ? 'text-paper/70' : 'text-slate'}">{feature.text()}</p>
</article>
