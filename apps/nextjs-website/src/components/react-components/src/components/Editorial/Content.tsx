import React from 'react';
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { EditorialContentProps } from '../../utils/Components.types';
import {
  RenderBody,
  RenderEditorialTitle,
  RenderEyelet,
  useExtraTextColor,
  useTextColor,
} from '../../utils/Components.helpers';

export const Content = ({
  eyelet,
  title,
  body,
  theme,
}: EditorialContentProps) => {
  const { breakpoints } = useTheme();
  const eyeletColor = useExtraTextColor(theme);
  const textColor = useTextColor(theme);
  const maxTextWidth = breakpoints.values.md / 2;

  return (
    <Stack maxWidth={{ md: maxTextWidth }} gap={2}>
      {RenderEyelet(eyeletColor, eyelet)}
      {RenderEditorialTitle(title, textColor)}
      {RenderBody(body, textColor)}
    </Stack>
  );
};
