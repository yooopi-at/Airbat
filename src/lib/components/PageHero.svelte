<script lang="ts">
	let { title, intro }: { title: string; intro?: string } = $props();
</script>

<section class="relative isolate overflow-hidden bg-ink text-paper">
	<div
		class="absolute -top-32 -right-32 -z-10 size-96 rounded-full bg-primary/40 blur-3xl"
		aria-hidden="true"
	></div>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<h1 class="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">{title}</h1>
		{#if intro}
			<p class="mt-6 max-w-2xl text-lg text-paper/70">{intro}</p>
		{/if}
	</div>
</section>
