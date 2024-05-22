import { Meta } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkTemplate, defaultPropsLight } from './bannerlinkCommonts';

// Define the default export with metadata about your component
export default {
  title: 'Components/BannerLink/Light',
  component: BannerLink,
} as Meta;

export const BannerLinkFull = BannerLinkTemplate.bind({});
BannerLinkFull.args = {
  ...defaultPropsLight,
  body: 'This is a description for the banner link.',
};

export const BannerLinkOnlyTitle = BannerLinkTemplate.bind({});
BannerLinkOnlyTitle.args = {
  ...defaultPropsLight,
};
