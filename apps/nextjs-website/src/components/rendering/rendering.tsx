import React from 'react';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import Hero from '../Hero';
import Editorial from '../Editorial';
import HowTo from '../HowTo';
import {
  SectionDataToEditorialProps,
  SectionDataToHeroProps,
  SectionDataToHowToProps,
} from './sectionDataToProps';
import { PageData } from '@/lib/fetch/page';

export function rendering(
  componentData: PageData['data']['attributes']['sections'][0],
  index: number
) {
  // eslint-disable-next-line no-underscore-dangle
  switch (componentData.__component) {
    case 'sections.hero':
      const HeroSectionProps: HeroProps = SectionDataToHeroProps(componentData);
      return <Hero key={index} {...HeroSectionProps} />; // id={componentData.sectionID}

    case 'sections.editorial':
      const EditorialSectionProps: EditorialProps =
        SectionDataToEditorialProps(componentData);
      return <Editorial key={index} {...EditorialSectionProps} />; // id={componentData.sectionID}

    case 'sections.how-to':
      const HowToSectionProps: HowToProps =
        SectionDataToHowToProps(componentData);
      return <HowTo key={index} {...HowToSectionProps} />; // id={componentData.sectionID}

    default:
      return null;
  }
}
