<script lang="ts">
	import { enhance } from '$app/forms';
	import { fieldErrorMessages } from '#lib/content/form-errors.ts';
	import {
		HONEYPOT_FIELD,
		turnoverOptions,
		type LeadActionData,
		type LeadField,
		type TurnoverOption
	} from '#lib/content/lead.ts';
	import { resolve } from '$app/paths';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';

	let { form }: { form: LeadActionData | null | undefined } = $props();

	let pending = $state(false);

	const errors = $derived(form && !form.success ? (form.errors ?? {}) : {});
	const values = $derived(form && !form.success ? (form.values ?? {}) : {});
	const hasErrors = $derived(Object.keys(errors).length > 0);

	const turnoverLabels: Record<TurnoverOption, () => string> = {
		lt10: m.turnover_lt10,
		'10_25': m.turnover_10_25,
		'25_50': m.turnover_25_50,
		'50_100': m.turnover_50_100,
		gt100: m.turnover_gt100
	};

	type TextField = {
		name: Exclude<LeadField, 'turnover' | 'consent' | 'message'>;
		label: () => string;
		type: 'text' | 'email' | 'tel';
		autocomplete: 'name' | 'email' | 'organization' | 'tel';
		maxlength: number;
	};

	const textFields: TextField[] = [
		{ name: 'name', label: m.form_name, type: 'text', autocomplete: 'name', maxlength: 120 },
		{ name: 'email', label: m.form_email, type: 'email', autocomplete: 'email', maxlength: 254 },
		{
			name: 'company',
			label: m.form_company,
			type: 'text',
			autocomplete: 'organization',
			maxlength: 160
		},
		{ name: 'phone', label: m.form_phone, type: 'tel', autocomplete: 'tel', maxlength: 30 }
	];

	function errorId(field: LeadField) {
		return `lead-${field}-error`;
	}

	const inputClass =
		'mt-2 block w-full rounded-2xl border-0 bg-paper px-4 py-3 ring-1 ring-ink/10 focus:ring-2 focus:ring-primary aria-invalid:ring-red-500';
</script>

<div class="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-10">
	{#if form?.success}
		<div role="status" class="py-10 text-center">
			<span class="mx-auto grid size-14 place-items-center rounded-full bg-lime text-ink">
				<Icon name="check" class="size-7" />
			</span>
			<h2 class="mt-6 text-2xl font-semibold">{m.form_success_title()}</h2>
			<p class="mt-2 text-slate">{m.form_success_text()}</p>
		</div>
	{:else}
		<h2 class="text-2xl font-semibold">{m.form_title()}</h2>

		{#if form?.sendFailed}
			<p role="alert" class="mt-6 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
				{m.form_error_send()}
			</p>
		{:else if hasErrors}
			<p role="alert" class="mt-6 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
				{m.form_error_summary()}
			</p>
		{/if}

		<form
			method="POST"
			novalidate
			class="mt-8 space-y-6"
			use:enhance={() => {
				pending = true;
				return async ({ update }) => {
					await update();
					pending = false;
				};
			}}
		>
			<fieldset aria-describedby={errors.turnover ? errorId('turnover') : undefined}>
				<legend class="text-sm font-medium">{m.form_turnover()}</legend>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each turnoverOptions as option (option)}
						<label class="cursor-pointer">
							<input
								type="radio"
								name="turnover"
								value={option}
								required
								checked={values.turnover === option}
								class="peer sr-only"
							/>
							<span
								class="inline-block rounded-full px-4 py-2 text-sm ring-1 ring-ink/15 transition-colors peer-checked:bg-ink peer-checked:text-paper peer-checked:ring-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary hover:ring-ink/40"
							>
								{turnoverLabels[option]()}
							</span>
						</label>
					{/each}
				</div>
				{#if errors.turnover}
					<p id={errorId('turnover')} class="mt-2 text-sm text-red-600">
						{fieldErrorMessages[errors.turnover]()}
					</p>
				{/if}
			</fieldset>

			<div class="grid gap-6 sm:grid-cols-2">
				{#each textFields as field (field.name)}
					{@const error = errors[field.name]}
					<div>
						<label for="lead-{field.name}" class="text-sm font-medium">{field.label()}</label>
						<input
							id="lead-{field.name}"
							name={field.name}
							type={field.type}
							autocomplete={field.autocomplete}
							maxlength={field.maxlength}
							required
							value={values[field.name] ?? ''}
							aria-invalid={error ? 'true' : undefined}
							aria-describedby={error ? errorId(field.name) : undefined}
							class={inputClass}
						/>
						{#if error}
							<p id={errorId(field.name)} class="mt-2 text-sm text-red-600">
								{fieldErrorMessages[error]()}
							</p>
						{/if}
					</div>
				{/each}
			</div>

			<div>
				<label for="lead-message" class="text-sm font-medium">{m.form_message()}</label>
				<textarea
					id="lead-message"
					name="message"
					rows="5"
					maxlength="2000"
					aria-invalid={errors.message ? 'true' : undefined}
					aria-describedby={errors.message ? errorId('message') : undefined}
					class={inputClass}>{values.message ?? ''}</textarea
				>
				{#if errors.message}
					<p id={errorId('message')} class="mt-2 text-sm text-red-600">
						{fieldErrorMessages[errors.message]()}
					</p>
				{/if}
			</div>

			<div>
				<label class="flex items-start gap-3 text-sm text-slate">
					<input
						type="checkbox"
						name="consent"
						required
						aria-invalid={errors.consent ? 'true' : undefined}
						aria-describedby={errors.consent ? errorId('consent') : undefined}
						class="mt-0.5 rounded border-ink/30 text-primary focus:ring-primary"
					/>
					<span>
						{m.form_consent()}
						<a
							href={resolve(localePath('privacy-policy'))}
							class="font-medium text-primary underline"
						>
							{m.form_consent_link()}</a
						>.
					</span>
				</label>
				{#if errors.consent}
					<p id={errorId('consent')} class="mt-2 text-sm text-red-600">
						{fieldErrorMessages[errors.consent]()}
					</p>
				{/if}
			</div>

			<div class="absolute -left-[9999px]" aria-hidden="true">
				<label>
					{m.form_honeypot()}
					<input type="text" name={HONEYPOT_FIELD} tabindex="-1" autocomplete="off" />
				</label>
			</div>

			<Button type="submit" disabled={pending} class="w-full sm:w-auto">
				{pending ? m.form_sending() : m.form_submit()}
				<Icon name="arrow-right" class="size-4" />
			</Button>
		</form>
	{/if}
</div>
