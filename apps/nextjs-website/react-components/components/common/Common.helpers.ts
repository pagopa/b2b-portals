import { useTheme } from '@mui/material/styles';

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

export const SendExtraBackgroundColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.text.primary
    : palette.custom.backgroundColorDarkAlternative;
};

export const IoExtraBackgroundColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.text.primary
    : palette.custom.backgroundColorDark;
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

export const IoBackgroundColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.custom.backgroundColorDark
    : palette.custom.backgroundColorLight;
};

export const IoBackgroundColorAlternativeBlue = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.custom.backgroundColorDarkAlternative
    : palette.custom.backgroundColorLight;
};

export const IoBackgroundColorAlternativeGrey = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.custom.backgroundColorDark
    : palette.custom.backgroundColorLightGrey;
};

export const SendBackgroundColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.custom.backgroundColorDarkAlternative
    : palette.custom.backgroundColorLight;
};

export const SendBackgroundColorAlternativeGrey = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.custom.backgroundColorDarkAlternative
    : palette.custom.backgroundColorLightGrey;
};
