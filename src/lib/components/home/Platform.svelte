<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Section from '#lib/components/Section.svelte';
	import { platformFeatures } from '#lib/content/home.ts';
	import { resolve } from '$app/paths';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';
</script>

<Section id="platform" eyebrow={m.platform_eyebrow()} title={m.platform_title()}>
	<ol class="grid gap-px overflow-hidden rounded-3xl bg-ink/10 lg:grid-cols-3" {@attach reveal}>
		{#each platformFeatures as feature, index (feature.title)}
			<li class="bg-paper p-8 lg:p-10">
				<div class="flex items-center justify-between">
					<span class="grid size-12 place-items-center rounded-2xl bg-ink text-lime">
						<Icon name={feature.icon} />
					</span>
					<span class="font-display text-5xl font-semibold text-ink/10">0{index + 1}</span>
				</div>
				<h3 class="mt-8 text-xl font-semibold">{feature.title()}</h3>
				<p class="mt-3 text-slate">{feature.text()}</p>
			</li>
		{/each}
	</ol>
	<div class="mt-12">
		<Button href={resolve(localePath('sign-up'))}>
			{m.platform_cta()}
			<Icon name="arrow-right" class="size-4" />
		</Button>
	</div>
</Section>
