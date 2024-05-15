// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { heroCommonProps } from './heroCommons';
import { Hero } from '@react-components/components';
import { HeroProps } from '@react-components/types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Hero',
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
  theme: 'dark',
};

export const HeroBigWithBackground = Template.bind({});
HeroBigWithBackground.args = {
  ...defaults,
  ctaButtons,
  size: 'big',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const HeroBigWithBackgroundNoButtons = Template.bind({});
HeroBigWithBackgroundNoButtons.args = {
  ...defaults,
  ctaButtons: [],
  size: 'big',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const HeroBigWithBackgroundInverted = Template.bind({});
HeroBigWithBackgroundInverted.args = {
  ...defaults,
  ctaButtons,
  size: 'big',
  inverse: true,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const HeroMediumWithBackground = Template.bind({});
HeroMediumWithBackground.args = {
  ...defaults,
  ctaButtons,
  size: 'medium',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const HeroMediumWithBackgroundNoButtons = Template.bind({});
HeroMediumWithBackgroundNoButtons.args = {
  ...defaults,
  ctaButtons: [],
  size: 'medium',
  inverse: false,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const HeroMediumWithBackgroundInverted = Template.bind({});
HeroMediumWithBackgroundInverted.args = {
  ...defaults,
  ctaButtons,
  size: 'medium',
  inverse: true,
  useHoverlay: false,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const HeroSmallWithBackground = Template.bind({});
HeroSmallWithBackground.args = {
  ...defaults,
  subtitle: '',
  size: 'small',
  useHoverlay: false,
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};