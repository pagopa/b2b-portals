'use client';
import React from 'react';
import { Hero as HeroEC } from '@pagopa/pagopa-editorial-components';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero/index';
import { Stack } from '@mui/material';

const Hero: React.FC<HeroProps & { sectionID: string | undefined }> = (
  HeroData
) => (
  <Stack
    sx={{
      color: '#fff',
    }}
  >
    <section id={HeroData.sectionID}>
      <HeroEC {...HeroData} />;
    </section>
  </Stack>
);

export default Hero;
