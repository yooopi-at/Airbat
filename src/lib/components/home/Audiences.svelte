<script lang="ts">
	import Carousel from '#lib/components/Carousel.svelte';
	import Section from '#lib/components/Section.svelte';
	import { audiences } from '#lib/content/home.ts';
	import { m } from '#lib/paraglide/messages.js';
	import FeatureCard from './FeatureCard.svelte';
</script>

<Section
	id="who-we-serve"
	tone="dark"
	eyebrow={m.audiences_eyebrow()}
	title={m.audiences_title()}
	intro={m.audiences_text()}
>
	<Carousel items={audiences} label={m.audiences_title()} tone="dark">
		{#snippet item(audience)}
			<FeatureCard feature={audience} tone="dark" />
		{/snippet}
	</Carousel>
</Section>
