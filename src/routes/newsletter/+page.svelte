<script lang="ts">
	import Button from '#lib/components/Button.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import { fieldErrorMessages } from '#lib/content/form-errors.ts';
	import { resolve } from '$app/paths';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';
	import type { PageProps } from './$types';

	// Only reached without JavaScript; the footer form handles the result inline otherwise.
	let { form }: PageProps = $props();
</script>

<svelte:head>
	<title>{m.newsletter_meta_title()}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<PageHero title={m.newsletter_title()} />

<div class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
	{#if form?.success}
		<p role="status" class="text-lg font-medium">{m.newsletter_success()}</p>
	{:else if form && 'errors' in form}
		<ul role="alert" class="space-y-2 text-red-700">
			{#each Object.values(form.errors ?? {}) as error (error)}
				<li>{fieldErrorMessages[error]()}</li>
			{/each}
		</ul>
	{:else if form}
		<p role="alert" class="text-red-700">{m.form_error_send()}</p>
	{:else}
		<p class="text-slate">{m.newsletter_text()}</p>
	{/if}
	<Button href={resolve(localePath(''))} class="mt-8">{m.newsletter_back()}</Button>
</div>
