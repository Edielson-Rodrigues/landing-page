type SocialLink = {
  href: string;
  label: string;
  icon: 'linkedin' | 'github' | 'email';
};

export type FooterProps = {
  name: string;
  description: string;
  rights: string;
  email: string;
  socialLinks?: SocialLink[];
};
