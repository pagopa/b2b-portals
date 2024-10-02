import { StoryFn, Meta } from '@storybook/react';
import { StripeLink } from '@react-components/components';
import { StripeLinkTemplate, defaultPropsLight } from './stripelinkCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof StripeLink> = {
  title: 'Components/StripeLink/Light',
  component: StripeLink,
};
export default meta;

export const LightStripeLinkFull: StoryFn<typeof StripeLink> =
  StripeLinkTemplate.bind({});
LightStripeLinkFull.args = {
  ...defaultPropsLight,
  iconURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
  link: {
    label: 'link',
    href: '#',
  },
};

export const LightStripeLinkNoIcon: StoryFn<typeof StripeLink> =
  StripeLinkTemplate.bind({});
LightStripeLinkNoIcon.args = {
  ...defaultPropsLight,
  link: {
    label: 'link',
    href: '#',
  },
};
