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

export const DarkCardsOnlyTitleNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleNoLinksLeft.args = {
  ...defaultPropsDarkThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const DarkCardsOnlyTitleNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleNoLinksRight.args = {
  ...defaultPropsDarkThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
};

export const DarkCardsOnlyTitleNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleNoLinksCenter.args = {
  ...defaultPropsDarkThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const DarkCardsOnlyTitleWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleWithLinksLeft.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const DarkCardsOnlyTitleWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleWithLinksRight.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
};

export const DarkCardsOnlyTitleWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleWithLinksCenter.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const DarkCardsNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsNoLinksLeft.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const DarkCardsNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsNoLinksRight.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
};

export const DarkCardsNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsNoLinksCenter.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const DarkCardsWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithLinksLeft.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const DarkCardsWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithLinksRight.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
};

export const DarkCardsWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithLinksCenter.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const DarkCardsWithTextNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextNoLinksLeft.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'left',
};

export const DarkCardsWithTextNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextNoLinksRight.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'right',
};

export const DarkCardsWithTextNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextNoLinksCenter.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'center',
};

export const DarkCardsWithTextWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextWithLinksLeft.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'left',
};

export const DarkCardsWithTextWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextWithLinksRight.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'right',
};

export const DarkCardsWithTextWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextWithLinksCenter.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'center',
};

export const DarkCardsWithTextandButtonNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextandButtonNoLinksLeft.args = {
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
  textPosition: 'left',
};

export const DarkCardsWithTextandButtonNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextandButtonNoLinksRight.args = {
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
  textPosition: 'right',
};

export const DarkCardsWithTextandButtonNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextandButtonNoLinksCenter.args = {
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
  textPosition: 'center',
};

export const DarkCardsWithTextandButtonWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextandButtonWithLinksLeft.args = {
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
  textPosition: 'left',
};

export const DarkCardsWithTextandButtonWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextandButtonWithLinksRight.args = {
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
  textPosition: 'right',
};

export const DarkCardsWithTextandButtonWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithTextandButtonWithLinksCenter.args = {
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
  textPosition: 'center',
};