type Project = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

export type PortfolioSectionProps = {
  title: string;
  subtitle: string;
  projects: Project[];
};
