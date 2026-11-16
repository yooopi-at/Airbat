<script lang="ts" module>
	const paths = {
		'arrow-right': 'M5 12h14M13 6l6 6-6 6',
		'arrow-up': 'M12 19V5M6 11l6-6 6 6',
		'chevron-left': 'M15 6l-6 6 6 6',
		'chevron-right': 'M9 6l6 6-6 6',
		check: 'M5 12.5l4.5 4.5L19 7',
		menu: 'M4 7h16M4 12h16M4 17h16',
		close: 'M6 6l12 12M18 6L6 18',
		phone:
			'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
		mail: 'M4 6h16v12H4zM4 7l8 6 8-6',
		pin: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
		signal: 'M5 19v-3M10 19v-7M15 19V8M20 19V4',
		wifi: 'M12 19.5h.01M8.5 16a5 5 0 0 1 7 0M5 12.5a10 10 0 0 1 14 0M2 9a15 15 0 0 1 20 0',
		layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5',
		sparkle:
			'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6',
		plug: 'M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v4',
		clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
		trending: 'M3 17l6-6 4 4 8-8M15 7h6v6',
		shield: 'M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z',
		building: 'M4 21V5l8-2v18M12 9h8v12M3 21h18M8 8v.01M8 12v.01M8 16v.01M16 13v.01M16 17v.01',
		grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
		store: 'M4 10v10h16V10M3 6l2-3h14l2 3v1a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V6z',
		star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z',
		wallet: 'M4 7h15a1 1 0 0 1 1 1v11H5a1 1 0 0 1-1-1V7zM4 7l12-3v3M16 13h.01',
		send: 'M21 3L10 14M21 3l-7 18-4-7-7-4 18-7z'
	} as const;

	export type IconName = keyof typeof paths;
</script>

<script lang="ts">
	let { name, class: className = 'size-6' }: { name: IconName; class?: string } = $props();
</script>

<svg
	class={className}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.75"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	<path d={paths[name]} />
</svg>
