'use client';
import { Feature as FeatureEC } from '@pagopa/pagopa-editorial-components';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import { Icon } from '@mui/material';
import { formatValidMuiIcon, isValidMuiIcon } from './Icons';
import { FeatureSection } from '@/lib/fetch/types/PageSection';

const makeFeatureProps = ({
  items,
  background,
  ...rest
}: FeatureSection): FeatureProps => ({
  items: items.map((item) => ({
    stackIcon: {
      ...(isValidMuiIcon(item.icon) && {
        startIcon: <Icon>{formatValidMuiIcon(item.icon)}</Icon>,
      }),
      color: item.iconColor,
    },
    title: item.title,
    subtitle: item.subtitle,
    ...(item.linkText &&
      item.linkURL && { link: { text: item.linkText, url: item.linkURL } }),
  })),
  ...(background && { background }),
  ...rest,
});

const Feature = (props: FeatureSection) => (
  <section id={props.sectionID || undefined}>
    <FeatureEC {...makeFeatureProps(props)} />
  </section>
);

export default Feature;
