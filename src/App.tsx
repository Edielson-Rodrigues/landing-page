import React, { useState, useEffect } from 'react';

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
  const t = translations[language];

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
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ];

  const portfolio = [
    {
      title: t.portfolio.projects[0].title,
      description: t.portfolio.projects[0].description,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: t.portfolio.projects[0].technologies,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: t.portfolio.projects[1].title,
      description: t.portfolio.projects[1].description,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: t.portfolio.projects[1].technologies,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: t.portfolio.projects[2].title,
      description: t.portfolio.projects[2].description,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: t.portfolio.projects[2].technologies,
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
        downloadLabel={t.buttons.downloadCV}
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
        greeting={t.hero.greeting}
        name={t.hero.name}
        description={t.hero.description}
        viewPortfolioLabel={t.hero.viewPortfolio}
        getInTouchLabel={t.hero.getInTouch}
        email={t.contact.info.email}
        phone={t.contact.info.phone}
        onViewPortfolio={() => scrollToSection('portfolio')}
        onGetInTouch={() => scrollToSection('contact')}
      />

      {/* About Section */}
      <AboutSection
        title={t.about.title}
        subtitle={t.about.subtitle}
        description1={t.about.description1}
        description2={t.about.description2}
        projectsCompletedLabel={t.about.projectsCompleted}
        projectsCompletedValue="10+"
        yearsExperienceLabel={t.about.yearsExperience}
        yearsExperienceValue="2+"
        educationTitle={t.about.education.title}
        educationItems={[
          { degree: t.about.education.degree, institution: t.about.education.university },
          { degree: t.about.education.specialization, institution: t.about.education.institution },
        ]}
        certificationsTitle={t.about.certifications.title}
        certifications={t.about.certifications.items}
      />

      {/* Experience Section */}
      <ExperienceSection
        title={t.experience.title}
        subtitle={t.experience.subtitle}
        items={t.experience.items.map((exp: any) => ({
          title: exp.title,
          company: exp.company,
          period: exp.period,
          description: exp.description,
          technologies: exp.technologies,
        }))}
      />

      {/* Skills Section */}
      <SkillsSection
        title={t.skills.title}
        subtitle={t.skills.subtitle}
        categories={t.skills.categories.map((cat: any) => ({
          category: cat.category,
          items: cat.items,
        }))}
      />

      {/* Portfolio Section */}
      <PortfolioSection title={t.portfolio.title} subtitle={t.portfolio.subtitle} projects={portfolio} />

      {/* Contact Section */}
      <ContactSection
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        socialMedia={t.contact.socialMedia}
        info={t.contact.info}
        form={t.contact.form}
      />

      {/* Footer */}
      <Footer
        name={t.hero.name}
        description={t.footer.description}
        rights={t.footer.rights}
        email={t.contact.info.email}
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
            href: `mailto:${t.contact.info.email}`,
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
