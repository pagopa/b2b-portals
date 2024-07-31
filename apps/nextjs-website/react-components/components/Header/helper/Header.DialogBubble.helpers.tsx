import React from 'react';
import { Stack, useTheme } from '@mui/material';
import { DialogBubbleProps } from '@react-components/types/Header/Header.types';

export const DialogBubble = ({
  children,
  ...stackProps
}: DialogBubbleProps) => {
  const muiTheme = useTheme();
  const styles = {
    bubbleContainer: {
      position: 'absolute',
      marginTop: muiTheme.spacing(8),
      padding: muiTheme.spacing(2),
      direction: 'ltr',
      textAlign: { xs: 'right', md: 'left' },
      borderRadius: '4px',
      zIndex: 1,
    },
  };

  return (
    <Stack
      sx={{
        ...styles.bubbleContainer,
        bgcolor: 'common.white',
        boxShadow: { xs: 'custom.boxShadow', md: 'custom.otMenuMobile' },
      }}
      aria-haspopup='true'
      {...stackProps}
    >
      {children}
    </Stack>
  );
};
