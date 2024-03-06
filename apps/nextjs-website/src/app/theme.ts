"use client";
import { createTheme } from "@mui/material/styles";
import { theme as muiItaliaTheme } from "@pagopa/mui-italia";

export const sendTheme = createTheme(muiItaliaTheme, {
  palette: {
    background: {
      default: "#0B3EE3",
    },
  },
});