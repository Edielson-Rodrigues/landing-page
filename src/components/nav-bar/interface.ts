import { Language } from '../language-toggle/interface';
import { Theme } from '../theme-toggle/interface';

export type NavItem = {
  id: string;
  label: string;
};

export type NavbarProps = {
  navItems: NavItem[];
  activeSection: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNavClick: (sectionId: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  downloadLabel: string;
  onDownloadClick: () => void;
};
