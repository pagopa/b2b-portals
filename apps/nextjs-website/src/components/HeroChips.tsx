'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HeroChips as HeroChipsRC } from '@react-components/components';
import { HeroChipsProps } from '@react-components/types';
import { HeroChipsSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';

const makeHeroChipsProps = ({
  locale,
  defaultLocale,
  subtitle,
  background,
  ...rest
}: HeroChipsSection & SiteWidePageData): HeroChipsProps => ({
  ...rest,
  ...(subtitle && {
    subtitle: MarkdownRenderer({ markdown: subtitle, locale, defaultLocale }),
  }),
  ...(background.data && {
    background: {
      src: background.data.attributes.url,
      srcSet: makeSrcSetFromStrapiImageData(background.data),
    },
  }),
});

const HeroChips = (props: HeroChipsSection & SiteWidePageData) => (
  <HeroChipsRC {...makeHeroChipsProps(props)} />
);

export default HeroChips;
