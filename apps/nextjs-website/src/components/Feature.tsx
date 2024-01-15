'use client';
import { Feature as FeatureEC } from '@pagopa/pagopa-editorial-components';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import { FeatureSection } from '@/lib/fetch/types/PageSection';

const makeFeatureProps = ({
  items,
  background,
  ...rest
}: FeatureSection): FeatureProps => ({
  items: items.map((item) => ({
    icon: item.icon,
    iconColor: item.iconColor,
    title: item.title,
    subtitle: item.subtitle,
    linkText: item.linkText,
    linkURL: item.linkURL,
  })),
  ...(background && { background }),
  ...rest,
});

const Feature = (props: FeatureSection) => (
  <FeatureEC {...makeFeatureProps(props)} />
);

export default Feature;
