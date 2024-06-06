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

export const LightCardsThreeColumnOnlyTitleNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsThreeColumnOnlyTitleNoLinksLeft.args = {
  ...defaultPropsLightThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left', 
};

export const LightCardsThreeColumnOnlyTitleNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsThreeColumnOnlyTitleNoLinksRight.args = {
  ...defaultPropsLightThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right', 
};

export const LightCardsThreeColumnOnlyTitleNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsThreeColumnOnlyTitleNoLinksCenter.args = {
  ...defaultPropsLightThree,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const LightCardsThreeColumnOnlyTitleWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsThreeColumnOnlyTitleWithLinksLeft.args = {
  ...defaultPropsLightThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left', 
};

export const LightCardsThreeColumnOnlyTitleWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsThreeColumnOnlyTitleWithLinksRight.args = {
  ...defaultPropsLightThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right', 
};

export const LightCardsThreeColumnOnlyTitleWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsThreeColumnOnlyTitleWithLinksCenter.args = {
  ...defaultPropsLightThreeWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const LightCardsFourColumnOnlyTitleNoLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsFourColumnOnlyTitleNoLinksLeft.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left', 
};

export const LightCardsFourColumnOnlyTitleNoLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsFourColumnOnlyTitleNoLinksRight.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right', 
};

export const LightCardsFourColumnOnlyTitleNoLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsFourColumnOnlyTitleNoLinksCenter.args = {
  ...defaultPropsLightFour,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'center',
};

export const LightCardsFourColumnOnlyTitleWithLinksLeft: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsFourColumnOnlyTitleWithLinksLeft.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'left', 
};

export const LightCardsFourColumnOnlyTitleWithLinksRight: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsFourColumnOnlyTitleWithLinksRight.args = {
  ...defaultPropsLightFourWithLinks,
  text: {
    title: 'Cards Title',
  },
  textPosition: 'right', 
};

export const LightCardsFourColumnOnlyTitleWithLinksCenter: StoryFn<typeof Cards> =
  CardsTemplate.bind({});
LightCardsFourColumnOnlyTitleWithLinksCenter.args = {
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
