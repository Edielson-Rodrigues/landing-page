type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export type ExperienceSectionProps = {
  title: string;
  subtitle: string;
  items: ExperienceItem[];
};
