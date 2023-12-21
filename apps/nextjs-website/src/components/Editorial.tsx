'use client';
import React from 'react';
import { Editorial as EditorialEC } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { Stack } from '@mui/material';
import { ExtendedEditorialProps } from '@/lib/fetch/types/ExtendedPropTypes';

const Editorial: React.FC<
  ExtendedEditorialProps & { sectionID: string | undefined }
> = (EditorialData) => (
  <section id={EditorialData.sectionID}>
    <Stack
      sx={{
        img: {
          maxHeight: 490,
        },
        '.markdown': {
          margin: 0,
          fontFamily: '"Titillium Web",sans-serif',
          fontWeight: 400,
          fontSize: '1rem',
          lineHeight: 1.4,
          color:
            EditorialData.theme === 'dark'
              ? 'primary.contrastText'
              : 'text.primary',
          letterSpacing: '0.15px',
        },
      }}
    >
      <EditorialEC {...EditorialData} />
    </Stack>
  </section>
);

export default Editorial;
