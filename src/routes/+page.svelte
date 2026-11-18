<script lang="ts">
	import Audiences from '#lib/components/home/Audiences.svelte';
	import Benefit from '#lib/components/home/Benefit.svelte';
	import CtaBand from '#lib/components/home/CtaBand.svelte';
	import Hero from '#lib/components/home/Hero.svelte';
	import Offices from '#lib/components/home/Offices.svelte';
	// import OfficesPhoto from '#lib/components/home/OfficesPhoto.svelte';
	import Platform from '#lib/components/home/Platform.svelte';
	import Products from '#lib/components/home/Products.svelte';
	import Stats from '#lib/components/home/Stats.svelte';
	import { m } from '#lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.home_meta_title()}</title>
	<meta name="description" content={m.home_meta_description()} />
</svelte:head>

<Hero />
<Stats />
<Products />
<Benefit />
<Audiences />
<Platform />
<Offices />
<!-- <OfficesPhoto /> -->
<CtaBand />
