import type { PlaybookContent } from "./types";

const instructionPrompt = `Use these instructions for Janaagraha tool-evaluation work.

Default behavior:
- For exploratory or evaluative queries about tool safety, efficiency, integration architecture, deployment choices, or trade-offs, ask 2-3 targeted clarifying questions before answering.
- Skip clarifying questions for factual lookups, simple commands, or when the context and desired output are already clear.
- State assumptions explicitly before analysis.
- Use plain language. Define technical terms the first time you use them.
- Prefer structured answers: short summary, comparison table, recommendation, caveats, next steps.
- Be honest about limitations, uncertainty, security/privacy risks, maintenance cost, and trade-offs. Do not present positives only.
- Challenge unrealistic or marketing-style claims. If a claim like "71x token reduction" appears, explain what baseline, measurement method, and evidence would be needed before treating it as credible.

Context:
I am evaluating tools for Claude Code integration and related AI development workflows. I care most about:
- token efficiency and context management,
- security/privacy and data exposure,
- compatibility with local development, Vercel, and AWS deployment,
- ease of setup and long-term maintenance,
- transparency over hype.

Token and search discipline:
- Ask clarifying questions first when they can avoid wasted context.
- Search the web only for recent, critical, or unstable information: new tools, security advisories, repository status, pricing, version changes, or official docs.
- Prefer official docs, source repos, changelogs, and security advisories over blogs or marketing pages.
- Keep preambles short and get to the answer.
- Respect any token or word budget I provide.

Output rules:
- For comparisons, use tables covering security, efficiency, compatibility, maturity, lock-in, cost, and recommended use.
- Include a final recommendation with confidence level.
- Flag "unknown", "needs verification", or "not enough context" instead of guessing.
- Do not assume my intent, hide caveats, use unexplained jargon, search unnecessarily, or accept vendor claims at face value.`;

