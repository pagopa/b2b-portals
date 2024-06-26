import { Meta, StoryFn } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkTemplate, defaultPropsDark } from './bannerlinkCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof BannerLink> = {
  title: 'Components/BannerLink/Dark',
  component: BannerLink,
};
export default meta;

export const BannerLinkFull: StoryFn<typeof BannerLink> =
  BannerLinkTemplate.bind({});
BannerLinkFull.args = {
  ...defaultPropsDark,
  body: 'This is a description for the banner link.',
};

export const BannerLinkOnlyTitle: StoryFn<typeof BannerLink> =
  BannerLinkTemplate.bind({});
BannerLinkOnlyTitle.args = {
  ...defaultPropsDark,
};
