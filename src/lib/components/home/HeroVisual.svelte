<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Logo from '#lib/components/Logo.svelte';
	import { stats } from '#lib/content/home.ts';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale } from '#lib/paraglide/runtime.js';

	// Illustrative figures for the mockup, not claims.
	const euro = new Intl.NumberFormat(getLocale(), { style: 'currency', currency: 'EUR' });
	const integer = new Intl.NumberFormat(getLocale());
	// Fixed date in UTC so server and client render the same text.
	const date = new Intl.DateTimeFormat(getLocale(), {
		day: 'numeric',
		month: 'short',
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'UTC'
	}).format(Date.UTC(2026, 10, 17, 9, 41));
	const operators = stats.find((stat) => stat.label === m.stat_operators);

	const details = [
		{ label: m.hero_visual_reference(), value: 'AB-7781', mono: true },
		{ label: m.hero_visual_date(), value: date },
		{ label: m.hero_visual_margin(), value: `+${euro.format(1.2)}`, accent: true }
	];
</script>

<!-- Decorative product mockup: the hero copy already says everything it shows. -->
<div class="relative mx-auto w-full max-w-md py-10" aria-hidden="true">
	<div
		class="relative mx-auto w-72 rounded-[2.75rem] bg-ink-soft p-2.5 shadow-2xl ring-1 ring-paper/15"
	>
		<div class="flex aspect-[9/18] flex-col overflow-hidden rounded-[2.25rem] bg-paper text-ink">
			<!-- Status bar -->
			<div
				class="relative flex items-center justify-between px-6 pt-3.5 text-[0.6875rem] font-semibold"
			>
				<span>9:41</span>
				<span class="absolute top-2.5 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink"
				></span>
				<span class="flex items-center gap-1">
					<Icon name="signal" class="size-3.5" />
					<Icon name="wifi" class="size-3.5" />
					<span class="relative h-2.5 w-5 rounded-[3px] border border-ink/60 p-px">
						<span class="block h-full w-3/4 rounded-[1px] bg-ink"></span>
					</span>
				</span>
			</div>

			<!-- App bar -->
			<div class="flex items-center justify-between px-5 pt-4">
				<Logo class="h-4 w-auto text-ink" />
				<span class="grid size-7 place-items-center rounded-full bg-ink/5">
					<Icon name="close" class="size-3.5" />
				</span>
			</div>

			<!-- Success -->
			<div class="mt-5 flex flex-col items-center px-5 text-center">
				<span class="grid size-12 place-items-center rounded-full bg-lime shadow-lg shadow-lime/40">
					<Icon name="check" class="size-6" />
				</span>
				<p class="mt-3 text-xs font-medium text-slate">{m.hero_visual_status()}</p>
				<p class="mt-0.5 font-display text-3xl font-semibold">{euro.format(20)}</p>
				<span
					class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[0.6875rem] font-semibold text-primary"
				>
					<span class="size-1.5 rounded-full bg-primary"></span>
					{m.hero_visual_delivered()}
				</span>
			</div>

			<!-- Recipient -->
			<div class="mx-4 mt-5 flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-ink/5">
				<span
					class="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-ink text-lime"
				>
					<Icon name="signal" class="size-4" />
				</span>
				<div class="min-w-0">
					<p class="text-sm font-semibold whitespace-nowrap">+49 •••• 4821</p>
					<p class="truncate text-[0.6875rem] text-slate">{m.hero_visual_product()}</p>
				</div>
			</div>

			<!-- Details -->
			<dl class="mx-4 mt-2 divide-y divide-ink/5 rounded-2xl bg-white px-3 ring-1 ring-ink/5">
				{#each details as row (row.label)}
					<div class="flex items-center justify-between gap-2 py-2 text-xs">
						<dt class="text-slate">{row.label}</dt>
						<dd
							class="font-medium whitespace-nowrap {row.mono
								? 'font-mono text-[0.6875rem]'
								: ''} {row.accent ? 'text-primary' : ''}"
						>
							{row.value}
						</dd>
					</div>
				{/each}
			</dl>

			<!-- Action + home indicator -->
			<div class="mt-auto px-4 pb-2">
				<span
					class="flex h-10 items-center justify-center rounded-full bg-ink text-xs font-semibold text-paper"
				>
					{m.hero_visual_new()}
				</span>
				<span class="mx-auto mt-3 block h-1 w-24 rounded-full bg-ink/80"></span>
			</div>
		</div>
	</div>

	{#if operators}
		<div
			class="absolute top-52 -left-10 flex -rotate-3 items-center gap-2.5 rounded-2xl bg-white p-3 pr-4 text-ink shadow-xl motion-safe:animate-float"
		>
			<span class="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
				<Icon name="signal" class="size-4" />
			</span>
			<span class="text-xs font-semibold whitespace-nowrap">
				{m.hero_visual_operators({ count: integer.format(operators.value) })}
			</span>
		</div>
	{/if}

	<div
		class="absolute top-32 -right-8 flex rotate-2 items-center gap-2.5 rounded-2xl bg-white p-3 pr-4 text-ink shadow-xl [animation-delay:-2s] motion-safe:animate-float"
	>
		<span class="grid size-8 place-items-center rounded-lg bg-lime text-ink">
			<Icon name="wifi" class="size-4" />
		</span>
		<span class="text-xs font-semibold whitespace-nowrap">{m.hero_visual_data()}</span>
	</div>

	<div
		class="absolute -bottom-4 -left-10 -rotate-2 rounded-2xl bg-ink-soft px-4 py-3 text-paper shadow-xl ring-1 ring-paper/15 [animation-delay:-4s] motion-safe:animate-float"
	>
		<p class="text-xs text-paper/60">{m.hero_visual_balance()}</p>
		<p class="mt-1 font-display text-lg font-semibold">{euro.format(12480)}</p>
	</div>
</div>
