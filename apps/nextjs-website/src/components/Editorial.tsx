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
      }}
    >
      <EditorialEC {...EditorialData} />
    </Stack>
  </section>
);

export default Editorial;
