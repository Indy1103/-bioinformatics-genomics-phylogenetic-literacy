import type {
  ContentSection,
  DefinitionListItem,
  HeroContent,
  ResourceLink
} from "@/types/content";

type IntroBlock = {
  title: string;
  paragraphs: string[];
};

type QuestionPrompt = {
  question: string;
  destination: string;
  href: string;
};

export const heroContent: HeroContent = {
  eyebrow: "Understanding outbreaks and vaccine updates in modern healthcare",
  title: "Understanding Phylogenetics in Medical Training",
  subtitle:
    "A practical guide to how phylogenetics, genomics, and bioinformatics shape outbreak updates, surveillance, and patient-facing public health decisions."
};

export const introBlocks: IntroBlock[] = [
  {
    title: "Why?",
    paragraphs: [
      "As medical students, we hear about outbreaks, variants, transmission clusters, vaccine updates, surveillance, PrEP, PEP, and public health responses. Those concepts are often shaped by phylogenetics, genomics, and bioinformatics, but the language can blur together.",
      "This guide breaks those ideas apart, explains the basics, and points to resources that are actually useful. The goal is not to make everyone an expert. It is to make these topics easier to follow and easier to connect back to patient care."
    ]
  },
  {
    title: "Why This Matters",
    paragraphs: [
      "Students are often interested in outbreak prevention, vaccination, harm reduction, PrEP, and safe injection sites. To understand those topics well, it also helps to understand the epidemiology behind them, including how pathogens spread, how outbreaks are tracked, and how genomic data get used in practice.",
      "Without that foundation, it is easy to overread what the data show or ignore it because it feels too technical. This page is designed as a starting point that makes the language more practical and easier to use."
    ]
  }
];

const phylogeneticsDefinitions: DefinitionListItem[] = [
  {
    term: "Phylogenetic tree",
    description: "A diagram showing how closely related samples are genetically."
  },
  {
    term: "Branch length",
    description:
      "Usually reflects how much genetic change has happened, and sometimes also reflects time."
  },
  {
    term: "Clade",
    description: "A group of related sequences that share a common ancestor."
  },
  {
    term: "Cluster",
    description:
      "A group of closely related samples that may reflect linked transmission or a shared outbreak setting."
  }
];

const genomicsDefinitions: DefinitionListItem[] = [
  {
    term: "Genomic surveillance",
    description: "Tracking pathogens over time using their genetic information."
  },
  {
    term: "Variant / lineage",
    description: "A genetically distinct version or branch of a pathogen."
  },
  {
    term: "Mutation",
    description: "A change in the genetic code."
  },
  {
    term: "Resistance mutation",
    description: "A mutation that may affect treatment response."
  },
  {
    term: "Antigenic change",
    description:
      "A change that may affect immune recognition and, in some cases, vaccine match."
  }
];

const bioinformaticsDefinitions: DefinitionListItem[] = [
  {
    term: "Sequence analysis",
    description: "Comparing genomes or gene sequences."
  },
  {
    term: "Alignment",
    description: "Lining sequences up so differences and similarities can be identified."
  },
  {
    term: "Pipeline",
    description: "A series of computational steps used to process and analyze data."
  },
  {
    term: "Data visualization",
    description:
      "Turning data into figures, trees, dashboards, and summaries that people can interpret."
  }
];

const phylogeneticsResources: ResourceLink[] = [
  {
    label: "Nextstrain: How to interpret the phylogenetic trees",
    href: "https://docs.nextstrain.org/en/latest/learn/interpret/how-to-read-a-tree.html",
    note: "A simple explanation of how to read a tree."
  },
  {
    label: "Public Health Ontario Nextstrain",
    href: "https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/COVID-19-Data-Surveillance/Nextstrain",
    note: "A public-health example of phylogenetics in practice."
  }
];

const genomicsResources: ResourceLink[] = [
  {
    label: "NCCID Disease Debriefs",
    href: "https://nccid.ca/disease-debriefs/",
    note: "A quick way to get up to speed on an outbreak or pathogen."
  },
  {
    label: "FluWatch+",
    href: "https://www.canada.ca/en/public-health/services/diseases/flu-influenza/influenza-surveillance/weekly-influenza-reports.html",
    note: "Weekly and annual respiratory virus reports for Canada."
  },
  {
    label: "Canadian Immunization Guide",
    href: "https://www.canada.ca/en/public-health/services/canadian-immunization-guide.html",
    note: "Current vaccine guidance."
  },
  {
    label: "Canadian Immunization Guide: Updates",
    href: "https://www.canada.ca/en/public-health/services/canadian-immunization-guide/updates.html",
    note: "A quick view of recent changes."
  },
  {
    label: "PHAC disease-specific pages for health professionals",
    href: "https://www.canada.ca/en/public-health/services/diseases.html",
    note: "Disease-specific guidance for reporting, testing, prevention, and next steps."
  },
  {
    label: "CATIE PrEP",
    href: "https://www.catie.ca/prevention-prevention-methods/hiv-pre-exposure-prophylaxis-prep",
    note: "Practical HIV prevention guidance."
  },
  {
    label: "CATIE PEP",
    href: "https://www.catie.ca/hiv-post-exposure-prophylaxis-pep",
    note: "Post-exposure HIV prevention guidance."
  }
];

