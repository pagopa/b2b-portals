import { Meta, StoryFn } from '@storybook/react';
import { RowText } from '@react-components/components';
import { defaultPropsLight, RowTextTemplate } from './rowTextCommons';

const meta: Meta<typeof RowText> = {
  title: 'Components/RowText/Light',
  component: RowText,
};
export default meta;

export const RowTextLightLeftLayout: StoryFn<typeof RowText> =
  RowTextTemplate.bind({});
RowTextLightLeftLayout.args = {
  ...defaultPropsLight,
  layout: 'left',
};

export const RowTextLightCenterLayout: StoryFn<typeof RowText> =
  RowTextTemplate.bind({});
RowTextLightCenterLayout.args = {
  ...defaultPropsLight,
  layout: 'center',
};
