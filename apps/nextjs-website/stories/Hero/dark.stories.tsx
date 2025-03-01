import { Meta, StoryFn } from '@storybook/react';
import {
  HeroTemplate,
  defaultsDarkWithButtons,
  defaultsDarkWithoutButtons,
  defaultsDarkWithoutButtonsNoSubtitle,
} from './heroCommons';
import { Hero } from '@react-components/components';

// Define the default export with metadata about your component
const meta: Meta<typeof Hero> = {
  title: 'Components/Hero/Dark',
  component: Hero,
};
export default meta;

export const DarkHeroBig: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroBig.args = {
  ...defaultsDarkWithButtons,
  size: 'big',
  inverse: false,
};

export const DarkHeroBigStoreButtons: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
DarkHeroBigStoreButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: false,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const DarkHeroBigStoreButtonsWithLink: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroBigStoreButtonsWithLink.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: false,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
  link: {
    label: 'Learn more',
    href: '/',
  },
};

export const DarkHeroBigNoButtons: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroBigNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: false,
};

export const DarkHeroBigInverted: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroBigInverted.args = {
  ...defaultsDarkWithButtons,
  size: 'big',
  inverse: true,
};

export const DarkHeroBigInvertedStoreButtons: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroBigInvertedStoreButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: true,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const DarkHeroBigInvertedStoreButtonsWithLink: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroBigInvertedStoreButtonsWithLink.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: true,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
  link: {
    label: 'Learn more',
    href: '/',
  },
};

export const DarkHeroBigInvertedNoButtons: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroBigInvertedNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: true,
};

export const DarkHeroMedium: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroMedium.args = {
  ...defaultsDarkWithButtons,
  size: 'medium',
  inverse: false,
};

export const DarkHeroMediumStoreButtons: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroMediumStoreButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: false,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const DarkHeroMediumStoreButtonsWithLink: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroMediumStoreButtonsWithLink.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: false,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
  link: {
    label: 'Learn more',
    href: '/',
  },
};

export const DarkHeroMediumNoButtons: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
DarkHeroMediumNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: false,
};

export const DarkHeroMediumInverted: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
DarkHeroMediumInverted.args = {
  ...defaultsDarkWithButtons,
  size: 'medium',
  inverse: true,
};

export const DarkHeroMediumInvertedStoreButtonsWithLink: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroMediumInvertedStoreButtonsWithLink.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: true,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
  link: {
    label: 'Learn more',
    href: '/',
  },
};

export const DarkHeroMediumInvertedStoreButtons: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroMediumInvertedStoreButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: true,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const DarkHeroMediumInvertedNoButtons: StoryFn<typeof Hero> =
  HeroTemplate.bind({});
DarkHeroMediumInvertedNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: true,
};

export const DarkHeroSmall: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroSmall.args = {
  ...defaultsDarkWithButtons,
  size: 'small',
  inverse: false,
};

export const DarkHeroSmallNoButtons: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
DarkHeroSmallNoButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'small',
  inverse: false,
};

export const DarkHeroSmallNoSubtitle: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
DarkHeroSmallNoSubtitle.args = {
  ...defaultsDarkWithoutButtonsNoSubtitle,
  size: 'small',
  inverse: true,
};
