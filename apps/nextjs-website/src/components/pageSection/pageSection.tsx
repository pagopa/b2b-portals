import React from 'react';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import Hero from '../Hero';
import { HeroSection, PageSection } from '@/lib/fetch/types/PageSection';

const SectionDataToHeroProps = ({
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

export function rendering(componentData: PageSection) {
  // Temporarily disable no-small-switch rule (new cases will be added with PRs for other components)
  // eslint-disable-next-line no-underscore-dangle,sonarjs/no-small-switch
  switch (componentData.__component) {
    case 'sections.hero':
      const HeroSectionProps = SectionDataToHeroProps(componentData);
      return (
        <Hero
          {...HeroSectionProps}
          sectionID={componentData.sectionID ?? undefined}
        />
      );

    default:
      return;
  }
}
