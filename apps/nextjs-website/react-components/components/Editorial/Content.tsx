import React from 'react';
import { useTheme, Theme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { EditorialContentProps } from '../../types/Editorial/Editorial.types';
import { Body, Title } from '../common/Common';
import { Eyelet } from './Editorial.helpers';
import { TextColor, ExtraTextColor } from '../common/Common.helpers';

const customStyles = (theme: Theme) => {
  const { palette } = theme;
  return {
    dark: {
      'a': {
        color: `${palette.primary.contrastText} !important`,
        fontWeight: '700 !important',
        textDecorationColor: `${palette.primary.contrastText} !important`,
        '&:hover': {
          color: `${palette.primary.contrastText} !important`,
        },
      },
    },
    light: {
      'a': {
        color: `${palette.primary.main} !important`,
        fontWeight: '700 !important',
        textDecorationColor: `${palette.primary.main} !important`,
        '&:hover': {
          color: `${palette.primary.main} !important`,
        },
      },
    },
  };
};

export const Content = ({
  eyelet,
  title,
  body,
  theme,
}: EditorialContentProps) => {
  const muiTheme = useTheme();
  const { breakpoints } = muiTheme;
  const eyeletColor = ExtraTextColor(theme);
  const textColor = TextColor(theme);
  const maxTextWidth = breakpoints.values.md / 2;

  return (
    <Stack maxWidth={{ md: maxTextWidth }} gap={2} sx={customStyles(muiTheme)[theme]}>
      {Eyelet(eyeletColor, eyelet)}
      <Title textColor={textColor} title={title} variant='h4' textAlign='left'/>
      <Body textColor={textColor} body={body} variant='body2'/>
    </Stack>
  );
};