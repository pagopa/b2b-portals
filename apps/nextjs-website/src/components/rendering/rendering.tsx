import React from 'react';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import Editorial from '../Editorial';
import { SectionDataToEditorialProps } from './sectionDataToProps';
import { PageData } from '@/lib/fetch/page';

export function rendering(
  componentData: PageData['data']['attributes']['sections'][0],
  index: number
) {
  // eslint-disable-next-line no-underscore-dangle
  switch (componentData.__component) {
    case 'sections.editorial':
      const EditorialSectionProps: EditorialProps =
        SectionDataToEditorialProps(componentData);
      return <Editorial key={index} {...EditorialSectionProps} />; // id={componentData.sectionID}

    default:
      return null;
  }
}
