import { StoryFn, Meta } from '@storybook/react';
import { StripeLink } from '@react-components/components';
import { StripeLinkTemplate, defaultPropsDark } from './stripelinkCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof StripeLink> = {
  title: 'Components/StripeLink/Dark',
  component: StripeLink,
};
export default meta;

export const DarkStripeLinkFull: StoryFn<typeof StripeLink> =
  StripeLinkTemplate.bind({});
DarkStripeLinkFull.args = {
  ...defaultPropsDark,
  iconURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg',
  link: {
    label: 'link',
    href: '#',
  },
};

export const DarkStripeLinkNoIcon: StoryFn<typeof StripeLink> =
  StripeLinkTemplate.bind({});
DarkStripeLinkNoIcon.args = {
  ...defaultPropsDark,
  link: {
    label: 'link',
    href: '#',
  },
};
