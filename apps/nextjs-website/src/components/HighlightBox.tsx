'use client';
import { HighlightBoxProps } from '@react-components/types';
import { HighlightBox as HighlightBoxRC } from '@react-components/components';
import { HighlightBoxSection } from '@/lib/fetch/types/PageSection';
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
  imageURL: image.data.attributes.url,
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
  props: HighlightBoxSection & SiteWidePageData
) => <HighlightBoxRC {...makeHighlightBoxProps(props)} />;

export default HighlightBoxComponent;
