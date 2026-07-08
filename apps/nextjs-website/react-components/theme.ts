'use client';
import { theme as MUIItaliaTheme } from '@pagopa/mui-italia';
import { alpha, Theme, createTheme } from '@mui/material/styles';
import { ThemeVariant } from './types/common/Common.types';
import { FONT_THEME_EXPERIMENTAL } from '@react-components/components/common/Common.helpers';

declare module '@mui/material/styles' {
  interface Palette {
    readonly custom: {
      readonly backgroundColorDark: string;
      readonly backgroundColorDarkAlternative: string;
      readonly backgroundColorLight: string;
      readonly backgroundColorLightGrey: string;
      readonly divider: string;
      readonly primaryColorDark: string;
      readonly walletPrimaryColor: string;
      readonly walletPrimaryColorHover: string;
      readonly walletBackgroundColorDark: string;
      readonly backgroundColorDefault: string;
      readonly darkLinkColor: string;
      readonly grayLinkColor: string;
      readonly black50: string;
      readonly editorialSwitchButtonsBackgroundLightBlue: string;
      readonly editorialSwitchButtonsBackgroundWhite: string;
      readonly bannerLinkLightBlueIO: string;
      readonly bannerLinkDarkBlueIO: string;
      readonly bannerLinkLightBlueSend: string;
      readonly bannerLinkDarkBlueSend: string;
      readonly bannerLinkLightBlueWallet: string;
      readonly bannerLinkDarkBlueWallet: string;
      readonly blueIO: {
        readonly 500: string;
      };
      readonly blueWallet: {
        readonly 500: string;
      };
      readonly highLightBoxLightGreenBackground: string;
      readonly highLightBoxPurpleText: string;
      readonly highLightBoxLightPurpleBackground: string;
      readonly black: string;
      readonly white: string;
      readonly matteWhiteBorder: string;
      readonly ioChipsBackgroundColorLight: string;
      readonly walletChipsBackgroundColorLight: string;
      readonly sendChipsBackgroundColorLight: string;
      readonly chipsBackgroundColorDark: string;
      readonly ioChipsBackgroundColorLightHover: string;
      readonly walletChipsBackgroundColorLightHover: string;
      readonly sendChipsBackgroundColorLightHover: string;
      readonly chipsBackgroundColorDarkHover: string;
      readonly chipsTextColor: string;
      readonly borderColor: string;
      readonly accordionItemBorderRadius: string;
      readonly outlineColor: string;
      readonly walletOutlineColor: string;
      readonly ctaContainedLightHoverColor: string;
      readonly ctaContainedDarkHoverColor: string;
    };
  }
  // interface PaletteOptions {
  //   readonly custom?: {
  //     readonly backgroundColorDark?: string;
  //     readonly backgroundColorLightGrey?: string;
  //     readonly divider?: string;
  //     readonly primaryColorDark?: string;
  //     readonly backgroundColorDefault?: string;
  //     readonly darkLinkColor?: string;
  //     readonly grayLinkColor?: string;
  //     readonly black50?: string;
  //     readonly editorialSwitchButtonsBackgroundLightBlue?: string;
  //     readonly editorialSwitchButtonsBackgroundWhite?: string;
  //     readonly bannerLinkLightBlue?: string;
  //     readonly bannerLinkDarkBlue?: string;
  //   };
  // }
}

const themeStyles = {
  shadows: {
    custom: {
      boxShadow: '-6px -6px 19px 2px #002B551A',
      otMenuMobile:
        'rgb(0 43 85 / 10%) 0px 2px 4px -1px, rgb(0 43 85 / 5%) 0px 4px 5px',
    },
  },
  palette: {
    error: {
      main: '#D13333',
      dark: '#D13333',
    },
    custom: {
      backgroundColorDark: '#0B3EE3',
      backgroundColorDarkAlternative: '#0062C3',
      backgroundColorLight: '#FFF',
      backgroundColorLightGrey: '#FAFAFA',
      divider: '#E3E7EB',
      primaryColorDark: '#0B3EE3',
      walletPrimaryColor: '#0066CC',
      walletPrimaryColorHover: '#004D99',
      walletBackgroundColorDark: '#0066CC',
      backgroundColorDefault: '#FAFAFA',
      darkLinkColor: '#1A73E8',
      grayLinkColor: '#F4F5F8',
      black50: '#00000050',
      editorialSwitchButtonsBackgroundLightBlue: '#0073e61a',
      editorialSwitchButtonsBackgroundWhite: '#ffffff1a',
      bannerLinkLightBlueIO: '#1043e8',
      bannerLinkDarkBlueIO: '#0B3EE3',
      bannerLinkLightBlueSend: '#0A64D2',
      bannerLinkDarkBlueSend: '#0062C3',
      bannerLinkLightBlueWallet: '#0073E6',
      bannerLinkDarkBlueWallet: '#0066CC',
      blueIO: {
        500: '#0B3EE3',
      },
      blueWallet: {
        500: '#0066CC',
      },
      highLightBoxLightGreenBackground: '#EFFBFF',
      highLightBoxPurpleText: '#5517E3',
      highLightBoxLightPurpleBackground: '#DDD1F9',
      black: '#000000',
      white: '#FFF',
      matteWhiteBorder: '#ffffff80',
      ioChipsBackgroundColorLight: '#0B3EE3',
      walletChipsBackgroundColorLight: '#0066CC',
      sendChipsBackgroundColorLight: '#0073E6',
      chipsBackgroundColorDark: '#ebebf52e',
      ioChipsBackgroundColorLightHover: '#0A34CC',
      walletChipsBackgroundColorLightHover: '#004D99',
      sendChipsBackgroundColorLightHover: '#0066CC',
      chipsBackgroundColorDarkHover: '#ebebf54d',
      chipsTextColor: '#ffffff',
      borderColor: '#E8EBF1',
      accordionItemBorderRadius: '16px',
      outlineColor: '#0073e6',
      walletOutlineColor: '#0066CC',
      ctaContainedLightHoverColor: '#D9D9D9',
      ctaContainedDarkHoverColor: '#0055AA',
    },
  },
};

