<script lang="ts">
	import { europeBorders, europeLand } from '#lib/content/europe-map.ts';
	import { mapCities, prague } from '#lib/content/home.ts';
	import { offsetKm } from '#lib/geo.ts';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale } from '#lib/paraglide/runtime.js';

	/** SVG units are km from Prague; the viewBox spans ±1,150 km. */
	const extent = 1150;
	const rings = [500, 1000];
	const integer = new Intl.NumberFormat(getLocale());

	const cities = mapCities.map((city) => ({ ...city, ...offsetKm(prague, city) }));
</script>

<svg
	viewBox="{-extent} {-extent} {extent * 2} {extent * 2}"
	role="img"
	aria-label={m.europe_map_label({ distance: integer.format(1000) })}
	class="size-full font-sans"
>
	<path d={europeLand} fill="currentColor" class="text-paper/[0.07]" />
	<path
		d={europeBorders}
		fill="none"
		stroke="currentColor"
		stroke-width="1"
		stroke-linejoin="round"
		vector-effect="non-scaling-stroke"
		class="text-paper/20"
	/>

	{#each rings as radius (radius)}
		<circle
			r={radius}
			fill="none"
			stroke="currentColor"
			stroke-width="3"
			stroke-dasharray="14 18"
			class="text-paper/25"
		/>
		<text
			y={-radius - 20}
			text-anchor="middle"
			font-size="44"
			fill="currentColor"
			class="text-paper/50"
		>
			{integer.format(radius)} km
		</text>
	{/each}

	{#each cities as city (city.name)}
		<line x2={city.x} y2={city.y} stroke="currentColor" stroke-width="2" class="text-paper/15" />
	{/each}

	{#each cities as city (city.name)}
		<circle cx={city.x} cy={city.y} r="14" fill="currentColor" class="text-paper" />
		<text
			x={city.x + (city.labelSide === 'left' ? -30 : 30)}
			y={city.y + 20}
			text-anchor={city.labelSide === 'left' ? 'end' : 'start'}
			font-size="58"
			fill="currentColor"
			class="text-paper/85"
		>
			{city.name()}
		</text>
	{/each}

	<circle
		r="44"
		fill="currentColor"
		class="origin-center text-lime/40 [transform-box:fill-box] motion-safe:animate-ping"
	/>
	<circle r="26" fill="currentColor" class="text-lime" />
	<text
		y="-70"
		text-anchor="middle"
		font-size="84"
		font-weight="600"
		fill="currentColor"
		class="font-display text-paper"
	>
		{m.office_city()}
	</text>
	<text y="110" text-anchor="middle" font-size="54" fill="currentColor" class="text-paper/75">
		{m.country_czechia()}
	</text>
</svg>
