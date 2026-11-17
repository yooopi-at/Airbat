<script lang="ts">
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { ctaPoints } from '#lib/content/home.ts';
	import { resolve } from '$app/paths';
	import { localePath } from '#lib/i18n.ts';
	import { company } from '#lib/content/company.ts';
	import { m } from '#lib/paraglide/messages.js';
	import type { Picture } from '@sveltejs/enhanced-img';

	// Optional photo: drop `sales-contact.{jpg,jpeg,png,webp}` into src/lib/assets/images/ to show it.
	// Until then an initials avatar is shown, so the build works without the file.
	const photos = import.meta.glob<Picture>(
		'/src/lib/assets/images/sales-contact.{jpg,jpeg,png,webp}',
		{ eager: true, query: { enhanced: true }, import: 'default' }
	);
	const photo = Object.values(photos)[0];

	const contact = company.salesContact;
	const initials = contact.name
		.split(/\s+/)
		.map((part) => part[0])
		.join('')
		.slice(0, 2)
		.toUpperCase();
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
		<div
			class="mt-12 flex flex-col items-start gap-6 lg:mt-0 lg:flex-1 lg:items-center lg:text-center"
		>
			<div class="flex flex-col items-start gap-5 lg:items-center">
				<!-- The name sits right below the image, so the image itself is decorative. -->
				<div class="size-36 overflow-hidden rounded-full ring-4 ring-lime lg:size-44">
					{#if photo}
						<!-- Crop to head and shoulders: object position centres the face, the scale zooms in. -->
						<enhanced:img
							src={photo}
							alt=""
							sizes="(min-width: 1024px) 240px, 200px"
							class="size-full origin-[50%_34%] scale-[1.35] object-cover object-[34%_50%]"
						/>
					{:else}
						<span
							class="grid size-full place-items-center bg-lime font-display text-4xl font-semibold text-ink"
							aria-hidden="true"
						>
							{initials}
						</span>
					{/if}
				</div>
				<div>
					<p class="text-sm text-white/70">{m.cta_contact_label()}</p>
					<p class="mt-1 font-display text-xl font-semibold">{contact.name}</p>
					<p class="text-white/80">{m.cta_contact_role()}</p>
				</div>
			</div>
			<Button href={resolve(localePath('contact'))} variant="lime">
				{m.cta_button()}
				<Icon name="arrow-right" class="size-4" />
			</Button>
		</div>
	</div>
</section>