const fontFamily = FONT_THEME_EXPERIMENTAL;

export const themeExperimental = createTheme(MUIItaliaTheme, {
  typography: {
    fontFamily,
    body1: { fontFamily },
    body2: { fontFamily },
    h1: { fontFamily },
    h2: { fontFamily },
    h3: { fontFamily },
    h4: { fontFamily },
    h5: { fontFamily },
    h6: { fontFamily },
    button: { fontFamily },
    overline: { fontFamily },
    subtitle1: { fontFamily },
    subtitle2: { fontFamily },
    caption: { fontFamily },
  },
  ...themeStyles,
});

export const themeBase = createTheme(MUIItaliaTheme, { ...themeStyles });

export const theme = createTheme(MUIItaliaTheme, { ...themeStyles });

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

export const accordionBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette }) => palette.custom.backgroundColorLight,
  IO: ({ palette }) => palette.custom.backgroundColorLight,
  WALLET: ({ palette }) => palette.custom.backgroundColorLight,
};

export const accordionItemBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette }) => palette.custom.backgroundColorLight,
  IO: ({ palette }) => palette.custom.backgroundColorLight,
  WALLET: ({ palette }) => palette.custom.backgroundColorLight,
};

export const accordionItemBorderRadiusMap: ThemeVariantMap<string> = {
  SEND: ({ palette }) => palette.custom.accordionItemBorderRadius,
  IO: ({ palette }) => palette.custom.accordionItemBorderRadius,
  WALLET: ({ palette }) => palette.custom.accordionItemBorderRadius,
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

export const stripeLinkButtonBackgroundHoverColorMap: ThemeVariantMap<string> =
  {
    SEND: ({ palette, theme }) =>
      theme === 'light'
        ? palette.custom.ctaContainedLightHoverColor
        : palette.custom.ctaContainedDarkHoverColor,
    IO: ({ palette, theme }) =>
      theme === 'light'
        ? palette.custom.ctaContainedLightHoverColor
        : palette.custom.ctaContainedDarkHoverColor,
    WALLET: ({ palette, theme }) =>
      theme === 'light'
        ? palette.custom.ctaContainedLightHoverColor
        : palette.custom.walletPrimaryColorHover,
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
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.borderColor : palette.custom.borderColor,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.borderColor : palette.custom.borderColor,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.borderColor : palette.custom.borderColor,
};

export const chipTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.chipsTextColor
      : palette.custom.chipsTextColor,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.chipsTextColor
      : palette.custom.chipsTextColor,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.chipsTextColor
      : palette.custom.chipsTextColor,
};

export const highlightBoxBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.highLightBoxLightGreenBackground
      : palette.custom.highLightBoxLightGreenBackground,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.highLightBoxLightGreenBackground
      : palette.custom.highLightBoxLightGreenBackground,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.highLightBoxLightGreenBackground
      : palette.custom.highLightBoxLightGreenBackground,
};

export const highlightBoxEyeletBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.highLightBoxLightPurpleBackground
      : palette.custom.highLightBoxLightPurpleBackground,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.highLightBoxLightPurpleBackground
      : palette.custom.highLightBoxLightPurpleBackground,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.highLightBoxLightPurpleBackground
      : palette.custom.highLightBoxLightPurpleBackground,
};

export const highlightBoxEyeletTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.highLightBoxPurpleText
      : palette.custom.highLightBoxPurpleText,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.highLightBoxPurpleText
      : palette.custom.highLightBoxPurpleText,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.highLightBoxPurpleText
      : palette.custom.highLightBoxPurpleText,
};

export const textSectionSubtitleColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.black : palette.custom.black,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.black : palette.custom.black,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.black : palette.custom.black,
};

export const textColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary,
};

export const extraTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.secondary,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.secondary,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.secondary,
};

export const grayLinkColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.grey[100] : palette.text.secondary,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.grey[100] : palette.text.secondary,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.grey[100] : palette.text.secondary,
};

