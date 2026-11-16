<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import Icon from '#lib/components/Icon.svelte';
	import { fieldErrorMessages } from '#lib/content/form-errors.ts';
	import { HONEYPOT_FIELD, type NewsletterActionData } from '#lib/content/lead.ts';
	import { resolve } from '$app/paths';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';

	let result = $state<NewsletterActionData>();
	let pending = $state(false);

	const errors = $derived(result && !result.success ? (result.errors ?? {}) : {});
</script>

{#if result?.success}
	<p class="mt-6 flex items-center gap-2 font-medium text-lime" role="status">
		<Icon name="check" class="size-5" />
		{m.newsletter_success()}
	</p>
{:else}
	<form
		method="POST"
		action={resolve(localePath('newsletter'))}
		class="mt-6 max-w-md"
		novalidate
		use:enhance={() => {
			pending = true;
			return async ({ result: actionResult }) => {
				pending = false;
				if (actionResult.type === 'success' || actionResult.type === 'failure') {
					result = actionResult.data as NewsletterActionData;
				} else {
					await applyAction(actionResult);
				}
			};
		}}
	>
		<div class="flex gap-2">
			<label for="newsletter-email" class="sr-only">{m.newsletter_email()}</label>
			<input
				id="newsletter-email"
				name="email"
				type="email"
				autocomplete="email"
				required
				placeholder={m.newsletter_email()}
				aria-invalid={errors.email ? 'true' : undefined}
				aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
				class="min-w-0 flex-1 rounded-full border-0 bg-paper/10 px-5 py-3 text-paper ring-1 ring-paper/20 placeholder:text-paper/50 focus:ring-2 focus:ring-lime"
			/>
			<button
				type="submit"
				disabled={pending}
				class="rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white disabled:opacity-60"
			>
				{m.newsletter_submit()}
			</button>
		</div>
		{#if result && !result.success && result.sendFailed}
			<p role="alert" class="mt-2 text-sm text-red-300">{m.form_error_send()}</p>
		{/if}
		{#if errors.email}
			<p id="newsletter-email-error" class="mt-2 text-sm text-red-300">
				{fieldErrorMessages[errors.email]()}
			</p>
		{/if}
		<label class="mt-4 flex items-start gap-3 text-sm text-paper/70">
			<input
				type="checkbox"
				name="consent"
				required
				class="mt-0.5 rounded border-paper/30 bg-transparent text-lime focus:ring-lime"
			/>
			{m.newsletter_consent()}
		</label>
		{#if errors.consent}
			<p class="mt-2 text-sm text-red-300">{fieldErrorMessages[errors.consent]()}</p>
		{/if}
		<div class="absolute -left-[9999px]" aria-hidden="true">
			<label>
				{m.form_honeypot()}
				<input type="text" name={HONEYPOT_FIELD} tabindex="-1" autocomplete="off" />
			</label>
		</div>
	</form>
{/if}
