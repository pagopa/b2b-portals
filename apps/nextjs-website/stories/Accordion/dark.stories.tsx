import { Meta, StoryFn } from '@storybook/react';
import { Accordion } from '@react-components/components';
import { defaultPropsDark, AccordionTemplate } from './accordionCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion/Dark',
  component: Accordion,
};
export default meta;

export const AccordionDarkCenterLayoutLeftTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkCenterLayoutLeftTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  textAlignment: 'left',
};

export const AccordionDarkCenterLayoutCenterTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkCenterLayoutCenterTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
};

export const AccordionDarkCenterLayoutRightTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkCenterLayoutRightTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  textAlignment: 'right',
};

export const AccordionDarkLeftLayoutLeftTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkLeftLayoutLeftTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'left',
  textAlignment: 'left',
};

export const AccordionDarkLeftLayoutCenterTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkLeftLayoutCenterTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'left',
};

export const AccordionDarkLeftLayoutRightTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkLeftLayoutRightTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'left',
  textAlignment: 'right',
};
