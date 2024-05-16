// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { Accordion } from '@react-components/components';
import { AccordionProps } from '@react-components/types';
import { AccordionItemProps } from '@react-components/types/Accordion/Accordion.types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Accordion/Dark',
  component: Accordion,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

// Define your accordion items
const accordionItems: AccordionItemProps[] = [
  {
    header: 'Accordion Item 1',
    content: 'This is the content for accordion item 1.',
    theme: 'dark',
  },
  {
    header: 'Accordion Item 2',
    content: 'This is the content for accordion item 2.',
    theme: 'dark',
  },
];

// Define the default props
const defaultProps: Partial<AccordionProps> = {
  title: 'Accordion Title',
};

export const AccordionDarkLeftLayoutFull = Template.bind({});
AccordionDarkLeftLayoutFull.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  theme: 'dark',
  layout: 'left',
};

export const AccordionDarkCenterLayoutFull = Template.bind({});
AccordionDarkCenterLayoutFull.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  theme: 'dark',
  layout: 'center',
};

export const AccordionDarkRightLayoutFull = Template.bind({});
AccordionDarkRightLayoutFull.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  theme: 'dark',
  layout: 'right',
};

export const AccordionDarkLeftLayoutOnlyTitle = Template.bind({});
AccordionDarkLeftLayoutOnlyTitle.args = {
  ...defaultProps,
  accordionItems,
  theme: 'dark',
  layout: 'left',
};

export const AccordionDarkCenterLayoutOnlyTitle = Template.bind({});
AccordionDarkCenterLayoutOnlyTitle.args = {
  ...defaultProps,
  accordionItems,
  theme: 'dark',
  layout: 'center',
};

export const AccordionDarkRightLayoutOnlyTitle = Template.bind({});
AccordionDarkRightLayoutOnlyTitle.args = {
  ...defaultProps,
  accordionItems,
  theme: 'dark',
  layout: 'right',
};

export const AccordionDarkLeftLayoutWithSubtitle = Template.bind({});
AccordionDarkLeftLayoutWithSubtitle.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  theme: 'dark',
  layout: 'left',
};

export const AccordionDarkCenterLayoutWithSubtitle = Template.bind({});
AccordionDarkCenterLayoutWithSubtitle.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  theme: 'dark',
  layout: 'center',
};

export const AccordionDarkRightLayoutWithSubtitle = Template.bind({});
AccordionDarkRightLayoutWithSubtitle.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  theme: 'dark',
  layout: 'right',
};

export const AccordionDarkLeftLayoutWithDescription = Template.bind({});
AccordionDarkLeftLayoutWithDescription.args = {
  ...defaultProps,
  accordionItems,
  description: 'This is a description for the accordion.',
  theme: 'dark',
  layout: 'left',
};

export const AccordionDarkCenterLayoutWithDescription = Template.bind({});
AccordionDarkCenterLayoutWithDescription.args = {
  ...defaultProps,
  accordionItems,
  description: 'This is a description for the accordion.',
  theme: 'dark',
  layout: 'center',
};

export const AccordionDarkRightLayoutWithDescription = Template.bind({});
AccordionDarkRightLayoutWithDescription.args = {
  ...defaultProps,
  accordionItems,
  description: 'This is a description for the accordion.',
  theme: 'dark',
  layout: 'right',
};