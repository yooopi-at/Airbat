<script lang="ts">
	import LegalPage from '#lib/components/LegalPage.svelte';
	import De from '#lib/content/legal/imprint.de.svelte';
	import En from '#lib/content/legal/imprint.en.svelte';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale } from '#lib/paraglide/runtime.js';

	const Content = getLocale() === 'de' ? De : En;
</script>

<LegalPage title={m.legal_imprint()}>
	<Content />
</LegalPage>
