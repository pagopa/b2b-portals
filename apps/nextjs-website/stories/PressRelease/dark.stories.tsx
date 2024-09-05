import { Meta, StoryFn } from '@storybook/react';
import { PressReleaseTemplate, defaultPropsDark } from './pressReleaseCommons';
import { PressRelease } from '@react-components/components';

const meta: Meta<typeof PressRelease> = {
  title: 'Components/PressRelease/Dark',
  component: PressRelease,
};

export default meta;

export const DarkPressRelease: StoryFn<typeof PressRelease> = PressReleaseTemplate.bind({});
DarkPressRelease.args = {
  ...defaultPropsDark,
};
