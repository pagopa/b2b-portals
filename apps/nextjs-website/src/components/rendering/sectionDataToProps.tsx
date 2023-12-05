import { BannerLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/BannerLink';
import { BannerlinkSectionData } from '@/lib/fetch/page';

export const SectionDataToBannerlinkProps = ({
  title,
  body,
  reverse,
  ctaButtons,
  theme,
}: BannerlinkSectionData): BannerLinkProps => ({
  title,
  body, // TODO: Parse rich text (markdown)
  reverse,
  ctaButtons,
  theme,
});
