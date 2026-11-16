<script lang="ts">
	import { company } from '#lib/content/company.ts';
	import { m } from '#lib/paraglide/messages.js';
	import Icon from './Icon.svelte';

	let { email = company.email }: { email?: string } = $props();
</script>

<dl class="space-y-6">
	<div class="flex gap-4">
		<dt class="grid size-11 shrink-0 place-items-center rounded-2xl bg-ink text-lime">
			<Icon name="phone" class="size-5" />
			<span class="sr-only">{m.contact_phone()}</span>
		</dt>
		<dd class="self-center">
			<a href="tel:{company.phoneE164}" class="font-medium hover:text-primary">{company.phone}</a>
		</dd>
	</div>
	<div class="flex gap-4">
		<dt class="grid size-11 shrink-0 place-items-center rounded-2xl bg-ink text-lime">
			<Icon name="mail" class="size-5" />
			<span class="sr-only">{m.contact_email()}</span>
		</dt>
		<dd class="self-center">
			<a href="mailto:{email}" class="font-medium hover:text-primary">{email}</a>
		</dd>
	</div>
	<div class="flex gap-4">
		<dt class="grid size-11 shrink-0 place-items-center rounded-2xl bg-ink text-lime">
			<Icon name="pin" class="size-5" />
			<span class="sr-only">{m.contact_address()}</span>
		</dt>
		<dd class="self-center not-italic">
			{company.street}, {company.postalCode}
			{company.city}
		</dd>
	</div>
</dl>
