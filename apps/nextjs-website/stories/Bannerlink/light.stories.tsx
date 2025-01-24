import { Meta, StoryFn } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import {
  BannerLinkTemplate,
  defaultPropsLight,
  defaultPropsTwoColumnsLight,
} from './bannerlinkCommons';

const meta: Meta<typeof BannerLink> = {
  title: 'Components/BannerLink/Light',
  component: BannerLink,
};
export default meta;

export const BannerLinkFull: StoryFn<typeof BannerLink> =
  BannerLinkTemplate.bind({});
BannerLinkFull.args = {
  ...defaultPropsLight,
};

export const BannerLinkTwoColumns: StoryFn<typeof BannerLink> =
  BannerLinkTemplate.bind({});
BannerLinkTwoColumns.args = {
  ...defaultPropsTwoColumnsLight,
};
