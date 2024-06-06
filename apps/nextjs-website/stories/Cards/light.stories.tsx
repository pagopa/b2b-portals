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

export const LightCardsOnlyTitleNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsOnlyTitleNoLinksLeft.args = {
  ...defaultPropsLightThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const LightCardsOnlyTitleNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsOnlyTitleNoLinksRight.args = {
  ...defaultPropsLightThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
};

export const LightCardsOnlyTitleNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsOnlyTitleNoLinksCenter.args = {
  ...defaultPropsLightThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const LightCardsOnlyTitleWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsOnlyTitleWithLinksLeft.args = {
  ...defaultPropsLightThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const LightCardsOnlyTitleWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsOnlyTitleWithLinksRight.args = {
  ...defaultPropsLightThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
};

export const LightCardsOnlyTitleWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsOnlyTitleWithLinksCenter.args = {
  ...defaultPropsLightThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const LightCardsNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsNoLinksLeft.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const LightCardsNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsNoLinksRight.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
};

export const LightCardsNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsNoLinksCenter.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const LightCardsWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithLinksLeft.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left',
};

export const LightCardsWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithLinksRight.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right',
};

export const LightCardsWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithLinksCenter.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const LightCardsWithTextNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextNoLinksLeft.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'left',
};

export const LightCardsWithTextNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextNoLinksRight.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'right',
};

export const LightCardsWithTextNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextNoLinksCenter.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'center',
};

export const LightCardsWithTextWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextWithLinksLeft.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'left',
};

export const LightCardsWithTextWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextWithLinksRight.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'right',
};

export const LightCardsWithTextWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextWithLinksCenter.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
  textPosition: 'center',
};

export const LightCardsWithTextandButtonNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextandButtonNoLinksLeft.args = {
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
  textPosition: 'left',
};

export const LightCardsWithTextandButtonNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextandButtonNoLinksRight.args = {
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
  textPosition: 'right',
};

export const LightCardsWithTextandButtonNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextandButtonNoLinksCenter.args = {
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
  textPosition: 'center',
};

export const LightCardsWithTextandButtonWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextandButtonWithLinksLeft.args = {
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
  textPosition: 'left',
};

export const LightCardsWithTextandButtonWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextandButtonWithLinksRight.args = {
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
  textPosition: 'right',
};

export const LightCardsWithTextandButtonWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsWithTextandButtonWithLinksCenter.args = {
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
  textPosition: 'center',
};