export const playbookContent: PlaybookContent = {
  title: "Janaagraha Claude Playbook",
  subtitle:
    "A practical internal guide for using Claude clearly, safely, and efficiently across policy, finance, research, and communications work.",
  updated: "June 2026",
  nav: [
    { id: "essentials", label: "Essentials" },
    { id: "setup", label: "Setup" },
    { id: "safety", label: "Safety" },
    { id: "tokens", label: "Tokens" },
    { id: "prompting", label: "Prompting" },
    { id: "instructions", label: "Instructions" },
    { id: "team-prompts", label: "Team Prompts" },
    { id: "sources", label: "Sources" },
  ],
  hero: {
    badge: "Claude Team Playbook",
    title: "Use Claude like a careful colleague, not a magic answer machine.",
    summary:
      "This app turns the original static guide into a searchable, copy-ready workspace for better prompts, safer data handling, and clearer team habits.",
    metrics: [
      {
        label: "Reading mode",
        value: "Guided",
        detail: "Outline, search, tabs, and copyable examples reduce friction.",
      },
      {
        label: "Core rule",
        value: "Verify",
        detail: "AI output is a first draft until a human checks sources.",
      },
      {
        label: "Best fit",
        value: "Internal",
        detail: "Use Vercel protection or SSO for access control.",
      },
    ],
  },
  sections: [
    {
      id: "essentials",
      eyebrow: "Start here",
      title: "What Claude is good for, and where it needs guardrails",
      summary:
        "Claude can accelerate thinking and drafting, but it does not remove source checking, professional judgement, or data responsibility.",
      kind: "principles",
      items: [
        {
          title: "Use it for first drafts",
          detail:
            "Draft emails, briefs, summaries, tables, meeting notes, workshop handouts, and alternate versions for different audiences.",
        },
        {
          title: "Make source boundaries explicit",
          detail:
            "Tell Claude which uploaded document, official site, or pasted evidence it may use. Ask it to say when something is not found.",
        },
        {
          title: "Treat confidence as a signal, not proof",
          detail:
            "A fluent answer can still be outdated or wrong. Check legal provisions, statistics, dates, and named attributions before use.",
        },
        {
          title: "Keep context purposeful",
          detail:
            "Give enough background for the task, but avoid pasting entire files when a specific excerpt or question will do.",
        },
      ],
    },
    {
      id: "setup",
      eyebrow: "Account setup",
      title: "Set up Claude for repeatable team work",
      summary:
        "A good setup is not just login access. It includes a useful profile, clear project instructions, and predictable source habits.",
      kind: "principles",
      items: [
        {
          title: "Use the team account identity",
          detail:
            "Sign in with the Janaagraha email account assigned to the Claude Team workspace. Keep personal and organisation work separate.",
        },
        {
          title: "Create projects for ongoing work",
          detail:
            "Use projects for recurring streams such as ASICS research, PFM reports, donor communications, or city-specific policy notes.",
        },
        {
          title: "Add project instructions",
          detail:
            "Include source rules, tone, audience, preferred output formats, and escalation points so every chat starts with the same baseline.",
        },
        {
          title: "Use Claude Code memory deliberately",
          detail:
            "For code work, keep stable repository instructions in CLAUDE.md and use settings for tool permissions and local workflow preferences.",
        },
      ],
    },
    {
      id: "safety",
      eyebrow: "Data safety",
      title: "Use a traffic-light rule before pasting data",
      summary:
        "The safest prompt is the one that shares only the minimum necessary context. When in doubt, anonymise, aggregate, or ask internally first.",
      kind: "table",
      table: {
        title: "Data sharing guide",
        columns: ["Level", "Share?", "Examples", "Required action"],
        rows: [
          [
            "Green",
            "Usually acceptable",
            "Published reports, public government documents, generic policy questions, de-identified aggregates",
            "Cite source and keep the ask narrow",
          ],
          [
            "Amber",
            "Only after cleaning",
            "Internal notes, field observations, meeting summaries, draft reports, city programme data",
            "Remove names, locations, IDs, confidential figures, and forward-looking strategy",
          ],
          [
            "Red",
            "Do not paste",
            "PII, beneficiary records, HR data, credentials, unpublished donor financials, privileged legal advice",
            "Use internal approved systems or ask the workspace/admin owner",
          ],
        ],
      },
    },
    {
      id: "tokens",
      eyebrow: "Efficiency",
      title: "Manage tokens by managing context",
      summary:
        "Usage is shaped by input length, output length, attachments, tools, model choice, and how long a conversation has become.",
      kind: "table",
      table: {
        title: "Efficiency habits that keep quality high",
        columns: ["Habit", "Why it helps", "Example"],
        rows: [
          [
            "Start narrow",
            "A precise first request gives better output and avoids long corrections.",
            "Extract only devolution formula fields instead of summarising a whole SFC report.",
          ],
          [
            "Split unrelated tasks",
            "Old conversation context keeps consuming attention and can confuse the answer.",
            "Start a new chat for comms copy after completing legal extraction.",
          ],
          [
            "Ask for source tables",
            "Tables make gaps visible and reduce repeated follow-up questions.",
            "State | Provision | Source page | Confidence | Needs human check.",
          ],
          [
            "Be skeptical of big savings claims",
            "Token-reduction claims depend on baseline, measurement method, task type, and output quality.",
            "Ask what was measured before accepting a claim such as 71x reduction.",
          ],
        ],
      },
    },
    {
      id: "prompting",
      eyebrow: "Prompt craft",
      title: "Use one prompt formula across the organisation",
      summary:
        "Consistent prompt structure makes outputs easier to review, teach, and reuse across teams.",
      kind: "prompts",
      prompts: [
        {
          id: "formula",
          title: "Reusable Janaagraha prompt frame",
          audience: "All staff",
          scenario:
            "Use this when asking Claude to draft, extract, compare, explain, or convert material for a defined audience.",
          tags: ["Role", "Task", "Source", "Format"],
          review:
            "Check that every factual claim is either from the pasted source or clearly marked as not found.",
          prompt: `# Role
You are a [role] at Janaagraha specialising in [topic].

# Task
[Extract / summarise / compare / draft / rewrite] the following material.

# Context
Audience: [who will read it]
Purpose: [why this is needed]
Tone: [formal / plain language / evidence-based / concise]

# Source rule
Use only [uploaded document / pasted text / named official website]. If something is missing, write "Not found in source" instead of guessing.

# Output format
Return [table / bullets / memo / email] with [columns, length, or structure].`,
        },
        {
          id: "claim-check",
          title: "Claim check before external use",
          audience: "Managers and comms reviewers",
          scenario:
            "Use before a LinkedIn post, donor note, or report section leaves the team.",
          tags: ["Review", "Comms", "Evidence"],
          review:
            "Communications or programme lead verifies numbers, names, and commitments before publication.",
          prompt: `# Role
You are an evidence reviewer for Janaagraha communications.

# Task
Review the draft below and identify every claim that needs verification before external use.

# Checks
- Statistics or percentages
- Legal or policy claims
- Names, titles, and organisational attributions
- Claims about impact or outcomes
- Promises or commitments

# Output format
Table: Claim | Risk level | Evidence needed | Suggested safer wording.

# Draft
[Paste draft here]`,
        },
      ],
    },
    {
      id: "instructions",
      eyebrow: "Copy-ready",
      title: "Profile and project instructions for tool evaluation",
      summary:
        "Use this compact instruction set in profile instructions or project instructions when evaluating Claude Code integrations and AI development tools.",
      kind: "instruction",
      instruction: {
        title: "Tool evaluation instruction prompt",
        description:
          "Designed for Claude profile instructions and project instructions. It keeps answers transparent, source-aware, and token-conscious.",
        characterLimit: 4000,
        prompt: instructionPrompt,
      },
    },
  ],
  teamPromptGroups: [
    {
      id: "all-staff",
      label: "All Staff",
      summary:
        "Reusable prompts for everyday internal writing, summarising, and audience adaptation.",
      prompts: [
        {
          id: "meeting-brief",
          title: "Ten-minute document brief",
          audience: "Programme teams",
          scenario:
            "A 60-page government document arrives before a meeting and the team needs a focused internal brief.",
          tags: ["Summary", "Source-bound", "Briefing"],
          review:
            "Read the output against the source before presenting it. Mark any uncertain point for follow-up.",
          prompt: `# Role
You are a policy researcher at Janaagraha.

# Task
Summarise the pasted document for an internal meeting.

# Context
The audience understands urban governance but has not read the document.

# Guardrail
Use only the pasted text. Do not add outside facts.

# Format
1. Five bullets, each under 30 words
2. One paragraph: implications for our work
3. A final list: "Needs verification"

[Paste source text here]`,
        },
        {
          id: "email-official",
          title: "Formal government email",
          audience: "Programme managers",
          scenario:
            "A team member needs a respectful meeting request without accidental commitments.",
          tags: ["Email", "Government", "Tone"],
          review:
            "Verify names, titles, dates, attachments, and commitments before sending.",
          prompt: `# Role
You are a senior programme manager at Janaagraha.

# Task
Draft a formal email requesting a meeting with a state government official.

# Context
Purpose: discuss OSR reform implementation.
Tone: respectful, concise, professional.
Audience: Joint Secretary level.

# Guardrail
Do not make promises or commitments on behalf of Janaagraha.

# Format
Subject line + three short paragraphs + formal sign-off. Keep it under 200 words.`,
        },
      ],
    },
    {
      id: "policy-insights",
      label: "Policy and Insights",
      summary:
        "Prompts for ASICS research, legal amendment validation, and parastatal mapping.",
      prompts: [
        {
          id: "asics-amendment",
          title: "ASICS amendment validation",
          audience: "Policy and Insights",
          scenario:
            "Compare a current Act or gazette with the ASICS 2023 baseline and flag changes.",
          tags: ["ASICS", "Legal", "Baseline"],
          review:
            "Researcher verifies every provision against the official gazette before updating the questionnaire.",
          prompt: `# Role
You are a legal researcher analysing Indian municipal law for the ASICS framework.

# Source rule
Use uploaded Acts and amendment notifications first. If missing, use only official government or legislature websites and cite the URL plus access date.

# Baseline
[Paste ASICS 2023 baseline here]

# Task
Answer this question from the uploaded law and amendments:
"Does the law specify ward committee composition and quorum rules?"
Compare with the baseline and flag changes.

# Format
Table: Section | Provision text | Effective date | Amendment date | Changed from baseline? | Source.`,
        },
        {
          id: "parastatal-map",
          title: "Parastatal laws and mandates",
          audience: "Policy and Insights",
          scenario:
            "Map agencies responsible for an urban service and locate their governing Acts.",
          tags: ["Parastatal", "Mandate", "Source search"],
          review:
            "Run first on a known state to test accuracy before applying across multiple states.",
          prompt: `# Role
You are a governance researcher specialising in Indian parastatal agencies and urban infrastructure law.

# Guardrail
Use uploaded documents or official government/agency websites only. Do not use news articles or unofficial summaries.

# Task
For [State] and [Service], list all relevant parastatal agencies. For each one, find the governing Act, legal mandate, and whether the Act mentions ward-level service obligations.

# Format
Agency | Act and year | Mandate | Ward clause? | Source | Not found notes.`,
        },
      ],
    },
    {
      id: "public-finance",
      label: "Public Finance",
      summary:
        "Prompts for SFC reports, OSR provisions, fiscal devolution, and donor-ready evidence writing.",
      prompts: [
        {
          id: "osr-provisions",
          title: "OSR reform extraction",
          audience: "PFM analysts",
          scenario:
            "Find own-source revenue provisions before a state field visit or internal strategy review.",
          tags: ["PFM", "OSR", "SFC"],
          review:
            "Analyst checks effective dates against the latest official notification before using the table.",
          prompt: `# Role
You are a PFM fiscal policy analyst at Janaagraha specialising in own-source revenue reforms.

# Source rule
Use uploaded SFC reports and municipal circulars first. If a provision is missing, use only official state government portals and cite the URL plus access date.

# Task
Extract all OSR provisions related to property tax, user charges, advertisement tax, and parking fees.

# Format
Table: Reform area | Provision text | Effective date | Source | Verification needed.`,
        },
        {
          id: "devolution-compare",
          title: "Fiscal devolution comparison",
          audience: "PFM researchers",
          scenario:
            "Prepare a side-by-side internal note on how states devolve funds to urban local bodies.",
          tags: ["Comparison", "Finance", "ULB"],
          review:
            "Senior researcher confirms that each percentage comes from the latest applicable SFC recommendation.",
          prompt: `# Role
You are a PFM researcher specialising in intergovernmental fiscal transfers in India.

# Guardrail
Use uploaded SFC reports or official finance department portals only. If not found, write "Not found in source."

# Task
Compare ULB fiscal devolution formulas for [State 1], [State 2], and [State 3].

# Format
State | Devolution percentage | Distribution basis | Revision frequency | Latest source | Caveat.`,
        },
      ],
    },
  ],
  sources: [
    {
      label: "Claude model overview",
      href: "https://platform.claude.com/docs/en/about-claude/models/overview",
    },
    {
      label: "Claude usage limit best practices",
      href: "https://support.claude.com/en/articles/9797557-usage-limit-best-practices",
    },
    {
      label: "Claude projects",
      href: "https://support.claude.com/en/articles/9517075-what-are-projects",
    },
    {
      label: "Claude Code settings",
      href: "https://code.claude.com/docs/en/settings",
    },
    {
      label: "Claude for Work data ownership",
      href: "https://support.claude.com/en/articles/9265372-who-owns-and-manages-the-data-of-my-team",
    },
  ],
};

export const instructionPromptCharacters = instructionPrompt.length;
