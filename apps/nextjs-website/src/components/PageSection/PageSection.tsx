import React from 'react';
import Hero from '../Hero';
import { PageSection as PageSectionData } from '@/lib/fetch/types/PageSection';

const PageSection = (props: PageSectionData) => {
  // Temporarily disable no-small-switch rule (new cases will be added with PRs for other components)
  // eslint-disable-next-line no-underscore-dangle,sonarjs/no-small-switch
  switch (props.__component) {
    case 'sections.hero':
      return <Hero {...props} />;
    default:
      return null;
  }
};

export default PageSection;

