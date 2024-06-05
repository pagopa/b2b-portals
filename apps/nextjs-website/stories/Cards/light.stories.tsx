import { Meta, StoryFn } from '@storybook/react';
import { Cards } from '@react-components/components';
import {
  CardsTemplate,
  defaultPropsLightThree,
  defaultPropsLightThreeWithLinks,
  defaultPropsLightFour,
  defaultPropsLightFourWithLinks,
} from './cardsCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof Cards> = {
  title: 'Components/Cards/Light',
  component: Cards,
};
export default meta;

export const LightCardsThreeColumnOnlyTitleNoLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsThreeColumnOnlyTitleNoLinks.args = {
  ...defaultPropsLightThree,
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsThreeColumnOnlyTitleWithLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsThreeColumnOnlyTitleWithLinks.args = {
  ...defaultPropsLightThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsFourColumnOnlyTitleNoLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsFourColumnOnlyTitleNoLinks.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsFourColumnOnlyTitleWithLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsFourColumnOnlyTitleWithLinks.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsWithTextNoLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextNoLinks.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const LightCardsWithTextWithLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextWithLinks.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const LightCardsWithTextandButtonNoLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
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

export const LightCardsWithTextandButtonWithLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
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
