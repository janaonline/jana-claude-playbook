# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

The **Janaagraha Claude Playbook** — a single-page Next.js app that renders an internal guide for Janaagraha staff on using Claude safely and efficiently (data sharing rules, prompt formulas, team-specific prompt libraries, a copy-ready profile/project instruction prompt). It is a static, content-driven app: no backend, no database, no auth.

## Stack

- Next.js 16.2.9 (App Router, Turbopack)
- React 19.2.4 / React DOM 19.2.4
- TypeScript 5 (`strict: true`)
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- `lucide-react` — **exact-pinned at `1.21.0`** (not caret-ranged); keep it pinned when bumping other deps unless intentionally upgrading icons.
- ESLint 9 with `eslint-config-next`

## Commands

```bash
npm run dev      # next dev (Turbopack)
npm run build    # next build — typechecks + statically prerenders
npm run start    # next start (serve the production build)
npm run lint     # eslint
```

There is **no test suite and no CI config** (no `.github/`, no jest/vitest setup). Treat `npm run lint` + `npm run build` as the full verification gate for any change — do not assume tests exist.

## Architecture

- [content/types.ts](content/types.ts) — content schema. `PlaybookSection` is a discriminated union on `kind`: `"principles" | "table" | "prompts" | "instruction"`.
- [content/playbook.ts](content/playbook.ts) — single source of truth for all page copy: hero text, nav, the 6 main sections (essentials/setup/safety/tokens/prompting/instructions), 3 team-prompt groups (All Staff, Policy and Insights, Public Finance), the sources list, and the embedded instruction prompt (`instructionPromptCharacters` tracks its length against `characterLimit`).
- [src/components/playbook-app.tsx](src/components/playbook-app.tsx) — one `"use client"` component that renders the entire app: search/filter (`sectionMatches`, `promptMatches`), scroll progress bar, dark/light theme toggle, mobile nav drawer, copy-to-clipboard buttons, and per-`kind` section rendering via `SectionContent`.
- [src/app/page.tsx](src/app/page.tsx) — entry point; wires `playbookContent` into `PlaybookApp`. Keep trivial.
- [src/app/layout.tsx](src/app/layout.tsx) — root layout, Geist/Geist Mono fonts, page metadata.
- [src/app/globals.css](src/app/globals.css) — Tailwind v4 import plus CSS custom-property theme tokens (light is the `:root` default; dark is `[data-theme="dark"]`).
- [public/brand/janaagraha-logo.svg](public/brand/janaagraha-logo.svg) — brand asset used in the header.

## Content model gotcha

Adding a new section `kind` touches **three** places together — missing one breaks the build or silently drops UI:
1. `content/types.ts` — add the variant to the `PlaybookSection` union.
2. `src/components/playbook-app.tsx` `SectionContent` — add the render branch.
3. `src/components/playbook-app.tsx` `iconForSection` — add the icon mapping (falls back to `BookOpen` if omitted, so this one fails silently rather than breaking the build).

For copy-only changes (new prompt, new table row, new source link), edit only [content/playbook.ts](content/playbook.ts) — no component changes needed.

## Conventions

- Path alias `@/*` → `./src/*` (see [tsconfig.json](tsconfig.json)).
- Theme persists to `localStorage` under key `jana-theme`; defaults to dark. Theme toggle uses `document.startViewTransition` for a circular reveal when available, falling back to an instant swap.
- Strict TypeScript — no `any`, discriminated unions over loose optional fields (see `PlaybookSection`).

## Keeping docs current

A skill at [.claude/skills/sync-project-docs/](.claude/skills/sync-project-docs/SKILL.md) re-verifies the build and refreshes this file and `README.md` against the current implementation. Prefer invoking it over hand-editing these two files after structural changes.
