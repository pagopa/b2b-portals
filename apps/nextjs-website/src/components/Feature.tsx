'use client';
import { Feature as FeatureRC } from '@react-components/components';
import { FeatureProps } from '@react-components/types';
import { FeatureSection } from '@/lib/fetch/types/PageSection';

const makeFeatureProps = ({
  items,
  ...rest
}: FeatureSection): FeatureProps => ({
  items: items.map((item) => ({
    title: item.title,
    subtitle: item.subtitle,
    iconURL: 'http://127.0.0.1:1337' + item.icon.data.attributes.url,
    ...(item.link && { link: item.link }),
  })),
  ...rest,
});

const Feature = (props: FeatureSection) => (
  <FeatureRC {...makeFeatureProps(props)} />
);

export default Feature;
