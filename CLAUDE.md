# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

Airbat marketing site (B2B wholesale prepaid top-ups), en/de, built on SvelteKit 3, Svelte 5, TypeScript, Tailwind v4, Paraglide i18n, Vitest, Playwright, adapter-node.

- Pages: one-page home (`#products`, `#who-we-serve`, `#company` anchors), `contact`, `sign-up`, `newsletter`, `imprint`, `privacy-policy`, `terms-and-conditions`.
- Company details, stats, office cities and the legal texts are placeholders until real data is supplied; legal pages show a "draft" notice until reviewed by a lawyer.

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

**Import alias is `#lib`, not `$lib`.** It is defined as Node subpath imports in `package.json` (`"#lib/*": "./src/lib/*"`). Use `#lib/...` for imports from `src/lib`, with the file extension for TS modules (`#lib/content/home.ts`), since subpath imports don't add one.

**Code layout:**

- `src/lib/content/`: copy-adjacent data (`home.ts`, `company.ts` for company master data, `lead.ts` for shared form types) and long legal texts as `legal/{imprint,privacy,terms}.{en,de}.svelte`.
- `src/lib/server/`: form validation (`lead.ts`), mailer (`mailer.ts`, nodemailer over SMTP), shared lead form action (`lead-action.ts`). Never log form contents (personal data).
- `src/lib/components/`: shared UI; `home/` holds the homepage sections, `layout/` the header, footer and nav data.

**Environment variables:** declared in `src/env.ts` with `defineEnvVars` and imported from `$app/env/private` (`$env/dynamic/private` does not exist in SvelteKit 3). Keep `.env.example` in sync.

**Testing is split into two Vitest projects** (see `vite.config.ts`), selected by filename:

- `*.svelte.spec.ts` / `*.svelte.test.ts` → `client` project, runs in real headless Chromium via `@vitest/browser-playwright`; render components with `vitest-browser-svelte` and query via `page` from `vitest/browser`. Files under `src/lib/server/` are excluded.
- other `*.spec.ts` / `*.test.ts` → `server` project, Node environment.
- `*.e2e.ts` → Playwright, against the built app.
- `expect.requireAssertions: true`: every test must make at least one assertion.

**i18n (Paraglide JS):**

- Locales `en` (base) and `de`, configured in `project.inlang/settings.json`; messages in `messages/{locale}.json`.
- The Vite plugin compiles messages into `src/lib/paraglide/` (gitignored, generated, don't edit). Import messages as `import { m } from '#lib/paraglide/messages.js'`.
- Locale routing: `src/hooks.ts` `reroute` strips the locale prefix from URLs; `src/hooks.server.ts` runs `paraglideMiddleware` and fills `%paraglide.lang%` / `%paraglide.dir%` in `src/app.html`.
- Locale strategy is `['url', 'cookie', 'baseLocale']` (set in `vite.config.ts`), so German lives under `/de/...`.
- `src/routes/+layout.svelte` renders hidden links to every locale so prerendering/crawling discovers localized routes.
- Internal links: write `href={resolve(localePath('contact'))}` inline (`localePath` from `#lib/i18n.ts`). SvelteKit 3's `resolve` takes paths without a leading slash, and eslint's `svelte/no-navigation-without-resolve` requires the `resolve()` call in the template.
- When adding a message, add the key to every file in `messages/`.
- Copy style: no em dashes in any language. German uses en dashes only as page-title separators and in unspaced ranges (`10.000–25.000 €`).

**Styling:** Tailwind v4 configured CSS-first in `src/routes/layout.css` (with `forms` and `typography` plugins), no `tailwind.config.js`. Prettier sorts Tailwind classes using that stylesheet.

**Formatting:** tabs, single quotes, no trailing commas, print width 100.

**Images:** `@sveltejs/enhanced-img` is enabled; use `<enhanced:img>` for local raster images.

**Tooling:** `.claude/settings.json` enables the Svelte AI-tools plugin (Svelte MCP); prefer it for Svelte 5 / SvelteKit API questions.
