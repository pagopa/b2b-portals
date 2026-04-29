import { alpha, Theme } from '@mui/material/styles';
import { ThemeVariant } from './types/common/Common.types';

export type AppThemeMode = 'light' | 'dark';

export type ThemeContext = {
  palette: Theme['palette'];
  theme: AppThemeMode;
};

export type ThemeVariantMap<T> = Record<ThemeVariant, (ctx: ThemeContext) => T>;

export const resolveByThemeVariant = <T>(
  map: ThemeVariantMap<T>,
  themeVariant: ThemeVariant,
  ctx: ThemeContext,
): T => map[themeVariant](ctx);

export const variantAccentColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette }) => palette.primary.main,
  IO: ({ palette }) => palette.custom.primaryColorDark,
  WALLET: ({ palette }) => palette.custom.primaryColorDark,
};

export const variantActionColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette }) => palette.primary.main,
  IO: ({ palette }) => palette.custom.blueIO[500],
  WALLET: ({ palette }) => palette.custom.blueIO[500],
};

export const variantContentLinkColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.primaryColorDark,
};

export const variantSectionBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.backgroundColorDarkAlternative
      : palette.custom.backgroundColorLight,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.backgroundColorDark
      : palette.custom.backgroundColorLight,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.backgroundColorDark
      : palette.custom.backgroundColorLight,
};

export const variantSectionBackgroundAlternativeGreyMap: ThemeVariantMap<string> =
  {
    SEND: ({ palette, theme }) =>
      theme === 'dark'
        ? palette.custom.backgroundColorDarkAlternative
        : palette.custom.backgroundColorLightGrey,
    IO: ({ palette, theme }) =>
      theme === 'dark'
        ? palette.custom.backgroundColorDark
        : palette.custom.backgroundColorLightGrey,
    WALLET: ({ palette, theme }) =>
      theme === 'dark'
        ? palette.custom.backgroundColorDark
        : palette.custom.backgroundColorLightGrey,
  };

export const variantExtraBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.text.primary
      : palette.custom.backgroundColorDarkAlternative,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.text.primary
      : palette.custom.backgroundColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.text.primary
      : palette.custom.backgroundColorDark,
};

export const variantFocusOutlineColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette }) => palette.custom.outlineColor,
  IO: ({ palette }) => palette.custom.primaryColorDark,
  WALLET: ({ palette }) => palette.custom.primaryColorDark,
};

export const variantFocusBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette }) => alpha(palette.primary.main, 0.08),
  IO: ({ palette }) => alpha(palette.custom.primaryColorDark, 0.08),
  WALLET: ({ palette }) => alpha(palette.custom.primaryColorDark, 0.08),
};

export const variantChipBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.chipsBackgroundColorDark
      : palette.custom.sendChipsBackgroundColorLight,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.chipsBackgroundColorDark
      : palette.custom.ioChipsBackgroundColorLight,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.chipsBackgroundColorDark
      : palette.custom.ioChipsBackgroundColorLight,
};

export const variantChipBackgroundHoverColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.chipsBackgroundColorDarkHover
      : palette.custom.sendChipsBackgroundColorLightHover,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.chipsBackgroundColorDarkHover
      : palette.custom.ioChipsBackgroundColorLightHover,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.chipsBackgroundColorDarkHover
      : palette.custom.ioChipsBackgroundColorLightHover,
};

export const ctaContainedBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.blueIO[500],
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.blueIO[500],
};

export const ctaContainedTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.main : palette.custom.white,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.blueIO[500] : palette.custom.white,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.blueIO[500] : palette.custom.white,
};

export const ctaOutlinedBorderColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.matteWhiteBorder : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.matteWhiteBorder
      : palette.custom.blueIO[500],
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.matteWhiteBorder
      : palette.custom.blueIO[500],
};

export const ctaOutlinedTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.blueIO[500],
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.blueIO[500],
};

export const stripeLinkButtonBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'light' ? palette.custom.white : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'light' ? palette.custom.white : palette.custom.blueIO[500],
  WALLET: ({ palette, theme }) =>
    theme === 'light' ? palette.custom.white : palette.custom.blueIO[500],
};

export const stripeLinkButtonTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'light' ? palette.primary.main : palette.custom.white,
  IO: ({ palette, theme }) =>
    theme === 'light' ? palette.custom.blueIO[500] : palette.custom.white,
  WALLET: ({ palette, theme }) =>
    theme === 'light' ? palette.custom.blueIO[500] : palette.custom.white,
};

export const variantSectionStripeBackgroundsMap: ThemeVariantMap<string[]> = {
  SEND: ({ palette, theme }) =>
    theme === 'light'
      ? [palette.grey[100], palette.grey[50]]
      : [
          palette.custom.bannerLinkDarkBlueSend,
          palette.custom.bannerLinkLightBlueSend,
        ],
  IO: ({ palette, theme }) =>
    theme === 'light'
      ? [palette.grey[100], palette.grey[50]]
      : [
          palette.custom.bannerLinkDarkBlueIO,
          palette.custom.bannerLinkLightBlueIO,
        ],
  WALLET: ({ palette, theme }) =>
    theme === 'light'
      ? [palette.grey[100], palette.grey[50]]
      : [
          palette.custom.bannerLinkDarkBlueIO,
          palette.custom.bannerLinkLightBlueIO,
        ],
};
