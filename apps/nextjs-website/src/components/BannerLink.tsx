import { BannerLink as BannerLinkRC } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types/BannerLink/BannerLink.types';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';

const makeBannerLinkProps = ({
  sections,
  theme,
}: BannerLinkSection): BannerLinkProps => ({
  sections: sections.map(
    ({ extraNormalText, icon, decoration, ctaButtons, ...requiredFields }) => ({
      ...requiredFields,
      ...(extraNormalText && { extraNormalText }),
      ...(icon && { icon }),
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
