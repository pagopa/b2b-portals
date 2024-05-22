// Import the necessary modules
import { Meta } from '@storybook/react';
import { HeroTemplate, defaultsLightWithButtons, defaultsLightWithoutButtons } from './heroCommons';
import { Hero } from '@react-components/components';

// Define the default export with metadata about your component
export default {
  title: 'Components/Hero/Light',
  component: Hero,
} as Meta;

export const LightHeroBig = HeroTemplate.bind({});
LightHeroBig.args = {
  ...defaultsLightWithButtons,
  size: 'big',
  inverse: false,
};

export const LightHeroBigNoButtons = HeroTemplate.bind({});
LightHeroBigNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'big',
  inverse: false,
};

export const LightHeroBigInverted = HeroTemplate.bind({});
LightHeroBigInverted.args = {
  ...defaultsLightWithButtons,
  size: 'big',
  inverse: true,
};

export const LightHeroBigInvertedNoButtons = HeroTemplate.bind({});
LightHeroBigInvertedNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'big',
  inverse: true,
};

export const LightHeroMedium = HeroTemplate.bind({});
LightHeroMedium.args = {
  ...defaultsLightWithButtons,
  size: 'medium',
  inverse: false,
};

export const LightHeroMediumNoButtons = HeroTemplate.bind({});
LightHeroMediumNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'medium',
  inverse: false,
};

export const LightHeroMediumInverted = HeroTemplate.bind({});
LightHeroMediumInverted.args = {
  ...defaultsLightWithButtons,
  size: 'medium',
  inverse: true,
};

export const LightHeroMediumInvertedNoButtons = HeroTemplate.bind({});
LightHeroMediumInvertedNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'medium',
  inverse: true,
};

export const LightHeroSmall = HeroTemplate.bind({});
LightHeroSmall.args = {
  ...defaultsLightWithButtons,
  size: 'small',
  inverse: false,
};

export const LightHeroSmallNoButtons = HeroTemplate.bind({});
LightHeroSmallNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'small',
  inverse: false,
};

export const LightHeroSmallInverted = HeroTemplate.bind({});
LightHeroSmallInverted.args = {
  ...defaultsLightWithButtons,
  size: 'small',
  inverse: true,
};

export const LightHeroSmallInvertedNoButtons = HeroTemplate.bind({});
LightHeroSmallInvertedNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'small',
  inverse: true,
};