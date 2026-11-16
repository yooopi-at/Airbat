<script lang="ts">
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { ctaPoints } from '#lib/content/home.ts';
	import { resolve } from '$app/paths';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';
</script>

<section aria-labelledby="cta-title" class="bg-paper px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
	<div
		class="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16"
	>
		<div
			class="absolute -right-24 -bottom-24 -z-10 size-80 rounded-full bg-lime/30 blur-3xl"
			aria-hidden="true"
		></div>
		<div class="max-w-2xl">
			<h2 id="cta-title" class="text-3xl font-semibold text-balance sm:text-4xl">
				{m.cta_title()}
			</h2>
			<ul class="mt-8 space-y-3">
				{#each ctaPoints as point (point)}
					<li class="flex items-start gap-3">
						<span
							class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-lime text-ink"
						>
							<Icon name="check" class="size-4" />
						</span>
						{point()}
					</li>
				{/each}
			</ul>
		</div>
		<div class="mt-10 shrink-0 lg:mt-0">
			<Button href={resolve(localePath('contact'))} variant="lime">
				{m.cta_button()}
				<Icon name="arrow-right" class="size-4" />
			</Button>
		</div>
	</div>
</section>
