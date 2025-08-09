import { Language } from '../components/language-toggle/interface';
import { Translation } from '../types';

export const translations: Record<Language, Translation> = {
  [Language.PT]: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      portfolio: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Edielson Rodrigues',
      description:
        'Desenvolvedor de Software Back-End com vasta experiência na criação de aplicações escaláveis e de alta performance. Especializado em Java, NestJS, PHP e desenvolvimento de agentes de IA com LangChain.',
      viewPortfolio: 'Ver Projetos',
      getInTouch: 'Entre em Contato',
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Desenvolvedor Back-End especializado em soluções escaláveis e inteligência artificial',
      description1:
        'Sou um desenvolvedor de software back-end com sólida experiência em múltiplas tecnologias, incluindo Java, NestJS e PHP. Tenho expertise na criação de aplicações escaláveis e de alta performance, com foco em arquiteturas robustas e manutenção de sistemas legados.',
      description2:
        'Possuo conhecimentos avançados em modelagem e otimização de bancos de dados SQL e NoSQL, além de experiência na criação de agentes de IA com LangChain, LangGraph e WrenAI. Também trabalho com automação de infraestrutura (IaC) usando Docker, Terraform e pipelines de CI/CD em ambientes de nuvem AWS.',
      projectsCompleted: 'Projetos Concluídos',
      yearsExperience: 'Anos de Experiência',
      education: {
        title: 'Formação',
        degree: 'Bacharelado em Ciência da Computação',
        university: 'Universidade Federal do Agreste de Pernambuco - 2022-Presente',
        specialization: 'Curso Técnico Integrado em Informática',
        institution: 'Instituto Federal do Sertão Pernambucano - 2018-2021',
      },
      certifications: {
        title: 'Especializações',
        items: [
          'Desenvolvimento de Agentes de IA',
          'Infraestrutura como Código (IaC)',
          'Arquiteturas de Microsserviços',
        ],
      },
    },
    experience: {
      title: 'Experiência Profissional',
      subtitle: 'Minha trajetória profissional e principais conquistas',
      items: [
        {
          title: 'Desenvolvedor Back-End Pleno',
          company: 'Dolado',
          period: 'Nov 2024 - Presente',
          description:
            'Desenvolvimento de microsserviços e APIs escaláveis com NestJS e Clean Architecture. Criação de agentes de IA com LangChain e LangGraph para automação de fluxos. Gerenciamento de infraestrutura como código (IaC) com Terraform e Docker na AWS.',
          technologies: ['NestJS', 'PHP', 'Python', 'LangChain', 'LangGraph', 'AWS', 'Terraform', 'Docker'],
        },
        {
          title: 'Desenvolvedor Full Stack',
          company: 'Show Tecnologia',
          period: 'Jul 2023 - Nov 2024',
          description:
            'Desenvolvimento de aplicações e APIs de larga escala com PHP (CodeIgniter) e Node.js. Integração de múltiplos gateways de pagamento e sistemas financeiros. Evolução de sistemas ERP e integração com plataformas de CRM.',
          technologies: ['PHP', 'Node.js', 'MySQL', 'Redis', 'DynamoDB', 'AWS', 'Twilio API'],
        },
      ],
    },
    skills: {
      title: 'Competências Técnicas',
      subtitle: 'Tecnologias e ferramentas que domino',
      categories: [
        {
          category: 'Linguagens & Frameworks',
          items: ['Python', 'Java (Spring Boot)', 'NestJS (Node.js)', 'PHP', 'JavaScript/TypeScript'],
          level: 95,
        },
        {
          category: 'Bancos de Dados',
          items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis'],
          level: 90,
        },
        {
          category: 'Cloud & DevOps',
          items: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'CircleCI'],
          level: 85,
        },
        {
          category: 'Inteligência Artificial',
          items: ['LangChain', 'LangGraph', 'WrenAI', 'Agentes de IA', 'Automação'],
          level: 80,
        },
      ],
      proficiencyLevel: 'Nível de Proficiência',
    },
    portfolio: {
      title: 'Projetos em Destaque',
      subtitle: 'Alguns dos meus projetos mais relevantes',
      projects: [
        {
          title: 'Ecossistema de IA para Gestão de Marketplaces',
          description:
            'Plataforma de agentes inteligentes para automação de operações de e-commerce com LangChain e LangGraph, orquestrados como microsserviços em NestJS.',
          technologies: ['LangChain', 'LangGraph', 'NestJS', 'AWS ECS', 'PostgreSQL', 'Redis'],
        },
        {
          title: 'Plataforma Centralizada para Gestão de Sellers',
          description:
            'Solução para centralizar a gestão de contas em múltiplos marketplaces, com integração de APIs e automação de deploy com IaC.',
          technologies: ['NestJS', 'PHP', 'Python', 'Terraform', 'MongoDB', 'AWS'],
        },
        {
          title: 'Plataforma de Monitoramento de Frotas',
          description:
            'Sistema de ponta a ponta para monitoramento de frotas com dados de alta frequência, utilizando tecnologias IoT como LoRa.',
          technologies: ['Node.js', 'PHP', 'DynamoDB', 'Redis', 'LoRa', 'MySQL'],
        },
      ],
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos conversar sobre seu próximo projeto',
      info: {
        email: 'edielson.rodrigues871@gmail.com',
        phone: '+55 (87) 98168-9357',
        location: 'Garanhuns, Pernambuco, Brasil',
      },
      socialMedia: 'Redes Sociais',
      form: {
        fullName: 'Nome Completo',
        email: 'Email',
        message: 'Mensagem',
        placeholder: {
          name: 'Seu nome completo',
          email: 'seu.email@exemplo.com',
          message: 'Conte-me sobre seu projeto...',
        },
        send: 'Enviar Mensagem',
        successMessage: 'Mensagem enviada com sucesso!',
      },
    },
    footer: {
      description: 'Desenvolvedor Back-End • Especialista em IA e Infraestrutura',
      rights: 'Todos os direitos reservados.',
    },
    buttons: {
      downloadCV: 'Download CV',
    },
  },
  [Language.EN]: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      portfolio: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Edielson Rodrigues',
      description:
        'Back-End Software Developer with extensive experience in creating scalable and high-performance applications. Specialized in Java, NestJS, PHP and AI agent development with LangChain.',
      viewPortfolio: 'View Projects',
      getInTouch: 'Get In Touch',
    },
    about: {
      title: 'About Me',
      subtitle: 'Back-End Developer specialized in scalable solutions and artificial intelligence',
      description1:
        'I am a back-end software developer with solid experience in multiple technologies, including Java, NestJS and PHP. I have expertise in creating scalable and high-performance applications, focusing on robust architectures and legacy system maintenance.',
      description2:
        'I have advanced knowledge in SQL and NoSQL database modeling and optimization, as well as experience in creating AI agents with LangChain, LangGraph and WrenAI. I also work with infrastructure automation (IaC) using Docker, Terraform and CI/CD pipelines in AWS cloud environments.',
      projectsCompleted: 'Projects Completed',
      yearsExperience: 'Years of Experience',
      education: {
        title: 'Education',
        degree: 'Bachelor in Computer Science',
        university: 'Federal University of Agreste of Pernambuco - 2022-Present',
        specialization: 'Technical Course in Computer Science',
        institution: 'Federal Institute of Sertão Pernambucano - 2018-2021',
      },
      certifications: {
        title: 'Specializations',
        items: ['AI Agent Development', 'Infrastructure as Code (IaC)', 'Microservices Architectures'],
      },
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'My professional journey and main achievements',
      items: [
        {
          title: 'Mid-Level Back-End Developer',
          company: 'Dolado',
          period: 'Nov 2024 - Present',
          description:
            'Development of microservices and scalable APIs with NestJS and Clean Architecture. Creation of AI agents with LangChain and LangGraph for workflow automation. Infrastructure as code (IaC) management with Terraform and Docker on AWS.',
          technologies: ['NestJS', 'PHP', 'Python', 'LangChain', 'LangGraph', 'AWS', 'Terraform', 'Docker'],
        },
        {
          title: 'Full Stack Developer',
          company: 'Show Tecnologia',
          period: 'Jul 2023 - Nov 2024',
          description:
            'Development of large-scale applications and APIs with PHP (CodeIgniter) and Node.js. Integration of multiple payment gateways and financial systems. Evolution of ERP systems and integration with CRM platforms.',
          technologies: ['PHP', 'Node.js', 'MySQL', 'Redis', 'DynamoDB', 'AWS', 'Twilio API'],
        },
      ],
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I master',
      categories: [
        {
          category: 'Languages & Frameworks',
          items: ['Python', 'Java (Spring Boot)', 'NestJS (Node.js)', 'PHP', 'JavaScript/TypeScript'],
          level: 95,
        },
        {
          category: 'Databases',
          items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis'],
          level: 90,
        },
        {
          category: 'Cloud & DevOps',
          items: ['AWS', 'Terraform', 'Docker', 'CI/CD', 'CircleCI'],
          level: 85,
        },
        {
          category: 'Artificial Intelligence',
          items: ['LangChain', 'LangGraph', 'WrenAI', 'AI Agents', 'Automation'],
          level: 80,
        },
      ],
      proficiencyLevel: 'Proficiency Level',
    },
    portfolio: {
      title: 'Featured Projects',
      subtitle: 'Some of my most relevant projects',
      projects: [
        {
          title: 'AI Ecosystem for Marketplace Management',
          description:
            'Intelligent agent platform for e-commerce operations automation with LangChain and LangGraph, orchestrated as microservices in NestJS.',
          technologies: ['LangChain', 'LangGraph', 'NestJS', 'AWS ECS', 'PostgreSQL', 'Redis'],
        },
        {
          title: 'Centralized Platform for Seller Management',
          description:
            'Solution to centralize account management across multiple marketplaces, with API integration and IaC deployment automation.',
          technologies: ['NestJS', 'PHP', 'Python', 'Terraform', 'MongoDB', 'AWS'],
        },
        {
          title: 'Fleet Monitoring Platform',
          description:
            'End-to-end system for fleet monitoring with high-frequency data, using IoT technologies like LoRa.',
          technologies: ['Node.js', 'PHP', 'DynamoDB', 'Redis', 'LoRa', 'MySQL'],
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Let's talk about your next project",
      info: {
        email: 'edielson.rodrigues871@gmail.com',
        phone: '+55 (87) 98168-9357',
        location: 'Garanhuns, Pernambuco, Brazil',
      },
      socialMedia: 'Social Media',
      form: {
        fullName: 'Full Name',
        email: 'Email',
        message: 'Message',
        placeholder: {
          name: 'Your full name',
          email: 'your.email@example.com',
          message: 'Tell me about your project...',
        },
        send: 'Send Message',
        successMessage: 'Message sent successfully!',
      },
    },
    footer: {
      description: 'Back-End Developer • AI and Infrastructure Specialist',
      rights: 'All rights reserved.',
    },
    buttons: {
      downloadCV: 'Download CV',
    },
  },
};
