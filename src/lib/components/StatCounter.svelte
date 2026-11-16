<script lang="ts">
	type Props = {
		value: number;
		label: string;
		prefix?: string;
		suffix?: string;
		decimals?: number;
	};

	let { value, label, prefix = '', suffix = '', decimals = 0 }: Props = $props();

	// Server render shows the final value, so the number is correct without JavaScript.
	let shown = $state<number | undefined>();
	const display = $derived((shown ?? value).toFixed(decimals));

	function countUp(node: HTMLElement) {
		if (
			typeof IntersectionObserver === 'undefined' ||
			matchMedia('(prefers-reduced-motion: reduce)').matches ||
			node.getBoundingClientRect().top < window.innerHeight
		) {
			return;
		}

		shown = 0;
		let frame = 0;
		const observer = new IntersectionObserver((entries) => {
			if (!entries.some((entry) => entry.isIntersecting)) return;
			observer.disconnect();
			const duration = 1400;
			const start = performance.now();
			const tick = (now: number) => {
				const progress = Math.min(1, (now - start) / duration);
				shown = value * (1 - Math.pow(1 - progress, 3));
				if (progress < 1) frame = requestAnimationFrame(tick);
			};
			frame = requestAnimationFrame(tick);
		});
		observer.observe(node);

		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
		};
	}
</script>

<div class="flex flex-col gap-2" {@attach countUp}>
	<dt class="text-sm text-paper/60">{label}</dt>
	<dd class="order-first font-display text-4xl font-semibold text-paper tabular-nums sm:text-5xl">
		{prefix}{display}<span class="text-lime">{suffix}</span>
	</dd>
</div>
