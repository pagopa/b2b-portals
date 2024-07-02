import { StoryFn } from '@storybook/react';
import { HeroCounter } from "@react-components/components";
import { HeroCounterProps } from "@react-components/types";

// Define a "Template" function that sets how args map to rendering
export const HeroCounterTemplate: StoryFn<HeroCounterProps> = (args) => <HeroCounter {...args} />;

const title = 'Lorem ipsum dolor sit amet, consectetur';
const subtitle = `Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const createHeroCounterProps = (
  theme: 'dark' | 'light',
  withSubtitle: boolean
): Partial<HeroCounterProps> => {
  let props: Partial<HeroCounterProps> = {
    theme,
    title,
    subtitle: withSubtitle ? subtitle : '',
    background: theme === 'dark' ? 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png' : '',
  };

  return props;
};

export const defaultsDarkWithoutButtons = createHeroCounterProps('dark', false);
export const defaultsLightWithoutButtons = createHeroCounterProps('light', false);