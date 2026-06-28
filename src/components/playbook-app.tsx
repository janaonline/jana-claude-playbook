"use client";

import Image from "next/image";
import { flushSync } from "react-dom";
import {
  BookOpen,
  Check,
  ChevronRight,
  Clipboard,
  Copy,
  Database,
  FileText,
  Menu,
  Moon,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type {
  CheatsheetGroup,
  ComparisonTable,
  PlaybookContent,
  PlaybookSection,
  PromptExample,
  TeamPromptGroup,
} from "../../content/types";

type Theme = "light" | "dark";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>;
  };
};

type ViewTransitionAnimationOptions = KeyframeAnimationOptions & {
  pseudoElement?: string;
};

const iconForSection = {
  essentials: Sparkles,
  setup: BookOpen,
  safety: ShieldCheck,
  tokens: Zap,
  "commands-reference": Zap,
  prompting: FileText,
  instructions: Clipboard,
  "team-prompts": Database,
  sources: BookOpen,
} as const;

function includesTerm(value: string, term: string) {
  return value.toLowerCase().includes(term);
}

function fuzzyMatch(needle: string, haystack: string): boolean {
  if (!needle) return true;
  const n = needle.toLowerCase();
  const h = haystack.toLowerCase();
  let ni = 0;
  for (let i = 0; i < h.length && ni < n.length; i++) {
    if (h[i] === n[ni]) ni++;
  }
  return ni === n.length;
}

function promptMatches(prompt: PromptExample, term: string) {
  return [
    prompt.title,
    prompt.audience,
    prompt.scenario,
    prompt.prompt,
    prompt.review,
    prompt.tags.join(" "),
  ].some((value) => includesTerm(value, term));
}

function sectionMatches(section: PlaybookSection, term: string) {
  if (!term) return true;
  const base = [section.title, section.summary, section.eyebrow].some((value) =>
    includesTerm(value, term),
  );
  if (base) return true;
  if (section.kind === "principles") {
    return section.items.some((item) =>
      [item.title, item.detail].some((value) => includesTerm(value, term)),
    );
  }
  if (section.kind === "table") {
    return [
      section.table.title,
      section.table.columns.join(" "),
      section.table.rows.flat().join(" "),
    ].some((value) => includesTerm(value, term));
  }
  if (section.kind === "prompts") {
    return section.prompts.some((prompt) => promptMatches(prompt, term));
  }
  if (section.kind === "cheatsheet") {
    return section.groups.some((group) =>
      [group.label, ...group.commands.flatMap((cmd) => [cmd.command, cmd.description])].some(
        (value) => includesTerm(value, term),
      ),
    );
  }
  return [section.instruction.title, section.instruction.description, section.instruction.prompt].some(
    (value) => includesTerm(value, term),
  );
}

function PromptText({ text }: { text: string }) {
  return (
    <code className="block font-mono text-[0.78rem] leading-6 text-[var(--code-text)]">
      {text.split("\n").map((line, index) => (
        <span key={`${line}-${index}`}>
          {line || " "}
          {index < text.split("\n").length - 1 ? <br /> : null}
        </span>
      ))}
    </code>
  );
}

function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className="icon-button" type="button" onClick={copyValue} title={label}>
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span>{copied ? "Copied" : label}</span>
    </button>
  );
}

