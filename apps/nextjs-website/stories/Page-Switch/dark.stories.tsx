import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PageSwitch } from '@react-components/components';
import { PageSwitchProps } from '@react-components/types';
import { defaultPropsDark } from './pageSwitchCommons';

const meta: Meta<typeof PageSwitch> = {
  title: 'Components/PageSwitch/Dark',
  component: PageSwitch,
};
export default meta;

const PageSwitchTemplate: StoryFn<PageSwitchProps> = (args) => <PageSwitch {...args} />;

export const Default: StoryFn<typeof PageSwitch> = PageSwitchTemplate.bind({});
Default.args = {
  ...defaultPropsDark,
};
