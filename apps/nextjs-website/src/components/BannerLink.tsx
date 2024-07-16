import { BannerLink as BannerLinkRC } from '@react-components/components';
import { BannerLinkProps, BannerLinkSectionProps, ImgProps } from '@react-components/types/BannerLink/BannerLink.types';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';

const makeBannerLinkProps = ({
  sections,
  ...rest
}: BannerLinkSection): BannerLinkProps => ({
  sections: sections.map((section: BannerLinkSectionProps) => {
    let decoration: ImgProps | { src: string; alt?: string } | null = null;
    if (section.decoration && 'src' in section.decoration) {
      decoration = {
        src: section.decoration.src,
        alt: section.decoration.alt || undefined,
      };
    }
    return {
      ...section,
      decoration,
    };
  }),
  ...rest,
});

const BannerLink = (props: BannerLinkSection) => (
  <BannerLinkRC {...makeBannerLinkProps(props)} />
);

export default BannerLink;
