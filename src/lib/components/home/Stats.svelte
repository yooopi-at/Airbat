<script lang="ts">
	import StatCounter from '#lib/components/StatCounter.svelte';
	import { stats } from '#lib/content/home.ts';
	import { m } from '#lib/paraglide/messages.js';
</script>

<section aria-labelledby="stats-title" class="border-t border-paper/10 bg-ink">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<h2 id="stats-title" class="sr-only">{m.stats_heading()}</h2>
		<dl class="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
			{#each stats as stat (stat.label)}
				<StatCounter
					value={stat.value}
					decimals={stat.decimals}
					prefix={stat.prefix}
					suffix={stat.suffix}
					label={stat.label()}
				/>
			{/each}
		</dl>
	</div>
</section>
