import { Meta, StoryFn } from '@storybook/react';
import {
  HeroTemplate,
  defaultsLightWithButtons,
  defaultsLightWithoutButtons,
  defaultsLightWithoutButtonsNoSubtitle,
} from './heroCommons';
import { Hero } from '@react-components/components';

// Define the default export with metadata about your component
const meta: Meta<typeof Hero> = {
  title: 'Components/Hero/Light',
  component: Hero,
};
export default meta;

export const LightHeroBig: StoryFn<typeof Hero> = HeroTemplate.bind({});
LightHeroBig.args = {
  ...defaultsLightWithButtons,
  size: 'big',
  inverse: false,
};

export const LightHeroBigNoButtons: StoryFn<typeof Hero> = HeroTemplate.bind({});
LightHeroBigNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'big',
  inverse: false,
};

export const LightHeroBigInverted: StoryFn<typeof Hero> = HeroTemplate.bind({});
LightHeroBigInverted.args = {
  ...defaultsLightWithButtons,
  size: 'big',
  inverse: true,
};

export const LightHeroBigInvertedNoButtons: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
LightHeroBigInvertedNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'big',
  inverse: true,
};

export const LightHeroMedium: StoryFn<typeof Hero> = HeroTemplate.bind({});
LightHeroMedium.args = {
  ...defaultsLightWithButtons,
  size: 'medium',
  inverse: false,
};

export const LightHeroMediumNoButtons: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
LightHeroMediumNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'medium',
  inverse: false,
};

export const LightHeroMediumInverted: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
LightHeroMediumInverted.args = {
  ...defaultsLightWithButtons,
  size: 'medium',
  inverse: true,
};

export const LightHeroMediumInvertedNoButtons: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
LightHeroMediumInvertedNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'medium',
  inverse: true,
};

export const LightHeroSmall: StoryFn<typeof Hero> = HeroTemplate.bind({});
LightHeroSmall.args = {
  ...defaultsLightWithButtons,
  size: 'small',
  inverse: false,
};

export const LightHeroSmallNoButtons: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
LightHeroSmallNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'small',
  inverse: false,
};

export const LightHeroSmallNoSubtitle: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
LightHeroSmallNoSubtitle.args = {
  ...defaultsLightWithoutButtonsNoSubtitle,
  size: 'small',
  inverse: true,
};
