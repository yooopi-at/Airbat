<script lang="ts">
	import ContactDetails from '#lib/components/ContactDetails.svelte';
	import LeadForm from '#lib/components/LeadForm.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { m } from '#lib/paraglide/messages.js';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<svelte:head>
	<title>{m.contact_meta_title()}</title>
	<meta name="description" content={m.contact_meta_description()} />
</svelte:head>

<PageHero title={m.contact_title()} intro={m.contact_text()} />

<div
	class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8 lg:py-24"
>
	<aside>
		<h2 class="mb-8 text-xl font-semibold">{m.contact_details_title()}</h2>
		<ContactDetails />
	</aside>
	<LeadForm {form} />
</div>
