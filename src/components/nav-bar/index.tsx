import { Menu, X, Download } from 'lucide-react';
import React from 'react';

import { LanguageToggle } from '../language-toggle';
import { ThemeToggle } from '../theme-toggle';

import { NavbarProps } from './interface';

export const Navbar: React.FC<NavbarProps> = ({
  navItems,
  activeSection,
  isMenuOpen,
  onToggleMenu,
  onNavClick,
  language,
  onLanguageChange,
  theme,
  onThemeChange,
  downloadLabel,
  onDownloadClick,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Nome ou Logo */}
          <div
            className="font-bold text-xl text-gray-900 dark:text-white cursor-pointer"
            onClick={() => onNavClick('home')}
          >
            MyPortfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
            <button
              onClick={onDownloadClick}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              <Download size={16} />
              <span>{downloadLabel}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
            <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
            <button
              onClick={onToggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`block px-3 py-2 text-base font-medium transition-colors w-full text-left ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onDownloadClick}
              className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 w-full mt-4"
            >
              <Download size={16} />
              <span>{downloadLabel}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
