import { useTheme } from '@mui/material/styles';
import { ThemeVariant } from '@react-components/types/common/Common.types';

export const BackgroundColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.custom.backgroundColorDark
    : palette.background.paper;
};

export const BackgroundColorAlternative = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.custom.backgroundColorDark
    : palette.custom.backgroundColorDefault;
};

export const ExtraBackgroundColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.text.primary
    : palette.custom.primaryColorDark;
};

export const TextColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
};

export const TextAlternativeColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.primary.contrastText
    : palette.custom.primaryColorDark;
};

export const ExtraTextColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.primary.contrastText
    : palette.text.secondary;
};

export const LinkColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.primary.contrastText
    : palette.custom.darkLinkColor;
};

export const GrayLinkColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.custom.grayLinkColor
    : palette.custom.black50;
};

export const FONT_THEME_EXPERIMENTAL = '"Titillium Sans Pro", sans-serif';
export const FONT_THEME_BASE = '"Titillium Web", sans-serif';

const themeVariantsExperimentalFont = ['WALLET'];

export const isExperimentalThemeVariant = (themeVariant: ThemeVariant) =>
  themeVariantsExperimentalFont.includes(themeVariant);

export const getThemeVariantFont = (themeVariant?: ThemeVariant) => {
  if (themeVariant && isExperimentalThemeVariant(themeVariant)) {
    import('@react-components/styles/font-titillium-sans-pro.css');
    return FONT_THEME_EXPERIMENTAL;
  }
  return FONT_THEME_BASE;
};
