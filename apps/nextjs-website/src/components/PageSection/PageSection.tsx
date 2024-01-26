import React from 'react';
import Hero from '../Hero';
import Editorial from '../Editorial';
import Accordion from '../Accordion';
import Feature from '../Feature';
import HowTo from '../HowTo';
import StripeLink from '../StripeLink';
import { PageSection as PageSectionData } from '@/lib/fetch/types/PageSection';

const PageSection = (props: PageSectionData) => {
  // eslint-disable-next-line no-underscore-dangle
  switch (props.__component) {
    case 'sections.hero':
      return <Hero {...props} />;
    case 'sections.editorial':
      return <Editorial {...props} />;
    case 'sections.accordion':
      return <Accordion {...props} />;
    case 'sections.feature':
      return <Feature {...props} />;
    case 'sections.how-to':
      return <HowTo {...props} />;
    case 'sections.stripelink':
      return <StripeLink {...props} />;
    default:
      return null;
  }
};

export default PageSection;
