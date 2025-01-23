'use client';
import { HighlightBoxProps } from '@react-components/types';
import { HighlightBox as HighlightBoxRC } from '@react-components/components';
import { HighlightBoxSection } from '@/lib/fetch/types/PageSection';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';
import { LocalizeURL } from '@/lib/linkLocalization';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const makeHighlightBoxProps = ({
  locale,
  defaultLocale,
  image,
  eyelet,
  link,
  ...rest
}: HighlightBoxSection & SiteWidePageData): HighlightBoxProps => ({
  image: {
    src: image.data.attributes.url,
    srcSet: makeSrcSetFromStrapiImageData(image.data),
  },
  ...(eyelet && { eyelet }),
  ...(link && {
    link: {
      label: link.label,
      href: LocalizeURL({ URL: link.href, locale, defaultLocale }),
    },
  }),
  ...rest,
});

const HighlightBoxComponent = (
  props: HighlightBoxSection & SiteWidePageData,
) => <HighlightBoxRC {...makeHighlightBoxProps(props)} />;

export default HighlightBoxComponent;
