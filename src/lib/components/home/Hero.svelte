<script lang="ts">
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { resolve } from '$app/paths';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';
	import HeroVisual from './HeroVisual.svelte';
</script>

<section class="relative isolate overflow-hidden bg-ink text-paper">
	<div
		class="absolute -top-40 -right-40 -z-10 size-[36rem] rounded-full bg-primary/40 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="absolute -bottom-48 -left-32 -z-10 size-[28rem] rounded-full bg-lime/20 blur-3xl"
		aria-hidden="true"
	></div>

	<div
		class="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-32 lg:pb-36 xl:grid-cols-[3fr_2fr]"
	>
		<div>
			<p
				class="mb-6 inline-flex items-center gap-2 rounded-full border border-paper/20 px-4 py-1.5 text-sm text-paper/80"
			>
				<span class="size-2 rounded-full bg-lime"></span>
				{m.home_hero_eyebrow()}
			</p>
			<h1
				class="max-w-4xl text-4xl leading-tight font-semibold text-balance sm:text-6xl lg:text-7xl"
			>
				{m.home_hero_title()}
			</h1>
			<p class="mt-8 max-w-2xl text-lg text-paper/70 sm:text-xl">{m.home_hero_text()}</p>
			<div class="mt-10 flex flex-wrap gap-4">
				<Button href={resolve(localePath('contact'))} variant="lime">
					{m.home_hero_cta()}
					<Icon name="arrow-right" class="size-4" />
				</Button>
				<Button href="#products" variant="outline">{m.home_hero_cta_secondary()}</Button>
			</div>
		</div>
		<div class="hidden xl:block">
			<HeroVisual />
		</div>
	</div>
</section>
