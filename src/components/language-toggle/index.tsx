import { Globe } from 'lucide-react';

import { Language, LanguageToggleProps } from './interface';

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onLanguageChange }) => {
  return (
    <div className="relative">
      <button
        onClick={() => onLanguageChange(language === Language.PT ? Language.EN : Language.PT)}
        className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label="Change language"
      >
        <Globe size={20} />
        <span className="text-sm font-medium uppercase">{language}</span>
      </button>
    </div>
  );
};

export { LanguageToggle };
