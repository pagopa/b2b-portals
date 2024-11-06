'use client';
import { Feature as FeatureRC } from '@react-components/components';
import { FeatureProps } from '@react-components/types';
import { FeatureSection } from '@/lib/fetch/types/PageSection';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';

const makeFeatureProps = ({
  items,
  ...rest
}: FeatureSection & { themeVariant: ThemeVariant }): FeatureProps => ({
  items: items.map((item) => ({
    title: item.title,
    subtitle: item.subtitle,
    iconURL: item.icon.data.attributes.url,
    ...(item.link && { link: item.link }),
  })),
  ...rest,
});

const Feature = (props: FeatureSection & { themeVariant: ThemeVariant }) => (
  <FeatureRC {...makeFeatureProps(props)} />
);

export default Feature;
