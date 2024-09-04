import { Meta, StoryFn } from '@storybook/react';
import { RowText } from '@react-components/components';
import { defaultPropsDark, RowTextTemplate } from './rowTextCommons';

const meta: Meta<typeof RowText> = {
  title: 'Components/RowText/Dark',
  component: RowText,
};
export default meta;

export const RowTextDarkLeftLayout: StoryFn<typeof RowText> = RowTextTemplate.bind({});
RowTextDarkLeftLayout.args = {
  ...defaultPropsDark,
  layout: 'left',
};

export const RowTextDarkCenterLayout: StoryFn<typeof RowText> = RowTextTemplate.bind({});
RowTextDarkCenterLayout.args = {
  ...defaultPropsDark,
  layout: 'center',
};

export const RowTextDarkRightLayout: StoryFn<typeof RowText> = RowTextTemplate.bind({});
RowTextDarkRightLayout.args = {
  ...defaultPropsDark,
  layout: 'right',
};
