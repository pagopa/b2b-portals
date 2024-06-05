import { Meta, StoryFn } from '@storybook/react';
import { Accordion } from '@react-components/components';
import { defaultPropsLight, AccordionTemplate } from './accordionCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion/Light',
  component: Accordion,
};
export default meta;

export const AccordionLightLeftLayoutFull: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionLightLeftLayoutFull.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'left',
};

export const AccordionLightCenterLayoutFull: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionLightCenterLayoutFull.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'center',
};

export const AccordionLightRightLayoutFull: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionLightRightLayoutFull.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'right',
};

export const AccordionLightLeftLayoutOnlyTitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionLightLeftLayoutOnlyTitle.args = {
  ...defaultPropsLight,
  layout: 'left',
};

export const AccordionLightCenterLayoutOnlyTitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionLightCenterLayoutOnlyTitle.args = {
  ...defaultPropsLight,
  layout: 'center',
};

export const AccordionLightRightLayoutOnlyTitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionLightRightLayoutOnlyTitle.args = {
  ...defaultPropsLight,
  layout: 'right',
};

export const AccordionLightLeftLayoutWithSubtitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionLightLeftLayoutWithSubtitle.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  layout: 'left',
};

export const AccordionLightCenterLayoutWithSubtitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionLightCenterLayoutWithSubtitle.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  layout: 'center',
};

export const AccordionLightRightLayoutWithSubtitle: StoryFn<typeof Accordion> =
  AccordionTemplate.bind({});
AccordionLightRightLayoutWithSubtitle.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  layout: 'right',
};

export const AccordionLightLeftLayoutWithDescription: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionLightLeftLayoutWithDescription.args = {
  ...defaultPropsLight,
  description: 'This is a description for the accordion.',
  layout: 'left',
};

export const AccordionLightCenterLayoutWithDescription: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionLightCenterLayoutWithDescription.args = {
  ...defaultPropsLight,
  description: 'This is a description for the accordion.',
  layout: 'center',
};

export const AccordionLightRightLayoutWithDescription: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionLightRightLayoutWithDescription.args = {
  ...defaultPropsLight,
  description: 'This is a description for the accordion.',
  layout: 'right',
};
