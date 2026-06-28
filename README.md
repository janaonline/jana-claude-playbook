# Janaagraha Claude Playbook

An internal, single-page Next.js app for Janaagraha staff: a searchable, copy-ready guide to using Claude clearly, safely, and efficiently across policy, finance, research, and communications work. It covers data-sharing guardrails, token/context habits, a reusable prompt formula, a copy-ready profile/project instruction prompt, and team-specific prompt libraries (All Staff, Policy and Insights, Public Finance).

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- React 19 + TypeScript (strict)
- Tailwind CSS v4
- [lucide-react](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build (typechecks + statically prerenders) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

There is no automated test suite or CI pipeline in this repo — `npm run lint` and `npm run build` are the verification steps before shipping a change.

## Project structure

```
content/
  types.ts        # Content schema (PlaybookSection discriminated union, etc.)
  playbook.ts      # All page copy: hero, nav, sections, team prompts, sources
src/
  app/
    layout.tsx     # Root layout, fonts, metadata
    page.tsx        # Entry point — wires playbookContent into PlaybookApp
    globals.css     # Tailwind import + light/dark theme tokens
  components/
    playbook-app.tsx  # The entire UI: search, theme toggle, sections, prompt cards
public/
  brand/janaagraha-logo.svg
```

## Editing content

Almost all text on the page — hero copy, principles, comparison tables, prompt examples, the instruction prompt, source links — lives in [content/playbook.ts](content/playbook.ts). Edit that file for copy changes; no component changes are needed unless you're adding a new *kind* of section (see [CLAUDE.md](CLAUDE.md) for that gotcha).

## Deployment

This is a standard Next.js app and deploys cleanly to [Vercel](https://vercel.com/new) or any Node-compatible host via `npm run build` + `npm run start`.

## For Claude Code

See [CLAUDE.md](CLAUDE.md) for architecture notes and conventions. A skill at `.claude/skills/sync-project-docs/` keeps that file and this README in sync with the implementation after verifying the build.
