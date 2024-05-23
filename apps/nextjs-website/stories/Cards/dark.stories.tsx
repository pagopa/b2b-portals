import { Meta, StoryFn } from '@storybook/react';
import { Cards } from '@react-components/components';
import {
  CardsTemplate,
  defaultPropsDarkThree,
  defaultPropsDarkThreeWithLinks,
  defaultPropsDarkFour,
  defaultPropsDarkFourWithLinks,
} from './cardsCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof Cards> = {
  title: 'Components/Cards/Dark',
  component: Cards,
};
export default meta;

export const DarkCardsThreeColumnOnlyTitleNoLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsThreeColumnOnlyTitleNoLinks.args = {
  ...defaultPropsDarkThree,
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsThreeColumnOnlyTitleWithLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsThreeColumnOnlyTitleWithLinks.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsFourColumnOnlyTitleNoLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsFourColumnOnlyTitleNoLinks.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsFourColumnOnlyTitleWithLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsFourColumnOnlyTitleWithLinks.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsWithTextNoLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextNoLinks.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const DarkCardsWithTextWithLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextWithLinks.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const DarkCardsWithTextandButtonNoLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
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

export const DarkCardsWithTextandButtonWithLinks: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
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
