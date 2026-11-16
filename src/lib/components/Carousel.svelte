<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';
	import { m } from '#lib/paraglide/messages.js';
	import Icon from './Icon.svelte';

	type Props = {
		items: readonly T[];
		item: Snippet<[T, number]>;
		/** Accessible name of the carousel region. */
		label: string;
		tone?: 'light' | 'dark';
	};

	let { items, item, label, tone = 'light' }: Props = $props();

	let track = $state<HTMLUListElement>();
	let active = $state(0);

	const lastIndex = $derived(items.length - 1);

	function slideWidth(): number {
		const first = track?.firstElementChild as HTMLElement | null;
		if (!track || !first) return 1;
		const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
		return first.offsetWidth + gap;
	}

	function goTo(index: number) {
		if (!track) return;
		active = Math.max(0, Math.min(lastIndex, index));
		const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
		track.scrollTo({ left: active * slideWidth(), behavior: smooth ? 'smooth' : 'auto' });
	}

	function onScroll() {
		if (!track) return;
		const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
		active = atEnd ? lastIndex : Math.round(track.scrollLeft / slideWidth());
	}

	const controlClass = $derived(
		tone === 'dark'
			? 'border-paper/30 text-paper hover:bg-paper hover:text-ink'
			: 'border-ink/20 text-ink hover:bg-ink hover:text-paper'
	);
</script>

<div role="region" aria-roledescription="carousel" aria-label={label}>
	<ul
		bind:this={track}
		onscroll={onScroll}
		class="-mx-4 no-scrollbar flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:scroll-px-0 lg:px-0"
	>
		{#each items as entry, index (index)}
			<li
				role="group"
				aria-roledescription="slide"
				aria-label={m.carousel_slide_label({ index: index + 1, total: items.length })}
				class="w-[82%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
			>
				{@render item(entry, index)}
			</li>
		{/each}
	</ul>

	<div class="mt-8 flex items-center justify-between gap-4">
		<div class="flex flex-wrap gap-2">
			{#each items, index (index)}
				<button
					type="button"
					class="h-2 rounded-full transition-all {index === active
						? 'w-8 bg-lime'
						: tone === 'dark'
							? 'w-2 bg-paper/30'
							: 'w-2 bg-ink/20'}"
					aria-label={m.carousel_go_to({ index: index + 1 })}
					aria-current={index === active ? 'true' : undefined}
					onclick={() => goTo(index)}
				></button>
			{/each}
		</div>
		<div class="flex gap-2">
			<button
				type="button"
				class="grid size-11 place-items-center rounded-full border transition-colors disabled:opacity-30 disabled:hover:bg-transparent {controlClass}"
				aria-label={m.carousel_prev()}
				disabled={active === 0}
				onclick={() => goTo(active - 1)}
			>
				<Icon name="chevron-left" class="size-5" />
			</button>
			<button
				type="button"
				class="grid size-11 place-items-center rounded-full border transition-colors disabled:opacity-30 disabled:hover:bg-transparent {controlClass}"
				aria-label={m.carousel_next()}
				disabled={active === lastIndex}
				onclick={() => goTo(active + 1)}
			>
				<Icon name="chevron-right" class="size-5" />
			</button>
		</div>
	</div>
</div>
