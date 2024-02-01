'use client';
import { Feature as FeatureEC } from '@pagopa/pagopa-editorial-components';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import { Stack } from '@mui/material';
// Only temporarily importing every icon. A task is planned to sub this for a restricted set of accepted icon names.
import * as MuiIcons from '@mui/icons-material';
import { isValidMuiIcon } from './Icons';
import { FeatureSection } from '@/lib/fetch/types/PageSection';

const makeFeatureProps = ({
  items,
  background,
  ...rest
}: FeatureSection): FeatureProps => ({
  items: items.map((item) => ({
    stackIcon: {
      ...(isValidMuiIcon(item.icon) && {
        icon: item.icon as keyof typeof MuiIcons,
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
    <Stack
      sx={{
        '.MuiGrid-root': {
          width: '100%',
          gap: '20px',
          padding: '0',
        },
        '.MuiGrid-item': {
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        },
        '.MuiTypography-root': {
          fontFamily: '"Titillium Web",sans-serif;',
        },
      }}
    >
      <FeatureEC {...makeFeatureProps(props)} />
    </Stack>
  </section>
);

export default Feature;
