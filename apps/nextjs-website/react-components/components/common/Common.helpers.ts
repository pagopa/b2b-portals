import { useTheme } from '@mui/material/styles';

export const BackgroundColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.dark : palette.background.paper;
};

export const BackgroundColorAlternative = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.dark : palette.background.default;
};

export const ExtraBackgroundColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
  ? palette.text.primary
  : palette.primary.dark;
};

export const TextColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
};

export const TextAlternativeColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.contrastText : palette.primary.dark;
};

export const ExtraTextColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.primary.contrastText
    : palette.text.secondary;
};
