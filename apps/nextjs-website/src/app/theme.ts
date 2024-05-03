'use client';
import { createTheme } from '@mui/material/styles';
import { theme as MUIItaliaTheme } from '@pagopa/mui-italia';

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
    },
  },
});
