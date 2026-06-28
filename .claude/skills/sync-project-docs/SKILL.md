---
name: sync-project-docs
description: Verify this Next.js playbook app still builds and lints cleanly, then refresh CLAUDE.md and README.md to match the current implementation. Use when source files under content/ or src/, package.json scripts/dependencies, or the project structure have changed and the two docs may be stale. Also use when explicitly asked to update, sync, or audit CLAUDE.md/README.md.
tools: Read, Glob, Grep, Bash, Edit
---

# Sync Project Docs

Keeps `CLAUDE.md` (agent-facing) and `README.md` (human-facing) in this repo accurate against the current codebase — but only after confirming the code actually works. Verification is the approval gate: once it passes, proceed with doc edits without pausing for per-section confirmation. If verification fails, stop and report instead of editing docs against a broken build.

## When to run

- After adding/removing dependencies, scripts, routes, or components.
- After adding a new `PlaybookSection` `kind` or otherwise changing the content schema.
- After renaming or moving files that `CLAUDE.md`/`README.md` reference.
- As periodic housekeeping before a release.

## Workflow

### 1. Verify implementation (required, blocking gate)

Run in order; stop and report if either fails — do not edit the docs against a broken build:

```bash
npm run lint
npm run build
```

### 2. Re-derive current state (don't trust the existing docs)

Re-read the actual sources rather than assuming the old CLAUDE.md/README.md are still correct:

- `package.json` — scripts, dependency versions (note any exact-pinned deps, e.g. `lucide-react`).
- `content/types.ts` and `content/playbook.ts` — current content schema and section kinds.
- `src/app/*` and `src/components/*` — routes, components, theming behavior.
- Re-check for `.github/`, jest/vitest/playwright config before claiming "no tests/CI exist" — only state that if it's still true.

### 3. Update `CLAUDE.md`

Audit each section (Commands, Architecture, Content model, Conventions) against what you just re-derived. Add what's new, remove what's no longer true, keep it dense — no restating obvious code, no generic best-practice filler.

### 4. Update `README.md`

Keep it human-facing: what the app is, stack, getting started, scripts table, project structure, where to edit content, deployment notes. Don't duplicate CLAUDE.md's agent-specific detail (architecture gotchas, conventions) — link to it instead.

### 5. Report

Summarize in 2-4 bullets what changed in each file and why. Re-run `npm run lint` and `npm run build` once more if the doc edits are done, purely as a sanity check (they shouldn't affect either, since docs aren't source).

## Non-goals

- Does not add tests or CI — it documents what exists, not what should exist.
- Does not commit or push changes — leave staging/committing to the user (repo-wide git policy: never commit unless explicitly asked).
- Does not ask for confirmation per section once the verify gate in step 1 passes.
