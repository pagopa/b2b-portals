import { StoryFn } from '@storybook/react';
import { Cards } from '@react-components/components';
import { CardsProps } from '@react-components/types';
import { CardsItemProps } from '@react-components/types/Cards/Cards.types';

// Function to generate items
export const generateItems = (count: number): CardsItemProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Card ${i + 1}`,
    text: `This is card ${i + 1}`,
    iconURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
  }));

// Function to generate items
export const generateItemsWithLinks = (count: number): CardsItemProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Card ${i + 1}`,
    text: `This is card ${i + 1}`,
    iconURL: 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
    links: [
      {
        label: `Link ${i + 1}`,
        href: '#',
      },
    ],
  }));

// Define a 'Template' function that sets how args map to rendering
export const CardsTemplate: StoryFn<CardsProps> = (args) => <Cards {...args} />;

// Function to generate default props
const generateDefaultProps = (
  theme: 'light' | 'dark',
  itemCount: number,
  withLinks: boolean = false
): Partial<CardsProps> => ({
  theme,
  items: withLinks
    ? generateItemsWithLinks(itemCount)
    : generateItems(itemCount),
  themeVariant: 'SEND',
});

// Define the default props
export const defaultPropsDarkThree = generateDefaultProps('dark', 3);
export const defaultPropsDarkThreeWithLinks = generateDefaultProps(
  'dark',
  3,
  true
);
export const defaultPropsDarkFour = generateDefaultProps('dark', 4);
export const defaultPropsDarkFourWithLinks = generateDefaultProps(
  'dark',
  4,
  true
);
export const defaultPropsLightThree = generateDefaultProps('light', 3);
export const defaultPropsLightThreeWithLinks = generateDefaultProps(
  'light',
  3,
  true
);
export const defaultPropsLightFour = generateDefaultProps('light', 4);
export const defaultPropsLightFourWithLinks = generateDefaultProps(
  'light',
  4,
  true
);
