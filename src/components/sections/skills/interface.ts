type SkillCategory = {
  category: string;
  items: string[];
};

export type SkillsSectionProps = {
  title: string;
  subtitle: string;
  categories: SkillCategory[];
};
