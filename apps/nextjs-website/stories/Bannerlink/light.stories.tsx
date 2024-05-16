import { StoryFn, Meta } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';

// Define the default export with metadata about your component
export default {
  title: 'Components/BannerLink/Light',
  component: BannerLink,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<BannerLinkProps> = (args) => <BannerLink {...args} />;

// Define the default props
const defaultProps: Partial<BannerLinkProps> = {
  title: 'Banner Link Title',
  theme: 'light',
  ctaButtons: [
    {
      text: 'Click Me',
      variant: 'contained',
    },
  ],
};

export const BannerLinkFull = Template.bind({});
BannerLinkFull.args = {
  ...defaultProps,
  body: 'This is a description for the banner link.',
};

export const BannerLinkOnlyTitle = Template.bind({});
BannerLinkOnlyTitle.args = {
  ...defaultProps,
};
