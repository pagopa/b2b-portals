import React from 'react';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import Editorial from '../Editorial';
import { SectionDataToEditorialProps } from './sectionDataToProps';
import { PageSection } from '@/lib/fetch/types/PageSection';

export function rendering(componentData: PageSection, index: number) {
  // eslint-disable-next-line no-underscore-dangle
  switch (componentData.__component) {
    case 'sections.editorial':
      const EditorialSectionProps: EditorialProps =
        SectionDataToEditorialProps(componentData);
      return (
        <Editorial
          key={index}
          {...EditorialSectionProps}
          sectionID={componentData.sectionID ?? undefined}
        />
      );

    default:
      return null;
  }
}
