<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { Path, PathnameWithSearchOrHash } from '$app/types';
	import Button from '#lib/components/Button.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Logo from '#lib/components/Logo.svelte';
	import { localePath } from '#lib/i18n.ts';
	import { m } from '#lib/paraglide/messages.js';
	import { getLocale, locales, localizeHref } from '#lib/paraglide/runtime.js';
	import { navItems } from './nav.ts';

	let open = $state(false);

	function close() {
		open = false;
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && open) close();
	}
</script>

<svelte:window onkeydown={onKeydown} />

<header class="sticky top-0 z-50 border-b border-paper/10 bg-ink/90 text-paper backdrop-blur">
	<div class="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
		<a href={resolve(localePath(''))} aria-label={m.nav_home_label()} onclick={close}>
			<Logo />
		</a>

		<nav aria-label={m.nav_main_label()} class="hidden lg:block">
			<ul class="flex items-center gap-8 text-sm font-medium">
				{#each navItems as item (item.path + item.hash)}
					<li>
						<a
							href={resolve(`${localePath(item.path)}${item.hash}` as PathnameWithSearchOrHash)}
							class="text-paper/80 transition-colors hover:text-lime"
						>
							{item.label()}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex items-center gap-3">
			<ul
				class="flex items-center gap-1 text-xs font-semibold uppercase"
				aria-label={m.nav_language()}
			>
				{#each locales as locale (locale)}
					<li>
						<a
							href={resolve(localizeHref(page.url.pathname, { locale }).replace(/^\//, '') as Path)}
							hreflang={locale}
							data-sveltekit-reload
							aria-current={locale === getLocale() ? 'true' : undefined}
							class="rounded-full px-2 py-1 transition-colors {locale === getLocale()
								? 'bg-paper/15 text-paper'
								: 'text-paper/60 hover:text-paper'}"
						>
							{locale}
						</a>
					</li>
				{/each}
			</ul>
			<div class="hidden items-center gap-2 sm:flex">
				<Button href={resolve(localePath('sign-up'))} variant="ghost" class="px-4"
					>{m.nav_login()}</Button
				>
				<Button href={resolve(localePath('sign-up'))} variant="lime" class="px-5 py-2.5"
					>{m.nav_signup()}</Button
				>
			</div>
			<button
				type="button"
				class="grid size-10 place-items-center rounded-full hover:bg-paper/10 lg:hidden"
				aria-expanded={open}
				aria-controls="mobile-menu"
				aria-label={open ? m.nav_menu_close() : m.nav_menu_open()}
				onclick={() => (open = !open)}
			>
				<Icon name={open ? 'close' : 'menu'} />
			</button>
		</div>
	</div>

	<nav
		id="mobile-menu"
		aria-label={m.nav_main_label()}
		class="border-t border-paper/10 px-4 pt-4 pb-6 sm:px-6 lg:hidden"
		hidden={!open}
	>
		<ul class="space-y-1 text-lg font-medium">
			{#each navItems as item (item.path + item.hash)}
				<li>
					<a
						href={resolve(`${localePath(item.path)}${item.hash}` as PathnameWithSearchOrHash)}
						class="block rounded-xl px-3 py-2 hover:bg-paper/10"
						onclick={close}
					>
						{item.label()}
					</a>
				</li>
			{/each}
		</ul>
		<div class="mt-6 flex gap-3 sm:hidden">
			<Button
				href={resolve(localePath('sign-up'))}
				variant="outline"
				class="flex-1"
				onclick={close}
			>
				{m.nav_login()}
			</Button>
			<Button href={resolve(localePath('sign-up'))} variant="lime" class="flex-1" onclick={close}>
				{m.nav_signup()}
			</Button>
		</div>
	</nav>
</header>
