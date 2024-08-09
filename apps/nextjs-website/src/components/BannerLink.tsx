'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { BannerLink as BannerLinkRC } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types/BannerLink/BannerLink.types';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';

export const makeBannerLinkProps = ({
  sections,
  theme,
}: BannerLinkSection): BannerLinkProps => ({
  sections: sections.map(
    ({ body, icon, decoration, ctaButtons, ...requiredFields }) => ({
      ...requiredFields,
      body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
      ...(icon && {
        icon: {
          icon,
        },
      }),
      ...(ctaButtons && { ctaButtons }),
      ...(decoration.data && {
        decoration: {
          src: decoration.data.attributes.url,
          alt: decoration.data.attributes.alternativeText ?? '',
        },
      }),
    })
  ),
  theme,
});

const BannerLink = (props: BannerLinkSection) => (
  <BannerLinkRC {...makeBannerLinkProps(props)} />
);

export default BannerLink;
