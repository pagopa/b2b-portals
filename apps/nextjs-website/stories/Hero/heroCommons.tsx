import { StoryFn } from '@storybook/react';
import { Hero } from "@react-components/components";
import { HeroProps } from "@react-components/types";

// Define a "Template" function that sets how args map to rendering
export const HeroTemplate: StoryFn<HeroProps> = (args) => <Hero {...args} />;

const title = 'Lorem ipsum dolor sit amet, consectetur';
const subtitle = `Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

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

export const defaultsDarkWithButtons: Partial<HeroProps> = {
  theme: 'dark',
  useHoverlay: false,
  title,
  subtitle,
  ctaButtons,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const defaultsDarkWithoutButtons: Partial<HeroProps> = {
  theme: 'dark',
  useHoverlay: false,
  title,
  subtitle,
  ctaButtons: [],
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
  background: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
};

export const defaultsLightWithButtons: Partial<HeroProps> = {
  theme: 'light',
  useHoverlay: false,
  title,
  subtitle,
  ctaButtons,
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
};

export const defaultsLightWithoutButtons: Partial<HeroProps> = {
  theme: 'light',
  useHoverlay: false,
  title,
  subtitle,
  ctaButtons: [],
  altText: 'Alt text for image',
  image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
};