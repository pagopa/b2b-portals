// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { Cards } from '@react-components/components';
import { CardsProps } from '@react-components/types';
import { CardsItemProps } from '@react-components/types/Cards/Cards.types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Cards/Light',
  component: Cards,
} as Meta;

// Function to generate items
const generateItems = (count: number): CardsItemProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Card ${i + 1}`,
    text: `This is card ${i + 1}`,
    cardIcon: {
      icon: 'AccessAlarm',
    }
  })
);

// Function to generate items
const generateItemsWithLinks = (count: number): CardsItemProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Card ${i + 1}`,
    text: `This is card ${i + 1}`,
    cardIcon: {
      icon: 'AccessAlarm',
    },
    links: [
      {
        text: `Link ${i + 1}`,
        href: '#',
      },
    ],
  })
);

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<CardsProps> = (args) => <Cards {...args} />;

// Define the default props
const defaultProps: Partial<CardsProps> = {
  theme: 'light',
  items: generateItems(3),
};

export const LightCardsThreeColumnOnlyTitleNoLinks = Template.bind({});
LightCardsThreeColumnOnlyTitleNoLinks.args = {
  ...defaultProps,
  items: generateItems(3),
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsThreeColumnOnlyTitleWithLinks = Template.bind({});
LightCardsThreeColumnOnlyTitleWithLinks.args = {
  ...defaultProps,
  items: generateItemsWithLinks(3),
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsFourColumnOnlyTitleNoLinks = Template.bind({});
LightCardsFourColumnOnlyTitleNoLinks.args = {
  ...defaultProps,
  items: generateItems(4),
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsFourColumnOnlyTitleWithLinks = Template.bind({});
LightCardsFourColumnOnlyTitleWithLinks.args = {
  ...defaultProps,
  items: generateItemsWithLinks(4),
  text: {
    title: 'Cards Title',
  },
};

export const LightCardsWithTextNoLinks = Template.bind({});
LightCardsWithTextNoLinks.args = {
  ...defaultProps,
  items: generateItems(4),
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const LightCardsWithTextWithLinks = Template.bind({});
LightCardsWithTextWithLinks.args = {
  ...defaultProps,
  items: generateItemsWithLinks(4),
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const LightCardsWithTextandButtonNoLinks = Template.bind({});
LightCardsWithTextandButtonNoLinks.args = {
  ...defaultProps,
  items: generateItems(4),
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

export const LightCardsWithTextandButtonWithLinks = Template.bind({});
LightCardsWithTextandButtonWithLinks.args = {
  ...defaultProps,
  items: generateItemsWithLinks(4),
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