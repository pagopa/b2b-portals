import { Meta, StoryFn } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkTemplate, defaultPropsDark, defaultPropsTwoColumnsDark } from './bannerlinkCommons';

const meta: Meta<typeof BannerLink> = {
  title: 'Components/BannerLink/Dark',
  component: BannerLink,
};
export default meta;

export const BannerLinkFull: StoryFn<typeof BannerLink> = BannerLinkTemplate.bind({});
BannerLinkFull.args = {
  ...defaultPropsDark,
};

export const BannerLinkTwoColumns: StoryFn<typeof BannerLink> = BannerLinkTemplate.bind({});
BannerLinkTwoColumns.args = {
  ...defaultPropsTwoColumnsDark,
};
