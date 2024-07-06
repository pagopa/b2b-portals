import { Meta, StoryFn } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkTemplate, defaultPropsLight } from './bannerlinkCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof BannerLink> = {
  title: 'Components/BannerLink/Light',
  component: BannerLink,
};
export default meta;

export const BannerLinkFull: StoryFn<typeof BannerLink> = BannerLinkTemplate.bind({});
BannerLinkFull.args = {
  ...defaultPropsLight,
};
