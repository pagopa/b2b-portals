import { Meta, StoryFn } from '@storybook/react';
import {
  HeroTemplate,
  defaultsDarkWithButtons,
  defaultsDarkWithoutButtons,
  defaultsDarkWithoutButtonsNoSubtitle,
} from './heroCommons';
import { Hero } from '@react-components/components';

// Define the default export with metadata about your component
const meta: Meta<typeof Hero> = {
  title: 'Components/Hero/Dark',
  component: Hero,
};
export default meta;

export const DarkHeroBig: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroBig.args = {
  ...defaultsDarkWithButtons,
  size: 'big',
  inverse: false,
};

export const DarkHeroBigNoButtons: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroBigNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: false,
};

export const DarkHeroBigInverted: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroBigInverted.args = {
  ...defaultsDarkWithButtons,
  size: 'big',
  inverse: true,
};

export const DarkHeroBigInvertedNoButtons: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroBigInvertedNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: true,
};

export const DarkHeroMedium: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroMedium.args = {
  ...defaultsDarkWithButtons,
  size: 'medium',
  inverse: false,
};

export const DarkHeroMediumNoButtons: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
DarkHeroMediumNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: false,
};

export const DarkHeroMediumInverted: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
DarkHeroMediumInverted.args = {
  ...defaultsDarkWithButtons,
  size: 'medium',
  inverse: true,
};

export const DarkHeroMediumInvertedNoButtons: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroMediumInvertedNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: true,
};

export const DarkHeroSmall: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroSmall.args = {
  ...defaultsDarkWithButtons,
  size: 'small',
  inverse: false,
};

export const DarkHeroSmallNoButtons: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
DarkHeroSmallNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'small',
  inverse: false,
};

export const DarkHeroSmallNoSubtitle: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
DarkHeroSmallNoSubtitle.args = {
  ...defaultsDarkWithoutButtonsNoSubtitle,
  size: 'small',
  inverse: true,
};