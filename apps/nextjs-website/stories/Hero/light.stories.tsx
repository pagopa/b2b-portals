// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { heroCommonProps } from './heroCommons';
import { Hero } from '@react-components/components';
import { HeroProps } from '@react-components/types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Hero/Light',
  component: Hero,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<HeroProps> = (args) => <Hero {...args} />;

const ctaButtons: HeroProps['ctaButtons'] = [
  {
    text: 'Button 1',
    variant: 'contained',
    disableRipple: false,
  },
  {
    text: 'Button 2',
    variant: 'outlined',
    disableRipple: false,
  },
];

const defaults: Partial<HeroProps> = {
  ...heroCommonProps,
  theme: 'light',
};

export const LightHeroBigWithBackground = Template.bind({});
LightHeroBigWithBackground.args = {
  ...defaults,
  ctaButtons,
  size: 'big',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
};

export const LightHeroBigWithBackgroundNoButtons = Template.bind({});
LightHeroBigWithBackgroundNoButtons.args = {
  ...defaults,
  ctaButtons: [],
  size: 'big',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
};

export const LightHeroBigWithBackgroundInverted = Template.bind({});
LightHeroBigWithBackgroundInverted.args = {
  ...defaults,
  ctaButtons,
  size: 'big',
  inverse: true,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
};

export const LightHeroMediumWithBackground = Template.bind({});
LightHeroMediumWithBackground.args = {
  ...defaults,
  ctaButtons,
  size: 'medium',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
};

export const LightHeroMediumWithBackgroundNoButtons = Template.bind({});
LightHeroMediumWithBackgroundNoButtons.args = {
  ...defaults,
  ctaButtons: [],
  size: 'medium',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
};

export const LightHeroMediumWithBackgroundInverted = Template.bind({});
LightHeroMediumWithBackgroundInverted.args = {
  ...defaults,
  ctaButtons,
  size: 'medium',
  inverse: true,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
};

export const LightHeroSmallWithBackground = Template.bind({});
LightHeroSmallWithBackground.args = {
  ...defaults,
  subtitle: '',
  size: 'small',
  useHoverlay: false,
};