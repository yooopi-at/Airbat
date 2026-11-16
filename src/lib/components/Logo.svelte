<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<span class="inline-flex items-center gap-2 font-display text-xl font-semibold {className}">
	<svg viewBox="0 0 32 32" class="size-8" aria-hidden="true">
		<rect width="32" height="32" rx="10" class="fill-primary" />
		<path
			d="M8 21c2.5-6 5-9 8-9s5.5 3 8 9"
			fill="none"
			stroke="currentColor"
			stroke-width="2.5"
			stroke-linecap="round"
			class="text-paper"
		/>
		<circle cx="16" cy="9" r="2.5" class="fill-lime" />
	</svg>
	airbat
</span>