export const switchButtonSelectedBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'light'
      ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
      : palette.background.paper,
  IO: ({ palette, theme }) =>
    theme === 'light'
      ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
      : palette.background.paper,
  WALLET: ({ palette, theme }) =>
    theme === 'light'
      ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
      : palette.background.paper,
};

export const commonBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.backgroundColorDark
      : palette.background.paper,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.backgroundColorDark
      : palette.background.paper,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.backgroundColorDark
      : palette.background.paper,
};

export const commonBackgroundColorAlternativeMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.backgroundColorDark
      : palette.custom.backgroundColorDefault,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.backgroundColorDark
      : palette.custom.backgroundColorDefault,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.backgroundColorDark
      : palette.custom.backgroundColorDefault,
};

export const commonExtraBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.text.primary : palette.custom.primaryColorDark,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.text.primary : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.text.primary : palette.custom.primaryColorDark,
};

export const commonTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary,
};

export const commonTextAlternativeColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.primary.contrastText
      : palette.custom.primaryColorDark,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.primary.contrastText
      : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.primary.contrastText
      : palette.custom.primaryColorDark,
};

export const commonExtraTextColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.secondary,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.secondary,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.primary.contrastText : palette.text.secondary,
};

export const commonLinkColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.primary.contrastText
      : palette.custom.darkLinkColor,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.primary.contrastText
      : palette.custom.darkLinkColor,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.primary.contrastText
      : palette.custom.darkLinkColor,
};

export const commonGrayLinkColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.grayLinkColor : palette.custom.black50,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.grayLinkColor : palette.custom.black50,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? palette.custom.grayLinkColor : palette.custom.black50,
};

export const switchMenuItemBackgroundColorMap: ThemeVariantMap<string> = {
  SEND: ({ theme }) =>
    theme === 'dark' ? 'rgba(224, 242, 255, 0.7)' : 'rgba(224, 242, 255, 0.7)',
  IO: ({ theme }) =>
    theme === 'dark' ? 'rgba(224, 242, 255, 0.7)' : 'rgba(224, 242, 255, 0.7)',
  WALLET: ({ theme }) =>
    theme === 'dark' ? 'rgba(224, 242, 255, 0.7)' : 'rgba(224, 242, 255, 0.7)',
};

export const megaHeaderPrimaryColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.primaryColorDark
      : palette.custom.primaryColorDark,
  IO: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.primaryColorDark
      : palette.custom.primaryColorDark,
  WALLET: ({ palette, theme }) =>
    theme === 'dark'
      ? palette.custom.primaryColorDark
      : palette.custom.primaryColorDark,
};

export const preFooterBackgroundColorColorMap: ThemeVariantMap<string> = {
  SEND: ({ palette, theme }) =>
    theme === 'dark' ? '#031344' : palette.background.paper,
  IO: ({ palette, theme }) =>
    theme === 'dark' ? '#031344' : palette.background.paper,
  WALLET: ({ palette, theme }) =>
    theme === 'dark' ? '#031344' : palette.background.paper,
};

export const themeVariantMaps = {
  accentColor: variantAccentColorMap,
  actionColor: variantActionColorMap,
  contentLinkColor: variantContentLinkColorMap,
  sectionBackgroundColor: variantSectionBackgroundColorMap,
  sectionBackgroundAlternativeGrey: variantSectionBackgroundAlternativeGreyMap,
  accordionBackgroundColor: accordionBackgroundColorMap,
  accordionItemBackgroundColor: accordionItemBackgroundColorMap,
  accordionItemBorderRadius: accordionItemBorderRadiusMap,
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
  stripeLinkButtonBackgroundHoverColor: stripeLinkButtonBackgroundHoverColorMap,
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
  chipTextColor: chipTextColorMap,
  highlightBoxBackgroundColor: highlightBoxBackgroundColorMap,
  highlightBoxEyeletBackgroundColor: highlightBoxEyeletBackgroundColorMap,
  highlightBoxEyeletTextColor: highlightBoxEyeletTextColorMap,
  textSectionSubtitleColor: textSectionSubtitleColorMap,
  textColor: textColorMap,
  extraTextColor: extraTextColorMap,
  grayLinkColor: grayLinkColorMap,
  switchButtonSelectedBackgroundColor: switchButtonSelectedBackgroundColorMap,
  commonBackgroundColor: commonBackgroundColorMap,
  commonBackgroundColorAlternative: commonBackgroundColorAlternativeMap,
  commonExtraBackgroundColor: commonExtraBackgroundColorMap,
  commonTextColor: commonTextColorMap,
  commonTextAlternativeColor: commonTextAlternativeColorMap,
  commonExtraTextColor: commonExtraTextColorMap,
  commonLinkColor: commonLinkColorMap,
  commonGrayLinkColor: commonGrayLinkColorMap,
  switchMenuItemBackgroundColor: switchMenuItemBackgroundColorMap,
  megaHeaderPrimaryColor: megaHeaderPrimaryColorMap,
  preFooterBackgroundColorColor: preFooterBackgroundColorColorMap,
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
