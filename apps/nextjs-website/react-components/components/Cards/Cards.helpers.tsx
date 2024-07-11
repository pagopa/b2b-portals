import { Grid, Stack } from '@mui/material';
import { type ReactNode } from 'react';

export const CardsItemContainer = ({
  masonry,
  center,
  children,
}: {
  masonry: boolean;
  center?: boolean;
  children: ReactNode[];
}) => {
  return masonry ? (
    <Stack
      sx={{
        display: 'flex',
        flexFlow: center ? 'row wrap' : 'column wrap',
        gap: '20px',
        alignItems: center ? 'center' : 'flex-start',
        justifyContent: center ? 'center' : 'flex-start',
        width: { xs: '100%', sm: '50%' },
        '& > *': {
          marginBottom: center ? '20px' : '0',
        },
      }}
    >
      {children}
    </Stack>
  ) : (
    <Grid container justifyContent='center' gap={2.5}>
      {children}
    </Grid>
  );
};