import { Meta } from '@storybook/react';
import { Accordion } from '@react-components/components';
import { defaultPropsLight, AccordionTemplate } from './accordionCommons';

// Define the default export with metadata about your component
export default {
  title: 'Components/Accordion/Light',
  component: Accordion,
} as Meta;

export const AccordionLightLeftLayoutFull = AccordionTemplate.bind({});
AccordionLightLeftLayoutFull.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'left',
};

export const AccordionLightCenterLayoutFull = AccordionTemplate.bind({});
AccordionLightCenterLayoutFull.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'center',
};

export const AccordionLightRightLayoutFull = AccordionTemplate.bind({});
AccordionLightRightLayoutFull.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'right',
};

export const AccordionLightLeftLayoutOnlyTitle = AccordionTemplate.bind({});
AccordionLightLeftLayoutOnlyTitle.args = {
  ...defaultPropsLight,
  layout: 'left',
};

export const AccordionLightCenterLayoutOnlyTitle = AccordionTemplate.bind({});
AccordionLightCenterLayoutOnlyTitle.args = {
  ...defaultPropsLight,
  layout: 'center',
};

export const AccordionLightRightLayoutOnlyTitle = AccordionTemplate.bind({});
AccordionLightRightLayoutOnlyTitle.args = {
  ...defaultPropsLight,
  layout: 'right',
};

export const AccordionLightLeftLayoutWithSubtitle = AccordionTemplate.bind({});
AccordionLightLeftLayoutWithSubtitle.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  layout: 'left',
};

export const AccordionLightCenterLayoutWithSubtitle = AccordionTemplate.bind({});
AccordionLightCenterLayoutWithSubtitle.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  layout: 'center',
};

export const AccordionLightRightLayoutWithSubtitle = AccordionTemplate.bind({});
AccordionLightRightLayoutWithSubtitle.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  layout: 'right',
};

export const AccordionLightLeftLayoutWithDescription = AccordionTemplate.bind({});
AccordionLightLeftLayoutWithDescription.args = {
  ...defaultPropsLight,
  description: 'This is a description for the accordion.',
  layout: 'left',
};

export const AccordionLightCenterLayoutWithDescription = AccordionTemplate.bind({});
AccordionLightCenterLayoutWithDescription.args = {
  ...defaultPropsLight,
  description: 'This is a description for the accordion.',
  layout: 'center',
};

export const AccordionLightRightLayoutWithDescription = AccordionTemplate.bind({});
AccordionLightRightLayoutWithDescription.args = {
  ...defaultPropsLight,
  description: 'This is a description for the accordion.',
  layout: 'right',
};