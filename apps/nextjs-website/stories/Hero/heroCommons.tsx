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

const createHeroProps = (
  theme: 'dark' | 'light',
  withButtons: boolean,
  withSubtitle: boolean
): Partial<HeroProps> => {
  let props: Partial<HeroProps> = {
    theme,
    useHoverlay: false,
    title,
    subtitle: withSubtitle ? subtitle : '',
    ctaButtons: withButtons ? ctaButtons : [],
    altText: 'Alt text for image',
    image: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-foreground.png',
    background: theme === 'dark' ? 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png' : '',
  };

  return props;
};

export const defaultsDarkWithButtons = createHeroProps('dark', true, true);
export const defaultsDarkWithoutButtons = createHeroProps('dark', false, true);
export const defaultsDarkWithoutButtonsNoSubtitle = createHeroProps('dark', false, false);
export const defaultsLightWithButtons = createHeroProps('light', true, true);
export const defaultsLightWithoutButtons = createHeroProps('light', false, true);
export const defaultsLightWithoutButtonsNoSubtitle = createHeroProps('light', false, false);