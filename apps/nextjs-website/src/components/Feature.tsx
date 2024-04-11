'use client';
import { Feature as FeatureEC } from '@react-components';
import { FeatureProps } from '@react-components-props';
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
  <FeatureEC {...makeFeatureProps(props)} />
);

export default Feature;
