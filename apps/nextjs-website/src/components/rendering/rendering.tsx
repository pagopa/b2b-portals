import React from 'react';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import HowTo from '../HowTo';
import { SectionDataToHowToProps } from './sectionDataToProps';
import { PageData } from '@/lib/fetch/page';

export function rendering(
  componentData: PageData['data']['attributes']['sections'][0],
  index: number
) {
  // eslint-disable-next-line no-underscore-dangle
  switch (componentData.__component) {
    case 'sections.how-to':
      const HowToSectionProps: HowToProps =
        SectionDataToHowToProps(componentData);
      return <HowTo key={index} {...HowToSectionProps} />; // id={componentData.sectionID}

    default:
      return null;
  }
}
