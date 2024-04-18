import React from 'react';
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { EditorialContentProps } from '../../types/Editorial/Editorial.types';
import { Body, Title } from '../common/Common';
import { Eyelet } from './Editorial.helpers';
import { TextColor, ExtraTextColor } from '../common/Common.helpers';

export const Content = ({
  eyelet,
  title,
  body,
  theme,
}: EditorialContentProps) => {
  const { breakpoints } = useTheme();
  const eyeletColor = ExtraTextColor(theme);
  const textColor = TextColor(theme);
  const maxTextWidth = breakpoints.values.md / 2;

  return (
    <Stack maxWidth={{ md: maxTextWidth }} gap={2}>
      {Eyelet(eyeletColor, eyelet)}
      <Title textColor={textColor} title={title} variant='h4'/>
      <Body textColor={textColor} body={body} variant='body2'/>
    </Stack>
  );
};
