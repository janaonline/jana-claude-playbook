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
    { id: "commands-reference", label: "Commands Ref" },
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
      id: "commands-reference",
      eyebrow: "Quick reference",
      title: "Claude command cheat sheet",
      summary:
        "90 commands across 11 categories. Start with Level 1 and build from there.",
      kind: "cheatsheet",
      groups: [
        {
          id: "level1-core",
          label: "Start & Context",
          emoji: "🟢",
          level: "Level 1 — Learn the Core Commands",
          commands: [
            { command: "/new", description: "Start a fresh conversation" },
            { command: "/project", description: "Create or open a project" },
            { command: "/context", description: "Add background so answers are sharper" },
            { command: "/examples", description: "Give Claude examples to anchor its output" },
            { command: "/clarify", description: "Let Claude ask the right questions before answering" },
            { command: "/upload", description: "Attach files for Claude to read" },
            { command: "/paste", description: "Paste content from clipboard" },
            { command: "/focus", description: "Tell Claude exactly what you want" },
          ],
        },
        {
          id: "level2-write",
          label: "Write & Edit",
          emoji: "🟡",
          level: "Level 2 — Write Better Outputs",
          commands: [
            { command: "/write", description: "Generate content from scratch" },
            { command: "/rewrite", description: "Same message, better delivery" },
            { command: "/improve", description: "Improve existing writing" },
            { command: "/summarize", description: "Condense long content" },
            { command: "/expand", description: "Add more detail to a draft" },
            { command: "/edit", description: "Clean up what you already have" },
            { command: "/shorten", description: "Cut the fluff, keep the punch" },
            { command: "/paraphrase", description: "Restate in different words" },
            { command: "/proofread", description: "Check grammar and clarity" },
          ],
        },
        {
          id: "level3-code",
          label: "Code & Tech",
          emoji: "🔵",
          level: "Level 3 — Code Faster",
          commands: [
            { command: "/code", description: "Write code in any language" },
            { command: "/debug", description: "Find and fix what is broken" },
            { command: "/explain", description: "Explain what code does and why" },
            { command: "/optimize", description: "Make it faster and cleaner" },
            { command: "/refactor", description: "Restructure without changing behaviour" },
            { command: "/test", description: "Write tests for your code" },
            { command: "/convert", description: "Convert between formats or languages" },
            { command: "/documentation", description: "Write inline or external docs" },
            { command: "/review", description: "Review code for issues" },
          ],
        },
        {
          id: "level4-think",
          label: "Analyse & Plan",
          emoji: "🟣",
          level: "Level 4 — Think Like an Engineer",
          commands: [
            { command: "/analyze", description: "Break any problem into parts" },
            { command: "/compare", description: "Put two options head to head" },
            { command: "/evaluate", description: "Assess ideas against criteria" },
            { command: "/brainstorm", description: "Generate ideas fast, no filter" },
            { command: "/workflow", description: "Design a repeatable process" },
            { command: "/pros-cons", description: "List trade-offs clearly" },
            { command: "/recommend", description: "Get a structured recommendation" },
            { command: "/challenge", description: "Push back on your own assumptions" },
          ],
        },
        {
          id: "organise",
          label: "Organise & Structure",
          emoji: "📋",
          commands: [
            { command: "/outline", description: "Build a skeleton before you write" },
            { command: "/structure", description: "Organise existing content" },
            { command: "/bullet", description: "Turn walls of text into scannable points" },
            { command: "/table", description: "Organise comparisons visually" },
            { command: "/mindmap", description: "Map out connected ideas" },
            { command: "/flowchart", description: "Create a process flow diagram" },
            { command: "/key-points", description: "Extract the most important points" },
          ],
        },
        {
          id: "data-analysis",
          label: "Data & Analysis",
          emoji: "📊",
          commands: [
            { command: "/analyze-data", description: "Find patterns in raw data" },
            { command: "/visualize", description: "Turn numbers into charts" },
            { command: "/insights", description: "Pull the 'so what' from data" },
            { command: "/forecast", description: "Make data-grounded predictions" },
            { command: "/report", description: "Generate a structured report" },
            { command: "/stats", description: "Calculate key statistics" },
            { command: "/clean", description: "Clean and normalise messy data" },
          ],
        },
        {
          id: "automate",
          label: "Automate & Integrate",
          emoji: "⚙️",
          commands: [
            { command: "/automate", description: "Remove manual steps from a workflow" },
            { command: "/api", description: "Connect Claude to other tools" },
            { command: "/integrate", description: "Design system integrations" },
            { command: "/schedule", description: "Plan scheduled tasks" },
            { command: "/trigger", description: "Set conditions for automated actions" },
            { command: "/tasklist", description: "Create an actionable task list" },
            { command: "/checklist", description: "Create a step-by-step checklist" },
          ],
        },
        {
          id: "personalise",
          label: "Personalise & Control",
          emoji: "🎛️",
          commands: [
            { command: "/tone", description: "Set formal, casual, or bold delivery" },
            { command: "/style", description: "Match a writing voice or persona" },
            { command: "/length", description: "Control response length explicitly" },
            { command: "/format", description: "Change output format" },
            { command: "/memory", description: "Tell Claude what to always remember" },
            { command: "/reset", description: "Reset conversation context" },
            { command: "/assumptions", description: "List and confirm assumptions first" },
            { command: "/constraints", description: "Set hard limits on scope or content" },
          ],
        },
        {
          id: "research",
          label: "Research & Learn",
          emoji: "🔬",
          commands: [
            { command: "/search", description: "Pull current information from the web" },
            { command: "/research", description: "Go deep on any topic" },
            { command: "/learn", description: "Explain a concept from first principles" },
            { command: "/tldr", description: "Get the key points fast" },
            { command: "/sources", description: "Find and list sources" },
            { command: "/fact-check", description: "Verify a claim before you trust it" },
            { command: "/explore", description: "Surface related topics and angles" },
          ],
        },
        {
          id: "collaborate",
          label: "Collaborate & Share",
          emoji: "🤝",
          commands: [
            { command: "/share", description: "Share the conversation" },
            { command: "/export", description: "Save output in your preferred format" },
            { command: "/copy", description: "Copy content to clipboard" },
            { command: "/email", description: "Draft and prepare to send" },
            { command: "/feedback", description: "Send feedback on a response" },
          ],
        },
        {
          id: "power-shortcuts",
          label: "Power Shortcuts",
          emoji: "⚡",
          commands: [
            { command: "/ + command", description: "Quick access to any command" },
            { command: "Combine commands", description: "Chain /analyze then /table for better results" },
            { command: "Add context early", description: "Give background before the task, not after" },
            { command: "Be specific", description: "Name the output type, audience, and length upfront" },
            { command: "Iterate and refine", description: "Treat first output as a draft, not a final answer" },
            { command: "Save and reuse", description: "Copy prompts that work into project instructions" },
          ],
        },
      ],
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
    {
      id: "urban-planning",
      label: "🏙️ Urban Planning",
      summary:
        "Prompts for spatial frameworks, GIS-based land-use analysis, public infrastructure design, and city data analytics.",
      prompts: [
        {
          id: "master-plan-extract",
          title: "Master plan provision extraction",
          audience: "Spatial Planning and Zoning Team",
          scenario:
            "Extracting land-use rules or zoning provisions from a state master plan before a government meeting.",
          tags: ["Spatial", "Zoning", "Land-use"],
          review:
            "Planner verifies every provision against the official gazette notification before use in submissions.",
          prompt: `# Role
You are a spatial planning analyst at Janaagraha working on GIS-based land-use frameworks.

# Guardrail
Use only the uploaded master plan document. If a provision is not present, write "Not found in source."

# Task
Extract all land-use zoning rules and special provisions from the document for [Zone / Area].

# Format
Table: Zone type | Permitted use | Floor Area Ratio | Height limit | Special conditions | Source page.`,
        },
        {
          id: "street-design-brief",
          title: "Street design standards brief",
          audience: "Urban Design and Public Infrastructure Team",
          scenario:
            "Preparing a brief on street design standards from a government circular or IRC guideline document.",
          tags: ["Street design", "Infrastructure", "Standards"],
          review:
            "Urban designer cross-checks each standard against the referenced IRC or URDPFI guideline before circulation.",
          prompt: `# Role
You are an urban designer at Janaagraha developing street design templates for Indian cities.

# Guardrail
Use only the uploaded circular or guideline. Do not blend standards from other documents.

# Task
Extract all standards and specifications related to [footpath / carriageway / cycle track / street furniture] from the document.

# Format
Standard | Specification | Applicable road class | Source section.`,
        },
        {
          id: "cdap-data-summary",
          title: "City data analytics summary",
          audience: "City Data and Analytics Platform (CDAP) Team",
          scenario:
            "Summarising spatial data findings from a CDAP output or NITI Aayog analytics report for a state partner.",
          tags: ["CDAP", "Data", "Spatial analytics"],
          review:
            "Data analyst validates all figures against the original dataset before sharing with state departments.",
          prompt: `# Role
You are a city data analyst at Janaagraha working on the City Data and Analytics Platform.

# Guardrail
Use only the pasted data or uploaded CDAP report. Do not interpolate or estimate missing values.

# Task
Summarise the key spatial findings for [City / District] from the data below.

# Format
1. Three headline findings (one sentence each)
2. Table: Indicator | Value | Benchmark | Gap | Data source
3. Recommended next steps for state planning department

[Paste data or report extract here]`,
        },
      ],
    },
    {
      id: "civic-participation",
      label: "🏘️ Civic Participation",
      summary:
        "Prompts for ward committee facilitation, IChangeMyCity product work, councillor capacity-building, and Bala Janaagraha civic education.",
      prompts: [
        {
          id: "ward-committee-brief",
          title: "Ward committee meeting brief",
          audience: "Civic Participation / Community Organizing Team",
          scenario:
            "Preparing a plain-language brief on ward committee rights and procedures for community facilitators before an Area Sabha.",
          tags: ["Ward committee", "Area Sabha", "Civic participation"],
          review:
            "Field facilitator confirms all procedural details against the applicable state municipal act before sharing with residents.",
          prompt: `# Role
You are a civic participation facilitator at Janaagraha supporting ward committees and Area Sabhas.

# Guardrail
Use only the uploaded municipal act or guidelines. Do not use generic descriptions of ward committees.

# Task
Summarise the legal rights, quorum requirements, and meeting procedures for ward committees in [State].

# Format
1. Rights of ward committee members (bullets, plain language)
2. Quorum and meeting frequency rules (table)
3. What residents can raise at an Area Sabha (bullets)
4. Source reference for each point.`,
        },
        {
          id: "councillor-training-module",
          title: "Councillor capacity-building module outline",
          audience: "Councillor Leadership Development Program (CLDP) Team",
          scenario:
            "Drafting a training session outline on a specific municipal administration topic for newly elected ward councillors.",
          tags: ["CLDP", "Councillor", "Training"],
          review:
            "Programme lead reviews the module against the CLDP curriculum framework before finalising.",
          prompt: `# Role
You are a municipal governance trainer at Janaagraha designing capacity-building sessions for elected ward councillors.

# Task
Create a structured outline for a 90-minute training session on [Topic].

# Context
Audience: newly elected ward councillors, mixed literacy levels, local language delivery.
Tone: practical, jargon-free, action-oriented.

# Guardrail
Base all procedural steps on the uploaded state act or guidelines. Mark any point that needs local facilitator verification.

# Format
Session objective → Agenda (timed) → Key concepts (plain language) → Exercises → Takeaway checklist.`,
        },
        {
          id: "bala-janaagraha-lesson",
          title: "Civic education lesson plan",
          audience: "Bala Janaagraha (Civic Learning) Program Team",
          scenario:
            "Drafting a structured lesson plan for a school session on city governance or civic responsibility.",
          tags: ["Bala Janaagraha", "Schools", "Civic education"],
          review:
            "Bala Janaagraha programme coordinator reviews against curriculum standards before teacher distribution.",
          prompt: `# Role
You are a civic education curriculum designer at Janaagraha working on the Bala Janaagraha school programme.

# Task
Draft a 45-minute lesson plan on [Topic] for Grade [X] students.

# Context
Audience: school students aged [X–Y], urban Indian context. Tone: interactive, age-appropriate, activity-based.

# Guardrail
Do not use jargon. Every concept must be explained in terms a student can act on.

# Format
Learning objective → Materials needed → Activity sequence (timed) → Discussion questions → Assessment.`,
        },
      ],
    },
    {
      id: "state-programs",
      label: "🗺️ State Programs",
      summary:
        "Prompts for embedded state teams in Odisha, Uttar Pradesh, Karnataka, Maharashtra, and pan-India advisory deployments.",
      prompts: [
        {
          id: "state-programme-update",
          title: "State programme status update",
          audience: "Regional State Program Units",
          scenario: "Drafting a concise internal update on programme progress for a state unit.",
          tags: ["State", "Programme", "Reporting"],
          review:
            "State programme lead verifies all milestone dates and figures against the official programme log before submission.",
          prompt: `# Role
You are a programme manager at Janaagraha's [State] state unit.

# Task
Draft a structured programme status update for the internal reporting cycle.

# Context
Period: [Month/Quarter]. Audience: Janaagraha leadership and state government partner. Tone: factual, concise, evidence-based.

# Guardrail
Use only the pasted programme data and milestone log. Do not estimate or project figures.

# Format
1. Summary (3 sentences)
2. Milestones: Planned | Achieved | Variance | Reason
3. Key risks (bullets)
4. Support needed from HQ (bullets)

[Paste milestone log or programme data here]`,
        },
        {
          id: "jaga-mission-analysis",
          title: "Odisha Jaga Mission land titling brief",
          audience: "Odisha State Program Unit",
          scenario:
            "Preparing a briefing note on slum land titling progress or ANKUR portal data for the Odisha housing department.",
          tags: ["Odisha", "Jaga Mission", "Land titling"],
          review:
            "Odisha unit lead verifies all titling figures against official Jaga Mission dashboard data before presenting to the department.",
          prompt: `# Role
You are a governance analyst at Janaagraha embedded in the Odisha state housing department.

# Guardrail
Use only the uploaded Jaga Mission data or official ANKUR portal reports. Do not use media or secondary sources.

# Task
Prepare a briefing note on land titling progress in [District / City] for the state housing department.

# Format
Progress summary → Pending cases table (Category | Count | Reason | Action needed) → Recommendations → Source references.`,
        },
        {
          id: "aspirational-cities-kpi",
          title: "Aspirational Cities KPI review",
          audience: "Uttar Pradesh State Program Unit",
          scenario:
            "Reviewing performance indicators for UP's Aspirational Cities Programme and drafting a summary for state administration.",
          tags: ["UP", "Aspirational Cities", "KPIs"],
          review:
            "UP state unit confirms each indicator value against the official programme dashboard before sharing with administration.",
          prompt: `# Role
You are a governance support analyst at Janaagraha working with the UP state administration on the Aspirational Cities Programme.

# Guardrail
Use only the pasted indicator data or uploaded dashboard report. Write "Not found" for any missing indicator.

# Task
Review performance against targets for [City] for [Quarter/Period] and identify gaps.

# Format
Indicator | Target | Actual | Gap | RAG status | Recommended action.

[Paste indicator data here]`,
        },
      ],
    },
    {
      id: "research-mel",
      label: "📊 Research & MEL",
      summary:
        "Prompts for monitoring, evaluation and learning, urban data analysis, climate governance research, and urban health frameworks.",
      prompts: [
        {
          id: "mel-framework-draft",
          title: "MEL framework section draft",
          audience: "Research and MEL Team",
          scenario:
            "Drafting or reviewing an M&E framework section for a programme, including outcome indicators and data collection methods.",
          tags: ["MEL", "Indicators", "Framework"],
          review: "MEL team lead checks all indicators against the programme theory of change before finalising.",
          prompt: `# Role
You are a monitoring, evaluation and learning specialist at Janaagraha.

# Task
Draft the [outcome / output / process] section of an MEL framework for the [Programme Name] programme.

# Context
Donor: [Name]. Reporting cycle: [Quarterly / Annual]. Data sources available: [List known sources].

# Guardrail
Use only the pasted theory of change and programme document. Do not invent indicators not grounded in the programme logic.

# Format
Level | Indicator | Baseline | Target | Data source | Collection method | Responsible team.

[Paste theory of change or programme document here]`,
        },
        {
          id: "climate-risk-brief",
          title: "Climate risk governance brief",
          audience: "Climate and Environment Governance Team",
          scenario:
            "Summarising climate risk assessments or resilience framework provisions for integration into a city-system plan.",
          tags: ["Climate", "Resilience", "Municipal"],
          review:
            "Climate team lead verifies all risk classifications against the source assessment before presenting to state partners.",
          prompt: `# Role
You are a climate governance researcher at Janaagraha integrating environmental risk into city-system planning.

# Guardrail
Use only the uploaded climate risk assessment or resilience framework. Do not extrapolate beyond the source data.

# Task
Summarise the key climate risks and resilience recommendations for [City] from the uploaded report, relevant to municipal infrastructure planning.

# Format
Risk category | Likelihood | Severity | Infrastructure impact | Municipal action required | Source section.`,
        },
        {
          id: "urban-health-analysis",
          title: "Urban health service delivery analysis",
          audience: "Urban Health Governance Team",
          scenario: "Analysing a ULB's capacity to deliver primary health services from a government report or field data.",
          tags: ["Urban health", "ULB", "Primary care"],
          review:
            "Urban health team lead validates all service delivery figures against official health department data before use.",
          prompt: `# Role
You are an urban health governance researcher at Janaagraha analysing ULB primary health service delivery.

# Guardrail
Use only the uploaded government health report or pasted field data. Do not use national averages as proxies for city-level gaps.

# Task
Assess the health service delivery capacity of [City/ULB] based on the uploaded data.

# Format
1. Headline gaps (3 bullets)
2. Table: Service type | Current capacity | Required standard | Gap | Recommended ULB action
3. Policy levers available to the ULB
4. Needs verification list.`,
        },
      ],
    },
    {
      id: "comms-partnerships",
      label: "📣 Comms & Partnerships",
      summary:
        "Prompts for public engagement, donor communications, CSR partnership pitches, and the Women in Public Finance fellowship.",
      prompts: [
        {
          id: "donor-note-draft",
          title: "Donor impact note",
          audience: "Strategy and Institutional Partnerships Team",
          scenario: "Drafting a concise evidence-based impact note for an existing or prospective donor.",
          tags: ["Donor", "Impact", "Evidence"],
          review: "S&P team lead and comms reviewer verify all impact figures and attributions before sending.",
          prompt: `# Role
You are an institutional partnerships manager at Janaagraha drafting a donor impact note.

# Task
Write a concise impact note for [Donor Name] covering [Programme Name] for [Period].

# Context
Audience: programme officer at a foundation — evidence-focused, strategic. Tone: professional, factual, outcome-oriented. Length: under 400 words.

# Guardrail
Use only the pasted programme data and approved MEL figures. Do not use unverified claims or projections.

# Format
Opening (1 sentence: what changed) → Context (2 sentences) → Evidence table (Indicator | Result | Source) → Outlook (2 sentences) → Call to action.

[Paste approved programme data here]`,
        },
        {
          id: "linkedin-post-draft",
          title: "LinkedIn post from policy finding",
          audience: "Public Engagement and Communications Team",
          scenario: "Turning a policy finding or programme milestone into a LinkedIn post for Janaagraha's public audience.",
          tags: ["LinkedIn", "Comms", "Social"],
          review: "Communications team reviews for accuracy, tone, and any claims requiring sign-off before publishing.",
          prompt: `# Role
You are a communications specialist at Janaagraha writing for the organisation's LinkedIn audience.

# Task
Write a LinkedIn post based on the finding or milestone pasted below.

# Context
Audience: urban governance professionals, policymakers, civil society, donors. Tone: evidence-led, accessible, not promotional. Length: 150–200 words, 3 relevant hashtags.

# Guardrail
Do not introduce statistics not in the pasted source. Do not use the word "stakeholders."

[Paste finding or milestone here]`,
        },
        {
          id: "wpf-fellowship-comms",
          title: "WPF fellowship outreach message",
          audience: "Women in Public Finance Fellowship Secretariat",
          scenario:
            "Drafting outreach to recruit or communicate with fellows, partners, or state finance department hosts for the WPF programme.",
          tags: ["WPF", "Fellowship", "Outreach"],
          review:
            "Fellowship secretariat confirms programme details (dates, stipends, eligibility) against the current cohort brief before sending.",
          prompt: `# Role
You are the programme coordinator for Janaagraha's Women in Public Finance fellowship.

# Task
Draft [an outreach email / a welcome message / a host-organisation brief] for the [Cohort Year] cohort.

# Context
Audience: [prospective fellows / state finance officials / CSR partners]. Tone: inspiring but professional; plain language.

# Guardrail
Use only the pasted fellowship brief for all programme details. Do not state eligibility, stipend, or dates from memory.

# Format
[Email: subject + 3 paragraphs + sign-off] / [Brief: 1-page structure with objectives, timeline, expectations]

[Paste fellowship brief here]`,
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
