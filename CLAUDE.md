# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

The **Janaagraha AI Startup Toolkit** — a single-page Next.js app that renders an internal starter kit for Janaagraha staff on the AI Pilot: data-sharing rules, a reusable prompt formula, a Dos & Don'ts reference, a guide to the six pilot tools (Claude Pro, Gemini Advanced, NotebookLM, Perplexity Pro, ChatGPT Plus, Canva Pro), and team-specific prompt libraries across 25 program teams plus All Staff. It is a static, content-driven app: no backend, no database, no auth.

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

- [content/types.ts](content/types.ts) — content schema. `PlaybookSection` is a discriminated union on `kind`: `"principles" | "table" | "prompts" | "instruction" | "cheatsheet" | "tools" | "dosdonts"`. The `"instruction"` and `"cheatsheet"` variants (and their `InstructionPrompt`/`CheatsheetGroup` types) remain in the union for type stability but have **zero usages** in current content — they were the Claude-specific instruction prompt and command cheat sheet, removed when the app was generalised to the multi-tool AI Pilot. Don't resurrect them without re-checking this comment is still true.
- [content/playbook.ts](content/playbook.ts) — single source of truth for all page copy, exported as `toolkitContent`: hero text, nav, 6 main sections (essentials/setup/safety/dosdonts/tools/prompting), and 26 team-prompt groups (`all-staff` plus 25 program teams, ordered by vertical — Urban Planning and Spatial Design; Civic Participation and Grassroots Engagement; Public Finance Management; Regional State Program Deployments; Sectoral Policies and National Advocacy; Horizontal Support and Institutional Strategy — each with 5+ prompts).
- [src/components/playbook-app.tsx](src/components/playbook-app.tsx) — one `"use client"` component that renders the entire app: search/filter (`sectionMatches`, `promptMatches`), fuzzy team search (`fuzzyMatch`, subsequence match), scroll progress bar, dark/light theme toggle, mobile nav drawer (with a "Teams" sub-list), a sidebar "Teams" submenu synced to the active team tab, copy-to-clipboard buttons, and per-`kind` section rendering via `SectionContent` (including `ToolsGuide` for the `"tools"` kind, `DosDonts` for the `"dosdonts"` kind, and `TeamPrompts` for the team-prompt library).
- [src/app/page.tsx](src/app/page.tsx) — entry point; wires `toolkitContent` into `PlaybookApp`. Keep trivial.
- [src/app/layout.tsx](src/app/layout.tsx) — root layout, Geist/Geist Mono fonts, page metadata.
- [src/app/globals.css](src/app/globals.css) — Tailwind v4 import plus CSS custom-property theme tokens (light is the `:root` default; dark is `[data-theme="dark"]`), plus tool-tier badge colors (`.tier-pro` / `.tier-advanced` / `.tier-plus` / `.tier-free`) and Dos & Don'ts item styling (`.dosdonts-item--do` / `--dont` / `--tip`).
- [public/brand/janaagraha-logo.svg](public/brand/janaagraha-logo.svg) — brand asset used in the header.

## Content model gotcha

Adding a new section `kind` touches **three** places together — missing one breaks the build or silently drops UI:
1. `content/types.ts` — add the variant to the `PlaybookSection` union.
2. `src/components/playbook-app.tsx` `SectionContent` — add the render branch.
3. `src/components/playbook-app.tsx` `iconForSection` — add the icon mapping (falls back to `BookOpen` if omitted, so this one fails silently rather than breaking the build).

Also update `sectionMatches` (in `playbook-app.tsx`) so the new kind's text is searchable — TypeScript won't catch a missing branch there since the function falls through to the `instruction` shape by default; it's a function-end fallthrough, not an exhaustive switch.

For copy-only changes (new prompt, new table row, new team-prompt group, new tool card, new Dos & Don'ts item), edit only [content/playbook.ts](content/playbook.ts) — no component changes needed. Adding a team-prompt group just needs a new entry in `teamPromptGroups`; the team tabs, fuzzy search, and sidebar/mobile submenus all derive from that array automatically.

## Conventions

- Path alias `@/*` → `./src/*` (see [tsconfig.json](tsconfig.json)).
- Theme persists to `localStorage` under key `jana-theme`; defaults to dark. The initial `theme` state is hardcoded to `"dark"` (matching the SSR-rendered `data-theme="dark"` on `<html>` in `layout.tsx`) and a `useLayoutEffect` restores a stored `"light"` preference **after mount** — reading `localStorage` directly in the `useState` initializer would make the first client render diverge from the server-rendered HTML and trigger a hydration mismatch. That mount-time `setTheme` call carries an `eslint-disable-next-line react-hooks/set-state-in-effect` with a comment explaining why; don't remove the disable without re-solving the underlying hydration-safety problem. Theme toggle uses `document.startViewTransition` for a circular reveal when available (1000ms, `cubic-bezier(0.4, 0, 0.2, 1)` — the standard ease-in-out curve, chosen for an evenly smooth feel over the full duration), falling back to an instant swap when unsupported or `prefers-reduced-motion` is set.
- Strict TypeScript — no `any`, discriminated unions over loose optional fields (see `PlaybookSection`).
- Team-tab state (`activeTeam`) lives in `PlaybookApp`, not inside `TeamPrompts` — this is what lets the sidebar "Teams" submenu and mobile menu jump to and activate a specific team tab via `goToTeam`.
- The team search box (`TeamPrompts`) filters by subsequence fuzzy match on the team label (`fuzzyMatch`), not substring — distinct from the main `includesTerm` substring search used for the page-wide search box.
- The team-tab buttons use a dedicated `.team-tabs` class (CSS grid, `grid-auto-flow: column` + `grid-template-rows: repeat(3, auto)` + `grid-auto-columns: max-content`, `overflow-x: auto`) instead of the `.tabs` flex-wrap class — this caps the 26-team picker to 3 rows and scrolls horizontally rather than wrapping indefinitely down the page. `DosDonts`'s category tabs and the (now-unused) `Cheatsheet` component still use plain `.tabs` (fewer groups, no scroll needed); don't merge the two without checking both usages.
- Scrollbars are theme-aware: `scrollbar-color`/`::-webkit-scrollbar-*` in `globals.css` reference `--border`/`--surface`/`--muted`, so they recolor automatically with the theme — don't hardcode scrollbar colors elsewhere.
- Tool tier badges (`ToolCard.tier`: `"Pro" | "Advanced" | "Plus" | "Free"`) map to fixed colors via `tierClassName` in `playbook-app.tsx` — hardcoded hex tints (not theme tokens), so they look the same in light and dark mode by design.

## Keeping docs current

A skill at [.claude/skills/sync-project-docs/](.claude/skills/sync-project-docs/SKILL.md) re-verifies the build and refreshes this file and `README.md` against the current implementation. Prefer invoking it over hand-editing these two files after structural changes.
