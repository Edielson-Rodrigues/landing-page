import { Sun, Moon } from 'lucide-react';
import React from 'react';

import { Theme, ThemeToggleProps } from './interface';

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onThemeChange }) => {
  return (
    <button
      onClick={() => onThemeChange(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={theme === Theme.LIGHT ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === Theme.LIGHT ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};
