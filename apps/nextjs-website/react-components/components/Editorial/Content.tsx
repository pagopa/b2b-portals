import React from 'react';
import { useTheme, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { EditorialContentProps } from '../../types/Editorial/Editorial.types';
import { Title } from '../common/Common';
import { Eyelet } from './Editorial.helpers';
import { TextColor, ExtraTextColor } from '../common/Common.helpers';

export const Content = ({
  eyelet,
  title,
  titleTag = 'h2',
  body,
  theme,
  themeVariant,
}: EditorialContentProps) => {
  const muiTheme = useTheme();
  const { breakpoints, palette } = muiTheme;
  const eyeletColor = ExtraTextColor(theme);
  const textColor = TextColor(theme);
  const maxTextWidth = breakpoints.values.md / 2;

  const linkColor =
    theme === 'dark'
      ? palette.custom.white
      : themeVariant === 'SEND'
        ? palette.primary.main
        : palette.custom.primaryColorDark;

  return (
    <Stack maxWidth={{ md: maxTextWidth }} gap={2}>
      {Eyelet(eyeletColor, eyelet)}
      <Title
        textColor={textColor}
        title={title}
        variant='h4'
        textAlign='left'
        component={titleTag}
      />
      <Typography
        component='div'
        variant='body2'
        color={textColor}
        sx={{
          fontSize: '18px',
          '& a': {
            fontWeight: 700,
            color: linkColor,
            textDecoration: 'underline',
            '&:hover': {
              color: linkColor,
            },
          },
          '& p': {
            marginBottom: '0px',
            color: textColor,
          },
        }}
      >
        {body}
      </Typography>
    </Stack>
  );
};
