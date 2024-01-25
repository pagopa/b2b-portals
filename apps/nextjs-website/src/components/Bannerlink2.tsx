'use client';
import { BannerLink as BannerLinkEC } from '@pagopa/pagopa-editorial-components';
import { BannerLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/BannerLink';
import { Icon } from '@mui/material';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';
import { formatValidMuiIcon, isValidMuiIcon } from '@/components/Icons';

const makeBannerLinkProps = ({
  decoration,
  ctaButtons,
  ...rest
}: BannerLinkSection): BannerLinkProps => ({
  ...(decoration && {
    decoration: {
      url: decoration.url,
      alt: decoration.alternativeText,
    },
  }),
  ...(ctaButtons.length > 0 && {
    ctaButtons: ctaButtons.map((ctaBtn) => ({
      ...ctaBtn,
      color: rest.theme === 'dark' ? 'negative' : 'primary',
      ...(isValidMuiIcon(ctaBtn.icon) && {
        startIcon: <Icon>{formatValidMuiIcon(ctaBtn.icon)}</Icon>,
      }),
    })),
  }),
  ...rest,
});

const BannerLink = (props: BannerLinkSection) => (
  <section>
    <BannerLinkEC {...makeBannerLinkProps(props)} />
  </section>
);

export default BannerLink;
