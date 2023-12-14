import React from 'react';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import Hero from '../Hero';
import Editorial from '../Editorial';
import {
  SectionDataToHeroProps,
  SectionDataToEditorialProps,
} from './sectionDataToProps';
import { PageSection } from '@/lib/fetch/types/PageSection';

export function rendering(componentData: PageSection, index: number) {
  // eslint-disable-next-line no-underscore-dangle
  switch (componentData.__component) {
    case 'sections.hero':
      const HeroSectionProps: HeroProps = SectionDataToHeroProps(componentData);
      return <Hero key={index} {...HeroSectionProps} />; // id={componentData.sectionID}

    case 'sections.editorial':
      const EditorialSectionProps: EditorialProps =
        SectionDataToEditorialProps(componentData);
      return <Editorial key={index} {...EditorialSectionProps} />; // id={componentData.sectionID}

    default:
      return null;
  }
}
