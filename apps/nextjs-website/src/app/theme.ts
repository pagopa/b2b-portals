'use client';
import { createTheme } from '@mui/material/styles';
import { theme as MUIItaliaTheme } from '@pagopa/mui-italia';

export const theme = createTheme(MUIItaliaTheme, {
  shadows: {
    custom: {
      boxShadow: '-6px -6px 19px 2px #002B551A',
    },
  },
  palette: {
    background: {
      default: "#0B3EE3",
    },
  },
});
