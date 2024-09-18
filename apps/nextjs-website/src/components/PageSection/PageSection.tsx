import React from 'react';
import Hero from '../Hero';
import Editorial from '../Editorial';
import Accordion from '../Accordion';
import Feature from '../Feature';
import HowTo from '../HowTo';
import BannerLink from '../BannerLink';
import StripeLink from '../StripeLink';
import Cards from '../Cards';
import OneTrustSection from '../OneTrust';
import IFrameSection from '../IFrame';
import Form from '../Form';
import EditorialSwitch from '../EditorialSwitch';
import HeroCounter from '../HeroCounter';
import VideoImage from '../VideoImage';
import HeroChips from '../HeroChips';
import ServiceCarousel from '../ServiceCarousel';
import HighlightBox from '../HighlightBox';
import Stats from '../Stats';
import RowText from '../RowText';
import TextSection from '../TextSection';
import PageSwitch from '../PageSwitch';
import { PageSection as PageSectionData } from '@/lib/fetch/types/PageSection';
// eslint-disable-next-line complexity
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
    case 'sections.banner-link':
      return <BannerLink {...props} />;
    case 'sections.stripe-link':
      return <StripeLink {...props} />;
    case 'sections.cards':
      return <Cards {...props} />;
    case 'sections.one-trust':
      return <OneTrustSection {...props} />;
    case 'sections.i-frame':
      return <IFrameSection {...props} />;
    case 'sections.form':
      return <Form {...props} />;
    case 'sections.editorial-switch':
      return <EditorialSwitch {...props} />;
    case 'sections.hero-counter':
      return <HeroCounter {...props} />;
    case 'sections.video-image':
      return <VideoImage {...props} />;
    case 'sections.hero-chips':
      return <HeroChips {...props} />;
    case 'sections.service-carousel':
      return <ServiceCarousel {...props} />;
    case 'sections.highlight-box':
      return <HighlightBox {...props} />;
    case 'sections.stats':
      return <Stats {...props} />;
    case 'sections.row-text':
      return <RowText {...props} />;
    case 'sections.text-section':
      return <TextSection {...props} />;
    case 'sections.page-switch':
      return <PageSwitch {...props} />;
    default:
      return null;
  }
};

export default PageSection;
