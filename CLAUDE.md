# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

Freshly scaffolded with `sv create` (SvelteKit 3, Svelte 5, TypeScript, Tailwind v4, Paraglide i18n, Vitest, Playwright, adapter-node). There is no app code yet: `src/routes/+page.svelte` is the placeholder and `src/lib/vitest-examples/` holds sample tests that can be removed once real tests exist.

## Commands

Use pnpm (the `test` script and `playwright.config.ts` call `npm run` internally; that is scaffold output, not a sign npm is preferred).

- `pnpm dev`: dev server
- `pnpm build` / `pnpm preview`: production build (Node server in `build/`) and preview on port 4173
- `pnpm check`: `svelte-kit sync` + svelte-check
- `pnpm lint`: prettier `--check` then eslint; `pnpm format` to fix formatting
- `pnpm test`: unit tests once, then e2e
- `pnpm test:unit`: Vitest in watch mode
- `pnpm test:e2e`: installs Playwright browsers, builds, previews, runs `*.e2e.ts`

Single tests:

- `pnpm vitest run src/lib/foo.spec.ts` (add `-t "name"` to filter by test name)
- `pnpm vitest run --project server` or `--project client` to run one Vitest project
- `pnpm playwright test src/routes/page.svelte.e2e.ts`

## Architecture & conventions

**SvelteKit 3 config lives in `vite.config.ts`**; there is no `svelte.config.js`. The `sveltekit({...})` plugin call holds the adapter and compiler options. Runes mode is forced for all non-`node_modules` files.

**Import alias is `#lib`, not `$lib`.** It is defined as Node subpath imports in `package.json` (`"#lib/*": "./src/lib/*"`). Use `#lib/...` for imports from `src/lib`.

**Testing is split into two Vitest projects** (see `vite.config.ts`), selected by filename:

- `*.svelte.spec.ts` / `*.svelte.test.ts` → `client` project, runs in real headless Chromium via `@vitest/browser-playwright`; render components with `vitest-browser-svelte` and query via `page` from `vitest/browser`. Files under `src/lib/server/` are excluded.
- other `*.spec.ts` / `*.test.ts` → `server` project, Node environment.
- `*.e2e.ts` → Playwright, against the built app.
- `expect.requireAssertions: true`: every test must make at least one assertion.

**i18n (Paraglide JS):**

- Locales `en` (base) and `de`, configured in `project.inlang/settings.json`; messages in `messages/{locale}.json`.
- The Vite plugin compiles messages into `src/lib/paraglide/` (gitignored, generated, don't edit). Import messages as `import { m } from '#lib/paraglide/messages.js'`.
- Locale routing: `src/hooks.ts` `reroute` strips the locale prefix from URLs; `src/hooks.server.ts` runs `paraglideMiddleware` and fills `%paraglide.lang%` / `%paraglide.dir%` in `src/app.html`.
- `src/routes/+layout.svelte` renders hidden links to every locale so prerendering/crawling discovers localized routes. Build internal links with `localizeHref` + `resolve` from `$app/paths`.
- When adding a message, add the key to every file in `messages/`.

**Styling:** Tailwind v4 configured CSS-first in `src/routes/layout.css` (with `forms` and `typography` plugins), no `tailwind.config.js`. Prettier sorts Tailwind classes using that stylesheet.

**Formatting:** tabs, single quotes, no trailing commas, print width 100.

**Images:** `@sveltejs/enhanced-img` is enabled; use `<enhanced:img>` for local raster images.

**Tooling:** `.claude/settings.json` enables the Svelte AI-tools plugin (Svelte MCP); prefer it for Svelte 5 / SvelteKit API questions.
