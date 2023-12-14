import React from 'react';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import Hero from '../Hero';
import { SectionDataToHeroProps } from './sectionDataToProps';
import { PageSection } from '@/lib/fetch/types/PageSection';

export function rendering(componentData: PageSection, index: number) {
  // Temporarily disable no-small-switch rule (new cases will be added with PRs for other components)
  // eslint-disable-next-line no-underscore-dangle,sonarjs/no-small-switch
  switch (componentData.__component) {
    case 'sections.hero':
      const HeroSectionProps: HeroProps = SectionDataToHeroProps(componentData);
      return <Hero key={index} {...HeroSectionProps} />; // id={componentData.sectionID}

    default:
      return null;
  }
}
