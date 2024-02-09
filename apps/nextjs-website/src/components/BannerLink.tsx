'use client';
import { BannerLink as BannerLinkEC } from '@pagopa/pagopa-editorial-components';
import { BannerLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/BannerLink';
import { Icon } from '@mui/material';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';
import { formatValidMuiIcon } from '@/components/Icons';

const makeBannerLinkProps = ({
  decoration,
  ctaButtons,
  ...rest
}: BannerLinkSection): BannerLinkProps => ({
  ...(decoration && {
    decoration: {
      src: decoration.url,
      alt: decoration.alternativeText,
      width: '60px',
      height: '60px',
    },
  }),
  ...(ctaButtons.length > 0 && {
    ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
      ...ctaBtn,
      color: rest.theme === 'dark' ? 'negative' : 'primary',
      ...(icon && { startIcon: <Icon>{formatValidMuiIcon(icon)}</Icon> }),
    })),
  }),
  ...rest,
});

const BannerLink = (props: BannerLinkSection) => (
  <section id={props.sectionID || undefined}>
    <BannerLinkEC {...makeBannerLinkProps(props)} />
  </section>
);

export default BannerLink;
