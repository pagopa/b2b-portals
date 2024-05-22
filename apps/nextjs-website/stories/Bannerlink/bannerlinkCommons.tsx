import { StoryFn } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';

// Define a "Template" function that sets how args map to rendering
export const BannerLinkTemplate: StoryFn<BannerLinkProps> = (args) => <BannerLink {...args} />;

// Function to generate default props with a given theme
const generateDefaultProps = (theme: 'light' | 'dark'): Partial<BannerLinkProps> => ({
  title: 'Banner Link Title',
  theme,
  ctaButtons: [
    {
      text: 'Click Me',
      variant: 'contained',
    },
  ],
});

// Define the default props with light theme
export const defaultPropsLight = generateDefaultProps('light');

// Define the default props with dark theme
export const defaultPropsDark = generateDefaultProps('dark');