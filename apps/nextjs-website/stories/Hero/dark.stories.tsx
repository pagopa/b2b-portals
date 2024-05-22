// Import the necessary modules
import { Meta } from '@storybook/react';
import { HeroTemplate, defaultsDarkWithButtons, defaultsDarkWithoutButtons } from './heroCommons';
import { Hero } from '@react-components/components';

// Define the default export with metadata about your component
export default {
  title: 'Components/Hero/Dark',
  component: Hero,
} as Meta;

export const DarkHeroBig = HeroTemplate.bind({});
DarkHeroBig.args = {
  ...defaultsDarkWithButtons,
  size: 'big',
  inverse: false,
};

export const DarkHeroBigNoButtons = HeroTemplate.bind({});
DarkHeroBigNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: false,
};

export const DarkHeroBigInverted = HeroTemplate.bind({});
DarkHeroBigInverted.args = {
  ...defaultsDarkWithButtons,
  size: 'big',
  inverse: true,
};

export const DarkHeroBigInvertedNoButtons = HeroTemplate.bind({});
DarkHeroBigInvertedNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: true,
};

export const DarkHeroMedium = HeroTemplate.bind({});
DarkHeroMedium.args = {
  ...defaultsDarkWithButtons,
  size: 'medium',
  inverse: false,
};

export const DarkHeroMediumNoButtons = HeroTemplate.bind({});
DarkHeroMediumNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: false,
};

export const DarkHeroMediumInverted = HeroTemplate.bind({});
DarkHeroMediumInverted.args = {
  ...defaultsDarkWithButtons,
  size: 'medium',
  inverse: true,
};

export const DarkHeroMediumInvertedNoButtons = HeroTemplate.bind({});
DarkHeroMediumInvertedNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: true,
};

export const DarkHeroSmall = HeroTemplate.bind({});
DarkHeroSmall.args = {
  ...defaultsDarkWithButtons,
  size: 'small',
  inverse: false,
};

export const DarkHeroSmallNoButtons = HeroTemplate.bind({});
DarkHeroSmallNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'small',
  inverse: false,
};

export const DarkHeroSmallInverted = HeroTemplate.bind({});
DarkHeroSmallInverted.args = {
  ...defaultsDarkWithButtons,
  size: 'small',
  inverse: true,
};

export const DarkHeroSmallInvertedNoButtons = HeroTemplate.bind({});
DarkHeroSmallInvertedNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'small',
  inverse: true,
};