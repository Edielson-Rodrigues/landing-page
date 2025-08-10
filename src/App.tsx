import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  Send,
  ChevronDown,
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

import { HeroSection } from './components/hero-section';
import { Language } from './components/language-toggle/interface';
import { Navbar } from './components/nav-bar';
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
      <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.about.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t.about.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{t.about.description1}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{t.about.description2}</p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                  <div className="text-gray-700 dark:text-gray-300">{t.about.projectsCompleted}</div>
                </div>
                <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2+</div>
                  <div className="text-gray-700 dark:text-gray-300">{t.about.yearsExperience}</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <BookOpen className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
                  {t.about.education.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{t.about.education.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{t.about.education.university}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{t.about.education.specialization}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{t.about.education.institution}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Award className="mr-3 text-green-600 dark:text-green-400" size={24} />
                  {t.about.certifications.title}
                </h3>
                <div className="space-y-2">
                  {t.about.certifications.items.map((cert, index) => (
                    <p key={index} className="text-gray-700 dark:text-gray-300">
                      • {cert}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.experience.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.experience.subtitle}</p>
          </div>

          <div className="space-y-8">
            {t.experience.items.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                    <Briefcase className="mr-2" size={20} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.skills.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.skills.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.skills.categories.map((skillGroup, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{skillGroup.category}</h3>

                <div className="space-y-4 mb-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium mr-2 mb-2 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>{t.skills.proficiencyLevel}</span>
                    <span>{skillGroup.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skillGroup.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.portfolio.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t.portfolio.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <ExternalLink className="text-gray-900" size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <Github className="text-gray-900" size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
