<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import Icon from '#lib/components/Icon.svelte';
	import Section from '#lib/components/Section.svelte';
	import { offices } from '#lib/content/home.ts';
	import { m } from '#lib/paraglide/messages.js';
</script>

<Section
	id="company"
	tone="white"
	eyebrow={m.offices_eyebrow()}
	title={m.offices_title()}
	intro={m.offices_text()}
>
	<ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" {@attach reveal}>
		{#each offices as office (office.city)}
			<li
				class="relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br p-6 text-paper {office.gradient}"
			>
				<div
					class="absolute -top-10 -right-10 size-40 rounded-full border-[1.5rem] border-paper/10"
					aria-hidden="true"
				></div>
				<Icon name="pin" class="mb-4 size-6" />
				<p class="font-display text-2xl font-semibold">{office.city}</p>
				<p class="text-paper/80">{office.country()}</p>
			</li>
		{/each}
	</ul>
</Section>
