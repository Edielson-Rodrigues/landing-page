export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeToggleProps = {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};
