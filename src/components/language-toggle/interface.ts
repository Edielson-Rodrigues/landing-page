export enum Language {
  PT = 'pt',
  EN = 'en',
}

export type LanguageToggleProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};
