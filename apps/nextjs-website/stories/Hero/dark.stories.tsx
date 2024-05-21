// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { defaultsDarkWithButtons, defaultsDarkWithoutButtons } from './heroCommons';
import { Hero } from '@react-components/components';
import { HeroProps } from '@react-components/types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Hero/Dark',
  component: Hero,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<HeroProps> = (args) => <Hero {...args} />;

export const DarkHeroBig = Template.bind({});
DarkHeroBig.args = {
  ...defaultsDarkWithButtons,
  size: 'big',
  inverse: false,
};

export const DarkHeroBigNoButtons = Template.bind({});
DarkHeroBigNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: false,
};

export const DarkHeroBigInverted = Template.bind({});
DarkHeroBigInverted.args = {
  ...defaultsDarkWithButtons,
  size: 'big',
  inverse: true,
};

export const DarkHeroBigInvertedNoButtons = Template.bind({});
DarkHeroBigInvertedNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: true,
};

export const DarkHeroMedium = Template.bind({});
DarkHeroMedium.args = {
  ...defaultsDarkWithButtons,
  size: 'medium',
  inverse: false,
};

export const DarkHeroMediumNoButtons = Template.bind({});
DarkHeroMediumNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: false,
};

export const DarkHeroMediumInverted = Template.bind({});
DarkHeroMediumInverted.args = {
  ...defaultsDarkWithButtons,
  size: 'medium',
  inverse: true,
};

export const DarkHeroMediumInvertedNoButtons = Template.bind({});
DarkHeroMediumInvertedNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: true,
};

export const DarkHeroSmall = Template.bind({});
DarkHeroSmall.args = {
  ...defaultsDarkWithButtons,
  size: 'small',
  inverse: false,
};

export const DarkHeroSmallNoButtons = Template.bind({});
DarkHeroSmallNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'small',
  inverse: false,
};

export const DarkHeroSmallInverted = Template.bind({});
DarkHeroSmallInverted.args = {
  ...defaultsDarkWithButtons,
  size: 'small',
  inverse: true,
};

export const DarkHeroSmallInvertedNoButtons = Template.bind({});
DarkHeroSmallInvertedNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'small',
  inverse: true,
};