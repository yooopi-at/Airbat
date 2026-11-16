<script lang="ts">
	import ContactDetails from '#lib/components/ContactDetails.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import LeadForm from '#lib/components/LeadForm.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { company } from '#lib/content/company.ts';
	import { resolve } from '$app/paths';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<svelte:head>
	<title>{m.signup_meta_title()}</title>
	<meta name="description" content={m.signup_meta_description()} />
</svelte:head>

<PageHero title={m.signup_title()} intro={m.signup_text()} />

<div
	class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8 lg:py-24"
>
	<aside class="space-y-10">
		<div class="rounded-3xl bg-lime/30 p-6 ring-1 ring-lime">
			<h2 class="flex items-center gap-2 font-semibold">
				<Icon name="shield" class="size-5" />
				{m.signup_notice_title()}
			</h2>
			<p class="mt-3 text-sm">
				{m.signup_notice_text()}
				<a href={resolve(localePath('terms-and-conditions'))} class="font-medium underline">
					{m.signup_notice_link()}</a
				>.
			</p>
		</div>
		<div>
			<h2 class="text-xl font-semibold">{m.signup_sales_title()}</h2>
			<p class="mt-2 mb-8 text-slate">{m.signup_sales_text()}</p>
			<ContactDetails email={company.salesEmail} />
		</div>
	</aside>
	<LeadForm {form} />
</div>
