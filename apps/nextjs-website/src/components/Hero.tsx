'use client';
import React from 'react';
import { Hero as HeroEC } from '@pagopa/pagopa-editorial-components';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero/index';
import { HeroSection } from '@/lib/fetch/types/PageSection';

export const SectionDataToHeroProps = ({
  title,
  subtitle,
  inverse,
  size,
  useHoverlay,
  image,
  background,
  ctaButtons,
}: HeroSection): HeroProps => ({
  title,
  subtitle, // TODO: Parse rich text (markdown)
  useHoverlay,
  size,
  image: image?.url ? 'http://localhost:1337' + image.url : undefined, // TODO: Sub "http://localhost:1337" for config.STRAPI_API_BASE_URL
  altText: image?.alternativeText ?? '',
  inverse,
  background: background?.url,
  ctaButtons,
});

const Hero: React.FC<HeroProps & { sectionID: string | undefined }> = (
  HeroData
) => (
  <section id={HeroData.sectionID}>
    <HeroEC {...HeroData} />;
  </section>
);

export default Hero;
