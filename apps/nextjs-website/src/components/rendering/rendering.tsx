import React from 'react';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import Hero from '../Hero';
import Editorial from '../Editorial';
import Feature from '../Feature';
import HowTo from '../HowTo';
import {
  SectionDataToHeroProps,
  SectionDataToEditorialProps,
  SectionDataToFeatureProps,
  SectionDataToHowToProps,
} from './sectionDataToProps';
import { PageSection } from '@/lib/fetch/types/PageSection';
import { ExtendedEditorialProps } from '@/lib/fetch/types/ExtendedPropTypes';
import { ExtendedHeroProps } from '@/lib/fetch/types/ExtendedPropTypes';

export function rendering(componentData: PageSection) {
  // eslint-disable-next-line no-underscore-dangle
  switch (componentData.__component) {
    case 'sections.hero':
      const HeroSectionProps: ExtendedHeroProps =
        SectionDataToHeroProps(componentData);
      return (
        <Hero
          {...HeroSectionProps}
          sectionID={componentData.sectionID ?? undefined}
        />
      );

    case 'sections.editorial':
      const EditorialSectionProps: ExtendedEditorialProps =
        SectionDataToEditorialProps(componentData);
      return (
        <Editorial
          {...EditorialSectionProps}
          sectionID={componentData.sectionID ?? undefined}
        />
      );

    case 'sections.feature':
      const FeatureSectionProps: FeatureProps =
        SectionDataToFeatureProps(componentData);
      return <Feature {...FeatureSectionProps} />; // id={componentData.sectionID}

    case 'sections.how-to':
      const HowToSectionProps: HowToProps =
        SectionDataToHowToProps(componentData);
      return <HowTo {...HowToSectionProps} />; // id={componentData.sectionID}

    default:
      return null;
  }
}
