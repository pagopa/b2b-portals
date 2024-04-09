import React from 'react';
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { type CommonProps } from '../../types/components';
import {
  renderBody,
  renderEditorialTitle,
  renderEyelet,
} from '../../utils/Components.helpers';

export interface EditorialContentProps extends CommonProps {
  title: string;
  eyelet?: string;
  body: string | JSX.Element;
}

export const Content = ({
  eyelet,
  title,
  body,
  theme,
}: EditorialContentProps) => {
  const { palette, breakpoints } = useTheme();
  const eyeletColor =
    theme === 'dark' ? palette.primary.contrastText : palette.text.secondary;
  const textColor =
    theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
  const maxTextWidth = breakpoints.values.md / 2;

  return (
    <Stack maxWidth={{ md: maxTextWidth }} gap={2}>
      {renderEyelet(eyeletColor, eyelet)}
      {renderEditorialTitle(title, textColor)}
      {renderBody(body, textColor)}
    </Stack>
  );
};
