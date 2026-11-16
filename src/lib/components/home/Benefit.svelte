<script lang="ts">
	import { reveal } from '#lib/actions/reveal.ts';
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { resolve } from '$app/paths';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';
</script>

<section aria-labelledby="benefit-title" class="bg-white">
	<div
		class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28"
	>
		<div
			class="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-dark to-ink"
			aria-hidden="true"
			{@attach reveal}
		>
			<div class="absolute inset-0 grid place-items-center">
				<div class="grid grid-cols-3 gap-4 opacity-90">
					{#each ['signal', 'wifi', 'star', 'layers', 'sparkle', 'send'] as const as icon (icon)}
						<div
							class="grid size-16 place-items-center rounded-2xl bg-paper/10 text-lime backdrop-blur sm:size-20"
						>
							<Icon name={icon} class="size-8" />
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div {@attach reveal}>
			<p class="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
				{m.benefit_eyebrow()}
			</p>
			<h2 id="benefit-title" class="text-3xl font-semibold text-balance sm:text-4xl">
				{m.benefit_title()}
			</h2>
			<p class="mt-6 text-lg text-slate">{m.benefit_text_1()}</p>
			<p class="mt-4 text-lg text-slate">{m.benefit_text_2()}</p>
			<div class="mt-10">
				<Button href={resolve(localePath('sign-up'))}>
					{m.benefit_cta()}
					<Icon name="arrow-right" class="size-4" />
				</Button>
			</div>
		</div>
	</div>
</section>
