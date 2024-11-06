'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { BannerLink as BannerLinkRC } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types/BannerLink/BannerLink.types';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';

export const makeBannerLinkProps = ({
  sections,
  ...rest
}: BannerLinkSection & { themeVariant: ThemeVariant }): BannerLinkProps => ({
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

const BannerLink = (
  props: BannerLinkSection & { themeVariant: ThemeVariant }
) => <BannerLinkRC {...makeBannerLinkProps(props)} />;

export default BannerLink;
