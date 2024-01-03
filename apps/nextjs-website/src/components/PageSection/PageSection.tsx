import React from 'react';
import Hero, { SectionDataToHeroProps } from '../Hero';
import { PageSection } from '@/lib/fetch/types/PageSection';

export default function rendering(componentData: PageSection) {
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
