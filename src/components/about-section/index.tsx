import { BookOpen, Award } from 'lucide-react';
import React from 'react';

import { AboutSectionProps } from './interface';

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  subtitle,
  description1,
  description2,
  projectsCompletedLabel,
  projectsCompletedValue,
  yearsExperienceLabel,
  yearsExperienceValue,
  educationTitle,
  educationItems,
  certificationsTitle,
  certifications,
}) => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{description1}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{description2}</p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{projectsCompletedValue}</div>
                <div className="text-gray-700 dark:text-gray-300">{projectsCompletedLabel}</div>
              </div>
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{yearsExperienceValue}</div>
                <div className="text-gray-700 dark:text-gray-300">{yearsExperienceLabel}</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <BookOpen className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
                {educationTitle}
              </h3>
              <div className="space-y-4">
                {educationItems.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="mr-3 text-green-600 dark:text-green-400" size={24} />
                {certificationsTitle}
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
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
  );
};
