'use client';
import { Feature as FeatureEC } from '@pagopa/pagopa-editorial-components';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import { Stack, useTheme } from '@mui/material';
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

const Feature = (props: FeatureSection) => {
  const theme = useTheme();

  return (
    <section id={props.sectionID || undefined}>
      <Stack
        sx={{
          '.MuiLink-root': {
            // Buttons
            fontFamily: '"Titillium Web",sans-serif;',
          },
          '.MuiTypography-root.MuiTypography-body1': {
            // Icons
            textAlign: 'center',
          },
          '.MuiMobileStepper-root': {
            // Carousel dots container
            backgroundColor: 'transparent',
          },
          [theme.breakpoints.down('md')]: {
            // Mobile view (vertically stacked items or carousel)
            '.MuiGrid-item': {
              // Items
              width: '100%',
              '.MuiTypography-body2': {
                // Subtitle
                maxWidth: 300,
                marginLeft: 'auto',
                marginRight: 'auto',
              },
            },
          },
        }}
      >
        <FeatureEC {...makeFeatureProps(props)} />
      </Stack>
    </section>
  );
};

export default Feature;
