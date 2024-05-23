import { Meta, StoryFn } from '@storybook/react';
import { Accordion } from '@react-components/components';
import { defaultPropsDark, AccordionTemplate } from './accordionCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion/Dark',
  component: Accordion,
};
export default meta;

export const AccordionDarkLeftLayoutFull: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionDarkLeftLayoutFull.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'left',
};

export const AccordionDarkCenterLayoutFull: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionDarkCenterLayoutFull.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'center',
};

export const AccordionDarkRightLayoutFull: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionDarkRightLayoutFull.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'right',
};

export const AccordionDarkLeftLayoutOnlyTitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionDarkLeftLayoutOnlyTitle.args = {
  ...defaultPropsDark,
  layout: 'left',
};

export const AccordionDarkCenterLayoutOnlyTitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionDarkCenterLayoutOnlyTitle.args = {
  ...defaultPropsDark,
  layout: 'center',
};

export const AccordionDarkRightLayoutOnlyTitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionDarkRightLayoutOnlyTitle.args = {
  ...defaultPropsDark,
  layout: 'right',
};

export const AccordionDarkLeftLayoutWithSubtitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionDarkLeftLayoutWithSubtitle.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  layout: 'left',
};

export const AccordionDarkCenterLayoutWithSubtitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionDarkCenterLayoutWithSubtitle.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  layout: 'center',
};

export const AccordionDarkRightLayoutWithSubtitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionDarkRightLayoutWithSubtitle.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  layout: 'right',
};

export const AccordionDarkLeftLayoutWithDescription: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionDarkLeftLayoutWithDescription.args = {
  ...defaultPropsDark,
  description: 'This is a description for the accordion.',
  layout: 'left',
};

export const AccordionDarkCenterLayoutWithDescription: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkCenterLayoutWithDescription.args = {
  ...defaultPropsDark,
  description: 'This is a description for the accordion.',
  layout: 'center',
};

export const AccordionDarkRightLayoutWithDescription: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkRightLayoutWithDescription.args = {
  ...defaultPropsDark,
  description: 'This is a description for the accordion.',
  layout: 'right',
};
