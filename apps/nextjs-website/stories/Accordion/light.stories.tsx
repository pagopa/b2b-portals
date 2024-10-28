import { Meta, StoryFn } from '@storybook/react';
import { Accordion } from '@react-components/components';
import { defaultPropsLight, AccordionTemplate } from './accordionCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion/Light',
  component: Accordion,
};
export default meta;

export const AccordionLightCenterLayoutLeftTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionLightCenterLayoutLeftTextAlignment.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
  textAlignment: 'left',
};

export const AccordionLightCenterLayoutCenterTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionLightCenterLayoutCenterTextAlignment.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
};

export const AccordionLightCenterLayoutRightTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionLightCenterLayoutRightTextAlignment.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
  textAlignment: 'right',
};

export const AccordionLightLeftLayoutLeftTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionLightLeftLayoutLeftTextAlignment.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
  layout: 'left',
  textAlignment: 'left',
};

export const AccordionLightLeftLayoutCenterTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionLightLeftLayoutCenterTextAlignment.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
  layout: 'left',
};

export const AccordionLightLeftLayoutRightTextAlignment: StoryFn<
  typeof Accordion
> = AccordionTemplate.bind({});
AccordionLightLeftLayoutRightTextAlignment.args = {
  ...defaultPropsLight,
  subtitle: 'Accordion Subtitle',
  description: (
    <p>
      This is a description for the accordion with <a href='/'>link</a>
    </p>
  ),
  layout: 'left',
  textAlignment: 'right',
};