function PromptCard({ prompt }: { prompt: PromptExample }) {
  return (
    <article className="prompt-card">
      <div className="prompt-card__header">
        <div>
          <p className="eyebrow">{prompt.audience}</p>
          <h3>{prompt.title}</h3>
        </div>
        <CopyButton value={prompt.prompt} />
      </div>
      <p className="muted">{prompt.scenario}</p>
      <div className="tag-row">
        {prompt.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="prompt-code">
        <PromptText text={prompt.prompt} />
      </div>
      <div className="review-note">
        <ShieldCheck size={16} />
        <span>{prompt.review}</span>
      </div>
    </article>
  );
}

function Comparison({ table }: { table: ComparisonTable }) {
  return (
    <div className="comparison">
      <h3>{table.title}</h3>
      <div className="table-shell">
        <table>
          <thead>
            <tr>
              {table.columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join("|")}>
                {row.map((cell, index) => (
                  <td key={`${cell}-${index}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionContent({ section }: { section: PlaybookSection }) {
  if (section.kind === "principles") {
    return (
      <div className="principle-grid">
        {section.items.map((item, index) => (
          <div className="principle" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    );
  }

  if (section.kind === "table") {
    return <Comparison table={section.table} />;
  }

  if (section.kind === "prompts") {
    return (
      <div className="prompt-grid">
        {section.prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    );
  }

  if (section.kind === "cheatsheet") {
    return <Cheatsheet groups={section.groups} />;
  }

  return (
    <div className="instruction-card">
      <div>
        <p className="eyebrow">{section.instruction.characterLimit} character limit</p>
        <h3>{section.instruction.title}</h3>
        <p className="muted">{section.instruction.description}</p>
      </div>
      <div className="instruction-meta">
        <span>{section.instruction.prompt.length} characters</span>
        <CopyButton value={section.instruction.prompt} label="Copy prompt" />
      </div>
      <div className="prompt-code prompt-code--large">
        <PromptText text={section.instruction.prompt} />
      </div>
    </div>
  );
}

function Cheatsheet({ groups }: { groups: CheatsheetGroup[] }) {
  const [activeGroup, setActiveGroup] = useState(groups[0]?.id ?? "");
  const group = groups.find((g) => g.id === activeGroup) ?? groups[0];

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Command categories">
        {groups.map((g) => (
          <button
            aria-selected={g.id === activeGroup}
            className={g.id === activeGroup ? "tab active" : "tab"}
            key={g.id}
            onClick={() => setActiveGroup(g.id)}
            role="tab"
            type="button"
          >
            {g.emoji} {g.label}
          </button>
        ))}
      </div>
      {group ? (
        <div className="team-panel">
          {group.level ? <p className="team-summary">{group.level}</p> : null}
          <div className="cheatsheet-grid">
            {group.commands.map((cmd) => (
              <div className="cheatsheet-card" key={cmd.command}>
                <code className="cheatsheet-cmd">{cmd.command}</code>
                <span className="cheatsheet-desc">{cmd.description}</span>
                <CopyButton value={cmd.command} label="Copy" />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

function TeamPrompts({
  groups,
  term,
  activeTeam,
  setActiveTeam,
}: {
  groups: TeamPromptGroup[];
  term: string;
  activeTeam: string;
  setActiveTeam: (id: string) => void;
}) {
  const [teamSearch, setTeamSearch] = useState("");

  const matchingGroups = useMemo(() => {
    let result = groups;
    if (term) {
      result = result
        .map((group) => ({
          ...group,
          prompts: group.prompts.filter((prompt) => promptMatches(prompt, term)),
        }))
        .filter(
          (group) =>
            includesTerm(group.label, term) ||
            includesTerm(group.summary, term) ||
            group.prompts.length > 0,
        );
    }
    if (teamSearch.trim()) {
      result = result.filter((group) => fuzzyMatch(teamSearch.trim(), group.label));
    }
    return result;
  }, [groups, term, teamSearch]);

  const activeGroup = matchingGroups.find((group) => group.id === activeTeam) ?? matchingGroups[0];

  return (
    <section className="content-section" id="team-prompts">
      <div className="section-head">
        <p className="eyebrow">Team library</p>
        <h2>Team-specific prompting</h2>
        <p>
          Copy-ready examples for common Janaagraha workflows. Each example includes a review
          checkpoint so the output never skips human judgement.
        </p>
      </div>
      <div className="team-search-box">
        <Search size={14} />
        <input
          aria-label="Search teams"
          placeholder="Find a team…"
          value={teamSearch}
          onChange={(event) => {
            const value = event.target.value;
            setTeamSearch(value);
            const first = groups.find((group) => fuzzyMatch(value.trim(), group.label));
            if (first) setActiveTeam(first.id);
          }}
        />
        {teamSearch ? (
          <button type="button" onClick={() => setTeamSearch("")} aria-label="Clear search">
            <X size={12} />
          </button>
        ) : null}
      </div>
      <div className="tabs" role="tablist" aria-label="Team prompt groups">
        {matchingGroups.map((group) => (
          <button
            aria-selected={group.id === activeTeam}
            className={group.id === activeTeam ? "tab active" : "tab"}
            key={group.id}
            onClick={() => setActiveTeam(group.id)}
            role="tab"
            type="button"
          >
            {group.label}
          </button>
        ))}
      </div>
      {activeGroup ? (
        <div className="team-panel">
          <p className="team-summary">{activeGroup.summary}</p>
          <div className="prompt-grid">
            {activeGroup.prompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </div>
      ) : (
        <p className="empty-state">No team prompts matched your search.</p>
      )}
    </section>
  );
}

export function PlaybookApp({ content }: { content: PlaybookContent }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("jana-theme") === "light" ? "light" : "dark";
  });
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeTeam, setActiveTeam] = useState(content.teamPromptGroups[0]?.id ?? "");

  function goToTeam(teamId: string) {
    setActiveTeam(teamId);
    document.getElementById("team-prompts")?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("jana-theme", theme);
  }, [theme]);

  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const term = query.trim().toLowerCase();
  const visibleSections = content.sections.filter((section) => sectionMatches(section, term));
  const allNav = [...content.nav];

  function applyTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("jana-theme", nextTheme);
    flushSync(() => {
      setTheme(nextTheme);
    });
  }

  function toggleThemeWithTransition(event: React.MouseEvent<HTMLButtonElement>) {
    const targetTheme: Theme = theme === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const viewTransitionDocument = document as ViewTransitionDocument;

    if (reduceMotion || !viewTransitionDocument.startViewTransition) {
      applyTheme(targetTheme);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = viewTransitionDocument.startViewTransition(() => {
      applyTheme(targetTheme);
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 1000,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          } as ViewTransitionAnimationOptions,
        );
      })
      .catch(() => undefined);
  }

  return (
    <div className="app-shell">
      <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Janaagraha playbook home">
          <Image
            className="brand-logo brand-logo--source"
            src="/brand/janaagraha-logo.svg"
            alt="Janaagraha"
            width={175}
            height={29}
            priority
          />
          <span className="brand-logo brand-logo--yellow" aria-hidden="true" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {allNav.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="topbar-actions">
          <button
            className="round-button"
            type="button"
            title="Toggle theme"
            onClick={toggleThemeWithTransition}
          >
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            className="round-button mobile-only"
            type="button"
            title="Open navigation"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="mobile-menu">
          <button className="round-button" type="button" title="Close navigation" onClick={() => setMenuOpen(false)}>
            <X size={18} />
          </button>
          {allNav.map((item) => (
            <a href={`#${item.id}`} key={item.id} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="mobile-menu-subheading">Teams</div>
          {content.teamPromptGroups.map((group) => (
            <a
              href="#team-prompts"
              key={group.id}
              onClick={(event) => {
                event.preventDefault();
                setMenuOpen(false);
                goToTeam(group.id);
              }}
            >
              {group.label}
            </a>
          ))}
        </div>
      ) : null}

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-badge">{content.hero.badge}</p>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.summary}</p>
            <div className="hero-actions">
              <a className="primary-action" href="#instructions">
                Copy instruction prompt
                <ChevronRight size={17} />
              </a>
              <a className="secondary-action" href="#team-prompts">
                Browse team prompts
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <p className="eyebrow">{content.updated}</p>
            <h2>{content.title}</h2>
            <p>{content.subtitle}</p>
            <div className="metric-grid">
              {content.hero.metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="workspace">
          <aside className="outline" aria-label="Section outline">
            <div className="search-box">
              <Search size={17} />
              <input
                aria-label="Search playbook"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections, prompts, teams"
                value={query}
              />
            </div>
            <div className="outline-links">
              {allNav.map((item) => {
                const Icon = iconForSection[item.id as keyof typeof iconForSection] ?? BookOpen;
                return (
                  <a href={`#${item.id}`} key={item.id}>
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
            <div className="outline-submenu">
              <p className="outline-submenu-label">Teams</p>
              {content.teamPromptGroups.map((group) => (
                <a
                  href="#team-prompts"
                  key={group.id}
                  className={`outline-sublink${activeTeam === group.id ? " active" : ""}`}
                  onClick={(event) => {
                    event.preventDefault();
                    goToTeam(group.id);
                  }}
                >
                  {group.label}
                </a>
              ))}
            </div>
          </aside>

          <div className="content-flow">
            {visibleSections.map((section) => {
              const Icon = iconForSection[section.id as keyof typeof iconForSection] ?? BookOpen;
              return (
                <section className="content-section" id={section.id} key={section.id}>
                  <div className="section-head">
                    <p className="eyebrow">
                      <Icon size={15} />
                      {section.eyebrow}
                    </p>
                    <h2>{section.title}</h2>
                    <p>{section.summary}</p>
                  </div>
                  <SectionContent section={section} />
                </section>
              );
            })}

            {visibleSections.length === 0 ? (
              <div className="empty-state">
                No main sections matched your search. Try a team label, source topic, or prompt keyword.
              </div>
            ) : null}

            <TeamPrompts
              groups={content.teamPromptGroups}
              term={term}
              activeTeam={activeTeam}
              setActiveTeam={setActiveTeam}
            />

            <section className="content-section" id="sources">
              <div className="section-head">
                <p className="eyebrow">
                  <BookOpen size={15} />
                  Source refresh
                </p>
                <h2>References used for the refreshed guidance</h2>
                <p>
                  These links are kept in content so a future owner can update guidance without
                  changing the app shell.
                </p>
              </div>
              <div className="source-list">
                {content.sources.map((source) => (
                  <a href={source.href} key={source.href} target="_blank" rel="noreferrer">
                    <span>{source.label}</span>
                    <ChevronRight size={16} />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
