import { Meta, StoryFn } from '@storybook/react';
import {
  HeroCounterTemplate,
  defaultsLightWithoutButtons,
} from './herocounterCommons';
import { HeroCounter } from '@react-components/components';

// Define the default export with metadata about your component
const meta: Meta<typeof HeroCounter> = {
  title: 'Components/HeroCounter/Light',
  component: HeroCounter,
};
export default meta;

export const LightHeroCounterMediumCounter: StoryFn<typeof HeroCounter> = HeroCounterTemplate.bind(
  {}
);
LightHeroCounterMediumCounter.args = {
  ...defaultsLightWithoutButtons,
  size: 'medium',
  counterNumber: 123,
  counterText: 'Lorem ipsum',
  inverse: false,
};