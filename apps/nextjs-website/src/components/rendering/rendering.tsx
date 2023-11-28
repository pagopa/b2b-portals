import React from 'react';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import Feature from '../Feature';
import { SectionDataToFeatureProps } from './sectionDataToProps';
import { PageData } from '@/lib/fetch/page';

export function rendering(
  componentData: PageData['data']['attributes']['sections'][0],
  index: number
) {
  // eslint-disable-next-line no-underscore-dangle
  switch (componentData.__component) {
    case 'sections.feature':
      const FeatureSectionProps: FeatureProps =
        SectionDataToFeatureProps(componentData);
      return <Feature key={index} {...FeatureSectionProps} />; // id={componentData.sectionID}

    default:
      return null;
  }
}
