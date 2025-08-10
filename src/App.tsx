import { Mail, Phone, MapPin, Linkedin, Github, Send, ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import { Language } from './components/language-toggle/interface';
import { Navbar } from './components/nav-bar';
import { AboutSection, ExperienceSection, HeroSection, PortfolioSection, SkillsSection } from './components/sections';
import { Theme } from './components/theme-toggle/interface';
import { useLocalStorage } from './hooks/use-local-storage';
import { translations } from './translations';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useLocalStorage<Language>('language', Language.PT);
  const [theme, setTheme] = useLocalStorage<Theme>('theme', Theme.LIGHT);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.contact.form.successMessage);
    setFormData({ name: '', email: '', message: '' });
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
        onDownloadClick={() => console.log('Download CV')} // TODO: implement download functionality
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
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.contact.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.contact.title}</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                      <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">{t.contact.info.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                      <Phone className="text-green-600 dark:text-green-400" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Telefone</p>
                      <p className="text-gray-600 dark:text-gray-300">{t.contact.info.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                      <MapPin className="text-orange-600 dark:text-orange-400" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Localização</p>
                      <p className="text-gray-600 dark:text-gray-300">{t.contact.info.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t.contact.socialMedia}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/edielson-rodrigues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
                  </a>
                  <a
                    href="https://github.com/Edielson-Rodrigues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="text-gray-800 dark:text-gray-300" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.form.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder={t.contact.form.placeholder.name}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder={t.contact.form.placeholder.email}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder={t.contact.form.placeholder.message}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{t.contact.form.send}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{t.hero.name}</h3>
            <p className="text-gray-400 mb-8">{t.footer.description}</p>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/in/edielson-rodrigues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Edielson-Rodrigues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a href={`mailto:${t.contact.info.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2025 {t.hero.name}. {t.footer.rights}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
      >
        <ChevronDown className="rotate-180" size={24} />
      </button>
    </div>
  );
}

export default App;
