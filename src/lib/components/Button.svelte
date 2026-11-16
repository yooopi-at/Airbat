<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Variant = 'primary' | 'lime' | 'outline' | 'ghost';

	type Props = { variant?: Variant; children: Snippet; class?: string } & (
		| ({ href: string } & Omit<HTMLAnchorAttributes, 'class'>)
		| ({ href?: undefined } & Omit<HTMLButtonAttributes, 'class'>)
	);

	let { variant = 'primary', children, class: className = '', ...rest }: Props = $props();

	const variants: Record<Variant, string> = {
		primary: 'bg-primary text-white hover:bg-primary-dark',
		lime: 'bg-lime text-ink hover:bg-white',
		outline: 'border border-current hover:bg-current/10',
		ghost: 'hover:bg-current/10'
	};

	const classes = $derived(
		`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`
	);
</script>

{#if rest.href !== undefined}
	<a class={classes} {...rest as HTMLAnchorAttributes}>{@render children()}</a>
{:else}
	<button class={classes} {...rest as HTMLButtonAttributes}>{@render children()}</button>
{/if}
