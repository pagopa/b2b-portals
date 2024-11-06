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
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
  textAlignment: 'left',
};

export const AccordionDarkCenterLayoutCenterTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkCenterLayoutCenterTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
};

export const AccordionDarkCenterLayoutRightTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkCenterLayoutRightTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
  textAlignment: 'right',
};

export const AccordionDarkLeftLayoutLeftTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkLeftLayoutLeftTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
  layout: 'left',
  textAlignment: 'left',
};

export const AccordionDarkLeftLayoutCenterTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkLeftLayoutCenterTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
  layout: 'left',
};

export const AccordionDarkLeftLayoutRightTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionDarkLeftLayoutRightTextAlignment.args = {
  ...defaultPropsDark,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
  layout: 'left',
  textAlignment: 'right',
};
