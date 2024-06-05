import { StoryFn, Meta } from '@storybook/react';
import { StripeLink } from '@react-components/components';
import { StripeLinkTemplate, defaultPropsDark } from './stripelinkCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof StripeLink> = {
  title: 'Components/StripeLink/Dark',
  component: StripeLink,
};
export default meta;

export const DarkStripeLinkFull: StoryFn<typeof StripeLink> = StripeLinkTemplate.bind({});
DarkStripeLinkFull.args = {
  ...defaultPropsDark,
  icon: {
    icon: 'MarkEmailReadOutlined',
  },
  buttonText: 'Click Me',
};

export const DarkStripeLinkNoIcon: StoryFn<typeof StripeLink> = StripeLinkTemplate.bind({});
DarkStripeLinkNoIcon.args = {
  ...defaultPropsDark,
  buttonText: 'Click Me',
};

export const DarkStripeLinkNoButton: StoryFn<typeof StripeLink> = StripeLinkTemplate.bind({});
DarkStripeLinkNoButton.args = {
  ...defaultPropsDark,
  icon: {
    icon: 'MarkEmailReadOutlined',
  },
};

export const DarkStripeLinkNoIconNoButton: StoryFn<typeof StripeLink> = StripeLinkTemplate.bind({});
DarkStripeLinkNoIconNoButton.args = {
  ...defaultPropsDark,
};