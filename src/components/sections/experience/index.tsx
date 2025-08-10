import { Briefcase } from 'lucide-react';
import React from 'react';

import { ExperienceSectionProps } from './interface';

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, subtitle, items }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>

        {/* Experience Items */}
        <div className="space-y-8">
          {items.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
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

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{exp.description}</p>

              {/* Technologies */}
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
  );
};
