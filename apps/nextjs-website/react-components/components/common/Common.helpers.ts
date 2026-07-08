import { useTheme } from '@mui/material/styles';
import { ThemeVariant } from '@react-components/types/common/Common.types';
import { resolveThemeVariant } from '../../theme';

export const BackgroundColor = (
  theme: 'dark' | 'light',
  themeVariant: ThemeVariant,
) => {
  const { palette } = useTheme();

  return resolveThemeVariant<string>('commonBackgroundColor', themeVariant, {
    palette,
    theme,
  });
};

export const BackgroundColorAlternative = (
  theme: 'dark' | 'light',
  themeVariant: ThemeVariant,
) => {
  const { palette } = useTheme();

  return resolveThemeVariant<string>(
    'commonBackgroundColorAlternative',
    themeVariant,
    { palette, theme },
  );
};

export const ExtraBackgroundColor = (
  theme: 'dark' | 'light',
  themeVariant: ThemeVariant,
) => {
  const { palette } = useTheme();

  return resolveThemeVariant<string>(
    'commonExtraBackgroundColor',
    themeVariant,
    {
      palette,
      theme,
    },
  );
};

export const TextColor = (
  theme: 'dark' | 'light',
  themeVariant: ThemeVariant,
) => {
  const { palette } = useTheme();

  return resolveThemeVariant<string>('commonTextColor', themeVariant, {
    palette,
    theme,
  });
};

export const TextAlternativeColor = (
  theme: 'dark' | 'light',
  themeVariant: ThemeVariant,
) => {
  const { palette } = useTheme();

  return resolveThemeVariant<string>(
    'commonTextAlternativeColor',
    themeVariant,
    {
      palette,
      theme,
    },
  );
};

export const ExtraTextColor = (
  theme: 'dark' | 'light',
  themeVariant: ThemeVariant,
) => {
  const { palette } = useTheme();

  return resolveThemeVariant<string>('commonExtraTextColor', themeVariant, {
    palette,
    theme,
  });
};

export const LinkColor = (
  theme: 'dark' | 'light',
  themeVariant: ThemeVariant,
) => {
  const { palette } = useTheme();

  return resolveThemeVariant<string>('commonLinkColor', themeVariant, {
    palette,
    theme,
  });
};

export const GrayLinkColor = (
  theme: 'dark' | 'light',
  themeVariant: ThemeVariant,
) => {
  const { palette } = useTheme();

  return resolveThemeVariant<string>('commonGrayLinkColor', themeVariant, {
    palette,
    theme,
  });
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
