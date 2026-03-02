import React from 'react';
import { Typography } from '@mui/material';

export const Eyelet = (eyeletColor: string, eyelet?: string, id?: string) => {
  if (!eyelet) {
    return null;
  }

  return (
    <Typography variant='overline' color={eyeletColor} {...(id && { id })}>
      {eyelet}
    </Typography>
  );
};
