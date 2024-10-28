'use client';
import { createTheme } from '@mui/material/styles';
import { theme as MUIItaliaTheme } from '@pagopa/mui-italia';

declare module '@mui/material/styles' {
  interface Palette {
    readonly custom: {
      readonly backgroundColorDark: string;
      readonly backgroundColorLightGrey: string;
      readonly divider: string;
      readonly primaryColorDark: string;
      readonly backgroundColorDefault: string;
      readonly darkLinkColor: string;
      readonly grayLinkColor: string;
      readonly black50: string;
      readonly editorialSwitchButtonsBackgroundLightBlue: string;
      readonly editorialSwitchButtonsBackgroundWhite: string;
      readonly bannerLinkLightBlue: string;
      readonly bannerLinkDarkBlue: string;
      readonly blueIO: {
        readonly 500: string;
      };
      readonly highLightBoxLightGreenBackground: string;
      readonly highLightBoxPurpleText: string;
      readonly highLightBoxLightPurpleBackground: string;
      readonly black: string;
      readonly white: string;
      readonly mattWhiteBorder: string;
      readonly ioBackgroundColorDark: string;
      readonly ioBackgroundColorLight: string;
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

export const theme = createTheme(MUIItaliaTheme, {
  shadows: {
    custom: {
      boxShadow: '-6px -6px 19px 2px #002B551A',
      otMenuMobile:
        'rgb(0 43 85 / 10%) 0px 2px 4px -1px, rgb(0 43 85 / 5%) 0px 4px 5px',
    },
  },
  palette: {
    custom: {
      backgroundColorDark: '#0B3EE3',
      backgroundColorLightGrey: '#FAFAFA',
      divider: '#E3E7EB',
      primaryColorDark: '#0B3EE3',
      backgroundColorDefault: '#FAFAFA',
      darkLinkColor: '#1A73E8',
      grayLinkColor: '#F4F5F8',
      black50: '#00000050',
      editorialSwitchButtonsBackgroundLightBlue: '#0073e61a',
      editorialSwitchButtonsBackgroundWhite: '#ffffff1a',
      bannerLinkLightBlue: '#1043e8',
      bannerLinkDarkBlue: '#0B3EE3',
      blueIO: {
        500: '#0B3EE3',
      },
      highLightBoxLightGreenBackground: '#EFFBFF',
      highLightBoxPurpleText: '#5517E3',
      highLightBoxLightPurpleBackground: '#DDD1F9',
      black: '#000000',
      white: '#FFF',
      mattWhiteBorder: 'ffffff80',
      ioBackgroundColorDark: '#0062C3',
      ioBackgroundColorLight: '#FFF',
    },
  },
});
