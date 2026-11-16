<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Section from '#lib/components/Section.svelte';
	import { products } from '#lib/content/home.ts';
	import { resolve } from '$app/paths';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';
	import FeatureCard from './FeatureCard.svelte';
</script>

<Section
	id="products"
	eyebrow={m.products_eyebrow()}
	title={m.products_title()}
	intro={m.products_text()}
>
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" {@attach reveal}>
		{#each products as product (product.title)}
			<FeatureCard feature={product} />
		{/each}
	</div>
	<div class="mt-12">
		<Button href={resolve(localePath('sign-up'))}>
			{m.products_cta()}
			<Icon name="arrow-right" class="size-4" />
		</Button>
	</div>
</Section>
