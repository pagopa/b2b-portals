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
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.main : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.primaryColorDark
      : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.walletPrimaryColor
      : palette.custom.walletPrimaryColor,
};

export const variantActionColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.main : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.blueIO[500] : palette.custom.blueIO[500],
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.blueWallet[500]
      : palette.custom.blueWallet[500],
};

export const variantContentLinkColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.walletPrimaryColor,
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
      ? palette.custom.walletBackgroundColorDark
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
        ? palette.custom.walletBackgroundColorDark
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
      : palette.custom.walletBackgroundColorDark,
};

export const variantFocusOutlineColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.outlineColor
      : palette.custom.outlineColor,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.primaryColorDark
      : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.walletOutlineColor
      : palette.custom.walletOutlineColor,
};

export const variantFocusBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? alpha(palette.primary.main, 0.08)
      : alpha(palette.primary.main, 0.08),
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? alpha(palette.custom.primaryColorDark, 0.08)
      : alpha(palette.custom.primaryColorDark, 0.08),
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? alpha(palette.custom.walletPrimaryColor, 0.08)
      : alpha(palette.custom.walletPrimaryColor, 0.08),
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
      : palette.custom.walletChipsBackgroundColorLight,
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
      : palette.custom.walletChipsBackgroundColorLightHover,
};

export const ctaContainedBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.blueIO[500],
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.blueWallet[500],
};

export const ctaContainedTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.main : palette.custom.white,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.blueIO[500] : palette.custom.white,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.blueWallet[500] : palette.custom.white,
};

export const ctaContainedBackgroundHoverColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.ctaContainedLightHoverColor
      : palette.custom.ctaContainedDarkHoverColor,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.ctaContainedLightHoverColor
      : palette.custom.ctaContainedDarkHoverColor,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.ctaContainedLightHoverColor
      : palette.custom.walletPrimaryColorHover,
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
      : palette.custom.blueWallet[500],
};

export const ctaOutlinedTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.blueIO[500],
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.blueWallet[500],
};

export const stripeLinkButtonBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'light' ? palette.custom.white : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'light' ? palette.custom.white : palette.custom.blueIO[500],
  WALLET: ({ palette, theme }) =>
    theme === 'light' ? palette.custom.white : palette.custom.blueWallet[500],
};

export const stripeLinkButtonTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'light' ? palette.primary.main : palette.custom.white,
  IO: ({ palette, theme }) =>
    theme === 'light' ? palette.custom.blueIO[500] : palette.custom.white,
  WALLET: ({ palette, theme }) =>
    theme === 'light' ? palette.custom.blueWallet[500] : palette.custom.white,
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
          palette.custom.bannerLinkDarkBlueWallet,
          palette.custom.bannerLinkLightBlueWallet,
        ],
};

export const switchButtonBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? 'transparent'
      : palette.custom.editorialSwitchButtonsBackgroundLightBlue,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? 'transparent'
      : palette.custom.editorialSwitchButtonsBackgroundLightBlue,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? 'transparent'
      : palette.custom.editorialSwitchButtonsBackgroundLightBlue,
};

export const switchButtonTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.primary.contrastText
      : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.primary.contrastText
      : palette.custom.walletPrimaryColor,
};

export const switchButtonBorderColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.primary.contrastText
      : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.primary.contrastText
      : palette.custom.walletPrimaryColor,
};

export const switchMenuTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.main : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.primaryColorDark
      : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.walletPrimaryColor
      : palette.custom.walletPrimaryColor,
};

export const featureLinkColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.blueIO[500],
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.blueWallet[500],
};

export const chipFocusOutlineColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.white
      : palette.custom.sendChipsBackgroundColorLight,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.white
      : palette.custom.ioChipsBackgroundColorLight,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.white
      : palette.custom.walletChipsBackgroundColorLight,
};

export const heroCounterNumberColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.primary.main,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.white : palette.custom.walletPrimaryColor,
};

export const bannerLinkTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary,
};

export const variantBorderColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette }) => palette.custom.borderColor,
  IO: ({ palette }) => palette.custom.borderColor,
  WALLET: ({ palette }) => palette.custom.borderColor,
};

export const themeVariantMaps = {
  accentColor: variantAccentColorMap,
  actionColor: variantActionColorMap,
  contentLinkColor: variantContentLinkColorMap,
  sectionBackgroundColor: variantSectionBackgroundColorMap,
  sectionBackgroundAlternativeGrey: variantSectionBackgroundAlternativeGreyMap,
  extraBackgroundColor: variantExtraBackgroundColorMap,
  focusOutlineColor: variantFocusOutlineColorMap,
  focusBackgroundColor: variantFocusBackgroundColorMap,
  chipBackgroundColor: variantChipBackgroundColorMap,
  chipBackgroundHoverColor: variantChipBackgroundHoverColorMap,
  ctaContainedBackgroundColor: ctaContainedBackgroundColorMap,
  ctaContainedTextColor: ctaContainedTextColorMap,
  ctaContainedBackgroundHoverColor: ctaContainedBackgroundHoverColorMap,
  ctaOutlinedBorderColor: ctaOutlinedBorderColorMap,
  ctaOutlinedTextColor: ctaOutlinedTextColorMap,
  stripeLinkButtonBackgroundColor: stripeLinkButtonBackgroundColorMap,
  stripeLinkButtonTextColor: stripeLinkButtonTextColorMap,
  sectionStripeBackgrounds: variantSectionStripeBackgroundsMap,
  switchButtonBackgroundColor: switchButtonBackgroundColorMap,
  switchButtonTextColor: switchButtonTextColorMap,
  switchButtonBorderColor: switchButtonBorderColorMap,
  switchMenuTextColor: switchMenuTextColorMap,
  featureLinkColor: featureLinkColorMap,
  chipFocusOutlineColor: chipFocusOutlineColorMap,
  heroCounterNumberColor: heroCounterNumberColorMap,
  bannerLinkTextColor: bannerLinkTextColorMap,
  borderColor: variantBorderColorMap,
};

export const resolveThemeVariant = <T>(
  mapName: keyof typeof themeVariantMaps,
  themeVariant: ThemeVariant,
  ctx: ThemeContext,
): T =>
  resolveByThemeVariant(
    themeVariantMaps[mapName] as ThemeVariantMap<T>,
    themeVariant,
    ctx,
  );
