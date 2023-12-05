'use client';
import React from 'react';
import { BannerLink as BannerLinkEC } from '@pagopa/pagopa-editorial-components';
import { BannerLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/BannerLink';

const BannerLink: React.FC<BannerLinkProps> = (bannerlinkData) => (
  <BannerLinkEC {...bannerlinkData} />
);

export default BannerLink;
