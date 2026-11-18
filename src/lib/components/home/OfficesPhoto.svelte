<script lang="ts">
	// Temporary copy of Offices.svelte with the office photo instead of the map, for comparison.
	import { reveal } from '#lib/actions/reveal.ts';
	import Icon from '#lib/components/Icon.svelte';
	import Section from '#lib/components/Section.svelte';
	import { locationBenefits } from '#lib/content/home.ts';
	import { m } from '#lib/paraglide/messages.js';
	import officePhoto from '#lib/assets/images/office.jpg?enhanced';
</script>

<Section
	id="company-photo"
	tone="white"
	eyebrow={m.offices_eyebrow()}
	title={m.offices_title()}
	intro={m.offices_text()}
>
	<div class="grid gap-12 lg:grid-cols-2 lg:items-center" {@attach reveal}>
		<div class="aspect-square overflow-hidden rounded-3xl">
			<enhanced:img
				src={officePhoto}
				alt=""
				sizes="(min-width: 1024px) 50vw, 100vw"
				class="size-full object-cover"
			/>
		</div>
		<ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
			{#each locationBenefits as benefit (benefit.title)}
				<li class="flex gap-5">
					<span
						class="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"
					>
						<Icon name={benefit.icon} />
					</span>
					<div>
						<h3 class="text-xl font-semibold">{benefit.title()}</h3>
						<p class="mt-2 text-slate">{benefit.text()}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</Section>
