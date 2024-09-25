'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { BannerLink as BannerLinkRC } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types/BannerLink/BannerLink.types';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';

export const makeBannerLinkProps = ({
  sections,
  ...rest
}: BannerLinkSection): BannerLinkProps => ({
  sections: sections.map(({ body, icon, ctaButtons, ...requiredFields }) => ({
    ...requiredFields,
    body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
    ...(icon.data && {
      iconURL: icon.data.attributes.url,
    }),
    ...(ctaButtons && { ctaButtons }),
  })),
  ...rest,
});

const BannerLink = (props: BannerLinkSection) => (
  <BannerLinkRC {...makeBannerLinkProps(props)} />
);

export default BannerLink;