const bioinformaticsResources: ResourceLink[] = [
  {
    label: "Bioinformatics.ca",
    href: "https://bioinformatics.ca/",
    note: "A broad introduction to bioinformatics and training."
  },
  {
    label: "Bioinformatics.ca YouTube",
    href: "https://www.youtube.com/@bioinformaticsdotca",
    note: "Workshop-style material for self-study."
  }
];

export const sections: ContentSection[] = [
  {
    id: "phylogenetics",
    title: "Phylogenetics",
    intro: [
      "Phylogenetics is the study of how organisms or pathogen samples are related to each other over time. In infectious disease, that usually means comparing sequences and building a tree that shows how closely related different samples are.",
      "A phylogenetic tree is not the same thing as a contact-tracing diagram. It can show that samples are genetically close, but it does not prove direct person-to-person transmission on its own."
    ],
    whyItMatters: [
      "Phylogenetics helps us understand whether cases may be part of the same cluster, whether a lineage is expanding, and how a pathogen is changing over time.",
      "That makes it useful in outbreak work, but only when it is interpreted carefully and in context."
    ],
    definitions: phylogeneticsDefinitions,
    resources: phylogeneticsResources
  },
  {
    id: "genomics",
    title: "Genomics and Genomic Surveillance",
    intro: [
      "Genomics is the study of genetic material. In infectious disease, genomic surveillance means using sequencing data to track how pathogens are changing and spreading in populations."
    ],
    whyItMatters: [
      "This is where much of the language we hear during outbreaks comes from: variants, lineages, mutations, clusters, resistance, and antigenic change.",
      "Genomic surveillance helps public health teams track what is circulating, identify important changes, and connect lab findings back to population-level trends."
    ],
    definitions: genomicsDefinitions,
    resources: genomicsResources
  },
  {
    id: "bioinformatics",
    title: "Bioinformatics",
    intro: [
      "Bioinformatics is the computational side of this work. It includes the tools and methods used to store, analyze, and interpret biological data."
    ],
    whyItMatters: [
      "Most medical students will not run sequence analyses themselves, but it still helps to understand bioinformatics because it explains how raw sequence data become trees, lineage assignments, surveillance figures, and outbreak reports.",
      "Bioinformatics is the bridge between raw data and the final results we see in dashboards, papers, and public health summaries."
    ],
    definitions: bioinformaticsDefinitions,
    resources: bioinformaticsResources
  }
];

export const synthesisPoints: string[] = [
  "Bioinformatics processes the data.",
  "Genomics tells us what is changing in the pathogen.",
  "Phylogenetics helps us understand how samples are related and how spread is inferred."
];

export const guidingLine =
  "In one line: bioinformatics processes the data, genomics shows the changes, and phylogenetics helps us understand relatedness and spread.";

export const questionPrompts: QuestionPrompt[] = [
  {
    question: "I want a quick overview of an outbreak or pathogen",
    destination: "NCCID Disease Debriefs",
    href: "https://nccid.ca/disease-debriefs/"
  },
  {
    question: "I want to know what is circulating right now in Canada",
    destination: "FluWatch+",
    href: "https://www.canada.ca/en/public-health/services/diseases/flu-influenza/influenza-surveillance/weekly-influenza-reports.html"
  },
  {
    question: "I want to check vaccine guidance or recent updates",
    destination: "Canadian Immunization Guide and the updates page",
    href: "https://www.canada.ca/en/public-health/services/canadian-immunization-guide.html"
  },
  {
    question: "I want practical disease-specific guidance",
    destination: "PHAC’s disease-specific pages for health professionals",
    href: "https://www.canada.ca/en/public-health/services/diseases.html"
  },
  {
    question: "I want to understand how to read a pathogen tree",
    destination: "Nextstrain’s tree interpretation guide",
    href: "https://docs.nextstrain.org/en/latest/learn/interpret/how-to-read-a-tree.html"
  },
  {
    question: "I want to see what phylogenetics looks like in public health practice",
    destination: "Public Health Ontario Nextstrain",
    href: "https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/COVID-19-Data-Surveillance/Nextstrain"
  },
  {
    question: "I want practical HIV prevention resources",
    destination: "CATIE",
    href: "https://www.catie.ca/"
  },
  {
    question: "I want to learn more about the computational side",
    destination: "Bioinformatics.ca and its YouTube channel",
    href: "https://bioinformatics.ca/"
  }
];
