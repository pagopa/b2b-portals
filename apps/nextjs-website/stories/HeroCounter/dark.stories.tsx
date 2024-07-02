import { Meta, StoryFn } from '@storybook/react';
import {
  HeroCounterTemplate,
  defaultsDarkWithoutButtons,
} from './herocounterCommons';
import { HeroCounter } from '@react-components/components';

// Define the default export with metadata about your component
const meta: Meta<typeof HeroCounter> = {
  title: 'Components/HeroCounter/Dark',
  component: HeroCounter,
};
export default meta;

export const DarkHeroCounterMediumCounter: StoryFn<typeof HeroCounter> = HeroCounterTemplate.bind(
  {}
);
DarkHeroCounterMediumCounter.args = {
  ...defaultsDarkWithoutButtons,
  size: 'medium',
  counterNumber: 123,
  counterText: 'Lorem ipsum',
  inverse: false,
};