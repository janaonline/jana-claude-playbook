---
name: scope-a-feature
description: Use whenever the user says something like "I want to add a feature," "I want to build X," "can we add...," or "new feature idea:" — before any planning or code is written. Runs a read-first, clarify-ideate-confirm sequence grounded in this app's actual content model, then gates all building on the user's explicit approval of a restated one-paragraph plan.
---

# Scope a Feature

**Never start building — not even a plan file — until the user has explicitly approved a restated one-paragraph plan.** This is a content-driven static app, so scoping hinges on one question above all: is this copy-only (edit `content/playbook.ts` and nothing else) or does it need component/schema work? Get that right before anything else.

## 1. Detect the trigger

Fires whenever the user proposes a new feature, however phrased ("I want to add...", "what if we built...", "new feature idea:"). Do not scope vague musings or bug reports — only genuine new-feature proposals.

## 2. Read first, then ask

Before asking anything, skim the ground truth so questions and ideas are concrete — read-only, a quick orientation, not a full audit:

- `CLAUDE.md` — architecture, the **content-model gotcha** (a new section `kind` = three coordinated edits), and the copy-only vs component-change split.
- `content/types.ts` — the `PlaybookSection` discriminated union on `kind` (`principles | table | prompts | instruction | cheatsheet | tools | dosdonts`); note `instruction` and `cheatsheet` are dormant (zero usages).
- `content/playbook.ts` — `toolkitContent`: the 6 main sections plus the 26 `teamPromptGroups` (`all-staff` + 25 program teams).
- `src/components/playbook-app.tsx` — how search (`sectionMatches`, `promptMatches`, `fuzzyMatch`), `SectionContent` per-`kind` rendering, theming, and the nav/sidebar/mobile submenus work.

## 3. Ask sharp clarifying questions

Plain conversational questions — **not** the AskUserQuestion tool; scoping is open-ended, not a closed choice. Keep it tight, enough to remove real ambiguity. Cover:

- **Copy-only or structural?** New prompt / table row / team-prompt group / tool card / Dos & Don'ts item → `content/playbook.ts` only. A new section `kind` → the three-place change (`types.ts` union + `SectionContent` render branch + `iconForSection`) **plus** `sectionMatches` so it's searchable.
- **Surfacing & search.** Should it be findable in the page-wide substring search? If team-scoped, it should flow automatically into the team tabs, fuzzy team search, and sidebar/mobile submenus (all derive from `teamPromptGroups`) — confirm that's the intent.
- **Theme & hydration.** Any theme-sensitive UI (tier badge colors, the `--success` contrast token) or new client state that could cause an SSR/client hydration mismatch (cf. the `data-theme` / `useLayoutEffect` theme note)?
- **Edge cases.** Empty/missing content, a team with no prompts, very long copy, mobile nav behavior, and accessibility/contrast in *both* light and dark.
- **Verification.** There is no test suite — the gate is `npm run lint` + `npm run build`. Confirm that's acceptable for sign-off.

## 4. Propose adjacent ideas

Offer 2–4 concrete extensions that fit this app's grain — e.g. a companion team-prompt group, a new tool card, an added Dos & Don'ts category, a search/filter refinement — each with a one-line reason it's worth considering. Present as options, not commitments.

## 5. Wait for answers

Do not restate a plan, write a plan file, or touch any code until the user responds.

## 6. Restate the plan

Fold the answers (and any adjacent ideas they picked) into a single plain-language paragraph. Name explicitly whether it's copy-only or a three-place structural change. Then ask for approval directly (e.g. "Should I go ahead and build this?").

## 7. Build only after explicit approval

Proceed only on a clear yes. If the user changes or adds scope, loop back to step 6 with an updated restatement before building. When building, honor the content-model gotcha (all three places for a new `kind`, plus `sectionMatches`) and finish with `npm run lint` + `npm run build`.

## Do Not

- Do not write code, a plan file, or any implementation before explicit approval.
- Do not use AskUserQuestion for the open-ended scoping questions — ask them conversationally.
- Do not skip the edge-case or copy-only-vs-structural questions to save time.
- Do not bury the approval ask in a wall of questions — ask, then wait.
- Do not treat silence, a partial answer, or a vague reply as approval.
