import { Meta } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';
import { BannerLinkTemplate, defaultPropsLight } from './bannerlinkCommons';

// Define the default export with metadata about your component
export default {
  title: 'Components/BannerLink/Light',
  component: BannerLink,
} as Meta<BannerLinkProps>;

export const BannerLinkFull = BannerLinkTemplate.bind({});
BannerLinkFull.args = {
  ...defaultPropsLight,
  body: 'This is a description for the banner link.',
};

export const BannerLinkOnlyTitle = BannerLinkTemplate.bind({});
BannerLinkOnlyTitle.args = {
  ...defaultPropsLight,
};
