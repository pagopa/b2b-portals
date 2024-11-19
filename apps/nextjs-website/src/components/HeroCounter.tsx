'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HeroCounter as HeroCounterRC } from '@react-components/components';
import { HeroCounterProps } from '@react-components/types';
import { HeroCounterSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';
import { LocalizeURL } from '@/lib/linkLocalization';

const makeHeroCounterProps = ({
  locale,
  defaultLocale,
  subtitle,
  background,
  link,
  ...rest
}: HeroCounterSection & SiteWidePageData): HeroCounterProps => ({
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
  ...(link && {
    link: {
      label: link.label,
      href: LocalizeURL({ URL: link.href, locale, defaultLocale }),
    },
  }),
});

const HeroCounter = (props: HeroCounterSection & SiteWidePageData) => (
  <HeroCounterRC {...makeHeroCounterProps(props)} />
);

export default HeroCounter;
