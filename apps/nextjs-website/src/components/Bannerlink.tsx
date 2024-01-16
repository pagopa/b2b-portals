'use client';
import React from 'react';
import { BannerLink as BannerLinkEC } from '@pagopa/pagopa-editorial-components';
import { BannerLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/BannerLink';
import { Icon } from '@mui/material';
import { BannerlinkSection } from '@/lib/fetch/types/PageSection';
import { formatValidMuiIcon, isValidMuiIcon } from '@/components/Icons';

const makeBannerlinkProps = ({
  title,
  body,
  reverse,
  ctaButtons,
  ...rest
}: BannerlinkSection): BannerLinkProps => ({
  title,
  body,
  reverse,
  ctaButtons: ctaButtons.map((ctaBtn) => ({
    ...ctaBtn,
    color: rest.theme === 'dark' ? 'negative' : 'primary',
    ...(isValidMuiIcon(ctaBtn.icon) && {
      startIcon: <Icon>{formatValidMuiIcon(ctaBtn.icon)}</Icon>,
    }),
  })),
  ...rest,
});

const BannerLink = (props: BannerlinkSection) => (
  <BannerLinkEC {...makeBannerlinkProps(props)} />
);

export default BannerLink;
