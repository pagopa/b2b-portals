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

export const DarkHeroBigStoreButtons: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroBigStoreButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'big',
  inverse: false,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
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

export const DarkHeroMediumStoreButtons: StoryFn<typeof Hero> = HeroTemplate.bind(
  {}
);
DarkHeroMediumStoreButtons.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  inverse: false,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
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

export const DarkHeroSmallNoButtonsWithChips: StoryFn<typeof Hero> = HeroTemplate.bind({});
DarkHeroSmallNoButtonsWithChips.args = {
  ...defaultsDarkWithoutButtons,
  size: 'small',
  inverse: false,
  chips: [
    { label: 'Notifiche', targetID: 'notifiche' },
    { label: 'SEND', targetID: 'send' },
    { label: 'Recapiti', targetID: 'recapiti' },
    { label: 'Documenti e comunicazioni', targetID: 'documenti-e-comunicazioni' },
    { label: 'Ricezione di una notifica', targetID: 'ricezione-di-una-notifica' },
    { label: 'Perfezionamento', targetID: 'perfezionamento' },
    { label: 'Annullamento', targetID: 'annullamento' },
    { label: 'Accessibilità', targetID: 'accessibilita' },
  ],
};