import { StoryFn } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';
import MailIcon from '@mui/icons-material/Mail';

// Define a "Template" function that sets how args map to rendering
export const BannerLinkTemplate: StoryFn<BannerLinkProps> = (args) => <BannerLink {...args} />;

// Function to generate default props with a given theme
const generateDefaultProps = (theme: 'light' | 'dark'): Partial<BannerLinkProps> => ({
  title: 'Scrivici',
  theme,
  normalText: 'Richiedi assistenza come ente mittente via email scrivendo a',
  boldText: 'enti-send@assistenza.pagopa.it',
  link: 'mailto:enti-send@assistenza.pagopa.it',
  ctaButtons: [
    {
      text: 'Scrivici',
      variant: 'contained',
      href: 'mailto:enti-send@assistenza.pagopa.it',
    },
  ],
  icon: <MailIcon style={{ fontSize: 60 }} />,
});

// Define the default props with light theme
export const defaultPropsLight = generateDefaultProps('light');

// Define the default props with dark theme
export const defaultPropsDark = generateDefaultProps('dark');