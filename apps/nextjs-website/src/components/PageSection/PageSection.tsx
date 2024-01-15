import React from 'react';
import Hero from '../Hero';
import Editorial from '../Editorial';
import Feature from '../Feature';
import { PageSection as PageSectionData } from '@/lib/fetch/types/PageSection';

const PageSection = (props: PageSectionData) => {
  // eslint-disable-next-line no-underscore-dangle
  switch (props.__component) {
    case 'sections.hero':
      return <Hero {...props} />;
    case 'sections.editorial':
      return <Editorial {...props} />;
    case 'sections.feature':
      return <Feature {...props} />;
    default:
      return null;
  }
};

export default PageSection;
