import { Meta, StoryFn } from '@storybook/react';
import Form from '@react-components/components/Form/Form';
import { FormTemplate, defaultPropsDark } from './formCommons';

const meta: Meta<typeof Form> = {
  title: 'Components/Form/Dark',
  component: Form,
};

export default meta;

export const DarkForm: StoryFn<typeof Form> = FormTemplate.bind({});
DarkForm.args = {
  ...defaultPropsDark,
};
