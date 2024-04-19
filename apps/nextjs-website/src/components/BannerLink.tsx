'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { BannerLink as BannerLinkRC } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';
import Icon from '@/components/Icon';

const makeBannerLinkProps = ({
  body,
  decoration,
  ctaButtons,
  ...rest
}: BannerLinkSection): BannerLinkProps => ({
  body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
  ...(decoration && {
    decoration: {
      src: decoration.url,
      alt: decoration.alternativeText || undefined,
      width: '60px',
      height: '60px',
    },
  }),
  ...(ctaButtons.length > 0 && {
    ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
      ...ctaBtn,
      ...(icon && { startIcon: Icon(icon) }),
    })),
  }),
  ...rest,
});

const BannerLink = (props: BannerLinkSection) => (
  <BannerLinkRC {...makeBannerLinkProps(props)} />
);

export default BannerLink;
