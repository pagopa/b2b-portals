import { Meta, StoryFn } from '@storybook/react';
import { DynamicsForm } from '@react-components/components';
import { DynamicsFormProps } from '@react-components/types/DynamicsForm/DynamicsForm.types';

const Template: StoryFn<DynamicsFormProps> = (args) => (
  <DynamicsForm {...args} />
);

const defaultProps: DynamicsFormProps = {
  formId: '66f2a8e5-77f0-ef11-be1f-000d3a6490ab',
  apiUrl:
    'https://public-eur.mkt.dynamics.com/api/v1.0/orgs/c6d32455-8c80-ef11-ac1e-000d3a67c478/landingpageforms',
  cachedUrl:
    'https://assets-eur.mkt.dynamics.com/c6d32455-8c80-ef11-ac1e-000d3a67c478/digitalassets/forms/66f2a8e5-77f0-ef11-be1f-000d3a6490ab',
};

const meta: Meta<typeof DynamicsForm> = {
  title: 'Components/DynamicsForm/Default',
  component: DynamicsForm,
};
export default meta;

export const Default: StoryFn<typeof DynamicsForm> = Template.bind({});
Default.args = {
  ...defaultProps,
};
