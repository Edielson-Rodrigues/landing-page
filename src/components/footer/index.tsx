import { Linkedin, Github, Mail } from 'lucide-react';
import React from 'react';

import { FooterProps } from './interface';

export const Footer: React.FC<FooterProps> = ({ name, description, rights, email, socialLinks }) => {
  const defaultSocialLinks = [
    {
      href: 'https://www.linkedin.com/in/edielson-rodrigues',
      label: 'LinkedIn',
      icon: 'linkedin' as const,
    },
    {
      href: 'https://github.com/Edielson-Rodrigues',
      label: 'GitHub',
      icon: 'github' as const,
    },
    {
      href: `mailto:${email}`,
      label: 'Email',
      icon: 'email' as const,
    },
  ];

  const links = socialLinks || defaultSocialLinks;

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'linkedin':
        return <Linkedin size={24} />;
      case 'github':
        return <Github size={24} />;
      case 'email':
        return <Mail size={24} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Name */}
          <h3 className="text-2xl font-bold mb-4">{name}</h3>

          {/* Description */}
          <p className="text-gray-400 mb-8">{description}</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2025 {name}. {rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
