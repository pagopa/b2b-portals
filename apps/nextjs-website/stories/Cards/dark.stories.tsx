// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { Cards } from '@react-components/components';
import { CardsProps } from '@react-components/types';
import { CardsItemProps } from '@react-components/types/Cards/Cards.types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Cards/Dark',
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
  theme: 'dark',
  items: generateItems(3),
};

export const DarkCardsThreeColumnOnlyTitleNoLinks = Template.bind({});
DarkCardsThreeColumnOnlyTitleNoLinks.args = {
  ...defaultProps,
  items: generateItems(3),
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsThreeColumnOnlyTitleWithLinks = Template.bind({});
DarkCardsThreeColumnOnlyTitleWithLinks.args = {
  ...defaultProps,
  items: generateItemsWithLinks(3),
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsFourColumnOnlyTitleNoLinks = Template.bind({});
DarkCardsFourColumnOnlyTitleNoLinks.args = {
  ...defaultProps,
  items: generateItems(4),
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsFourColumnOnlyTitleWithLinks = Template.bind({});
DarkCardsFourColumnOnlyTitleWithLinks.args = {
  ...defaultProps,
  items: generateItemsWithLinks(4),
  text: {
    title: 'Cards Title',
  },
};

export const DarkCardsWithTextNoLinks = Template.bind({});
DarkCardsWithTextNoLinks.args = {
  ...defaultProps,
  items: generateItems(4),
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const DarkCardsWithTextWithLinks = Template.bind({});
DarkCardsWithTextWithLinks.args = {
  ...defaultProps,
  items: generateItemsWithLinks(4),
  text: {
    title: 'Cards Title',
    subtitle: 'Cards Subtitle',
    body: 'This is a description for the cards.',
  },
};

export const DarkCardsWithTextandButtonNoLinks = Template.bind({});
DarkCardsWithTextandButtonNoLinks.args = {
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

export const DarkCardsWithTextandButtonWithLinks = Template.bind({});
DarkCardsWithTextandButtonWithLinks.args = {
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