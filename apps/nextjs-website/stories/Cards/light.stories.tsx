import { Meta } from '@storybook/react';
import { Cards } from '@react-components/components';
import { CardsTemplate, defaultPropsLightThree, defaultPropsLightThreeWithLinks, defaultPropsLightFour, defaultPropsLightFourWithLinks } from './cardsCommons';

// Define the default export with metadata about your component
export default {
  title: 'Components/Cards/Light',
  component: Cards,
} as Meta;

export const LightCardsThreeColumnOnlyTitleNoLinks = CardsTemplate.bind({});
LightCardsThreeColumnOnlyTitleNoLinks.args = {
  ...defaultPropsLightThree,
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsThreeColumnOnlyTitleWithLinks = CardsTemplate.bind({});
LightCardsThreeColumnOnlyTitleWithLinks.args = {
  ...defaultPropsLightThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsFourColumnOnlyTitleNoLinks = CardsTemplate.bind({});
LightCardsFourColumnOnlyTitleNoLinks.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsFourColumnOnlyTitleWithLinks = CardsTemplate.bind({});
LightCardsFourColumnOnlyTitleWithLinks.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsWithTextNoLinks = CardsTemplate.bind({});
LightCardsWithTextNoLinks.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const LightCardsWithTextWithLinks = CardsTemplate.bind({});
LightCardsWithTextWithLinks.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const LightCardsWithTextandButtonNoLinks = CardsTemplate.bind({});
LightCardsWithTextandButtonNoLinks.args = {
  ...defaultPropsLightFour,
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

export const LightCardsWithTextandButtonWithLinks = CardsTemplate.bind({});
LightCardsWithTextandButtonWithLinks.args = {
  ...defaultPropsLightFourWithLinks,
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