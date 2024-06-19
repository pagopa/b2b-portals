import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { EditorialSwitch } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types';
import { defaultPropsLight } from './editorialCommons';

const meta: Meta<typeof EditorialSwitch> = {
  title: 'Components/EditorialSwitch/Light',
  component: EditorialSwitch,
};
export default meta;

const EditorialSwitchTemplate: StoryFn<EditorialSwitchProps> = (args) => <EditorialSwitch {...args} />;

export const Default: StoryFn<typeof EditorialSwitch> = EditorialSwitchTemplate.bind({});
Default.args = {
  ...defaultPropsLight,
};