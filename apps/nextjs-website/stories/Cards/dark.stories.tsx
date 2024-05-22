import { Meta } from '@storybook/react';
import { Cards } from '@react-components/components';
import { CardsTemplate, defaultPropsDarkThree, defaultPropsDarkThreeWithLinks, defaultPropsDarkFour, defaultPropsDarkFourWithLinks } from './cardsCommons';

// Define the default export with metadata about your component
export default {
  title: 'Components/Cards/Dark',
  component: Cards,
} as Meta;

export const DarkCardsThreeColumnOnlyTitleNoLinks = CardsTemplate.bind({});
DarkCardsThreeColumnOnlyTitleNoLinks.args = {
  ...defaultPropsDarkThree,
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsThreeColumnOnlyTitleWithLinks = CardsTemplate.bind({});
DarkCardsThreeColumnOnlyTitleWithLinks.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsFourColumnOnlyTitleNoLinks = CardsTemplate.bind({});
DarkCardsFourColumnOnlyTitleNoLinks.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsFourColumnOnlyTitleWithLinks = CardsTemplate.bind({});
DarkCardsFourColumnOnlyTitleWithLinks.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsWithTextNoLinks = CardsTemplate.bind({});
DarkCardsWithTextNoLinks.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const DarkCardsWithTextWithLinks = CardsTemplate.bind({});
DarkCardsWithTextWithLinks.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const DarkCardsWithTextandButtonNoLinks = CardsTemplate.bind({});
DarkCardsWithTextandButtonNoLinks.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  ctaButtons: [
    {
      text: 'Click Me',
      variant: 'contained',
    },
  ],
};

export const DarkCardsWithTextandButtonWithLinks = CardsTemplate.bind({});
DarkCardsWithTextandButtonWithLinks.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  ctaButtons: [
    {
      text: 'Click Me',
      variant: 'contained',
    },
  ],
};