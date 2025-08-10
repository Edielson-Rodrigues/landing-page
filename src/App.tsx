import { useState, useEffect } from 'react';

import { Footer } from './components/footer';
import { Language } from './components/language-toggle/interface';
import { Navbar } from './components/nav-bar';
import { ScrollToTop } from './components/scroll-to-top';
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  PortfolioSection,
  SkillsSection,
} from './components/sections';
import { Theme } from './components/theme-toggle/interface';
import { useLocalStorage } from './hooks/use-local-storage';
import { translations } from './translations';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useLocalStorage<Language>('language', Language.PT);
  const [theme, setTheme] = useLocalStorage<Theme>('theme', Theme.LIGHT);

  // eslint-disable-next-line security/detect-object-injection
  const translation = translations[language];

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'portfolio', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: translation.nav.home },
    { id: 'about', label: translation.nav.about },
    { id: 'experience', label: translation.nav.experience },
    { id: 'skills', label: translation.nav.skills },
    { id: 'portfolio', label: translation.nav.portfolio },
    { id: 'contact', label: translation.nav.contact },
  ];

  // TODO: Pass this to supabase
  const portfolio = [
    {
      title: translation.portfolio.projects[0].title,
      description: translation.portfolio.projects[0].description,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: translation.portfolio.projects[0].technologies,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: translation.portfolio.projects[1].title,
      description: translation.portfolio.projects[1].description,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: translation.portfolio.projects[1].technologies,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: translation.portfolio.projects[2].title,
      description: translation.portfolio.projects[2].description,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: translation.portfolio.projects[2].technologies,
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onNavClick={scrollToSection}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeChange={setTheme}
        downloadLabel={translation.buttons.downloadCV}
        onDownloadClick={() => {
          const link = document.createElement('a');
          link.href = '/attachments/resume.pdf';
          link.download = 'resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />

      {/* Hero Section */}
      <HeroSection
        greeting={translation.hero.greeting}
        name={translation.hero.name}
        description={translation.hero.description}
        viewPortfolioLabel={translation.hero.viewPortfolio}
        getInTouchLabel={translation.hero.getInTouch}
        email={translation.contact.info.email}
        phone={translation.contact.info.phone}
        onViewPortfolio={() => scrollToSection('portfolio')}
        onGetInTouch={() => scrollToSection('contact')}
      />

      {/* About Section */}
      <AboutSection
        title={translation.about.title}
        subtitle={translation.about.subtitle}
        description1={translation.about.description1}
        description2={translation.about.description2}
        projectsCompletedLabel={translation.about.projectsCompleted}
        projectsCompletedValue="10+"
        yearsExperienceLabel={translation.about.yearsExperience}
        yearsExperienceValue="2+"
        educationTitle={translation.about.education.title}
        educationItems={[
          { degree: translation.about.education.degree, institution: translation.about.education.university },
          { degree: translation.about.education.specialization, institution: translation.about.education.institution },
        ]}
        certificationsTitle={translation.about.certifications.title}
        certifications={translation.about.certifications.items}
      />

      {/* Experience Section */}
      <ExperienceSection
        title={translation.experience.title}
        subtitle={translation.experience.subtitle}
        items={translation.experience.items.map((exp: any) => ({
          title: exp.title,
          company: exp.company,
          period: exp.period,
          description: exp.description,
          technologies: exp.technologies,
        }))}
      />

      {/* Skills Section */}
      <SkillsSection
        title={translation.skills.title}
        subtitle={translation.skills.subtitle}
        categories={translation.skills.categories.map((cat: any) => ({
          category: cat.category,
          items: cat.items,
        }))}
      />

      {/* Portfolio Section */}
      <PortfolioSection
        title={translation.portfolio.title}
        subtitle={translation.portfolio.subtitle}
        projects={portfolio}
      />

      {/* Contact Section */}
      <ContactSection
        title={translation.contact.title}
        subtitle={translation.contact.subtitle}
        socialMedia={translation.contact.socialMedia}
        info={translation.contact.info}
        form={translation.contact.form}
      />

      {/* Footer */}
      <Footer
        name={translation.hero.name}
        description={translation.footer.description}
        rights={translation.footer.rights}
        email={translation.contact.info.email}
        socialLinks={[
          {
            href: 'https://www.linkedin.com/in/edielson-rodrigues',
            label: 'LinkedIn',
            icon: 'linkedin',
          },
          {
            href: 'https://github.com/Edielson-Rodrigues',
            label: 'GitHub',
            icon: 'github',
          },
          {
            href: `mailto:${translation.contact.info.email}`,
            label: 'Email',
            icon: 'email',
          },
        ]}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop onClick={() => scrollToSection('home')} />
    </div>
  );
}

export default App;
