import type { PlaybookContent } from "./types";

export const toolkitContent: PlaybookContent = {
  title: "Janaagraha AI Startup Toolkit",
  subtitle:
    "Your starter kit for the AI Pilot — prompting basics, data safety rules, tool guides, and copy-ready templates for every team.",
  updated: "June 2026",
  nav: [
    { id: "essentials", label: "Essentials" },
    { id: "setup", label: "Setup" },
    { id: "safety", label: "Safety" },
    { id: "dosdonts", label: "Dos & Don'ts" },
    { id: "tools", label: "Tools Guide" },
    { id: "prompting", label: "Prompting" },
    { id: "team-prompts", label: "Team Prompts" },
  ],
  hero: {
    badge: "Janaagraha AI Pilot 2026",
    title: "Use AI like a careful colleague, not a magic answer machine.",
    summary:
      "This app turns the AI Pilot workshops into a searchable, copy-ready workspace for better prompts, safer data handling, and clearer team habits across every tool in the pilot.",
    metrics: [
      {
        label: "The one rule",
        value: "First Draft",
        detail:
          "AI output is a FIRST DRAFT — never a final deliverable. Every use case needs a human review step before anything is shared or acted on.",
      },
      {
        label: "Tools in pilot",
        value: "5+",
        detail: "Claude Pro · Gemini Advanced · NotebookLM · Perplexity Pro · ChatGPT Plus · Canva Pro",
      },
    ],
  },
  sections: [
    {
      id: "essentials",
      eyebrow: "Start here",
      title: "What AI tools are good for, and where they need guardrails",
      summary:
        "AI can accelerate thinking and drafting, but it does not remove source checking, professional judgement, or data responsibility. AI output is a FIRST DRAFT — never a final deliverable.",
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
            "Tell your AI tool which uploaded document, official site, or pasted evidence it may use. Ask it to say when something is not found.",
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
      title: "Set up your AI tools for repeatable team work",
      summary:
        "A good setup is not just login access. It includes a useful profile, clear project instructions, and predictable source habits — for whichever pilot tool you're using.",
      kind: "principles",
      items: [
        {
          title: "Use the team account identity",
          detail:
            "Sign in with the Janaagraha email account assigned to your AI tool's workspace. Keep personal and organisation work separate.",
        },
        {
          title: "Create projects for ongoing work",
          detail:
            "Use projects, notebooks, or Gems for recurring streams such as ASICS research, PFM reports, donor communications, or city-specific policy notes.",
        },
        {
          title: "Add project instructions",
          detail:
            "Include source rules, tone, audience, preferred output formats, and escalation points so every chat starts with the same baseline.",
        },
        {
          title: "Build a shared team prompt library",
          detail:
            "Save prompts that work into a shared library so an intern and a senior manager using the same template get the same output quality.",
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
      id: "dosdonts",
      eyebrow: "Quick rules",
      title: "What to do, what not to do, and what to watch for",
      summary:
        "Drawn from the PFM workshop and ASICS AI workshop. These apply regardless of which tool you are using.",
      kind: "dosdonts",
      groups: [
        {
          id: "prompting",
          label: "📝 Prompting",
          items: [
            {
              type: "do",
              text: "Use the 6-part formula",
              detail:
                "Role → Task → Context → Fallback → Guardrail → Format. Every prompt in the workshops uses this structure. Plain English works but Markdown (#, ##, **) is more reliable.",
            },
            {
              type: "do",
              text: "Start narrow, not broad",
              detail:
                "A precise first request gives better output and avoids long corrections. Extract one section before summarising a whole report.",
            },
            {
              type: "do",
              text: "Tell the AI who it is",
              detail:
                "Open with a Role: 'You are a PFM analyst at Janaagraha...' This sets the register for the whole response.",
            },
            {
              type: "do",
              text: "Specify your source rule",
              detail:
                "Tell the AI which document, official site, or pasted text it may use. Ask it to say 'Not found in source' instead of guessing.",
            },
            {
              type: "dont",
              text: "Don't ask one giant question",
              detail:
                "Split multi-part tasks across separate prompts or chats. Unrelated context accumulates and degrades output quality.",
            },
            {
              type: "dont",
              text: "Don't treat confidence as proof",
              detail:
                "A fluent, well-structured answer can still be outdated or wrong. A confident tone is not evidence.",
            },
            {
              type: "dont",
              text: "Don't accept vague output",
              detail:
                "If the answer is generic, your prompt was probably generic. Add more Role, Context, or Guardrail.",
            },
            {
              type: "tip",
              text: "Use Markdown headers as priority signals",
              detail:
                "# is a headline — the AI pays more attention to it. Think of # as bold + priority in one. Plain English works but Markdown is more consistent.",
            },
            {
              type: "tip",
              text: "Ask for a table with a 'Needs human check' column",
              detail:
                "Tables make gaps visible and force the AI to flag uncertainty explicitly rather than hiding it in fluent prose.",
            },
          ],
        },
        {
          id: "safety",
          label: "🔒 Data Safety",
          items: [
            {
              type: "do",
              text: "Apply the traffic-light rule before pasting anything",
              detail:
                "Green = public reports, government docs. Amber = internal notes (clean before pasting: remove names, IDs, confidential figures). Red = PII, HR data, donor financials, unpublished legal advice — never paste.",
            },
            {
              type: "do",
              text: "Share only the minimum necessary context",
              detail:
                "The safest prompt is one that gives just enough for the task. A specific excerpt is better than an entire file.",
            },
            {
              type: "dont",
              text: "Don't paste PII, beneficiary records, or HR data",
              detail:
                "These are Red-level data. Use internal approved systems or ask the workspace admin.",
            },
            {
              type: "dont",
              text: "Don't paste unpublished donor financials or privileged legal advice",
              detail:
                "Even anonymised summaries of these can be sensitive. When in doubt, ask internally first.",
            },
            {
              type: "tip",
              text: "When in doubt, anonymise, aggregate, or ask internally first",
              detail: "You can describe a pattern without pasting the raw data that shows it.",
            },
          ],
        },
        {
          id: "verification",
          label: "✅ Verification",
          items: [
            {
              type: "do",
              text: "Human review before anything goes external",
              detail:
                "AI output is a FIRST DRAFT — never a final deliverable. Every use case needs a named human to check before the output is shared, published, or acted on.",
            },
            {
              type: "do",
              text: "Check legal provisions, statistics, dates, and named attributions",
              detail:
                "These are the four categories most likely to be wrong. Verify each one against the primary source.",
            },
            {
              type: "do",
              text: "Cite source and page for every factual claim",
              detail:
                "Ask the AI to give document name + section + page for every claim. If it cannot, the claim needs verification.",
            },
            {
              type: "dont",
              text: "Don't publish statistics the AI generated without a source",
              detail:
                "AI can invent plausible-sounding numbers. Every statistic that goes external needs a primary source citation.",
            },
            {
              type: "dont",
              text: "Don't assume amendments are captured",
              detail:
                "AI defaults to the original text of a law. Always test with a known amendment before trusting any legal provision.",
            },
            {
              type: "tip",
              text: "Use the 3-tier source rule for research",
              detail:
                "Tier 1: uploaded verified documents (always cite). Tier 2: official .gov.in portals only if Tier 1 has no answer (cite URL + date). Tier 3: if absent from both, say so — never guess.",
            },
          ],
        },
        {
          id: "team-habits",
          label: "🤝 Team Habits",
          items: [
            {
              type: "do",
              text: "Build a shared prompt library",
              detail:
                "When a prompt works well, save it to the team library. An intern and a senior manager using the same template get the same output quality.",
            },
            {
              type: "do",
              text: "Encode the Janaagraha voice in a system prompt",
              detail:
                "One shared system prompt across the team keeps tone, terminology (ULB not 'municipality', OSR not 'self-generated revenue'), and citation rules consistent.",
            },
            {
              type: "dont",
              text: "Don't let everyone prompt differently",
              detail:
                "Inconsistent prompting produces inconsistent output and duplicated effort across the team.",
            },
            {
              type: "dont",
              text: "Don't auto-add to the shared library",
              detail:
                "All new templates require senior review before entering the shared library. The team's voice prompt is reviewed quarterly.",
            },
            {
              type: "tip",
              text: "Start a new chat for unrelated tasks",
              detail:
                "Old conversation context keeps consuming attention and can confuse the answer. Split by topic, not convenience.",
            },
          ],
        },
        {
          id: "source-quality",
          label: "📚 Source Quality",
          items: [
            {
              type: "do",
              text: "Use official .gov.in and .nic.in portals as internet fallback",
              detail:
                "India Code (indiacode.nic.in), state legislature portals, MoHUA, official ULB websites, Rajya/Lok Sabha bills.",
            },
            {
              type: "dont",
              text: "Don't accept Wikipedia, legal blogs, or news articles as sources for legal or policy claims",
              detail:
                "Any site without a .gov.in or official institutional domain is not acceptable for legal/policy facts.",
            },
            {
              type: "dont",
              text: "Don't accept AI's own general knowledge as a source",
              detail:
                "If the AI cannot cite a document + page or a .gov.in URL, it is generating from training data — not from a verifiable source.",
            },
            {
              type: "tip",
              text: "Test for amendment comprehensiveness before trusting output",
              detail:
                "Run a known amended act through the tool and check if the amendment surfaces. If it defaults to the original, flag it.",
            },
          ],
        },
      ],
    },
    {
      id: "tools",
      eyebrow: "What to use when",
      title: "Your AI Pilot toolkit — 5 tools, different jobs",
      summary:
        "No single tool is best for every task. Match the tool to the work. When in doubt, start with what you have access to and document what you learn.",
      kind: "tools",
      tools: [
        {
          id: "claude",
          name: "Claude Pro",
          emoji: "🤖",
          tier: "Pro",
          tagline: "Long documents, careful reasoning, policy drafting",
          bestFor: [
            "Uploading 150–200 page reports and querying specific provisions with page citations",
            "Drafting policy briefs, donor reports, and internal notes with a structured prompt",
            "Rewriting one verified document for 3 different audiences (councillors, policymakers, donors)",
            "Building a shared prompt library with consistent output structure across the team",
          ],
          notFor: [
            "Real-time web search or current news — it has a knowledge cutoff",
            "Heavy visual design or infographic creation",
          ],
          setupTip:
            "Use Projects for ongoing work streams (e.g. ASICS research, PFM). Add Project Instructions with source rules, tone, and output format so every chat starts from the same baseline.",
          pilotAccess: true,
        },
        {
          id: "notebooklm",
          name: "Google NotebookLM",
          emoji: "📓",
          tier: "Free",
          tagline: "Closed document retrieval — your uploaded docs only, no hallucination",
          bestFor: [
            "Creating a verified, closed knowledge base from SFC reports, municipal acts, NMAM guidelines",
            "Querying across multiple uploaded documents with verbatim citations (document + page)",
            "Building the Tier 1 source layer before using Gemini or Claude as a reasoning layer",
            "Research where hallucination is unacceptable — answers come only from what you uploaded",
          ],
          notFor: [
            "Tasks that need general reasoning, drafting, or rewriting — it is a retrieval tool, not a generalist",
            "Quick conversational queries — set up the notebook first, then query",
          ],
          setupTip:
            "Name files with a strict convention: [State]_[ActOrReport]_[Year].pdf (e.g. Karnataka_Municipal_Act_2001.pdf). This makes citations clean and unambiguous.",
          pilotAccess: true,
        },
        {
          id: "gemini",
          name: "Gemini Advanced",
          emoji: "✨",
          tier: "Advanced",
          tagline: "Configured AI agent — pre-set with your context, guardrails, and fallback instructions",
          bestFor: [
            "Setting up a Gemini Gem with a system prompt baked in: role, guardrails, fallback, and team context pre-configured for every session",
            "Pairing with NotebookLM: Gemini searches NotebookLM first, then falls back to official .gov.in portals",
            "Multi-language document work — Hindi, regional scripts, non-English government portals with auto-translation",
            "Codifying the Janaagraha analytical voice as a system prompt shared across the team",
          ],
          notFor: [
            "Ad-hoc queries without a configured Gem — configure the Gem first for consistent output",
            "Tasks requiring strict version control of prompts — manage this outside the tool",
          ],
          setupTip:
            "A Gemini Gem has a system prompt baked in. Configure once: paste your Role + Guardrail + Fallback + team context. Every team member then uses the identical starting state — an intern and a manager get the same quality output.",
          pilotAccess: true,
        },
        {
          id: "perplexity",
          name: "Perplexity Pro",
          emoji: "🔍",
          tier: "Pro",
          tagline: "Real-time web search with citations — for current information only",
          bestFor: [
            "Finding recent amendments, notifications, and circulars that postdate your uploaded documents",
            "Verifying whether a government scheme or policy is still active with a current .gov.in source",
            "Quick comparative research across multiple government portals when documents are not available to upload",
            "Checking facts before including them in a document — it cites sources directly",
          ],
          notFor: [
            "Closed-document retrieval from your own files — use NotebookLM for that",
            "Long-form drafting or audience adaptation — use Claude or Gemini for that",
          ],
          setupTip:
            "Always check the cited URL before using a Perplexity result. Prefer results from .gov.in, .nic.in, or official institutional domains. Treat results from news sites or blogs as leads to verify, not as sources.",
          pilotAccess: true,
        },
        {
          id: "chatgpt",
          name: "ChatGPT Plus",
          emoji: "💬",
          tier: "Plus",
          tagline: "General-purpose assistant — strong on structured output and coding",
          bestFor: [
            "Structured data extraction and table generation from pasted text",
            "Writing and reformatting tasks where output format matters (tables, lists, structured notes)",
            "Coding and formula tasks — data cleaning, Excel/Sheets formulas, simple scripts",
            "Quick document summaries and meeting notes",
          ],
          notFor: [
            "Legal or policy research requiring verified source citations — hallucination risk is higher without a document upload",
            "Tasks that need strict source grounding — always add a source rule to your prompt",
          ],
          setupTip:
            "Add a guardrail to every research prompt: 'If a claim does not appear in the pasted text, write Not found in source — do not invent.' This is the single biggest reducer of hallucinated output.",
          pilotAccess: true,
        },
        {
          id: "canva",
          name: "Canva Pro",
          emoji: "🎨",
          tier: "Pro",
          tagline: "Visual communication — turn verified text into shareable visuals",
          bestFor: [
            "Turning a verified policy brief or data table into a shareable infographic or social post",
            "Creating ward-level or city-level communication materials without a design team",
            "Producing donor-facing or public-facing one-pagers from drafted content",
            "Generating presentation decks from structured notes",
          ],
          notFor: [
            "Research, analysis, or drafting — do those in Claude Pro, Gemini Advanced, or ChatGPT Plus first, then bring verified content here",
            "Any visual that needs a precise source citation — Canva AI generates images and text; always verify before publishing",
          ],
          setupTip:
            "Always draft and verify the text content in another tool first. Canva is the final step — a design layer over already-verified content, not a research tool.",
          pilotAccess: true,
        },
      ],
    },
    {
      id: "prompting",
      eyebrow: "Prompt formula",
      title: "The 6-part formula used in every Janaagraha workshop prompt",
      summary:
        "This structure works across all AI tools in the pilot — Claude Pro, Gemini Advanced, ChatGPT Plus, and Perplexity Pro.",
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
      id: "spatial-planning-zoning",
      label: "🗺️ Spatial Planning and Zoning",
      summary:
        "Prompts for master plan and zoning extraction, GIS digitization briefs, layout approvals, and development plan policy notes.",
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
          id: "gis-landuse-digitization-brief",
          title: "GIS land-use digitization brief",
          audience: "Spatial Planning and Zoning Team",
          scenario:
            "Converting a scanned or paper-based land-use map into a structured digital brief before GIS digitization begins.",
          tags: ["GIS", "Land-use", "Digitization"],
          review:
            "GIS analyst cross-checks every parcel classification against the source map legend before digitization starts.",
          prompt: `# Role
You are a spatial planning analyst at Janaagraha preparing source material for GIS digitization.

# Guardrail
Use only the uploaded map legend and notes. Do not infer land-use categories that are not explicitly marked.

# Task
List every land-use category, symbol, and boundary marking shown on the map legend for [Area / Ward], ready for a GIS technician to digitize.

# Format
Table: Symbol/Colour | Land-use category | Boundary type | Notes for digitization | Source page.`,
        },
        {
          id: "master-plan-revision-compare",
          title: "Master plan revision comparison",
          audience: "Spatial Planning and Zoning Team",
          scenario:
            "Comparing a draft master plan revision against the currently notified plan to flag what changed before a public consultation.",
          tags: ["Master plan", "Revision", "Comparison"],
          review:
            "Senior planner verifies every flagged change against both source documents before circulating to the consultation team.",
          prompt: `# Role
You are a spatial planning analyst at Janaagraha comparing master plan revisions.

# Guardrail
Use only the two uploaded documents (current notified plan and draft revision). Do not use outside knowledge of the city.

# Task
Compare [Zone / Area] across both documents and flag every change in permitted use, FAR, or height limit.

# Format
Table: Zone | Current provision | Draft provision | Change type | Likely impact | Source page (both documents).`,
        },
        {
          id: "layout-plan-approval-checklist",
          title: "Layout plan approval checklist",
          audience: "Spatial Planning and Zoning Team",
          scenario:
            "Building a checklist of approval requirements for a layout plan submission, based on the applicable development control regulations.",
          tags: ["Layout plan", "Approval", "DCR"],
          review:
            "Planner confirms each checklist item against the current DCR notification before sharing with the applicant-facing team.",
          prompt: `# Role
You are a spatial planning analyst at Janaagraha reviewing layout plan approval requirements.

# Guardrail
Use only the uploaded Development Control Regulation (DCR) document. Write "Not specified" for any requirement not covered.

# Task
Build an approval checklist for a residential/mixed-use layout plan in [City], covering road width, open space, and amenity reservations.

# Format
Checklist: Requirement | Minimum standard | DCR clause reference | Applies to (plot size range).`,
        },
        {
          id: "development-plan-policy-note",
          title: "Development plan policy note for state department",
          audience: "Spatial Planning and Zoning Team",
          scenario:
            "Drafting a short policy note summarising a proposed development plan amendment for a state urban department meeting.",
          tags: ["Development plan", "Policy note", "State department"],
          review:
            "Spatial planning lead verifies the note against the source amendment draft before it goes to the state department.",
          prompt: `# Role
You are a spatial planning analyst at Janaagraha preparing a policy note for a state urban development department.

# Task
Summarise the proposed amendment to [Development Plan / Master Plan] for [City] in a one-page note for the department's review meeting.

# Context
Audience: state urban development officials. Tone: neutral, evidence-based, non-advocacy.

# Guardrail
Use only the pasted amendment draft and supporting data. Do not state an opinion on whether the amendment should be approved.

# Format
Background (2 sentences) → What changes (bullets) → Anticipated impact (table: Stakeholder | Impact) → Open questions for the department.

[Paste amendment draft here]`,
        },
      ],
    },
    {
      id: "urban-design-infrastructure",
      label: "🚧 Urban Design and Public Infrastructure",
      summary:
        "Prompts for street design standards, public space safety audits, tender specification reviews, and placemaking pilots.",
      prompts: [
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
          id: "public-space-safety-audit",
          title: "Public space safety audit summary",
          audience: "Urban Design and Public Infrastructure Team",
          scenario:
            "Summarising a field safety audit (lighting, visibility, accessibility) of a public space for a redesign proposal.",
          tags: ["Public space", "Safety audit", "Accessibility"],
          review:
            "Urban designer verifies every flagged issue against the field audit photos/notes before including it in the redesign brief.",
          prompt: `# Role
You are an urban designer at Janaagraha reviewing a public space safety audit.

# Guardrail
Use only the pasted field audit notes. Do not assume conditions not recorded in the notes.

# Task
Summarise the safety and accessibility issues found at [Location] and group them by severity.

# Format
1. Critical issues (bullets, with location detail)
2. Moderate issues (bullets)
3. Table: Issue | Category (lighting/visibility/accessibility/other) | Recommended fix
4. Needs further field verification (list)

[Paste field audit notes here]`,
        },
        {
          id: "walkability-design-standards-summary",
          title: "Walkability design standards summary",
          audience: "Urban Design and Public Infrastructure Team",
          scenario:
            "Extracting walkability-related standards (footpath width, crossing distance, shade, ramps) from a URDPFI or state design guideline for a street redesign brief.",
          tags: ["Walkability", "Standards", "URDPFI"],
          review:
            "Urban designer cross-checks each standard against the source guideline section before applying it to a design brief.",
          prompt: `# Role
You are an urban designer at Janaagraha extracting walkability standards for street redesign work.

# Guardrail
Use only the uploaded guideline document. Do not blend in standards from other cities or countries.

# Task
Extract every standard relevant to pedestrian walkability — footpath width, crossing distance, shade cover, ramps — for [Road category].

# Format
Standard | Specification | Applicable context | Source clause.`,
        },
        {
          id: "infrastructure-tender-spec-review",
          title: "Infrastructure tender specification review",
          audience: "Urban Design and Public Infrastructure Team",
          scenario:
            "Reviewing a civil works tender's technical specifications against Janaagraha's recommended design standards before sign-off.",
          tags: ["Tender", "Specification", "Quality review"],
          review:
            "Urban designer flags every deviation for senior review before the tender comments are sent back to the ULB.",
          prompt: `# Role
You are an urban designer at Janaagraha reviewing a civil works tender document.

# Guardrail
Use only the pasted tender specification and the uploaded design standard. Do not infer intent behind any unclear clause — flag it instead.

# Task
Compare the tender's technical specifications for [Element — footpath / cycle track / street furniture] against the design standard and flag deviations.

# Format
Table: Element | Tender specification | Recommended standard | Deviation? | Comment to send to ULB.

[Paste tender specification here]`,
        },
        {
          id: "placemaking-pilot-brief",
          title: "Placemaking pilot project brief",
          audience: "Urban Design and Public Infrastructure Team",
          scenario:
            "Drafting a brief for a tactical urbanism / placemaking pilot (e.g. a parklet or plaza redesign) to share with a ULB partner.",
          tags: ["Placemaking", "Pilot", "Tactical urbanism"],
          review:
            "Urban designer confirms budget, timeline, and materials list against the project plan before sharing externally.",
          prompt: `# Role
You are an urban designer at Janaagraha proposing a placemaking pilot project.

# Task
Draft a one-page brief for a [pilot type — parklet / plaza redesign / pedestrian plaza] pilot at [Location].

# Context
Audience: ULB engineering and planning officials. Tone: practical, low-cost, evidence-led on similar pilots.

# Guardrail
Use only the pasted project plan and budget figures. Do not state cost or timeline estimates not in the source.

# Format
Objective → Site description → Design elements (bullets) → Budget and timeline (table) → Success metrics.

[Paste project plan and budget here]`,
        },
      ],
    },
    {
      id: "cdap",
      label: "📍 City Data and Analytics Platform (CDAP)",
      summary:
        "Prompts for spatial analytics summaries, NITI Aayog collaboration briefs, dashboard documentation, and data quality audits.",
      prompts: [
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
        {
          id: "niti-aayog-layout-planning-brief",
          title: "NITI Aayog layout planning collaboration brief",
          audience: "City Data and Analytics Platform (CDAP) Team",
          scenario:
            "Preparing an internal brief on a NITI Aayog co-developed layout planning tool or methodology before a joint review.",
          tags: ["NITI Aayog", "Layout planning", "Collaboration"],
          review:
            "CDAP lead verifies the methodology summary against the uploaded technical note before the joint review meeting.",
          prompt: `# Role
You are a city data analyst at Janaagraha working with NITI Aayog on layout planning tools.

# Guardrail
Use only the uploaded technical note or methodology document. Do not describe features not mentioned in the source.

# Task
Summarise the methodology and current status of [Tool / Initiative Name] for an internal review ahead of the joint meeting.

# Format
1. Methodology summary (plain language, 3-4 sentences)
2. Current status (bullets: what's built, what's pending)
3. Open questions for NITI Aayog
4. Source references.`,
        },
        {
          id: "spatial-dashboard-indicator-note",
          title: "Spatial dashboard indicator note",
          audience: "City Data and Analytics Platform (CDAP) Team",
          scenario:
            "Writing a short explanatory note for a new indicator being added to a spatial dashboard, for non-technical state partners.",
          tags: ["Dashboard", "Indicator", "Documentation"],
          review:
            "Data analyst verifies the indicator definition and calculation method against the technical spec before publishing the note.",
          prompt: `# Role
You are a city data analyst at Janaagraha documenting a spatial dashboard indicator.

# Guardrail
Use only the pasted technical specification. Do not simplify the definition in a way that changes its meaning.

# Task
Write a plain-language explanation of the [Indicator Name] indicator for state partners who are not GIS specialists.

# Format
What it measures (1 sentence) → How it's calculated (2-3 sentences, no formulas) → Why it matters → Data source and update frequency.

[Paste technical specification here]`,
        },
        {
          id: "data-quality-audit-note",
          title: "Spatial data quality audit note",
          audience: "City Data and Analytics Platform (CDAP) Team",
          scenario:
            "Flagging data quality issues (gaps, inconsistent formats, outdated layers) found while preparing a dataset for analysis.",
          tags: ["Data quality", "Audit", "GIS"],
          review:
            "Data analyst confirms every flagged gap against the raw dataset before sending the audit note to the data provider.",
          prompt: `# Role
You are a city data analyst at Janaagraha auditing a spatial dataset before analysis.

# Guardrail
Use only the pasted data summary or field list. Do not guess at missing metadata.

# Task
Review the dataset for [City / Layer Name] and flag data quality issues — missing fields, inconsistent units, outdated timestamps, projection mismatches.

# Format
Table: Field/Layer | Issue found | Severity (blocker/minor) | Recommended fix | Needs clarification from provider?

[Paste data summary or field list here]`,
        },
        {
          id: "analytics-tool-onboarding-guide",
          title: "Analytics tool onboarding guide",
          audience: "City Data and Analytics Platform (CDAP) Team",
          scenario:
            "Drafting a short onboarding guide for a state planning department team that will start using a CDAP analytics tool.",
          tags: ["Onboarding", "Training", "CDAP"],
          review:
            "CDAP team lead reviews the guide against the actual tool interface before sharing with the state department.",
          prompt: `# Role
You are a city data analyst at Janaagraha onboarding a state department onto a CDAP tool.

# Task
Draft a short onboarding guide for [State Department] to start using [Tool Name].

# Context
Audience: state planning officials with limited GIS software experience. Tone: step-by-step, plain language.

# Guardrail
Use only the pasted tool documentation. Do not describe steps or features not present in the documentation.

# Format
What the tool does (2 sentences) → Getting started (numbered steps) → Common tasks (bullets) → Who to contact for support.

[Paste tool documentation here]`,
        },
      ],
    },
    {
      id: "civic-participation",
      label: "🏘️ Civic Participation / Community Organizing",
      summary:
        "Prompts for ward committee facilitation, Area Sabha toolkits, grievance pattern analysis, and grassroots mobilization briefings.",
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
          id: "area-sabha-facilitation-toolkit",
          title: "Area Sabha facilitation toolkit",
          audience: "Civic Participation / Community Organizing Team",
          scenario:
            "Preparing a facilitation toolkit (agenda, talking points, materials) for community organizers running an upcoming Area Sabha.",
          tags: ["Area Sabha", "Facilitation", "Toolkit"],
          review:
            "Field facilitator reviews the toolkit against the local context and the state's Area Sabha rules before the session.",
          prompt: `# Role
You are a civic participation facilitator at Janaagraha preparing for an Area Sabha.

# Task
Draft a facilitation toolkit for an Area Sabha in [Ward / Locality] on the topic of [Topic].

# Context
Audience: residents with mixed literacy and civic awareness levels. Tone: plain language, participatory.

# Guardrail
Base all procedural references on the uploaded state Area Sabha rules. Do not state quorum or notice requirements from memory.

# Format
Agenda (timed) → Opening talking points (plain language) → Discussion prompts for residents → Materials checklist → Follow-up action log template.`,
        },
        {
          id: "grassroots-grievance-pattern-analysis",
          title: "Grassroots grievance pattern analysis",
          audience: "Civic Participation / Community Organizing Team",
          scenario:
            "Looking for recurring patterns across grievances raised by residents at ward-level meetings, to flag a systemic issue to the ULB.",
          tags: ["Grievance", "Pattern analysis", "Ward"],
          review:
            "Community organizer verifies the pattern against the raw grievance log before flagging it as systemic to the ULB.",
          prompt: `# Role
You are a civic participation analyst at Janaagraha reviewing grassroots grievance data.

# Guardrail
Use only the pasted grievance log. Do not infer causes that are not stated by residents.

# Task
Identify recurring patterns in the grievances logged for [Ward] over [Period] and group them by civic service category.

# Format
Table: Category | Number of grievances | Common description | Wards affected | Recommended escalation.

[Paste grievance log here]`,
        },
        {
          id: "community-organizing-volunteer-brief",
          title: "Community organizing volunteer briefing note",
          audience: "Civic Participation / Community Organizing Team",
          scenario:
            "Preparing a short briefing note for volunteers before a door-to-door civic awareness or mobilization drive.",
          tags: ["Volunteers", "Mobilization", "Briefing"],
          review:
            "Field lead reviews the talking points for accuracy against the campaign's official messaging before volunteer deployment.",
          prompt: `# Role
You are a community organizing coordinator at Janaagraha briefing field volunteers.

# Task
Draft a one-page briefing note for volunteers ahead of a [door-to-door / public meeting] drive on [Topic] in [Locality].

# Context
Audience: volunteers, some new to the issue. Tone: motivating, clear on what to say and what not to promise.

# Guardrail
Use only the pasted campaign messaging document. Volunteers must not make commitments on behalf of Janaagraha or the ULB.

# Format
Purpose (1 sentence) → Key talking points (bullets) → What to avoid saying (bullets) → What to do if a resident asks a question you can't answer.

[Paste campaign messaging document here]`,
        },
        {
          id: "ward-committee-effectiveness-tracker",
          title: "Ward committee effectiveness tracker",
          audience: "Civic Participation / Community Organizing Team",
          scenario:
            "Building a tracker to assess how regularly ward committees are meeting and acting on resident input, from field visit notes.",
          tags: ["Ward committee", "Monitoring", "Effectiveness"],
          review:
            "Programme lead verifies meeting counts and outcomes against field visit notes before sharing the tracker internally.",
          prompt: `# Role
You are a civic participation analyst at Janaagraha tracking ward committee effectiveness.

# Guardrail
Use only the pasted field visit notes. Write "Not recorded" for any ward missing data.

# Task
Build an effectiveness tracker for ward committees in [City] covering meeting frequency, quorum, and resident issues resolved.

# Format
Table: Ward | Meetings held (period) | Quorum met? | Issues raised | Issues resolved | Resolution rate.

[Paste field visit notes here]`,
        },
      ],
    },
    {
      id: "civictech-product-engineering",
      label: "💻 CivicTech Product Engineering",
      summary:
        "Prompts for IChangeMyCity product specs, user feedback analysis, bug triage, release notes, and roadmap updates.",
      prompts: [
        {
          id: "icmc-feature-spec-draft",
          title: "IChangeMyCity feature specification draft",
          audience: "CivicTech Product Engineering Team",
          scenario:
            "Turning a product idea or stakeholder request into a structured feature specification for the IChangeMyCity app.",
          tags: ["IChangeMyCity", "Product spec", "Feature"],
          review:
            "Product manager reviews the spec against actual user needs and technical feasibility with engineering before sign-off.",
          prompt: `# Role
You are a product manager at Janaagraha working on the IChangeMyCity civic accountability app.

# Task
Draft a feature specification for [Feature Idea] based on the pasted stakeholder request.

# Context
Audience: engineering team and design team. Tone: precise, implementation-ready.

# Guardrail
Use only the pasted request and any pasted user research. Do not invent user needs not evidenced in the source.

# Format
Problem statement → User story ("As a [user], I want... so that...") → Acceptance criteria (bullets) → Out of scope (bullets) → Open questions for engineering.

[Paste stakeholder request or user research here]`,
        },
        {
          id: "user-feedback-theme-analysis",
          title: "App user feedback theme analysis",
          audience: "CivicTech Product Engineering Team",
          scenario:
            "Analysing a batch of app store reviews or in-app feedback to identify recurring themes before a sprint planning session.",
          tags: ["User feedback", "Theme analysis", "App store"],
          review:
            "Product manager validates themes against the raw feedback before prioritising them in sprint planning.",
          prompt: `# Role
You are a product analyst at Janaagraha reviewing user feedback for the IChangeMyCity app.

# Guardrail
Use only the pasted feedback. Do not infer sentiment beyond what is written.

# Task
Identify recurring themes in the pasted user feedback from [Period] and rank them by frequency.

# Format
Table: Theme | Frequency | Example quote | Sentiment | Suggested priority for sprint planning.

[Paste user feedback here]`,
        },
        {
          id: "bug-report-triage-summary",
          title: "Bug report triage summary",
          audience: "CivicTech Product Engineering Team",
          scenario:
            "Summarising a batch of incoming bug reports for the engineering stand-up, grouped by severity.",
          tags: ["Bug triage", "Engineering", "QA"],
          review:
            "Engineering lead confirms severity classification before the stand-up, especially for anything marked critical.",
          prompt: `# Role
You are a QA/product analyst at Janaagraha triaging bug reports for the IChangeMyCity app.

# Guardrail
Use only the pasted bug reports. Do not assume a root cause that is not stated.

# Task
Triage the pasted bug reports by severity and group duplicates.

# Format
Table: Bug ID | Description | Severity (critical/high/medium/low) | Likely duplicate of | Suggested owner.

[Paste bug reports here]`,
        },
        {
          id: "release-notes-draft",
          title: "App release notes draft",
          audience: "CivicTech Product Engineering Team",
          scenario:
            "Writing user-facing release notes for an app update, based on the engineering changelog.",
          tags: ["Release notes", "Changelog", "User-facing"],
          review:
            "Product manager checks every claim against the engineering changelog before publishing to app store listings.",
          prompt: `# Role
You are a product manager at Janaagraha writing release notes for an IChangeMyCity app update.

# Task
Turn the pasted engineering changelog into user-facing release notes for version [X.X].

# Context
Audience: citizen users of the app, non-technical. Tone: friendly, concise.

# Guardrail
Use only the pasted changelog. Do not describe a fix or feature not listed in it.

# Format
What's new (bullets, plain language) → Fixes (bullets) → Known issues (if any).

[Paste engineering changelog here]`,
        },
        {
          id: "product-roadmap-update-note",
          title: "Product roadmap update note",
          audience: "CivicTech Product Engineering Team",
          scenario:
            "Drafting an internal note summarising roadmap progress and changes for leadership review.",
          tags: ["Roadmap", "Product", "Internal update"],
          review:
            "Product lead verifies all delivery dates against the engineering sprint board before sending to leadership.",
          prompt: `# Role
You are a product manager at Janaagraha reporting on the IChangeMyCity product roadmap.

# Task
Draft a roadmap update note for [Quarter] covering progress against plan.

# Context
Audience: Janaagraha leadership. Tone: factual, concise.

# Guardrail
Use only the pasted sprint board data and roadmap document. Do not state a delivery date not confirmed by engineering.

# Format
Summary (3 sentences) → Table: Initiative | Planned | Status | Delivery date | Risk → Decisions needed from leadership.

[Paste sprint board data here]`,
        },
      ],
    },
    {
      id: "cldp",
      label: "🎓 Councillor Leadership Development Program (CLDP)",
      summary:
        "Prompts for councillor training modules, handbook FAQs, peer learning agendas, and training feedback analysis.",
      prompts: [
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
          id: "councillor-handbook-faq",
          title: "Councillor handbook FAQ draft",
          audience: "Councillor Leadership Development Program (CLDP) Team",
          scenario:
            "Turning a municipal act or administrative manual into a plain-language FAQ for the councillor handbook.",
          tags: ["CLDP", "Handbook", "FAQ"],
          review:
            "Programme lead verifies every answer against the source act before including it in the handbook.",
          prompt: `# Role
You are a municipal governance trainer at Janaagraha drafting an FAQ for the CLDP councillor handbook.

# Guardrail
Use only the uploaded municipal act or administrative manual. Write "Not covered in source" where applicable.

# Task
Draft FAQ entries on [Topic — e.g. councillor powers, budget approval, grievance redressal] for newly elected councillors.

# Format
Q&A pairs, each answer under 60 words, plain language, with a source clause reference.`,
        },
        {
          id: "peer-learning-session-agenda",
          title: "Peer learning session agenda",
          audience: "Councillor Leadership Development Program (CLDP) Team",
          scenario:
            "Designing an agenda for a peer learning session where councillors from different cities share experiences on a governance challenge.",
          tags: ["Peer learning", "Agenda", "CLDP"],
          review:
            "Programme lead confirms timing and facilitator assignments before the agenda goes out to participating councillors.",
          prompt: `# Role
You are a municipal governance trainer at Janaagraha designing a CLDP peer learning session.

# Task
Draft a session agenda for councillors from [Number] cities to discuss [Governance Challenge].

# Context
Format: half-day, in-person. Audience: elected ward councillors. Tone: participatory, peer-to-peer.

# Guardrail
Use only the pasted list of confirmed participants and topics. Do not assign a city's experience to a topic unless confirmed.

# Format
Timed agenda → Facilitator role per segment → Discussion questions → Expected takeaway per city.

[Paste participant and topic list here]`,
        },
        {
          id: "councillor-performance-feedback-summary",
          title: "Councillor training feedback summary",
          audience: "Councillor Leadership Development Program (CLDP) Team",
          scenario:
            "Summarising post-training feedback forms from councillors to improve the next CLDP module.",
          tags: ["Feedback", "Training evaluation", "CLDP"],
          review:
            "Programme lead reviews the summary against raw feedback forms before using it to revise the curriculum.",
          prompt: `# Role
You are a programme evaluator at Janaagraha reviewing CLDP training feedback.

# Guardrail
Use only the pasted feedback forms. Do not generalise beyond what respondents wrote.

# Task
Summarise feedback from the [Session Name] training for [Number] councillors.

# Format
1. Overall sentiment (1 paragraph)
2. Table: Theme | Frequency | Example comment | Suggested curriculum change
3. Logistics issues raised (bullets)

[Paste feedback forms here]`,
        },
        {
          id: "municipal-administration-glossary",
          title: "Municipal administration glossary for councillors",
          audience: "Councillor Leadership Development Program (CLDP) Team",
          scenario:
            "Building a plain-language glossary of municipal administration terms used in a state act, for first-time councillors.",
          tags: ["Glossary", "Plain language", "Municipal administration"],
          review:
            "Trainer checks each definition against the source act for accuracy before printing the glossary.",
          prompt: `# Role
You are a municipal governance trainer at Janaagraha simplifying technical terms for newly elected councillors.

# Guardrail
Use only the uploaded municipal act or manual. Do not use definitions from other states' laws.

# Task
Build a glossary of the [Number] most-used technical terms in the document, explained in plain language.

# Format
Term | Plain-language definition (under 30 words) | Where it appears in council work | Source clause.`,
        },
      ],
    },
    {
      id: "women-councillor-empowerment",
      label: "👩‍💼 Women Councillor Empowerment Unit",
      summary:
        "Prompts for the women councillor network newsletter, gender-responsive budgeting, mentorship pairing, and leadership workshops.",
      prompts: [
        {
          id: "women-councillor-network-newsletter",
          title: "Women councillor network newsletter draft",
          audience: "Women Councillor Empowerment Unit",
          scenario:
            "Drafting a quarterly newsletter update for the women councillor network, highlighting member achievements and upcoming events.",
          tags: ["Newsletter", "Network", "Women councillors"],
          review:
            "Programme coordinator confirms all achievements and event details against the member update log before sending.",
          prompt: `# Role
You are a programme coordinator at Janaagraha's Women Councillor Empowerment Unit.

# Task
Draft a quarterly newsletter for the women councillor network covering [Quarter].

# Context
Audience: elected women councillors across partner states. Tone: warm, encouraging, professional.

# Guardrail
Use only the pasted member update log and event calendar. Do not name a councillor's achievement unless it is in the log.

# Format
Welcome note (2 sentences) → Member spotlight (from log) → Upcoming events (table: Date | Event | City) → Resources/training available.

[Paste member update log and event calendar here]`,
        },
        {
          id: "gender-responsive-budgeting-brief",
          title: "Gender-responsive budgeting brief",
          audience: "Women Councillor Empowerment Unit",
          scenario:
            "Preparing a brief explaining gender-responsive budgeting concepts for women councillors before a budget session.",
          tags: ["Gender budgeting", "Municipal finance", "Training"],
          review:
            "Programme lead verifies all budget figures and provisions against the uploaded municipal budget document.",
          prompt: `# Role
You are a governance trainer at Janaagraha's Women Councillor Empowerment Unit.

# Task
Draft a plain-language brief on gender-responsive budgeting for women councillors ahead of [City]'s budget session.

# Context
Audience: elected women councillors, varying familiarity with municipal finance. Tone: practical, empowering.

# Guardrail
Use only the uploaded municipal budget document. Do not estimate gender-allocation percentages not stated in the source.

# Format
What gender-responsive budgeting means (2 sentences) → Current allocations relevant to women and children (table) → Questions councillors can raise in the budget session.

[Paste municipal budget document here]`,
        },
        {
          id: "mentorship-pairing-note",
          title: "Mentorship pairing recommendation note",
          audience: "Women Councillor Empowerment Unit",
          scenario:
            "Drafting pairing recommendations for a mentorship cohort matching senior women councillors with newly elected ones.",
          tags: ["Mentorship", "Pairing", "Cohort"],
          review:
            "Programme coordinator reviews pairing logic against participant profiles before finalising the cohort.",
          prompt: `# Role
You are a programme coordinator at Janaagraha's Women Councillor Empowerment Unit designing a mentorship cohort.

# Guardrail
Use only the pasted participant profiles. Do not pair participants based on assumptions not in the profiles.

# Task
Recommend mentor-mentee pairings from the pasted list of [Number] senior and newly elected women councillors, based on state, ward type, and stated focus areas.

# Format
Table: Mentor | Mentee | Shared focus area | Rationale | Flag if no strong match found.

[Paste participant profiles here]`,
        },
        {
          id: "women-councillor-success-story-draft",
          title: "Women councillor success story draft",
          audience: "Women Councillor Empowerment Unit",
          scenario:
            "Turning a councillor's reported initiative or achievement into a short success story for internal and donor-facing use.",
          tags: ["Success story", "Storytelling", "Donor-facing"],
          review:
            "Programme coordinator verifies every fact in the story against the councillor's own account before publishing externally.",
          prompt: `# Role
You are a programme coordinator at Janaagraha's Women Councillor Empowerment Unit writing a success story.

# Task
Write a short success story about [Councillor Name]'s work on [Initiative], based on the pasted account.

# Context
Audience: donors and the public network newsletter. Tone: respectful, factual, not embellished. Length: under 250 words.

# Guardrail
Use only the pasted account and any pasted supporting data. Do not add details the councillor did not state.

# Format
Headline → Context (2 sentences) → What she did (3-4 sentences) → Outcome (with figures only if sourced) → Quote (if provided).

[Paste councillor's account here]`,
        },
        {
          id: "safety-leadership-workshop-outline",
          title: "Safety and leadership workshop outline",
          audience: "Women Councillor Empowerment Unit",
          scenario:
            "Designing a workshop outline on personal safety and assertive leadership for women councillors facing local political resistance.",
          tags: ["Workshop", "Leadership", "Safety"],
          review:
            "Programme lead reviews the outline with a safeguarding specialist before delivery.",
          prompt: `# Role
You are a leadership development trainer at Janaagraha's Women Councillor Empowerment Unit.

# Task
Design a half-day workshop outline on personal safety and assertive leadership for women councillors.

# Context
Audience: elected women councillors, some facing local political or social resistance. Tone: empowering, practical, non-alarmist.

# Guardrail
Do not include legal advice. Flag any point that should be reviewed by a safeguarding or legal specialist before delivery.

# Format
Session objective → Agenda (timed) → Key scenarios to discuss (bullets) → Practical tools/checklists → Resources for follow-up support.`,
        },
      ],
    },
    {
      id: "bala-janaagraha",
      label: "🧒 Bala Janaagraha (Civic Learning)",
      summary:
        "Prompts for civic education lesson plans, teacher briefings, student project rubrics, and curriculum alignment checks.",
      prompts: [
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
        {
          id: "teacher-training-briefing-note",
          title: "Teacher training briefing note",
          audience: "Bala Janaagraha (Civic Learning) Program Team",
          scenario:
            "Preparing a briefing note for school teachers before they deliver a Bala Janaagraha module, covering key concepts and common student questions.",
          tags: ["Teacher training", "Bala Janaagraha", "Briefing"],
          review:
            "Programme coordinator reviews the note against the curriculum guide before distributing it to teachers.",
          prompt: `# Role
You are a civic education curriculum designer at Janaagraha preparing teachers to deliver a Bala Janaagraha module.

# Guardrail
Use only the uploaded curriculum guide for [Module Name]. Do not introduce concepts not in the guide.

# Task
Draft a briefing note for teachers covering the module's key concepts and likely student questions.

# Format
Module objective → Key concepts (plain language) → Likely student questions and suggested answers → Common misconceptions to watch for.`,
        },
        {
          id: "student-civic-project-rubric",
          title: "Student civic project assessment rubric",
          audience: "Bala Janaagraha (Civic Learning) Program Team",
          scenario:
            "Building an assessment rubric for a student civic action project (e.g. a mock ward committee or local issue campaign).",
          tags: ["Assessment", "Rubric", "Civic project"],
          review:
            "Programme coordinator reviews the rubric against the project brief before sharing it with teachers.",
          prompt: `# Role
You are a civic education curriculum designer at Janaagraha building an assessment rubric.

# Task
Draft an assessment rubric for the student civic project on [Topic] for Grade [X].

# Context
Audience: school teachers grading the project. Tone: clear, criteria-based, encouraging.

# Guardrail
Use only the pasted project brief. Do not include criteria not aligned to the brief's stated learning objectives.

# Format
Table: Criterion | Excellent | Good | Needs improvement | Weight (%).

[Paste project brief here]`,
        },
        {
          id: "curriculum-alignment-check",
          title: "Curriculum alignment check",
          audience: "Bala Janaagraha (Civic Learning) Program Team",
          scenario:
            "Checking whether a draft lesson module aligns with the official Bala Janaagraha curriculum framework before rollout.",
          tags: ["Curriculum", "Alignment", "Quality check"],
          review:
            "Programme coordinator confirms every flagged gap against both documents before sending feedback to the content writer.",
          prompt: `# Role
You are a civic education curriculum reviewer at Janaagraha checking alignment with the Bala Janaagraha framework.

# Guardrail
Use only the two uploaded documents (curriculum framework and draft module). Do not use outside curricula as reference.

# Task
Check whether the draft module for [Topic] covers every learning objective in the curriculum framework.

# Format
Table: Framework objective | Covered in draft? | Where (page/section) | Gap or recommendation.`,
        },
        {
          id: "parent-school-communication-draft",
          title: "Parent/school communication draft",
          audience: "Bala Janaagraha (Civic Learning) Program Team",
          scenario:
            "Drafting a communication to parents or school administrators introducing an upcoming Bala Janaagraha activity or civic field visit.",
          tags: ["Parent communication", "School", "Outreach"],
          review:
            "Programme coordinator confirms dates, permissions required, and safety arrangements before the note is sent to schools.",
          prompt: `# Role
You are a programme coordinator at Janaagraha's Bala Janaagraha programme communicating with a partner school.

# Task
Draft a [letter to parents / note to school administration] introducing the upcoming [Activity — e.g. civic field visit, mock Area Sabha].

# Context
Audience: parents or school administrators. Tone: warm, clear, reassuring on safety and logistics.

# Guardrail
Use only the pasted activity plan for dates, locations, and permission requirements. Do not state a logistics detail not in the plan.

# Format
Purpose (1-2 sentences) → What students will do → Date, time, location → Permissions/consent needed → Contact for questions.

[Paste activity plan here]`,
        },
      ],
    },
    {
      id: "municipal-revenue-augmentation",
      label: "💰 Municipal Revenue Augmentation",
      summary:
        "Prompts for OSR reform extraction, property tax coverage analysis, user-charge model comparisons, and taxpayer communication.",
      prompts: [
        {
          id: "osr-provisions",
          title: "OSR reform extraction",
          audience: "Municipal Revenue Augmentation Team",
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
          id: "property-tax-coverage-gap-analysis",
          title: "Property tax coverage gap analysis",
          audience: "Municipal Revenue Augmentation Team",
          scenario:
            "Identifying the gap between registered properties and properties actually paying property tax, from a ULB database extract.",
          tags: ["Property tax", "Coverage gap", "Revenue"],
          review:
            "Analyst verifies the gap figures against the raw database extract before sharing with the ULB.",
          prompt: `# Role
You are a municipal revenue analyst at Janaagraha assessing property tax coverage.

# Guardrail
Use only the pasted property database extract. Do not estimate figures not present in the data.

# Task
Calculate the property tax coverage gap for [City / Ward] from the pasted data and identify the largest gap categories.

# Format
1. Coverage rate (registered vs. taxpaying properties)
2. Table: Property category | Registered | Tax-paying | Gap | Estimated revenue at stake
3. Recommended next steps for the ULB

[Paste property database extract here]`,
        },
        {
          id: "user-charge-model-options-brief",
          title: "User-charge model options brief",
          audience: "Municipal Revenue Augmentation Team",
          scenario:
            "Comparing user-charge model options (e.g. solid waste fee, parking fee) being considered by a ULB, based on a feasibility study.",
          tags: ["User charges", "Revenue model", "Feasibility"],
          review:
            "Revenue analyst checks each model's figures against the feasibility study before presenting options to the ULB.",
          prompt: `# Role
You are a municipal revenue analyst at Janaagraha comparing user-charge models for a ULB.

# Guardrail
Use only the uploaded feasibility study. Do not state a revenue projection not in the source.

# Task
Compare the user-charge models considered for [Service] in [City] and summarise trade-offs.

# Format
Table: Model | Revenue potential | Implementation complexity | Citizen acceptance risk | Source page.`,
        },
        {
          id: "revenue-collection-trend-summary",
          title: "Revenue collection trend summary",
          audience: "Municipal Revenue Augmentation Team",
          scenario:
            "Summarising multi-year own-source revenue collection trends for a ULB ahead of a reform strategy discussion.",
          tags: ["Revenue trends", "OSR", "Strategy"],
          review:
            "Analyst cross-checks year-on-year figures against the source financial statements before using them in strategy discussions.",
          prompt: `# Role
You are a municipal revenue analyst at Janaagraha reviewing OSR collection trends.

# Guardrail
Use only the pasted financial statements. Do not project future years.

# Task
Summarise own-source revenue collection trends for [City] over [Years] and flag the largest changes.

# Format
Table: Revenue head | Year 1 | Year 2 | Year 3 | % change | Likely driver (if stated in source)

[Paste financial statements here]`,
        },
        {
          id: "taxpayer-communication-draft",
          title: "Taxpayer communication draft",
          audience: "Municipal Revenue Augmentation Team",
          scenario:
            "Drafting a plain-language notice or communication to taxpayers about a property tax reform or payment deadline, for ULB sign-off.",
          tags: ["Taxpayer communication", "Property tax", "Outreach"],
          review:
            "ULB finance officer signs off on all dates, rates, and penalty clauses before public release.",
          prompt: `# Role
You are a municipal revenue analyst at Janaagraha drafting citizen-facing tax communication for a ULB partner.

# Task
Draft a plain-language notice informing taxpayers in [City] about [Reform / Deadline / Rate change].

# Context
Audience: property owners, general public. Tone: clear, non-alarming, instructional.

# Guardrail
Use only the pasted official notification for dates, rates, and penalties. Do not state a figure not in the source.

# Format
What's changing (2 sentences) → Who it affects → Action required, with deadline → Where to pay/get help.

[Paste official notification here]`,
        },
      ],
    },
    {
      id: "fiscal-automation-accounting",
      label: "🧾 Fiscal Automation and Municipal Accounting Software",
      summary:
        "Prompts for accrual accounting migration, software integration briefs, chart-of-accounts mapping, and reconciliation summaries.",
      prompts: [
        {
          id: "accrual-accounting-migration-checklist",
          title: "Accrual accounting migration checklist",
          audience: "Fiscal Automation and Municipal Accounting Software Team",
          scenario:
            "Building a checklist of steps a ULB needs to complete to migrate from cash-based to double-entry accrual accounting.",
          tags: ["Accrual accounting", "Migration", "Checklist"],
          review:
            "Technical lead verifies each step against the relevant municipal accounting manual before sharing with the ULB finance team.",
          prompt: `# Role
You are a municipal accounting systems specialist at Janaagraha supporting a ULB's migration to accrual accounting.

# Guardrail
Use only the uploaded municipal accounting manual or migration guide. Do not include a step not described in the source.

# Task
Build a migration checklist for [City]'s transition to double-entry accrual accounting.

# Format
Checklist: Step | Responsible team (ULB/Janaagraha) | Prerequisite | Source reference.`,
        },
        {
          id: "accounting-software-integration-brief",
          title: "Accounting software integration brief",
          audience: "Fiscal Automation and Municipal Accounting Software Team",
          scenario:
            "Summarising technical integration requirements between a ULB's legacy system and a new municipal accounting software, from a vendor's technical document.",
          tags: ["Integration", "Accounting software", "Technical"],
          review:
            "Technical lead verifies every requirement against the vendor document before sharing with the ULB's IT team.",
          prompt: `# Role
You are a fiscal automation specialist at Janaagraha reviewing a software integration requirement.

# Guardrail
Use only the uploaded vendor technical document. Do not assume a data field exists if not listed.

# Task
Summarise the integration requirements between [Legacy System] and [New Accounting Software] for [City]'s ULB IT team.

# Format
Data flow (diagram in words) → Table: Data field | Source system | Target system | Transformation needed | Risk.`,
        },
        {
          id: "chart-of-accounts-mapping-note",
          title: "Chart of accounts mapping note",
          audience: "Fiscal Automation and Municipal Accounting Software Team",
          scenario:
            "Mapping a ULB's legacy chart of accounts to the standard National Municipal Accounts Manual (NMAM) codes.",
          tags: ["Chart of accounts", "NMAM", "Mapping"],
          review:
            "Accounting specialist verifies every mapping against the NMAM code list before finalising.",
          prompt: `# Role
You are a municipal accounting systems specialist at Janaagraha mapping a ULB's chart of accounts.

# Guardrail
Use only the two uploaded documents (ULB's legacy chart of accounts and the NMAM code list). Write "No clear match" where mapping is ambiguous.

# Task
Map the legacy account heads to the corresponding NMAM codes for [City]'s ULB.

# Format
Table: Legacy account head | NMAM code | NMAM description | Confidence (clear/ambiguous) | Notes.`,
        },
        {
          id: "financial-statement-reconciliation-summary",
          title: "Financial statement reconciliation summary",
          audience: "Fiscal Automation and Municipal Accounting Software Team",
          scenario:
            "Summarising discrepancies found while reconciling a ULB's trial balance against its published financial statement.",
          tags: ["Reconciliation", "Trial balance", "Financial statement"],
          review:
            "Accounting specialist verifies every discrepancy against both source documents before flagging it to the ULB finance officer.",
          prompt: `# Role
You are a fiscal automation specialist at Janaagraha reconciling a ULB's accounts.

# Guardrail
Use only the two pasted documents (trial balance and published financial statement). Do not guess at the cause of a discrepancy.

# Task
Identify discrepancies between the trial balance and the published financial statement for [City], [Year].

# Format
Table: Account head | Trial balance figure | Statement figure | Difference | Possible cause (if evident) | Needs ULB clarification?

[Paste trial balance and financial statement here]`,
        },
        {
          id: "software-user-training-faq",
          title: "Accounting software user training FAQ",
          audience: "Fiscal Automation and Municipal Accounting Software Team",
          scenario:
            "Building a FAQ to support ULB accounts staff being trained on a new municipal accounting software.",
          tags: ["Training", "FAQ", "Accounting software"],
          review:
            "Technical lead checks every answer against the software's user manual before distributing the FAQ.",
          prompt: `# Role
You are a fiscal automation specialist at Janaagraha supporting ULB accounts staff on new accounting software.

# Guardrail
Use only the uploaded software user manual. Write "Not covered in manual — escalate to vendor" where applicable.

# Task
Draft FAQ entries on [Topic — e.g. journal entries, bank reconciliation, report generation] for ULB accounts staff new to the software.

# Format
Q&A pairs, each answer under 50 words, step-by-step where relevant, plain language.`,
        },
      ],
    },
    {
      id: "cityfinance-platform",
      label: "🖥️ CityFinance.in Platform Engineering",
      summary:
        "Prompts for financial data QA, public changelog drafting, state data onboarding, and dashboard documentation.",
      prompts: [
        {
          id: "financial-data-aggregation-qa-note",
          title: "Financial data aggregation QA note",
          audience: "CityFinance.in Platform Engineering Team",
          scenario:
            "Quality-checking a batch of ULB financial statements before they are aggregated into the CityFinance.in database.",
          tags: ["Data QA", "CityFinance.in", "Aggregation"],
          review:
            "Data engineer verifies every flagged anomaly against the original financial statement before excluding or correcting it.",
          prompt: `# Role
You are a data engineer at Janaagraha's CityFinance.in platform team.

# Guardrail
Use only the pasted batch of financial statement extracts. Do not infer a missing figure.

# Task
QA-check the pasted batch for [Number] ULBs and flag anomalies — missing fields, implausible values, inconsistent units.

# Format
Table: ULB | Field | Issue | Severity | Recommended action (exclude/correct/flag for follow-up).

[Paste batch of financial statement extracts here]`,
        },
        {
          id: "platform-data-update-changelog",
          title: "Platform data update changelog",
          audience: "CityFinance.in Platform Engineering Team",
          scenario:
            "Drafting a changelog entry describing a new data release or correction on the CityFinance.in platform for public transparency.",
          tags: ["Changelog", "Data release", "Transparency"],
          review:
            "Platform lead verifies every change description against the actual data update before publishing the changelog.",
          prompt: `# Role
You are a data engineer at Janaagraha's CityFinance.in platform team writing a public changelog.

# Task
Draft a changelog entry for the [Date] data update covering [States/ULBs added or corrected].

# Context
Audience: researchers, journalists, and public users of the platform. Tone: precise, transparent.

# Guardrail
Use only the pasted update log. Do not describe a change not in the log.

# Format
What was updated (bullets) → Why (1 sentence per item, if known) → Affected ULBs/states (table) → Known limitations.

[Paste update log here]`,
        },
        {
          id: "state-data-onboarding-brief",
          title: "State data onboarding brief",
          audience: "CityFinance.in Platform Engineering Team",
          scenario:
            "Preparing a brief on what financial data a new state needs to submit to be onboarded onto the CityFinance.in platform.",
          tags: ["Onboarding", "Data submission", "State"],
          review:
            "Platform lead confirms the data requirements against the platform's current schema before sending to the state.",
          prompt: `# Role
You are a data engineer at Janaagraha's CityFinance.in platform team onboarding a new state.

# Guardrail
Use only the uploaded platform data schema. Do not request a data field not in the schema.

# Task
Draft an onboarding brief listing the financial data fields and formats [State] needs to submit.

# Format
Required field | Format | Frequency (annual/quarterly) | Example | Contact for queries.`,
        },
        {
          id: "public-dashboard-faq",
          title: "Public dashboard FAQ",
          audience: "CityFinance.in Platform Engineering Team",
          scenario:
            "Drafting a public-facing FAQ explaining how to read and interpret figures on the CityFinance.in public dashboard.",
          tags: ["FAQ", "Public dashboard", "Documentation"],
          review:
            "Platform lead checks every answer against the dashboard's actual methodology page before publishing.",
          prompt: `# Role
You are a data engineer at Janaagraha's CityFinance.in platform team writing public-facing documentation.

# Guardrail
Use only the uploaded methodology document. Do not simplify a definition in a way that changes its meaning.

# Task
Draft FAQ entries answering common questions about how figures on the public dashboard are calculated and sourced.

# Format
Q&A pairs, each answer under 60 words, plain language, linking to the relevant methodology section.`,
        },
        {
          id: "data-discrepancy-investigation-note",
          title: "Data discrepancy investigation note",
          audience: "CityFinance.in Platform Engineering Team",
          scenario:
            "Investigating a discrepancy flagged by a researcher or journalist between the platform's published figure and a state's own report.",
          tags: ["Discrepancy", "Investigation", "Data integrity"],
          review:
            "Platform lead verifies the investigation findings against both source documents before responding to the external query.",
          prompt: `# Role
You are a data engineer at Janaagraha's CityFinance.in platform team investigating a data discrepancy.

# Guardrail
Use only the two pasted documents (platform figure and state's own report). Do not speculate on the cause beyond what the documents show.

# Task
Investigate the discrepancy in [Indicator] for [ULB/State] between the platform figure and the external report.

# Format
Figures compared (table) → Possible explanation (sourcing/period/definition difference, if evident) → Recommended response to the external query → Needs further verification?

[Paste platform figure and external report here]`,
        },
      ],
    },
    {
      id: "intergovernmental-fiscal-transfers",
      label: "🏦 Intergovernmental Fiscal Transfers Research",
      summary:
        "Prompts for fiscal devolution comparisons, Finance Commission extraction, grant utilization tracking, and fund-flow timelines.",
      prompts: [
        {
          id: "devolution-compare",
          title: "Fiscal devolution comparison",
          audience: "Intergovernmental Fiscal Transfers Research Team",
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
        {
          id: "finance-commission-recommendation-extract",
          title: "Finance Commission recommendation extraction",
          audience: "Intergovernmental Fiscal Transfers Research Team",
          scenario:
            "Extracting urban local body-relevant recommendations from a Central or State Finance Commission report.",
          tags: ["Finance Commission", "Extraction", "ULB grants"],
          review:
            "Researcher verifies every extracted recommendation against the original Finance Commission report before use.",
          prompt: `# Role
You are an intergovernmental fiscal transfers researcher at Janaagraha.

# Guardrail
Use only the uploaded Finance Commission report. Write "Not found in source" for any missing detail.

# Task
Extract all recommendations relevant to urban local bodies from the [Nth] Finance Commission report.

# Format
Table: Recommendation | Grant type | Amount/formula | Conditions attached | Report section.`,
        },
        {
          id: "transfer-utilization-tracking-note",
          title: "Transfer utilization tracking note",
          audience: "Intergovernmental Fiscal Transfers Research Team",
          scenario:
            "Tracking how much of a devolved grant a state or ULB has actually utilized against the sanctioned amount.",
          tags: ["Utilization", "Grants", "Tracking"],
          review:
            "Researcher cross-checks utilization figures against the official utilization certificate before reporting.",
          prompt: `# Role
You are an intergovernmental fiscal transfers researcher at Janaagraha tracking grant utilization.

# Guardrail
Use only the pasted utilization certificate or expenditure statement. Do not estimate unutilized amounts not stated.

# Task
Summarise utilization of the [Grant Name] grant for [State/ULB] for [Year].

# Format
Table: Component | Sanctioned amount | Utilized amount | Utilization % | Reason for shortfall (if stated).

[Paste utilization certificate here]`,
        },
        {
          id: "grant-flow-timeline-brief",
          title: "Grant flow timeline brief",
          audience: "Intergovernmental Fiscal Transfers Research Team",
          scenario:
            "Mapping the timeline and intermediary steps through which a Central grant flows down to a ULB, from release order documents.",
          tags: ["Grant flow", "Timeline", "Intergovernmental"],
          review:
            "Researcher verifies each step and date against the release order documents before publishing the timeline.",
          prompt: `# Role
You are an intergovernmental fiscal transfers researcher at Janaagraha mapping fund flows.

# Guardrail
Use only the uploaded release order documents. Do not assume a step not documented.

# Task
Map the timeline from Central release to ULB receipt for the [Grant Name] grant in [State].

# Format
Timeline: Stage | Responsible authority | Date/duration | Document reference | Delay flagged?`,
        },
        {
          id: "transfer-formula-policy-comparison",
          title: "Transfer formula policy comparison note",
          audience: "Intergovernmental Fiscal Transfers Research Team",
          scenario:
            "Comparing how two State Finance Commissions weight different criteria (population, area, deprivation) in their devolution formulas.",
          tags: ["Formula", "Policy comparison", "SFC"],
          review:
            "Senior researcher confirms each weight against the respective SFC report before the comparison is used externally.",
          prompt: `# Role
You are an intergovernmental fiscal transfers researcher at Janaagraha comparing SFC devolution formulas.

# Guardrail
Use only the two uploaded SFC reports. Do not average or estimate a weight not explicitly stated.

# Task
Compare how [State 1] and [State 2] weight population, area, and deprivation in their devolution formulas.

# Format
Table: Criterion | State 1 weight | State 2 weight | Source page (each).`,
        },
      ],
    },
    {
      id: "wpf-fellowship",
      label: "👩‍🏫 Women in Public Finance (WPF) Fellowship Secretariat",
      summary:
        "Prompts for fellowship outreach, progress report templates, host department MoU summaries, and selection shortlisting.",
      prompts: [
        {
          id: "wpf-fellowship-comms",
          title: "WPF fellowship outreach message",
          audience: "Women in Public Finance (WPF) Fellowship Secretariat",
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
        {
          id: "fellow-progress-report-template",
          title: "Fellow progress report template",
          audience: "Women in Public Finance (WPF) Fellowship Secretariat",
          scenario:
            "Drafting a structured progress report template for fellows to report on their placement work each quarter.",
          tags: ["WPF", "Progress report", "Template"],
          review:
            "Secretariat confirms the template against the current cohort's placement objectives before distribution.",
          prompt: `# Role
You are the programme coordinator for Janaagraha's Women in Public Finance fellowship.

# Task
Draft a quarterly progress report template for fellows to complete during their state placement.

# Context
Audience: fellows placed in state finance/urban departments. Tone: structured, easy to fill quickly.

# Guardrail
Use only the pasted placement objectives document for section headers. Do not pre-fill content fellows must report themselves.

# Format
Sections: Placement details → Key activities this quarter → Outputs/deliverables → Challenges faced → Support needed.

[Paste placement objectives document here]`,
        },
        {
          id: "host-department-mou-summary",
          title: "Host department MoU summary",
          audience: "Women in Public Finance (WPF) Fellowship Secretariat",
          scenario:
            "Summarising the terms of a Memorandum of Understanding with a state finance department hosting WPF fellows.",
          tags: ["MoU", "Host department", "Summary"],
          review:
            "Secretariat lead verifies every term against the signed MoU before sharing the summary internally.",
          prompt: `# Role
You are the programme coordinator for Janaagraha's Women in Public Finance fellowship.

# Guardrail
Use only the uploaded signed MoU. Do not interpret an ambiguous clause — flag it instead.

# Task
Summarise the key terms of the MoU with [State Department] for internal reference.

# Format
Duration → Number of fellows → Department responsibilities (bullets) → Janaagraha responsibilities (bullets) → Renewal/exit clause → Ambiguous clauses needing legal review.`,
        },
        {
          id: "cohort-selection-shortlist-note",
          title: "Cohort selection shortlist note",
          audience: "Women in Public Finance (WPF) Fellowship Secretariat",
          scenario:
            "Summarising candidate applications against the cohort's eligibility criteria to prepare a shortlist for the selection panel.",
          tags: ["Selection", "Shortlist", "Cohort"],
          review:
            "Secretariat verifies every eligibility flag against the original application before sending the shortlist to the panel.",
          prompt: `# Role
You are the programme coordinator for Janaagraha's Women in Public Finance fellowship preparing a selection shortlist.

# Guardrail
Use only the pasted applications and the eligibility criteria document. Do not rank candidates on criteria not listed.

# Task
Shortlist candidates from the pasted applications against the [Cohort Year] eligibility criteria.

# Format
Table: Candidate | Meets eligibility? | Strengths (from application) | Gaps | Recommend for panel review?

[Paste applications and eligibility criteria here]`,
        },
        {
          id: "fellowship-impact-case-study",
          title: "Fellowship impact case study draft",
          audience: "Women in Public Finance (WPF) Fellowship Secretariat",
          scenario:
            "Writing a case study on a fellow's placement outcome for the annual fellowship report shared with donors.",
          tags: ["Case study", "Impact", "Donor report"],
          review:
            "Secretariat verifies every claim in the case study against the fellow's own progress reports before inclusion in the donor report.",
          prompt: `# Role
You are the programme coordinator for Janaagraha's Women in Public Finance fellowship writing an impact case study.

# Task
Write a case study on [Fellow Name]'s placement at [Host Department], based on the pasted progress reports.

# Context
Audience: donors, annual fellowship report readers. Tone: factual, respectful of the fellow's voice. Length: under 300 words.

# Guardrail
Use only the pasted progress reports. Do not attribute an outcome to the fellow that the reports do not support.

# Format
Context (2 sentences) → Placement focus → Key contribution (3-4 sentences) → Outcome (with figures only if sourced) → Fellow's reflection (if quoted in source).

[Paste progress reports here]`,
        },
      ],
    },
    {
      id: "odisha-state-unit",
      label: "🏠 Odisha State Program Unit",
      summary:
        "Prompts for Jaga Mission land titling briefs, ANKUR portal data, slum upgrading progress, and housing department meetings.",
      prompts: [
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
          id: "ankur-portal-data-summary",
          title: "ANKUR portal data summary",
          audience: "Odisha State Program Unit",
          scenario:
            "Summarising ANKUR civic portal grievance or service data for a periodic review with the Odisha housing department.",
          tags: ["ANKUR", "Portal data", "Odisha"],
          review:
            "Odisha unit analyst verifies figures against the raw ANKUR export before the review meeting.",
          prompt: `# Role
You are a governance analyst at Janaagraha embedded in the Odisha state housing department.

# Guardrail
Use only the pasted ANKUR portal data export. Do not estimate figures not present in the export.

# Task
Summarise grievance/service request trends on the ANKUR portal for [District/Period].

# Format
1. Headline trend (1-2 sentences)
2. Table: Category | Requests received | Resolved | Pending | Average resolution time
3. Recommendations for the housing department

[Paste ANKUR portal data export here]`,
        },
        {
          id: "land-titling-rights-faq",
          title: "Land titling rights FAQ for slum residents",
          audience: "Odisha State Program Unit",
          scenario:
            "Drafting a plain-language FAQ explaining land titling rights and the application process under the Jaga Mission for slum residents.",
          tags: ["Land titling", "Jaga Mission", "FAQ"],
          review:
            "Odisha unit lead checks every procedural answer against the official Jaga Mission guidelines before distribution.",
          prompt: `# Role
You are a governance analyst at Janaagraha supporting Odisha's Jaga Mission land titling programme.

# Guardrail
Use only the uploaded Jaga Mission guidelines. Write "Not covered in guidelines" where applicable.

# Task
Draft an FAQ on land titling rights and the application process for slum residents in [Settlement/District].

# Format
Q&A pairs, each answer under 50 words, plain language, with the relevant guideline clause noted.`,
        },
        {
          id: "slum-upgrading-progress-dashboard-note",
          title: "Slum upgrading progress dashboard note",
          audience: "Odisha State Program Unit",
          scenario:
            "Writing a brief explanatory note on slum upgrading progress shown on an internal dashboard, for a state review meeting.",
          tags: ["Slum upgrading", "Dashboard", "Progress"],
          review:
            "Odisha unit lead verifies dashboard figures against the source dataset before the state review.",
          prompt: `# Role
You are a governance analyst at Janaagraha tracking slum upgrading progress under the Jaga Mission.

# Guardrail
Use only the pasted dashboard data. Do not project completion dates not stated in the data.

# Task
Write a progress note for [Settlement/District] covering infrastructure upgrading and titling milestones.

# Format
Milestone | Target | Achieved | Variance | Risk flagged.

[Paste dashboard data here]`,
        },
        {
          id: "odisha-housing-dept-meeting-brief",
          title: "Odisha housing department meeting brief",
          audience: "Odisha State Program Unit",
          scenario:
            "Preparing a short internal brief ahead of a meeting with the Odisha state housing department.",
          tags: ["Meeting brief", "Housing department", "Odisha"],
          review:
            "Odisha unit lead confirms agenda points against the pasted correspondence before the meeting.",
          prompt: `# Role
You are a governance analyst at Janaagraha embedded in the Odisha state housing department.

# Task
Draft a one-page meeting brief ahead of the [Date] meeting on [Topic] with the housing department.

# Context
Audience: internal Janaagraha team preparing for the meeting. Tone: factual, action-oriented.

# Guardrail
Use only the pasted correspondence and prior meeting notes. Do not state a department's position not evidenced in the source.

# Format
Background (2 sentences) → Agenda items (bullets) → Janaagraha's ask for each item → Anticipated department response (if known).

[Paste correspondence and prior meeting notes here]`,
        },
      ],
    },
    {
      id: "up-state-unit",
      label: "🏙️ Uttar Pradesh State Program Unit",
      summary:
        "Prompts for Aspirational Cities KPI review, administrative workflow mapping, best-practice briefs, and risk register updates.",
      prompts: [
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
        {
          id: "up-workflow-process-map",
          title: "Administrative workflow process map",
          audience: "Uttar Pradesh State Program Unit",
          scenario:
            "Mapping the administrative workflow and approval steps for a process under the Aspirational Cities Programme, from a state circular.",
          tags: ["Workflow", "Process map", "Aspirational Cities"],
          review:
            "UP unit analyst verifies each step and authority against the source circular before sharing with state administration.",
          prompt: `# Role
You are a governance support analyst at Janaagraha working with the UP state administration.

# Guardrail
Use only the uploaded state circular or SOP document. Do not assume a step not documented.

# Task
Map the workflow for [Process — e.g. project approval, fund release] under the Aspirational Cities Programme.

# Format
Step | Responsible authority | Document/form required | Timeline (if specified) | Source clause.`,
        },
        {
          id: "aspirational-cities-best-practice-brief",
          title: "Aspirational Cities best practice brief",
          audience: "Uttar Pradesh State Program Unit",
          scenario:
            "Summarising a best practice from another Aspirational City for adaptation by a UP city, based on a case study document.",
          tags: ["Best practice", "Aspirational Cities", "Case study"],
          review:
            "UP unit lead verifies the case study facts before adapting recommendations for a UP city.",
          prompt: `# Role
You are a governance support analyst at Janaagraha working with the UP state administration on the Aspirational Cities Programme.

# Guardrail
Use only the uploaded case study document. Do not claim a practice is replicable without noting context differences from the source.

# Task
Summarise the [Practice Name] approach from [Source City] and assess its relevance for [UP City].

# Format
What was done (3-4 sentences) → Key enabling conditions → Relevance to [UP City] (bullets) → Adaptation considerations.`,
        },
        {
          id: "state-administration-briefing-note",
          title: "State administration briefing note",
          audience: "Uttar Pradesh State Program Unit",
          scenario:
            "Preparing a concise briefing note for UP state administration officials ahead of a programme review.",
          tags: ["Briefing note", "State administration", "UP"],
          review:
            "UP unit lead confirms all figures against the official programme dashboard before the briefing goes to administration.",
          prompt: `# Role
You are a governance support analyst at Janaagraha working with the UP state administration.

# Task
Draft a briefing note on [Topic] for the state administration's review of the Aspirational Cities Programme.

# Context
Audience: senior state officials. Tone: concise, evidence-based, solution-oriented.

# Guardrail
Use only the pasted programme dashboard data. Do not state a figure not in the source.

# Format
Summary (3 sentences) → Key data points (table) → Recommendation (1-2 bullets) → Decision needed from administration.

[Paste programme dashboard data here]`,
        },
        {
          id: "up-programme-risk-register",
          title: "Programme risk register update",
          audience: "Uttar Pradesh State Program Unit",
          scenario:
            "Updating a risk register for the Aspirational Cities Programme based on field reports from a UP city.",
          tags: ["Risk register", "Aspirational Cities", "Monitoring"],
          review:
            "UP unit lead verifies each risk and its status against the field report before updating the register.",
          prompt: `# Role
You are a governance support analyst at Janaagraha maintaining a programme risk register for UP.

# Guardrail
Use only the pasted field report. Do not add a risk not mentioned in the report.

# Task
Update the risk register for [City]'s Aspirational Cities Programme based on the pasted field report.

# Format
Table: Risk | Likelihood | Impact | Status (new/ongoing/resolved) | Mitigation action | Owner.

[Paste field report here]`,
        },
      ],
    },
    {
      id: "karnataka-state-cell",
      label: "🌆 Karnataka State Project Cell",
      summary:
        "Prompts for BBMP budget transparency, participatory budgeting campaigns, civic data dashboards, and stakeholder meeting summaries.",
      prompts: [
        {
          id: "bbmp-budget-transparency-brief",
          title: "BBMP budget transparency brief",
          audience: "Karnataka State Project Cell",
          scenario:
            "Summarising key allocations and changes in the BBMP budget for an internal transparency tracking brief.",
          tags: ["BBMP", "Budget", "Transparency"],
          review:
            "Karnataka cell analyst verifies all figures against the official BBMP budget document before publishing the brief.",
          prompt: `# Role
You are a governance analyst at Janaagraha's Karnataka State Project Cell tracking BBMP budget transparency.

# Guardrail
Use only the uploaded BBMP budget document. Do not estimate a figure not stated.

# Task
Summarise the key allocations and year-on-year changes in the BBMP budget for [Year] relevant to [Sector — e.g. roads, solid waste, parks].

# Format
Table: Budget head | This year | Last year | % change | Notable items.`,
        },
        {
          id: "participatory-budgeting-campaign-note",
          title: "Participatory budgeting campaign note",
          audience: "Karnataka State Project Cell",
          scenario:
            "Drafting an internal campaign note to mobilise resident participation in a BBMP ward-level participatory budgeting exercise.",
          tags: ["Participatory budgeting", "Campaign", "BBMP"],
          review:
            "Karnataka cell lead reviews the campaign messaging against the official participatory budgeting process before circulation.",
          prompt: `# Role
You are a civic engagement coordinator at Janaagraha's Karnataka State Project Cell.

# Task
Draft a campaign note to mobilise resident participation in the participatory budgeting exercise for [Ward], BBMP.

# Context
Audience: ward residents. Tone: accessible, motivating, clear on how to participate.

# Guardrail
Use only the pasted official process document for dates and submission procedures. Do not state a deadline not in the source.

# Format
Why this matters (2 sentences) → How to participate (numbered steps) → Key dates (table) → Where to get help.

[Paste official process document here]`,
        },
        {
          id: "bbmp-civic-data-dashboard-summary",
          title: "BBMP civic data dashboard summary",
          audience: "Karnataka State Project Cell",
          scenario:
            "Summarising findings from a civic data dashboard tracking BBMP service delivery (e.g. waste collection, road repairs) for an internal review.",
          tags: ["Civic data", "Dashboard", "Service delivery"],
          review:
            "Karnataka cell analyst validates figures against the dashboard export before internal circulation.",
          prompt: `# Role
You are a governance analyst at Janaagraha's Karnataka State Project Cell reviewing BBMP civic data.

# Guardrail
Use only the pasted dashboard export. Do not interpolate missing ward data.

# Task
Summarise service delivery performance for [Service] across BBMP wards for [Period].

# Format
1. Headline finding (1-2 sentences)
2. Table: Ward | Indicator value | City average | Gap | Flag if missing data
3. Wards needing priority follow-up

[Paste dashboard export here]`,
        },
        {
          id: "ward-level-budget-allocation-table",
          title: "Ward-level budget allocation table",
          audience: "Karnataka State Project Cell",
          scenario:
            "Building a ward-level breakdown of BBMP budget allocations for a civic transparency campaign or citizen-facing factsheet.",
          tags: ["Ward budget", "Allocation", "Transparency"],
          review:
            "Karnataka cell analyst verifies the ward-wise breakdown against the source budget document before publishing.",
          prompt: `# Role
You are a governance analyst at Janaagraha's Karnataka State Project Cell building a ward-level budget breakdown.

# Guardrail
Use only the uploaded BBMP budget document. Write "Not disaggregated in source" where ward-level figures are unavailable.

# Task
Build a ward-level allocation table for [Sector] for [Ward Numbers/Zone].

# Format
Table: Ward | Allocation | Per capita allocation (if population data provided) | Source page.`,
        },
        {
          id: "bbmp-stakeholder-meeting-summary",
          title: "BBMP stakeholder meeting summary",
          audience: "Karnataka State Project Cell",
          scenario:
            "Summarising a multi-stakeholder meeting with BBMP officials, councillors, and resident welfare associations for internal record.",
          tags: ["Stakeholder meeting", "Summary", "BBMP"],
          review:
            "Karnataka cell lead reviews the summary against meeting notes before circulating to the broader team.",
          prompt: `# Role
You are a governance analyst at Janaagraha's Karnataka State Project Cell.

# Guardrail
Use only the pasted meeting notes. Do not attribute a statement to a participant not recorded as having said it.

# Task
Summarise the [Date] stakeholder meeting on [Topic] involving BBMP officials, councillors, and resident associations.

# Format
Attendees → Key discussion points (bullets, by stakeholder) → Decisions/agreements → Action items (table: Action | Owner | Deadline).

[Paste meeting notes here]`,
        },
      ],
    },
    {
      id: "maharashtra-western-region",
      label: "🏗️ Maharashtra and Western Region",
      summary:
        "Prompts for Solapur reform pilots, mid-sized city capacity assessment, regional reform tracking, and Municipal Act provision checks.",
      prompts: [
        {
          id: "solapur-reform-pilot-brief",
          title: "Solapur reform pilot brief",
          audience: "Maharashtra and Western Region Team",
          scenario:
            "Preparing a brief on a reform pilot active in Solapur for replication consideration in another mid-sized Maharashtra city.",
          tags: ["Solapur", "Reform pilot", "Replication"],
          review:
            "Regional team lead verifies pilot outcomes against the field report before recommending replication.",
          prompt: `# Role
You are a governance analyst at Janaagraha's Maharashtra and Western Region team.

# Guardrail
Use only the pasted field report on the Solapur pilot. Do not claim an outcome not stated in the report.

# Task
Summarise the [Pilot Name] reform pilot in Solapur and assess its replication potential for [Target City].

# Format
What was piloted (3-4 sentences) → Outcomes so far (table: Metric | Result | Source) → Conditions needed for replication → Open risks.

[Paste field report here]`,
        },
        {
          id: "mid-sized-city-capacity-assessment",
          title: "Mid-sized city administrative capacity assessment",
          audience: "Maharashtra and Western Region Team",
          scenario:
            "Assessing a mid-sized Maharashtra ULB's administrative capacity (staffing, systems, processes) from a field survey, before designing a capacity-building track.",
          tags: ["Capacity assessment", "Mid-sized city", "Field survey"],
          review:
            "Regional team analyst verifies each gap against the field survey data before designing the capacity-building plan.",
          prompt: `# Role
You are a governance analyst at Janaagraha's Maharashtra and Western Region team.

# Guardrail
Use only the pasted field survey data. Do not assume a capacity gap not evidenced in the survey.

# Task
Assess the administrative capacity of [City]'s ULB across staffing, systems, and process maturity.

# Format
Table: Function | Current capacity | Gap identified | Priority (high/medium/low) | Recommended capacity-building action.

[Paste field survey data here]`,
        },
        {
          id: "regional-administrative-reform-tracker",
          title: "Regional administrative reform tracker",
          audience: "Maharashtra and Western Region Team",
          scenario:
            "Tracking the status of administrative reforms (e.g. e-governance rollout, single-window clearance) across multiple Western region cities.",
          tags: ["Reform tracker", "Regional", "Monitoring"],
          review:
            "Regional team lead verifies status updates against each city's latest field report before circulating the tracker.",
          prompt: `# Role
You are a governance analyst at Janaagraha's Maharashtra and Western Region team tracking reform progress.

# Guardrail
Use only the pasted city-wise field reports. Write "No update received" for any city missing data.

# Task
Update the reform tracker for [Reform Name] across [City List].

# Format
Table: City | Status (not started/in progress/completed) | Last update date | Blocker (if any) | Next step.

[Paste city-wise field reports here]`,
        },
        {
          id: "maharashtra-municipal-act-provision-check",
          title: "Maharashtra Municipal Act provision check",
          audience: "Maharashtra and Western Region Team",
          scenario:
            "Checking whether a proposed reform is permissible under the relevant Maharashtra Municipal Corporation/Council Act before recommending it to a ULB.",
          tags: ["Municipal Act", "Legal check", "Maharashtra"],
          review:
            "Regional team lead confirms the legal reading with a policy specialist before advising the ULB.",
          prompt: `# Role
You are a governance analyst at Janaagraha's Maharashtra and Western Region team.

# Guardrail
Use only the uploaded Maharashtra Municipal Corporation/Council Act. Write "Not addressed in Act — needs legal opinion" where unclear.

# Task
Check whether [Proposed Reform] is permissible under the Act for [City], and identify which section governs it.

# Format
Reform component | Permissible? | Governing section | Conditions/limitations | Confidence (clear/needs legal opinion).`,
        },
        {
          id: "western-region-training-session-outline",
          title: "Western region training session outline",
          audience: "Maharashtra and Western Region Team",
          scenario:
            "Designing a capacity-building training session outline for ULB officials in a Western region mid-sized city.",
          tags: ["Training", "Capacity-building", "Western region"],
          review:
            "Regional team lead reviews the outline against the city's capacity assessment before delivery.",
          prompt: `# Role
You are a governance trainer at Janaagraha's Maharashtra and Western Region team.

# Task
Design a half-day training session outline on [Topic] for ULB officials in [City].

# Context
Audience: municipal administrative staff, mixed seniority. Tone: practical, locally relevant.

# Guardrail
Base session content on the pasted capacity assessment findings. Do not include a topic not flagged as a gap in the assessment.

# Format
Session objective → Agenda (timed) → Key concepts → Practical exercise → Takeaway checklist.

[Paste capacity assessment findings here]`,
        },
      ],
    },
    {
      id: "pan-india-advisory-pool",
      label: "🇮🇳 Pan-India State Advisory Pool",
      summary:
        "Prompts for new state engagement scoping, consultant deployment briefs, cross-state lessons learned, and engagement closure reports.",
      prompts: [
        {
          id: "state-programme-update",
          title: "State programme status update",
          audience: "Pan-India State Advisory Pool",
          scenario: "Drafting a concise internal update on programme progress for a flexibly deployed state engagement.",
          tags: ["State", "Programme", "Reporting"],
          review:
            "Advisory pool lead verifies all milestone dates and figures against the official programme log before submission.",
          prompt: `# Role
You are a programme manager at Janaagraha's Pan-India State Advisory Pool, currently deployed to [State].

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
          id: "new-state-engagement-scoping-note",
          title: "New state engagement scoping note",
          audience: "Pan-India State Advisory Pool",
          scenario:
            "Scoping a potential new advisory engagement with a smaller state urban unit (e.g. Assam, Haryana), based on an initial exploratory call.",
          tags: ["Scoping", "New engagement", "Advisory"],
          review:
            "Advisory pool lead verifies scope and feasibility against the call notes before drafting a formal proposal.",
          prompt: `# Role
You are a state advisory consultant at Janaagraha's Pan-India State Advisory Pool.

# Guardrail
Use only the pasted notes from the exploratory call. Do not commit to a scope or timeline not discussed on the call.

# Task
Draft a scoping note for a potential engagement with [State]'s urban department on [Reform Area].

# Format
Background (2 sentences) → Stated need (from call notes) → Proposed scope (bullets) → Resourcing required → Open questions before proposal.

[Paste exploratory call notes here]`,
        },
        {
          id: "consultant-deployment-brief",
          title: "Consultant deployment brief",
          audience: "Pan-India State Advisory Pool",
          scenario:
            "Briefing a consultant being deployed to a new state engagement on context, objectives, and key contacts.",
          tags: ["Deployment", "Consultant", "Briefing"],
          review:
            "Advisory pool lead confirms all contact details and objectives against the engagement file before the consultant is deployed.",
          prompt: `# Role
You are a state advisory coordinator at Janaagraha's Pan-India State Advisory Pool.

# Task
Draft a deployment brief for a consultant starting an engagement with [State]'s [Department].

# Context
Audience: incoming consultant, may be new to this state. Tone: practical, orienting.

# Guardrail
Use only the pasted engagement file. Do not state an objective or contact not in the file.

# Format
Engagement objective → Key contacts (table: Name | Role | Contact) → Current status → First two weeks' priorities.

[Paste engagement file here]`,
        },
        {
          id: "cross-state-lessons-learned-note",
          title: "Cross-state lessons learned note",
          audience: "Pan-India State Advisory Pool",
          scenario:
            "Synthesising lessons learned across multiple state advisory engagements for internal knowledge-sharing.",
          tags: ["Lessons learned", "Knowledge-sharing", "Cross-state"],
          review:
            "Advisory pool lead verifies each lesson against the source engagement reports before sharing internally.",
          prompt: `# Role
You are a state advisory consultant at Janaagraha's Pan-India State Advisory Pool synthesising lessons across engagements.

# Guardrail
Use only the pasted engagement reports. Do not generalise a lesson from a single engagement as universally applicable without noting it.

# Task
Synthesise lessons learned on [Theme — e.g. stakeholder buy-in, data availability] across the pasted engagement reports.

# Format
Table: Lesson | States it applies to | Supporting evidence | Recommendation for future engagements.

[Paste engagement reports here]`,
        },
        {
          id: "advisory-pool-engagement-closure-report",
          title: "Advisory engagement closure report",
          audience: "Pan-India State Advisory Pool",
          scenario:
            "Drafting a closure report summarising outcomes and handover items at the end of a state advisory engagement.",
          tags: ["Closure report", "Handover", "Advisory"],
          review:
            "Advisory pool lead verifies all outcomes against the engagement's milestone log before the closure report is finalised.",
          prompt: `# Role
You are a state advisory consultant at Janaagraha's Pan-India State Advisory Pool closing out an engagement.

# Task
Draft a closure report for the engagement with [State]'s [Department] covering [Engagement Period].

# Context
Audience: Janaagraha leadership and the state department. Tone: factual, balanced on successes and gaps.

# Guardrail
Use only the pasted milestone log and engagement notes. Do not claim an outcome not evidenced in the log.

# Format
Objectives vs. outcomes (table) → Key deliverables handed over → Open items for the department → Recommendation on future engagement.

[Paste milestone log and engagement notes here]`,
        },
      ],
    },
    {
      id: "municipal-law-policy-insights",
      label: "⚖️ Municipal Law and Policy Insights",
      summary:
        "Prompts for ASICS research, parastatal mapping, constitutional governance review, and cross-state municipal act comparison.",
      prompts: [
        {
          id: "asics-amendment",
          title: "ASICS amendment validation",
          audience: "Municipal Law and Policy Insights Team",
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
          audience: "Municipal Law and Policy Insights Team",
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
        {
          id: "constitutional-governance-review-note",
          title: "Constitutional governance review note",
          audience: "Municipal Law and Policy Insights Team",
          scenario:
            "Reviewing how a state's municipal governance structure aligns with the 74th Constitutional Amendment Act provisions.",
          tags: ["Constitutional", "74th CAA", "Governance review"],
          review:
            "Legal researcher verifies each alignment finding against the source Act and the state municipal act before publishing.",
          prompt: `# Role
You are a legal researcher at Janaagraha reviewing constitutional alignment of municipal governance.

# Guardrail
Use only the uploaded 74th CAA text and the state municipal act. Do not cite provisions from memory.

# Task
Review whether [State]'s municipal act provides for [Provision — e.g. ward committees, District Planning Committee, devolution of functions] as envisaged under the 74th CAA.

# Format
Table: 74th CAA provision | State act provision | Aligned? | Gap | Source clause (both).`,
        },
        {
          id: "state-municipal-act-comparison-note",
          title: "State municipal act comparison note",
          audience: "Municipal Law and Policy Insights Team",
          scenario:
            "Comparing a specific provision across two state municipal acts for a cross-state policy insight.",
          tags: ["Comparison", "Municipal Act", "Cross-state"],
          review:
            "Researcher verifies every cited clause against the original Act text before the comparison is used externally.",
          prompt: `# Role
You are a legal researcher at Janaagraha comparing municipal legislation across states.

# Guardrail
Use only the two uploaded Acts. Do not assume similarity where the text differs.

# Task
Compare how [State 1] and [State 2] legislate [Provision] in their municipal acts.

# Format
Table: Provision element | State 1 | State 2 | Key difference | Source clause (each).`,
        },
        {
          id: "asics-report-chapter-draft",
          title: "ASICS report chapter draft",
          audience: "Municipal Law and Policy Insights Team",
          scenario:
            "Drafting a chapter section of the Annual Survey of India's City-Systems (ASICS) report from validated questionnaire responses.",
          tags: ["ASICS", "Report drafting", "Annual survey"],
          review:
            "Lead researcher verifies every statistic and ranking against the validated questionnaire dataset before publication.",
          prompt: `# Role
You are a policy researcher at Janaagraha drafting a chapter of the ASICS report.

# Guardrail
Use only the pasted validated questionnaire dataset. Do not state a state's score or rank not present in the dataset.

# Task
Draft the [Pillar Name] chapter section covering findings for [State/City list].

# Context
Audience: ASICS report readers — researchers, policymakers, media. Tone: evidence-led, neutral.

# Format
Key finding (1 paragraph) → Table: State/City | Score | Rank | Notable provision → Methodology note (1 sentence, referencing the questionnaire).

[Paste validated questionnaire dataset here]`,
        },
      ],
    },
    {
      id: "climate-environment-governance",
      label: "🌱 Climate and Environment Governance",
      summary:
        "Prompts for Heat Action Plan reviews, climate budget tagging, disaster resilience checklists, and state climate policy alignment.",
      prompts: [
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
          id: "urban-heat-action-plan-review",
          title: "Urban Heat Action Plan review",
          audience: "Climate and Environment Governance Team",
          scenario:
            "Reviewing a city's Heat Action Plan for municipal-level implementation gaps before a state climate cell meeting.",
          tags: ["Heat Action Plan", "Review", "Municipal"],
          review:
            "Climate researcher verifies every gap against the source Heat Action Plan document before the state meeting.",
          prompt: `# Role
You are a climate governance researcher at Janaagraha reviewing a city's Heat Action Plan.

# Guardrail
Use only the uploaded Heat Action Plan document. Do not assume an implementation step not described in it.

# Task
Review the [City] Heat Action Plan for gaps in municipal-level implementation responsibility.

# Format
Table: Action item | Responsible agency named? | Funding source named? | Implementation gap | Recommendation.`,
        },
        {
          id: "climate-budget-tagging-note",
          title: "Climate budget tagging note",
          audience: "Climate and Environment Governance Team",
          scenario:
            "Tagging a ULB's budget line items as climate-relevant or not, to assess climate spending as a share of the total budget.",
          tags: ["Climate budget", "Tagging", "Municipal finance"],
          review:
            "Climate researcher verifies each tagging decision against the line item description before finalising the analysis.",
          prompt: `# Role
You are a climate governance researcher at Janaagraha tagging municipal budget data for climate relevance.

# Guardrail
Use only the pasted budget line items. Tag conservatively — only mark a line item climate-relevant if explicitly described as such.

# Task
Tag the pasted budget line items for [City], [Year] as climate-relevant (mitigation/adaptation) or not, and calculate the climate spending share.

# Format
Table: Line item | Amount | Climate-relevant? | Category (mitigation/adaptation/N/A) | Rationale.

[Paste budget line items here]`,
        },
        {
          id: "disaster-resilience-infrastructure-checklist",
          title: "Disaster resilience infrastructure checklist",
          audience: "Climate and Environment Governance Team",
          scenario:
            "Building a checklist of resilience standards (flood, cyclone) that municipal infrastructure projects should meet, from a state disaster management guideline.",
          tags: ["Disaster resilience", "Infrastructure", "Checklist"],
          review:
            "Climate researcher cross-checks each standard against the source guideline before sharing with infrastructure teams.",
          prompt: `# Role
You are a climate governance researcher at Janaagraha building a resilience checklist for municipal infrastructure.

# Guardrail
Use only the uploaded state disaster management guideline. Write "Not specified" where a standard is not covered.

# Task
Build a resilience checklist for [Infrastructure Type] projects in [Hazard-prone area type — flood/cyclone/heat].

# Format
Checklist: Requirement | Standard/threshold | Applicable hazard | Source clause.`,
        },
        {
          id: "state-climate-policy-alignment-brief",
          title: "State climate policy alignment brief",
          audience: "Climate and Environment Governance Team",
          scenario:
            "Checking whether a state's climate action plan addresses urban/municipal-level resilience, ahead of an advocacy note.",
          tags: ["State Climate Action Plan", "Alignment", "Advocacy"],
          review:
            "Climate researcher verifies the alignment assessment against the source SAPCC document before the advocacy note is drafted.",
          prompt: `# Role
You are a climate governance researcher at Janaagraha assessing state climate policy for urban relevance.

# Guardrail
Use only the uploaded State Action Plan on Climate Change (SAPCC). Do not infer an urban commitment not explicitly stated.

# Task
Assess whether [State]'s SAPCC addresses municipal-level climate resilience and identify gaps.

# Format
Sector | SAPCC commitment (if any) | Municipal relevance | Gap | Source page.`,
        },
      ],
    },
    {
      id: "urban-health-governance",
      label: "🏥 Urban Health Governance",
      summary:
        "Prompts for urban health service delivery analysis, ULB health mandate extraction, facility coverage gaps, and health budget review.",
      prompts: [
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
        {
          id: "ulb-health-mandate-extraction",
          title: "ULB health mandate extraction",
          audience: "Urban Health Governance Team",
          scenario:
            "Extracting a ULB's legal mandate and responsibilities for primary health service delivery from the state municipal act.",
          tags: ["ULB mandate", "Primary health", "Legal extraction"],
          review:
            "Researcher verifies every extracted mandate clause against the source municipal act before use.",
          prompt: `# Role
You are an urban health governance researcher at Janaagraha extracting ULB health mandates.

# Guardrail
Use only the uploaded municipal act. Write "Not specified" where the act is silent on a function.

# Task
Extract all provisions assigning primary health service responsibilities to the ULB in [State].

# Format
Table: Function | Mandated to ULB? | Provision text | Source clause.`,
        },
        {
          id: "health-facility-coverage-gap-note",
          title: "Health facility coverage gap note",
          audience: "Urban Health Governance Team",
          scenario:
            "Identifying gaps in primary health facility coverage (e.g. urban PHCs) relative to population norms, from a facility mapping dataset.",
          tags: ["Coverage gap", "Health facility", "Mapping"],
          review:
            "Researcher verifies coverage figures against the raw facility mapping dataset before flagging gaps to the health department.",
          prompt: `# Role
You are an urban health governance researcher at Janaagraha assessing health facility coverage.

# Guardrail
Use only the pasted facility mapping dataset and the stated population norm. Do not estimate population figures not in the source.

# Task
Identify coverage gaps in primary health facilities for [City/Ward] against the [Norm — e.g. 1 UPHC per 50,000 population].

# Format
Table: Ward/Zone | Population | Facilities present | Required per norm | Gap | Priority for new facility.

[Paste facility mapping dataset here]`,
        },
        {
          id: "urban-health-budget-review",
          title: "Urban health budget review",
          audience: "Urban Health Governance Team",
          scenario:
            "Reviewing how much of a ULB or state health budget is allocated to urban primary health, ahead of an advocacy brief.",
          tags: ["Health budget", "Municipal finance", "Review"],
          review:
            "Researcher verifies all allocation figures against the source budget document before the advocacy brief is drafted.",
          prompt: `# Role
You are an urban health governance researcher at Janaagraha reviewing health budget allocations.

# Guardrail
Use only the uploaded budget document. Do not estimate an allocation not explicitly itemised.

# Task
Review the share of [State/City] health budget allocated to urban primary health services for [Year].

# Format
Table: Budget head | Amount | % of total health budget | Urban-specific? | Notable gap.`,
        },
        {
          id: "health-data-reporting-workflow-brief",
          title: "Health data reporting workflow brief",
          audience: "Urban Health Governance Team",
          scenario:
            "Mapping how primary health service data flows from a ULB health facility up to the state health information system, from an SOP document.",
          tags: ["Data reporting", "Workflow", "Health information system"],
          review:
            "Researcher verifies each reporting step against the source SOP before sharing the workflow brief.",
          prompt: `# Role
You are an urban health governance researcher at Janaagraha mapping a health data reporting workflow.

# Guardrail
Use only the uploaded SOP document. Do not assume a reporting step not documented.

# Task
Map the data reporting workflow from ULB-run health facilities to the state health information system in [State].

# Format
Step | Responsible level (facility/ULB/district/state) | Frequency | System/form used | Source clause.`,
        },
      ],
    },
    {
      id: "research-mel",
      label: "📊 Research and MEL",
      summary:
        "Prompts for MEL framework drafting, theory of change review, data collection tool design, and cross-programme learning.",
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
          id: "theory-of-change-review-note",
          title: "Theory of change review note",
          audience: "Research and MEL Team",
          scenario:
            "Reviewing a programme's theory of change for logical consistency before it is finalised for donor reporting.",
          tags: ["Theory of change", "Review", "Programme design"],
          review: "MEL specialist verifies the causal logic against the programme document before sign-off.",
          prompt: `# Role
You are a monitoring, evaluation and learning specialist at Janaagraha reviewing a theory of change.

# Guardrail
Use only the pasted theory of change document. Do not add an assumption or pathway not stated.

# Task
Review the theory of change for [Programme Name] and flag any weak or missing causal links between activities and outcomes.

# Format
Table: Pathway (Activity → Output → Outcome) | Logic check (sound/weak/missing link) | Recommendation.

[Paste theory of change document here]`,
        },
        {
          id: "data-collection-tool-design-brief",
          title: "Data collection tool design brief",
          audience: "Research and MEL Team",
          scenario:
            "Designing a structured data collection tool (survey or checklist) aligned to specific MEL indicators.",
          tags: ["Data collection", "Tool design", "Indicators"],
          review: "MEL specialist checks every question against the indicator definition before the tool is piloted.",
          prompt: `# Role
You are a monitoring, evaluation and learning specialist at Janaagraha designing a data collection tool.

# Task
Design a [survey / observation checklist] to collect data for the indicators in the pasted list.

# Context
Respondents: [Type]. Mode: [Field / phone / digital]. Length target: under 15 minutes.

# Guardrail
Every question must map to a pasted indicator. Do not add a question without a corresponding indicator.

# Format
Table: Question | Indicator it serves | Response type | Notes for enumerator.

[Paste indicator list here]`,
        },
        {
          id: "annual-evaluation-report-summary",
          title: "Annual evaluation report summary",
          audience: "Research and MEL Team",
          scenario:
            "Summarising a full programme evaluation report into a short executive summary for leadership.",
          tags: ["Evaluation", "Executive summary", "Reporting"],
          review: "MEL lead checks the summary against the full evaluation report before it is shared with leadership or donors.",
          prompt: `# Role
You are a monitoring, evaluation and learning specialist at Janaagraha summarising an evaluation report.

# Guardrail
Use only the pasted evaluation report. Do not add a finding or recommendation not in the source.

# Task
Summarise the [Programme Name] evaluation report for [Year] into an executive summary.

# Format
Key findings (3-5 bullets) → Table: Recommendation | Priority | Owner → Overall verdict (1 paragraph).

[Paste evaluation report here]`,
        },
        {
          id: "cross-programme-learning-brief",
          title: "Cross-programme learning brief",
          audience: "Research and MEL Team",
          scenario:
            "Synthesising a learning theme that recurs across multiple programme evaluations, for an internal learning session.",
          tags: ["Learning", "Cross-programme", "Synthesis"],
          review: "MEL lead verifies each cited example against the source evaluation reports before the learning session.",
          prompt: `# Role
You are a monitoring, evaluation and learning specialist at Janaagraha synthesising cross-programme learning.

# Guardrail
Use only the pasted evaluation excerpts. Do not generalise a single programme's finding as organisation-wide without noting it.

# Task
Synthesise what the pasted evaluation excerpts say about [Theme — e.g. stakeholder engagement, data quality, sustainability].

# Format
Table: Programme | Finding | Strength of evidence | Implication for other programmes.

[Paste evaluation excerpts here]`,
        },
      ],
    },
    {
      id: "strategy-partnerships",
      label: "🤝 Strategy and Institutional Partnerships (S&P)",
      summary:
        "Prompts for donor impact notes, MoU drafting checklists, CSR pitch decks, partner due diligence, and multi-state MoU tracking.",
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
          id: "mou-drafting-checklist",
          title: "MoU drafting checklist",
          audience: "Strategy and Institutional Partnerships Team",
          scenario:
            "Building a checklist of clauses to confirm before a new institutional MoU is sent for signature.",
          tags: ["MoU", "Checklist", "Institutional partnerships"],
          review: "S&P team lead and legal reviewer confirm every clause before the MoU goes for signature.",
          prompt: `# Role
You are an institutional partnerships manager at Janaagraha preparing an MoU for signature.

# Guardrail
Use only the pasted draft MoU and the standard clause list. Flag any standard clause missing from the draft.

# Task
Check the draft MoU with [Partner Name] against Janaagraha's standard clause checklist.

# Format
Table: Standard clause | Present in draft? | Notes | Needs legal review?

[Paste draft MoU and standard clause list here]`,
        },
        {
          id: "csr-partnership-pitch-deck-outline",
          title: "CSR partnership pitch deck outline",
          audience: "Strategy and Institutional Partnerships Team",
          scenario: "Outlining a pitch deck to a prospective corporate CSR partner for a specific programme.",
          tags: ["CSR", "Pitch deck", "Partnership"],
          review: "S&P lead verifies all impact figures against approved MEL data before the deck is finalised.",
          prompt: `# Role
You are an institutional partnerships manager at Janaagraha preparing a CSR pitch.

# Task
Outline a pitch deck for [Corporate Partner] covering [Programme Name].

# Context
Audience: corporate CSR committee. Tone: concise, evidence-led, outcome-focused. Length: 8-10 slides.

# Guardrail
Use only the pasted approved programme data and MEL figures. Do not project future impact not grounded in the data.

# Format
Slide-by-slide outline: Slide title | Key content | Supporting data point (from source).

[Paste approved programme data here]`,
        },
        {
          id: "partner-due-diligence-summary",
          title: "Partner due diligence summary",
          audience: "Strategy and Institutional Partnerships Team",
          scenario:
            "Summarising due diligence findings on a prospective institutional partner before a partnership decision.",
          tags: ["Due diligence", "Risk", "Partnership"],
          review: "S&P lead verifies every flagged risk against the due diligence source documents before the partnership decision.",
          prompt: `# Role
You are an institutional partnerships manager at Janaagraha conducting partner due diligence.

# Guardrail
Use only the pasted due diligence documents. Do not state a risk not evidenced in the documents.

# Task
Summarise due diligence findings on [Prospective Partner] for the partnership review committee.

# Format
Organisational background (2 sentences) → Table: Risk area | Finding | Risk level | Mitigation/condition → Recommendation.

[Paste due diligence documents here]`,
        },
        {
          id: "multi-state-mou-status-tracker",
          title: "Multi-state MoU status tracker",
          audience: "Strategy and Institutional Partnerships Team",
          scenario:
            "Tracking the status (drafted, under review, signed) of multiple state MoUs for an internal partnerships review.",
          tags: ["MoU", "Tracker", "Multi-state"],
          review: "S&P lead confirms each status against the latest correspondence before the tracker is shared internally.",
          prompt: `# Role
You are an institutional partnerships manager at Janaagraha tracking MoU status across states.

# Guardrail
Use only the pasted correspondence log. Write "No update" for any MoU without a recent update.

# Task
Update the MoU status tracker for [State List] based on the pasted correspondence log.

# Format
Table: State/Partner | Status (drafted/under review/signed/expired) | Last update date | Next action | Owner.

[Paste correspondence log here]`,
        },
      ],
    },
    {
      id: "public-engagement-comms",
      label: "📣 Public Engagement and Communications",
      summary:
        "Prompts for LinkedIn posts, press releases, media query talking points, annual report narrative, and content calendars.",
      prompts: [
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
          id: "press-release-draft",
          title: "Press release draft",
          audience: "Public Engagement and Communications Team",
          scenario: "Drafting a press release announcing a new report, partnership, or programme milestone.",
          tags: ["Press release", "Media", "Comms"],
          review: "Communications lead and the relevant programme team verify all facts and quotes before release.",
          prompt: `# Role
You are a communications specialist at Janaagraha drafting a press release.

# Task
Draft a press release announcing [Milestone / Report / Partnership].

# Context
Audience: journalists covering urban governance and policy. Tone: factual, newsworthy, no hyperbole. Length: under 400 words.

# Guardrail
Use only the pasted source brief and any approved quotes. Do not invent a quote or statistic.

# Format
Headline → Dateline + lead paragraph → Supporting paragraphs with evidence → Quote (if provided) → Boilerplate "About Janaagraha" → Media contact.

[Paste source brief and approved quotes here]`,
        },
        {
          id: "media-query-response-brief",
          title: "Media query response brief",
          audience: "Public Engagement and Communications Team",
          scenario:
            "Preparing talking points to respond to a journalist's query on a sensitive or technical urban governance topic.",
          tags: ["Media query", "Talking points", "Response"],
          review: "Communications lead and the relevant subject expert sign off on talking points before they go to the journalist.",
          prompt: `# Role
You are a communications specialist at Janaagraha preparing a response to a media query.

# Guardrail
Use only the pasted background brief. Do not speculate on a fact not in the brief — mark it as "needs expert input" instead.

# Task
Draft talking points to respond to a journalist asking about [Topic/Query].

# Format
Key message (1 sentence) → Supporting points (bullets, with source) → What not to say → Points needing expert input before responding.

[Paste background brief here]`,
        },
        {
          id: "annual-report-narrative-section",
          title: "Annual report narrative section",
          audience: "Public Engagement and Communications Team",
          scenario: "Drafting a narrative section of the annual report describing a programme's work and impact for the year.",
          tags: ["Annual report", "Narrative", "Impact"],
          review: "Communications team and programme lead verify every figure and story detail before the annual report goes to print.",
          prompt: `# Role
You are a communications specialist at Janaagraha drafting an annual report section.

# Task
Write the [Programme Name] narrative section of the annual report for [Year].

# Context
Audience: donors, board, public readers. Tone: engaging but factual. Length: under 350 words.

# Guardrail
Use only the pasted programme summary and approved MEL figures. Do not state an outcome not in the source.

# Format
Opening narrative (2-3 sentences) → Key activities (bullets) → Impact (table: Indicator | Result) → Forward look (1 sentence).

[Paste programme summary and MEL figures here]`,
        },
        {
          id: "social-media-content-calendar",
          title: "Social media content calendar",
          audience: "Public Engagement and Communications Team",
          scenario: "Building a content calendar for an upcoming campaign or report launch across social media channels.",
          tags: ["Social media", "Content calendar", "Campaign"],
          review: "Communications lead reviews all claims and dates against the campaign brief before scheduling posts.",
          prompt: `# Role
You are a communications specialist at Janaagraha planning social media content.

# Task
Build a [Number]-week content calendar for the [Campaign/Report Launch Name].

# Context
Channels: [LinkedIn / X / Instagram]. Audience: policymakers, civil society, donors, general public.

# Guardrail
Use only the pasted campaign brief for key messages and dates. Do not introduce a statistic not in the brief.

# Format
Table: Date | Channel | Post theme | Key message | Format (text/image/video).

[Paste campaign brief here]`,
        },
      ],
    },
    {
      id: "people-culture-operations",
      label: "👥 People, Culture, and Operations",
      summary:
        "Prompts for onboarding checklists, policy update communications, performance review feedback, SOPs, and job descriptions.",
      prompts: [
        {
          id: "onboarding-checklist-new-hire",
          title: "New hire onboarding checklist",
          audience: "People, Culture, and Operations Team",
          scenario: "Building a structured onboarding checklist for a new hire joining a programme team.",
          tags: ["Onboarding", "HR", "Checklist"],
          review: "HR coordinator confirms every step against the current onboarding SOP before sending it to the new hire's manager.",
          prompt: `# Role
You are an HR coordinator at Janaagraha's People, Culture, and Operations team.

# Guardrail
Use only the uploaded onboarding SOP. Do not add a step not in the SOP.

# Task
Build a first-30-days onboarding checklist for a new hire joining [Team/Role].

# Format
Week | Task | Owner (HR/manager/IT/new hire) | Status (to be filled in).`,
        },
        {
          id: "policy-update-staff-communication",
          title: "Policy update staff communication",
          audience: "People, Culture, and Operations Team",
          scenario:
            "Drafting an internal communication explaining a change to an HR or operations policy (e.g. leave policy, travel reimbursement) to all staff.",
          tags: ["Policy update", "Internal communication", "HR"],
          review: "HR lead verifies every detail against the approved policy document before the communication is sent to all staff.",
          prompt: `# Role
You are an HR coordinator at Janaagraha's People, Culture, and Operations team.

# Task
Draft a staff-wide communication announcing the update to [Policy Name].

# Context
Audience: all staff. Tone: clear, reassuring, easy to scan.

# Guardrail
Use only the pasted approved policy document. Do not state an effective date or detail not in the document.

# Format
What's changing (2-3 bullets) → Why → Effective date → What staff need to do → Who to contact with questions.

[Paste approved policy document here]`,
        },
        {
          id: "performance-review-feedback-draft",
          title: "Performance review feedback draft",
          audience: "People, Culture, and Operations Team",
          scenario:
            "Helping a manager structure written feedback for a team member's performance review, based on the manager's notes.",
          tags: ["Performance review", "Feedback", "HR"],
          review:
            "Manager reviews and personalises the draft before sharing it with the team member — this is a structuring aid, not a substitute for the manager's own judgment.",
          prompt: `# Role
You are an HR partner at Janaagraha helping a manager structure performance review feedback.

# Guardrail
Use only the pasted manager notes. Do not invent an example or achievement not mentioned.

# Task
Structure the pasted notes on [Team Member]'s performance into a balanced review draft.

# Format
Strengths (bullets, with example from notes) → Areas for growth (bullets, constructive framing) → Goals for next period → Overall summary (2-3 sentences).

[Paste manager notes here]`,
        },
        {
          id: "internal-sop-draft",
          title: "Internal SOP draft",
          audience: "People, Culture, and Operations Team",
          scenario:
            "Drafting a standard operating procedure for a recurring internal process (e.g. travel booking, expense reimbursement, asset issuance).",
          tags: ["SOP", "Operations", "Process documentation"],
          review: "Operations lead verifies every step against actual current practice before the SOP is published.",
          prompt: `# Role
You are an operations coordinator at Janaagraha documenting an internal process.

# Task
Draft a standard operating procedure for [Process Name].

# Context
Audience: all staff who will follow this process. Tone: clear, step-by-step.

# Guardrail
Use only the pasted process notes from the process owner. Do not add a step not described.

# Format
Purpose (1 sentence) → Scope (who this applies to) → Steps (numbered) → Forms/tools required → Escalation contact.

[Paste process notes here]`,
        },
        {
          id: "job-description-draft",
          title: "Job description draft",
          audience: "People, Culture, and Operations Team",
          scenario:
            "Drafting a job description for an open role based on a hiring manager's notes on responsibilities and requirements.",
          tags: ["Recruitment", "Job description", "Hiring"],
          review: "Hiring manager reviews and approves the final draft before it is posted externally.",
          prompt: `# Role
You are an HR coordinator at Janaagraha drafting a job description.

# Task
Draft a job description for [Role Title] in [Team Name], based on the pasted hiring manager notes.

# Context
Audience: external job seekers. Tone: clear, welcoming, specific about impact.

# Guardrail
Use only the pasted hiring manager notes for responsibilities and requirements. Do not add a requirement not mentioned.

# Format
Role summary (2-3 sentences) → Key responsibilities (bullets) → Requirements (bullets, must-have vs. good-to-have) → How to apply.

[Paste hiring manager notes here]`,
        },
      ],
    },
  ],
};
