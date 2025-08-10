import { ChevronDown } from 'lucide-react';
import React from 'react';

import { ScrollToTopProps } from './interface';

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ onClick, className, size = 24 }) => {
  const defaultClassName =
    'fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110';

  return (
    <button onClick={onClick} className={className || defaultClassName}>
      <ChevronDown className="rotate-180" size={size} />
    </button>
  );
};
