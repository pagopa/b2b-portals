import React from 'react';
import { Stack } from '@mui/material';
import { CtaButtons } from '@react-components/components/common/Common';
import { HeaderCtasProps } from '@react-components/types/Header/Header.types';

export const HeaderCtas: React.FC<HeaderCtasProps> = ({
  onOpenDrawer,
  ctaButtons,
  theme,
}) => {
  return ctaButtons && ctaButtons.length > 0 ? (
    <Stack direction='row' onClick={onOpenDrawer}>
      {CtaButtons({
        ctaButtons: ctaButtons.map((CtaButton) => ({
          ...CtaButton,
          sx: { width: { md: 'auto', xs: '100%' } },
        })),
        theme,
      })}
    </Stack>
  ) : null;
};
