import { StoryFn, Meta } from '@storybook/react';
import { StripeLink } from '@react-components/components';
import { StripeLinkTemplate, defaultPropsLight } from './stripelinkCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof StripeLink> = {
  title: 'Components/StripeLink/Light',
  component: StripeLink,
};
export default meta;

export const LightStripeLinkFull: StoryFn<typeof StripeLink> = StripeLinkTemplate.bind({});
LightStripeLinkFull.args = {
  ...defaultPropsLight,
  icon: {
    icon: 'MarkEmailReadOutlined',
  },
  buttonText: 'Click Me',
};

export const LightStripeLinkNoIcon: StoryFn<typeof StripeLink> = StripeLinkTemplate.bind({});
LightStripeLinkNoIcon.args = {
  ...defaultPropsLight,
  buttonText: 'Click Me',
};

export const LightStripeLinkNoButton: StoryFn<typeof StripeLink> = StripeLinkTemplate.bind({});
LightStripeLinkNoButton.args = {
  ...defaultPropsLight,
  icon: {
    icon: 'MarkEmailReadOutlined',
  },
};

export const LightStripeLinkNoIconNoButton: StoryFn<typeof StripeLink> = StripeLinkTemplate.bind({});
LightStripeLinkNoIconNoButton.args = {
  ...defaultPropsLight,
};