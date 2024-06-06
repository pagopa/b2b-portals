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

export const DarkCardsThreeColumnOnlyTitleNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsThreeColumnOnlyTitleNoLinksLeft.args = {
  ...defaultPropsDarkThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const DarkCardsThreeColumnOnlyTitleNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsThreeColumnOnlyTitleNoLinksRight.args = {
  ...defaultPropsDarkThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right', 
};

export const DarkCardsThreeColumnOnlyTitleNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsThreeColumnOnlyTitleNoLinksCenter.args = {
  ...defaultPropsDarkThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const DarkCardsThreeColumnOnlyTitleWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsThreeColumnOnlyTitleWithLinksLeft.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const DarkCardsThreeColumnOnlyTitleWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsThreeColumnOnlyTitleWithLinksRight.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right', 
};

export const DarkCardsThreeColumnOnlyTitleWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsThreeColumnOnlyTitleWithLinksCenter.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const DarkCardsFourColumnOnlyTitleNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsFourColumnOnlyTitleNoLinksLeft.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const DarkCardsFourColumnOnlyTitleNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsFourColumnOnlyTitleNoLinksRight.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right', 
};

export const DarkCardsFourColumnOnlyTitleNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsFourColumnOnlyTitleNoLinksCenter.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const DarkCardsFourColumnOnlyTitleWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsFourColumnOnlyTitleWithLinksLeft.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const DarkCardsFourColumnOnlyTitleWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsFourColumnOnlyTitleWithLinksRight.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right', 
};

export const DarkCardsFourColumnOnlyTitleWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsFourColumnOnlyTitleWithLinksCenter.args = {
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
