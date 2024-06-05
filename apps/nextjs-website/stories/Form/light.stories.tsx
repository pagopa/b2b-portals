import { Meta, StoryFn } from '@storybook/react';
import Form from '@react-components/components/Form/Form';
import { FormTemplate, defaultPropsLight } from './formCommons';

const meta: Meta<typeof Form> = {
  title: 'Components/Form/Light',
  component: Form,
};

export default meta;

export const LightForm: StoryFn<typeof Form> = FormTemplate.bind({});
LightForm.args = {
  ...defaultPropsLight,
};
