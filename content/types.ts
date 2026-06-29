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

export type CheatsheetCommand = {
  command: string;
  description: string;
};

export type CheatsheetGroup = {
  id: string;
  label: string;
  emoji: string;
  level?: string;
  commands: CheatsheetCommand[];
};

export type ToolCard = {
  id: string;
  name: string;
  emoji: string;
  tier: "Pro" | "Advanced" | "Plus" | "Free";
  tagline: string;
  bestFor: string[];
  notFor: string[];
  setupTip: string;
  pilotAccess: boolean;
};

export type DosDontsItem = {
  type: "do" | "dont" | "tip";
  text: string;
  detail?: string;
};

export type DosDontsGroup = {
  id: string;
  label: string;
  items: DosDontsItem[];
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
    }
  | {
      id: string;
      eyebrow: string;
      title: string;
      summary: string;
      kind: "cheatsheet";
      groups: CheatsheetGroup[];
    }
  | {
      id: string;
      eyebrow: string;
      title: string;
      summary: string;
      kind: "tools";
      tools: ToolCard[];
    }
  | {
      id: string;
      eyebrow: string;
      title: string;
      summary: string;
      kind: "dosdonts";
      groups: DosDontsGroup[];
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
};
