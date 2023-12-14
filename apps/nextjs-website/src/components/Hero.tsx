'use client';
import React from 'react';
import { Hero as HeroEC } from '@pagopa/pagopa-editorial-components';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero/index';

const Hero: React.FC<HeroProps & { sectionID: string | undefined }> = (
  HeroData
) => (
  <section id={HeroData.sectionID}>
    <HeroEC {...HeroData} />;
  </section>
);

export default Hero;
