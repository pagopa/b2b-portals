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
          width: '100%',
          height: 'auto',
          maxHeight: 490,
          margin: 'auto',
          display: 'block',
          justifyItems: 'center',
        },
        '.MuiTypography-root': {
          color:
            EditorialData.theme === 'dark'
              ? 'primary.contrastText'
              : 'text.primary',
          a: {
            color:
              EditorialData.theme === 'dark'
                ? 'primary.contrastText'
                : 'text.primary',
          },
        },
      }}
    >
      <EditorialEC {...EditorialData} />
    </Stack>
  </section>
);

export default Editorial;
