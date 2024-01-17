'use client';
import { BannerLink as BannerLinkEC } from '@pagopa/pagopa-editorial-components';
import { BannerLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/BannerLink';
import { Icon } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';
import { formatValidMuiIcon, isValidMuiIcon } from '@/components/Icons';

const makeBannerLinkProps = ({
  body,
  decoration,
  ctaButtons,
  ...rest
}: BannerLinkSection): BannerLinkProps => ({
  body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
  ...(decoration && {
    decoration: {
      url: decoration.url,
      alt: decoration.alternativeText,
    },
  }),
  ctaButtons: ctaButtons.map((ctaBtn) => ({
    ...ctaBtn,
    color: rest.theme === 'dark' ? 'negative' : 'primary',
    ...(isValidMuiIcon(ctaBtn.icon) && {
      startIcon: <Icon>{formatValidMuiIcon(ctaBtn.icon)}</Icon>,
    }),
  })),
  ...rest,
});

const BannerLink = (props: BannerLinkSection) => (
  <BannerLinkEC {...makeBannerLinkProps(props)} />
);

export default BannerLink;
