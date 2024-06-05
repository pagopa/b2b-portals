import { StoryFn } from '@storybook/react';
import { Accordion } from '@react-components/components';
import { AccordionProps } from '@react-components/types';
import { AccordionItemProps } from '@react-components/types/Accordion/Accordion.types';

// Define a "Template" function that sets how args map to rendering
export const AccordionTemplate: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

// Function to generate accordion items with a given theme
const generateAccordionItems = (theme: 'light' | 'dark'): AccordionItemProps[] => [
  {
    header: 'Accordion Item 1',
    content: 'This is the content for accordion item 1.',
    theme,
  },
  {
    header: 'Accordion Item 2',
    content: 'This is the content for accordion item 2.',
    theme,
  },
];

// Define the default props with light theme
export const defaultPropsLight: Partial<AccordionProps> = {
  title: 'Accordion Title',
  accordionItems: generateAccordionItems('light'),
  theme: 'light',
};

// Define the default props with dark theme
export const defaultPropsDark: Partial<AccordionProps> = {
  title: 'Accordion Title',
  accordionItems: generateAccordionItems('dark'),
  theme: 'dark',
};