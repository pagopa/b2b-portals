import React from 'react';
import { BannerLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/BannerLink';
import BannerLink from '../Bannerlink';
import { SectionDataToBannerlinkProps } from './sectionDataToProps';
import { PageData } from '@/lib/fetch/page';

export function rendering(
  componentData: PageData['data']['attributes']['sections'][0],
  index: number
) {
  // eslint-disable-next-line no-underscore-dangle
  switch (componentData.__component) {
    case 'sections.banner-link':
      const BannerlinkSectionProps: BannerLinkProps =
        SectionDataToBannerlinkProps(componentData);
      return <BannerLink key={index} {...BannerlinkSectionProps} />; // id={componentData.sectionID}

    default:
      return null;
  }
}
