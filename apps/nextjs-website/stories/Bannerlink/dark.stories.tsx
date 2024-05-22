import { Meta } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkTemplate, defaultPropsDark } from './bannerlinkCommonts';

// Define the default export with metadata about your component
export default {
  title: 'Components/BannerLink/Dark',
  component: BannerLink,
} as Meta;

export const BannerLinkFull = BannerLinkTemplate.bind({});
BannerLinkFull.args = {
  ...defaultPropsDark,
  body: 'This is a description for the banner link.',
};

export const BannerLinkOnlyTitle = BannerLinkTemplate.bind({});
BannerLinkOnlyTitle.args = {
  ...defaultPropsDark,
};
