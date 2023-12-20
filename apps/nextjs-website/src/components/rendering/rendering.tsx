import React from 'react';
import Editorial from '../Editorial';
import { SectionDataToEditorialProps } from './sectionDataToProps';
import { PageSection } from '@/lib/fetch/types/PageSection';
import { ExtendedEditorialProps } from '@/lib/fetch/types/ExtendedPropTypes';

export function rendering(componentData: PageSection, index: number) {
  // Temporarily disable no-small-switch rule (new cases will be added with PRs for other components)
  // eslint-disable-next-line no-underscore-dangle,sonarjs/no-small-switch
  switch (componentData.__component) {
    case 'sections.editorial':
      const EditorialSectionProps: ExtendedEditorialProps =
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
