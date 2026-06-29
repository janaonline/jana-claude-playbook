# Janaagraha AI Startup Toolkit

An internal, single-page Next.js app for Janaagraha staff: a searchable, copy-ready starter kit for the AI Pilot. It covers data-sharing guardrails, a reusable 6-part prompt formula, a Dos & Don'ts reference (prompting, data safety, verification, team habits, source quality), a guide to the six pilot tools (Claude Pro, Gemini Advanced, NotebookLM, Perplexity Pro, ChatGPT Plus, Canva Pro — what each is good for, what to avoid, and a setup tip), and team-specific prompt libraries for 26 teams — All Staff plus 25 program/project/functional teams across 6 verticals (Urban Planning and Spatial Design, Civic Participation and Grassroots Engagement, Public Finance Management, Regional State Program Deployments, Sectoral Policies and National Advocacy, and Horizontal Support and Institutional Strategy) — with fuzzy search and a dedicated sidebar/mobile submenu for jumping straight to a team.

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
  playbook.ts      # All page copy: hero, nav, sections, team prompts
src/
  app/
    layout.tsx     # Root layout, fonts, metadata
    page.tsx        # Entry point — wires toolkitContent into PlaybookApp
    globals.css     # Tailwind import + light/dark theme tokens
  components/
    playbook-app.tsx  # The entire UI: search, theme toggle, sections, prompt cards, tools guide, Dos & Don'ts
public/
  brand/janaagraha-logo.svg
```

## Editing content

Almost all text on the page — hero copy, principles, the safety table, the Dos & Don'ts groups, the tool cards, prompt examples, team-prompt groups — lives in [content/playbook.ts](content/playbook.ts). Adding a prompt to an existing team, a row to a table, a tool card, or a Dos & Don'ts item is a copy-only change there. No component changes are needed unless you're adding a new *kind* of section (see [CLAUDE.md](CLAUDE.md) for that gotcha).

## Deployment

This is a standard Next.js app and deploys cleanly to [Vercel](https://vercel.com/new) or any Node-compatible host via `npm run build` + `npm run start`.

## For Claude Code

See [CLAUDE.md](CLAUDE.md) for architecture notes and conventions. A skill at `.claude/skills/sync-project-docs/` keeps that file and this README in sync with the implementation after verifying the build.
