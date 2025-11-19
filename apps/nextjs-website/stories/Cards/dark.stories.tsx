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
  titleTag: 'h2',
};

export const DarkCardsOnlyTitleNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleNoLinksRight.args = {
  ...defaultPropsDarkThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
  titleTag: 'h2',
};

export const DarkCardsOnlyTitleNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleNoLinksCenter.args = {
  ...defaultPropsDarkThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
  titleTag: 'h2',
};

export const DarkCardsOnlyTitleWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleWithLinksLeft.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
  titleTag: 'h2',
};

export const DarkCardsOnlyTitleWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleWithLinksRight.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
  titleTag: 'h2',
};

export const DarkCardsOnlyTitleWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsOnlyTitleWithLinksCenter.args = {
  ...defaultPropsDarkThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
  titleTag: 'h2',
};

export const DarkCardsNoLinksLeft: StoryFn<typeof Cards> = CardsTemplate.bind(
  {},
);
DarkCardsNoLinksLeft.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
  titleTag: 'h2',
};

export const DarkCardsNoLinksRight: StoryFn<typeof Cards> = CardsTemplate.bind(
  {},
);
DarkCardsNoLinksRight.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
  titleTag: 'h2',
};

export const DarkCardsNoLinksCenter: StoryFn<typeof Cards> = CardsTemplate.bind(
  {},
);
DarkCardsNoLinksCenter.args = {
  ...defaultPropsDarkFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
  titleTag: 'h2',
};

export const DarkCardsWithLinksLeft: StoryFn<typeof Cards> = CardsTemplate.bind(
  {},
);
DarkCardsWithLinksLeft.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
  titleTag: 'h2',
};

export const DarkCardsWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithLinksRight.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
  titleTag: 'h2',
};

export const DarkCardsWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsWithLinksCenter.args = {
  ...defaultPropsDarkFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
  titleTag: 'h2',
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
  titleTag: 'h2',
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
  titleTag: 'h2',
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
  titleTag: 'h2',
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
  titleTag: 'h2',
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
  titleTag: 'h2',
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
  titleTag: 'h2',
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
    {
      text: 'Click Me',
      variant: 'outlined',
    },
  ],
  textPosition: 'left',
  titleTag: 'h2',
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
    {
      text: 'Click Me',
      variant: 'outlined',
    },
  ],
  textPosition: 'right',
  titleTag: 'h2',
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
    {
      text: 'Click Me',
      variant: 'outlined',
    },
  ],
  textPosition: 'center',
  titleTag: 'h2',
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
    {
      text: 'Click Me',
      variant: 'outlined',
    },
  ],
  textPosition: 'left',
  titleTag: 'h2',
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
    {
      text: 'Click Me',
      variant: 'outlined',
    },
  ],
  textPosition: 'right',
  titleTag: 'h2',
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
    {
      text: 'Click Me',
      variant: 'outlined',
    },
  ],
  textPosition: 'center',
  titleTag: 'h2',
};

export const DarkCardsNoTextWithBottomCta: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
DarkCardsNoTextWithBottomCta.args = {
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
    {
      text: 'Click Me',
      variant: 'outlined',
    },
  ],
  bottomCTA: {
    text: 'Click Me',
    variant: 'contained',
  },
  textPosition: 'none',
  titleTag: 'h2',
};
