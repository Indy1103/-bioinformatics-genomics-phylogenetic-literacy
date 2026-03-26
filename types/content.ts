export type ResourceLink = {
  label: string;
  href: string;
  note: string;
};

export type DefinitionListItem = {
  term: string;
  description: string;
};

export type ContentSection = {
  id: string;
  title: string;
  intro: string[];
  whyItMatters: string[];
  definitions: DefinitionListItem[];
  resources: ResourceLink[];
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
};
