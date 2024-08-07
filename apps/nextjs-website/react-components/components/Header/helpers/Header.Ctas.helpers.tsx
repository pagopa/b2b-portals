import React from 'react';
import { Stack } from '@mui/material';
import { CtaButtons } from '@react-components/components/common/Common';
import { HeaderCtasProps } from '@react-components/types/Header/Header.types';

export const HeaderCtas: React.FC<HeaderCtasProps> = ({
  onOpenDrawer,
  buttonText,
  theme,
}) => (
  <Stack direction='row'>
    <CtaButtons
      ctaButtons={[
        {
          text: buttonText,
          onClick: onOpenDrawer,
          sx: { width: '100%' },
        },
      ]}
      theme={theme}
    />
  </Stack>
);
