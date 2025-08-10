import { ExternalLink, Mail, Phone, Code, Star } from 'lucide-react';
import React from 'react';

import { HeroSectionProps } from './interface';

export const HeroSection: React.FC<HeroSectionProps> = ({
  greeting,
  name,
  description,
  viewPortfolioLabel,
  getInTouchLabel,
  email,
  phone,
  onViewPortfolio,
  onGetInTouch,
}) => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {greeting}{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onViewPortfolio}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>{viewPortfolioLabel}</span>
                <ExternalLink size={16} />
              </button>
              <button
                onClick={onGetInTouch}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                {getInTouchLabel}
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
                <span>{email}</span>
              </a>
              <a
                href={`tel:${phone}`}
                className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone size={20} />
                <span>{phone}</span>
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <Code size={120} className="text-blue-600" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center animate-bounce">
                <Star className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
