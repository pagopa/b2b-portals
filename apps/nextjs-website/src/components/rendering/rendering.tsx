import React from 'react';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import { BannerLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/BannerLink';
import Hero from '../Hero';
import Editorial from '../Editorial';
import Feature from '../Feature';
import HowTo from '../HowTo';
import BannerLink from '../Bannerlink';
import {
  SectionDataToHeroProps,
  SectionDataToEditorialProps,
  SectionDataToFeatureProps,
  SectionDataToHowToProps,
  SectionDataToBannerlinkProps,
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

    case 'sections.feature':
      const FeatureSectionProps: FeatureProps =
        SectionDataToFeatureProps(componentData);
      return <Feature key={index} {...FeatureSectionProps} />; // id={componentData.sectionID}

    case 'sections.how-to':
      const HowToSectionProps: HowToProps =
        SectionDataToHowToProps(componentData);
      return <HowTo key={index} {...HowToSectionProps} />; // id={componentData.sectionID}

    case 'sections.banner-link':
      const BannerlinkSectionProps: BannerLinkProps =
        SectionDataToBannerlinkProps(componentData);
      return <BannerLink key={index} {...BannerlinkSectionProps} />; // id={componentData.sectionID}

    default:
      return null;
  }
}
