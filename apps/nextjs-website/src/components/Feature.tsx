'use client';
import { Feature as FeatureRC } from '@react-components/components';
import { FeatureProps } from '@react-components/types';
import { FeatureSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LocalizeURL } from '@/lib/linkLocalization';

const makeFeatureProps = ({
  locale,
  defaultLocale,
  items,
  ...rest
}: FeatureSection & SiteWidePageData): FeatureProps => ({
  items: items.map((item) => ({
    title: item.title,
    subtitle: item.subtitle,
    iconURL: item.icon.url,
    ...(item.link && {
      link: {
        label: item.link.label,
        href: LocalizeURL({ URL: item.link.href, locale, defaultLocale }),
      },
    }),
  })),
  ...rest,
});

const Feature = (props: FeatureSection & SiteWidePageData) => (
  <FeatureRC {...makeFeatureProps(props)} />
);

export default Feature;
