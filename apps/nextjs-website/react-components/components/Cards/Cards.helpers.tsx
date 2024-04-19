import { Grid, Stack } from '@mui/material';
import { type ReactNode } from 'react';

export const CardsItemContainer = ({
  masonry,
  children,
}: {
  masonry: boolean;
  children: ReactNode[];
}) => {
  return masonry ? (
    <Stack
      sx={{
        display: 'flex',
        flexFlow: 'column wrap',
        gap: '20px',
        alignItems: 'center',
        width: { xs: '100%', sm: '50%' },
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
