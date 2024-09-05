import { Meta, StoryFn } from '@storybook/react';
import { Stats } from '@react-components/components';
import { defaultPropsLight } from './statsCommons';

const meta: Meta<typeof Stats> = {
  title: 'Components/Stats/Light',
  component: Stats,
};
export default meta;

export const LightStats: StoryFn<typeof Stats> = (args) => <Stats {...args} />;
LightStats.args = {
  ...defaultPropsLight,
};
