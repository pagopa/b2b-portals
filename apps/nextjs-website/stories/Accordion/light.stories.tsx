// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { Accordion } from '@react-components/components';
import { AccordionProps } from '@react-components/types';
import { AccordionItemProps } from '@react-components/types/Accordion/Accordion.types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Accordion/Light',
  component: Accordion,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

// Define your accordion items
const accordionItems: AccordionItemProps[] = [
  {
    header: 'Accordion Item 1',
    content: 'This is the content for accordion item 1.',
    theme: 'light',
  },
  {
    header: 'Accordion Item 2',
    content: 'This is the content for accordion item 2.',
    theme: 'light',
  },
];

// Define the default props
const defaultProps: Partial<AccordionProps> = {
  title: 'Accordion Title',
};

export const AccordionLightLeftLayoutFull = Template.bind({});
AccordionLightLeftLayoutFull.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  theme: 'light',
  layout: 'left',
};

export const AccordionLightCenterLayoutFull = Template.bind({});
AccordionLightCenterLayoutFull.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  theme: 'light',
  layout: 'center',
};

export const AccordionLightRightLayoutFull = Template.bind({});
AccordionLightRightLayoutFull.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  theme: 'light',
  layout: 'right',
};

export const AccordionLightLeftLayoutOnlyTitle = Template.bind({});
AccordionLightLeftLayoutOnlyTitle.args = {
  ...defaultProps,
  accordionItems,
  theme: 'light',
  layout: 'left',
};

export const AccordionLightCenterLayoutOnlyTitle = Template.bind({});
AccordionLightCenterLayoutOnlyTitle.args = {
  ...defaultProps,
  accordionItems,
  theme: 'light',
  layout: 'center',
};

export const AccordionLightRightLayoutOnlyTitle = Template.bind({});
AccordionLightRightLayoutOnlyTitle.args = {
  ...defaultProps,
  accordionItems,
  theme: 'light',
  layout: 'right',
};

export const AccordionLightLeftLayoutWithSubtitle = Template.bind({});
AccordionLightLeftLayoutWithSubtitle.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  theme: 'light',
  layout: 'left',
};

export const AccordionLightCenterLayoutWithSubtitle = Template.bind({});
AccordionLightCenterLayoutWithSubtitle.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  theme: 'light',
  layout: 'center',
};

export const AccordionLightRightLayoutWithSubtitle = Template.bind({});
AccordionLightRightLayoutWithSubtitle.args = {
  ...defaultProps,
  accordionItems,
  subtitle: 'Accordion Subtitle',
  theme: 'light',
  layout: 'right',
};

export const AccordionLightLeftLayoutWithDescription = Template.bind({});
AccordionLightLeftLayoutWithDescription.args = {
  ...defaultProps,
  accordionItems,
  description: 'This is a description for the accordion.',
  theme: 'light',
  layout: 'left',
};

export const AccordionLightCenterLayoutWithDescription = Template.bind({});
AccordionLightCenterLayoutWithDescription.args = {
  ...defaultProps,
  accordionItems,
  description: 'This is a description for the accordion.',
  theme: 'light',
  layout: 'center',
};

export const AccordionLightRightLayoutWithDescription = Template.bind({});
AccordionLightRightLayoutWithDescription.args = {
  ...defaultProps,
  accordionItems,
  description: 'This is a description for the accordion.',
  theme: 'light',
  layout: 'right',
};