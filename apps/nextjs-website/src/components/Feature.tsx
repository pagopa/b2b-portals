'use client';
import { Feature as FeatureEC } from '@pagopa/pagopa-editorial-components';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';
import { Stack, useTheme } from '@mui/material';
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
        icon: item.icon,
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
          section: {
            ...(props.theme === 'light' && { backgroundColor: 'background.default' }),
          },
          '.MuiGrid-item': {
            width: '100%',
          },
          '.MuiLink-root': {
            // Buttons
            fontFamily: '"Titillium Web",sans-serif;',
            color:
              props.theme === 'dark' ? 'primary.contrastText' : 'primary.main',
          },
          '.MuiSvgIcon-root': {
            // Buttons Arrow + Icons
            ...(props.theme === 'light' && { color: 'primary.main' }),
          },
          '.MuiTypography-root.MuiTypography-body1': {
            // Icons container
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
