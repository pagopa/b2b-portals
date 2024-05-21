// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { defaultsLightWithButtons, defaultsLightWithoutButtons } from './heroCommons';
import { Hero } from '@react-components/components';
import { HeroProps } from '@react-components/types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Hero/Light',
  component: Hero,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<HeroProps> = (args) => <Hero {...args} />;

export const LightHeroBig = Template.bind({});
LightHeroBig.args = {
  ...defaultsLightWithButtons,
  size: 'big',
  inverse: false,
};

export const LightHeroBigNoButtons = Template.bind({});
LightHeroBigNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'big',
  inverse: false,
};

export const LightHeroBigInverted = Template.bind({});
LightHeroBigInverted.args = {
  ...defaultsLightWithButtons,
  size: 'big',
  inverse: true,
};

export const LightHeroBigInvertedNoButtons = Template.bind({});
LightHeroBigInvertedNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'big',
  inverse: true,
};

export const LightHeroMedium = Template.bind({});
LightHeroMedium.args = {
  ...defaultsLightWithButtons,
  size: 'medium',
  inverse: false,
};

export const LightHeroMediumNoButtons = Template.bind({});
LightHeroMediumNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'medium',
  inverse: false,
};

export const LightHeroMediumInverted = Template.bind({});
LightHeroMediumInverted.args = {
  ...defaultsLightWithButtons,
  size: 'medium',
  inverse: true,
};

export const LightHeroMediumInvertedNoButtons = Template.bind({});
LightHeroMediumInvertedNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'medium',
  inverse: true,
};

export const LightHeroSmall = Template.bind({});
LightHeroSmall.args = {
  ...defaultsLightWithButtons,
  size: 'small',
  inverse: false,
};

export const LightHeroSmallNoButtons = Template.bind({});
LightHeroSmallNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'small',
  inverse: false,
};

export const LightHeroSmallInverted = Template.bind({});
LightHeroSmallInverted.args = {
  ...defaultsLightWithButtons,
  size: 'small',
  inverse: true,
};

export const LightHeroSmallInvertedNoButtons = Template.bind({});
LightHeroSmallInvertedNoButtons.args = {
  ...defaultsLightWithoutButtons,
  size: 'small',
  inverse: true,
};