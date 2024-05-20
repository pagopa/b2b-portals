// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { StripeLink } from '@react-components/components';
import { StripeLinkProps } from '@react-components/types';

// Define the default export with metadata about your component
export default {
  title: 'Components/StripeLink/Light',
  component: StripeLink,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<StripeLinkProps> = (args) => <StripeLink {...args} />;

// Define the default props
const defaultProps: Partial<StripeLinkProps> = {
  theme: 'light',
  subtitle: 'Stripe Link Subtitle',
};

export const LightStripeLinkFull = Template.bind({});
LightStripeLinkFull.args = {
  ...defaultProps,
  icon: {
    icon: 'MarkEmailReadOutlined',
  },
  buttonText: 'Click Me',
};

export const LightStripeLinkNoIcon = Template.bind({});
LightStripeLinkNoIcon.args = {
  ...defaultProps,
  buttonText: 'Click Me',
};

export const LightStripeLinkNoButton = Template.bind({});
LightStripeLinkNoButton.args = {
  ...defaultProps,
  icon: {
    icon: 'MarkEmailReadOutlined',
  },
};

export const LightStripeLinkNoIconNoButton = Template.bind({});
LightStripeLinkNoIconNoButton.args = {
  ...defaultProps,
};