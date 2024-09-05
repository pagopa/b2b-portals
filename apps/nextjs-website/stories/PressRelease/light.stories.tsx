import { Meta, StoryFn } from '@storybook/react';
import { PressReleaseTemplate, defaultPropsLight } from './pressReleaseCommons';
import { PressRelease } from '@react-components/components';

const meta: Meta<typeof PressRelease> = {
  title: 'Components/PressRelease/Light',
  component: PressRelease,
};

export default meta;

export const LightPressRelease: StoryFn<typeof PressRelease> = PressReleaseTemplate.bind({});
LightPressRelease.args = {
  ...defaultPropsLight,
};
