'use client';
import { Feature as FeatureRC } from '@react-components/components';
import { FeatureProps } from '@react-components/types';
import { FeatureSection } from '@/lib/fetch/types/PageSection';

const makeFeatureProps = ({
  items,
  ...rest
}: FeatureSection): FeatureProps => ({
  items: items.map((item) => ({
    stackIcon: { icon: item.icon },
    title: item.title,
    subtitle: item.subtitle,
    ...(item.linkText &&
      item.linkURL && {
        link: { text: item.linkText, url: item.linkURL },
      }),
  })),
  ...rest,
});

const Feature = (props: FeatureSection) => (
  <FeatureRC {...makeFeatureProps(props)} />
);

export default Feature;
