export type SourceLink = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type Principle = {
  title: string;
  detail: string;
};

export type ComparisonTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

export type PromptExample = {
  id: string;
  title: string;
  audience: string;
  scenario: string;
  prompt: string;
  review: string;
  tags: string[];
};

export type InstructionPrompt = {
  title: string;
  description: string;
  characterLimit: number;
  prompt: string;
};

export type TeamPromptGroup = {
  id: string;
  label: string;
  summary: string;
  prompts: PromptExample[];
};

export type PlaybookSection =
  | {
      id: string;
      eyebrow: string;
      title: string;
      summary: string;
      kind: "principles";
      items: Principle[];
    }
  | {
      id: string;
      eyebrow: string;
      title: string;
      summary: string;
      kind: "table";
      table: ComparisonTable;
    }
  | {
      id: string;
      eyebrow: string;
      title: string;
      summary: string;
      kind: "prompts";
      prompts: PromptExample[];
    }
  | {
      id: string;
      eyebrow: string;
      title: string;
      summary: string;
      kind: "instruction";
      instruction: InstructionPrompt;
    };

export type PlaybookContent = {
  title: string;
  subtitle: string;
  updated: string;
  nav: Array<{ id: string; label: string }>;
  hero: {
    badge: string;
    title: string;
    summary: string;
    metrics: Metric[];
  };
  sections: PlaybookSection[];
  teamPromptGroups: TeamPromptGroup[];
  sources: SourceLink[];
};
