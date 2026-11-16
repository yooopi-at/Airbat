<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Logo from '#lib/components/Logo.svelte';
	import { resolve } from '$app/paths';
	import type { PathnameWithSearchOrHash } from '$app/types';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';
	import NewsletterForm from './NewsletterForm.svelte';
	import { legalItems, navItems } from './nav.ts';

	const year = new Date().getFullYear();
</script>

<footer class="bg-ink text-paper">
	<div class="mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
			<div>
				<Logo />
				<h2 class="mt-8 text-2xl font-semibold">{m.newsletter_title()}</h2>
				<p class="mt-2 max-w-md text-paper/70">{m.newsletter_text()}</p>
				<NewsletterForm />
			</div>

			<nav aria-labelledby="footer-nav-title">
				<h2 id="footer-nav-title" class="text-sm font-semibold tracking-widest text-lime uppercase">
					{m.footer_nav_title()}
				</h2>
				<ul class="mt-5 space-y-3">
					{#each navItems as item (item.path + item.hash)}
						<li>
							<a
								href={resolve(`${localePath(item.path)}${item.hash}` as PathnameWithSearchOrHash)}
								class="text-paper/80 hover:text-lime"
							>
								{item.label()}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<nav aria-labelledby="footer-legal-title">
				<h2
					id="footer-legal-title"
					class="text-sm font-semibold tracking-widest text-lime uppercase"
				>
					{m.footer_legal_title()}
				</h2>
				<ul class="mt-5 space-y-3">
					{#each legalItems as item (item.path)}
						<li>
							<a href={resolve(localePath(item.path))} class="text-paper/80 hover:text-lime"
								>{item.label()}</a
							>
						</li>
					{/each}
				</ul>
				<p class="mt-8 flex items-center gap-2 text-paper/60">
					<Icon name="pin" class="size-4" />
					{m.footer_location()}
				</p>
			</nav>
		</div>

		<div
			class="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-paper/10 pt-8 text-sm text-paper/60 sm:flex-row sm:items-center"
		>
			<p>{m.footer_rights({ year })}</p>
			<a href="#top" class="inline-flex items-center gap-2 hover:text-lime">
				{m.footer_back_to_top()}
				<Icon name="arrow-up" class="size-4" />
			</a>
		</div>
	</div>
</footer>
