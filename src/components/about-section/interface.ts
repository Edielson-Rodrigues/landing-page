type EducationItem = {
  degree: string;
  institution: string;
};

export type AboutSectionProps = {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  projectsCompletedLabel: string;
  projectsCompletedValue: string;
  yearsExperienceLabel: string;
  yearsExperienceValue: string;
  educationTitle: string;
  educationItems: EducationItem[];
  certificationsTitle: string;
  certifications: string[];
};
