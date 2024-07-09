import { BannerLink as BannerLinkRC } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';

const makeBannerLinkProps = ({
  sections,
  ...rest
}: BannerLinkSection): BannerLinkProps => ({
  sections: sections.map((section: any) => ({
    ...section,
    decoration: section.decoration ? {
      src: section.decoration.url,
      alt: section.decoration.alternativeText || undefined,
    } : undefined,
    icon: section.title,
  })),
  ...rest,
});

const BannerLink = (props: BannerLinkSection) => (
  <BannerLinkRC {...makeBannerLinkProps(props)} />
);

export default BannerLink;
