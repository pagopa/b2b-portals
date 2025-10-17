import { StoryFn } from '@storybook/react';
import { Hero } from '@react-components/components';
import { HeroProps } from '@react-components/types';

// Define a 'Template' function that sets how args map to rendering
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
  themeVariant: 'IO' | 'SEND',
  withButtons: boolean,
  withSubtitle: boolean
): Partial<HeroProps> => {
  let props: Partial<HeroProps> = {
    theme,
    themeVariant,
    useHoverlay: false,
    title,
    subtitle: withSubtitle ? subtitle : '',
    ctaButtons: withButtons ? ctaButtons : [],
    image: {
      src: 'https://d2mk0pc4ejgxx6.cloudfront.net/bg_hero_54e55afdee.png',
      srcSet: '',
      alt: 'Alt text for image',
    },
    ...(theme === 'dark' && {
      background: {
        src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
        srcSet: '',
      },
    }),
  };

  return props;
};

export const defaultsDarkWithButtons = createHeroProps(
  'dark',
  'SEND',
  true,
  true
);
export const defaultsDarkWithoutButtons = createHeroProps(
  'dark',
  'SEND',
  false,
  true
);
export const defaultsDarkWithoutButtonsNoSubtitle = createHeroProps(
  'dark',
  'SEND',
  false,
  false
);
export const defaultsLightWithButtons = createHeroProps(
  'light',
  'SEND',
  true,
  true
);
export const defaultsLightWithoutButtons = createHeroProps(
  'light',
  'SEND',
  false,
  true
);
export const defaultsLightWithoutButtonsNoSubtitle = createHeroProps(
  'light',
  'SEND',
  false,
  false
);
