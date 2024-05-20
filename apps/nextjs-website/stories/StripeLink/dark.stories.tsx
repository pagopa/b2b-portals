// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { StripeLink } from '@react-components/components';
import { StripeLinkProps } from '@react-components/types';

// Define the default export with metadata about your component
export default {
  title: 'Components/StripeLink/Dark',
  component: StripeLink,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<StripeLinkProps> = (args) => <StripeLink {...args} />;

// Define the default props
const defaultProps: Partial<StripeLinkProps> = {
  theme: 'dark',
  subtitle: 'Stripe Link Subtitle',
};

export const DarkStripeLinkFull = Template.bind({});
DarkStripeLinkFull.args = {
  ...defaultProps,
  icon: {
    icon: 'MarkEmailReadOutlined',
  },
  buttonText: 'Click Me',
};

export const DarkStripeLinkNoIcon = Template.bind({});
DarkStripeLinkNoIcon.args = {
  ...defaultProps,
  buttonText: 'Click Me',
};

export const DarkStripeLinkNoButton = Template.bind({});
DarkStripeLinkNoButton.args = {
  ...defaultProps,
  icon: {
    icon: 'MarkEmailReadOutlined',
  },
};

export const DarkStripeLinkNoIconNoButton = Template.bind({});
DarkStripeLinkNoIconNoButton.args = {
  ...defaultProps,
};