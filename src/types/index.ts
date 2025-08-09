export interface Translation {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    description: string;
    viewPortfolio: string;
    getInTouch: string;
  };
  about: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    projectsCompleted: string;
    yearsExperience: string;
    education: {
      title: string;
      degree: string;
      university: string;
      specialization: string;
      institution: string;
    };
    certifications: {
      title: string;
      items: string[];
    };
  };
  experience: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      company: string;
      period: string;
      description: string;
      technologies: string[];
    }>;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: Array<{
      category: string;
      items: string[];
      level: number;
    }>;
    proficiencyLevel: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    projects: Array<{
      title: string;
      description: string;
      technologies: string[];
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    info: {
      email: string;
      phone: string;
      location: string;
    };
    socialMedia: string;
    form: {
      fullName: string;
      email: string;
      message: string;
      placeholder: {
        name: string;
        email: string;
        message: string;
      };
      send: string;
      successMessage: string;
    };
  };
  footer: {
    description: string;
    rights: string;
  };
  buttons: {
    downloadCV: string;
  };
}
