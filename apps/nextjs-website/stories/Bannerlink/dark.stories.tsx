import { Meta } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';
import { BannerLinkTemplate, defaultPropsDark } from './bannerlinkCommons';

// Define the default export with metadata about your component
export default {
  title: 'Components/BannerLink/Dark',
  component: BannerLink,
} as Meta<BannerLinkProps>;

export const BannerLinkFull = BannerLinkTemplate.bind({});
BannerLinkFull.args = {
  ...defaultPropsDark,
  body: 'This is a description for the banner link.',
};

export const BannerLinkOnlyTitle = BannerLinkTemplate.bind({});
BannerLinkOnlyTitle.args = {
  ...defaultPropsDark,
};
