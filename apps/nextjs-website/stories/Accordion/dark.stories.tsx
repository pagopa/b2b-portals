import { Meta } from '@storybook/react';
import { Accordion } from '@react-components/components';
import { defaultPropsDark, AccordionTemplate } from './accordionCommons';

// Define the default export with metadata about your component
export default {
  title: 'Components/Accordion/Dark',
  component: Accordion,
} as Meta;

export const AccordionDarkLeftLayoutFull = AccordionTemplate.bind({});
AccordionDarkLeftLayoutFull.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'left',
};

export const AccordionDarkCenterLayoutFull = AccordionTemplate.bind({});
AccordionDarkCenterLayoutFull.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'center',
};

export const AccordionDarkRightLayoutFull = AccordionTemplate.bind({});
AccordionDarkRightLayoutFull.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: 'This is a description for the accordion.',
  layout: 'right',
};

export const AccordionDarkLeftLayoutOnlyTitle = AccordionTemplate.bind({});
AccordionDarkLeftLayoutOnlyTitle.args = {
  ...defaultPropsDark,
  layout: 'left',
};

export const AccordionDarkCenterLayoutOnlyTitle = AccordionTemplate.bind({});
AccordionDarkCenterLayoutOnlyTitle.args = {
  ...defaultPropsDark,
  layout: 'center',
};

export const AccordionDarkRightLayoutOnlyTitle = AccordionTemplate.bind({});
AccordionDarkRightLayoutOnlyTitle.args = {
  ...defaultPropsDark,
  layout: 'right',
};

export const AccordionDarkLeftLayoutWithSubtitle = AccordionTemplate.bind({});
AccordionDarkLeftLayoutWithSubtitle.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  layout: 'left',
};

export const AccordionDarkCenterLayoutWithSubtitle = AccordionTemplate.bind({});
AccordionDarkCenterLayoutWithSubtitle.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  layout: 'center',
};

export const AccordionDarkRightLayoutWithSubtitle = AccordionTemplate.bind({});
AccordionDarkRightLayoutWithSubtitle.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  layout: 'right',
};

export const AccordionDarkLeftLayoutWithDescription = AccordionTemplate.bind({});
AccordionDarkLeftLayoutWithDescription.args = {
  ...defaultPropsDark,
  description: 'This is a description for the accordion.',
  layout: 'left',
};

export const AccordionDarkCenterLayoutWithDescription = AccordionTemplate.bind({});
AccordionDarkCenterLayoutWithDescription.args = {
  ...defaultPropsDark,
  description: 'This is a description for the accordion.',
  layout: 'center',
};

export const AccordionDarkRightLayoutWithDescription = AccordionTemplate.bind({});
AccordionDarkRightLayoutWithDescription.args = {
  ...defaultPropsDark,
  description: 'This is a description for the accordion.',
  layout: 'right',
};