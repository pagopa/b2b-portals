import type { Meta, StoryObj } from '@storybook/react';
import { CtaButtonsProps, commonButtonsMeta } from './buttonsCommons';
 
const meta: Meta<CtaButtonsProps> = {
  title: 'General/Buttons/Light',
  ...commonButtonsMeta,
};
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const LightButtonsSingleButtonContained: Story = {
  args: {
    ctaButtons: [
      { text: 'Button', variant: 'contained' },
    ],
    theme: 'light',
    disableRipple: false,
  },
};
 
export const LightButtonsSingleButtonContainedNoRipple: Story = {
  args: {
    ctaButtons: [
      { text: 'Button', variant: 'contained' },
    ],
    theme: 'light',
    disableRipple: true,
  },
};
 
export const LightButtonsSingleButtonOutlined: Story = {
  args: {
    ctaButtons: [
      { text: 'Button', variant: 'outlined' },
    ],
    theme: 'light',
    disableRipple: false,
  },
};
 
export const LightButtonsSingleButtonOutlinedNoRipple: Story = {
  args: {
    ctaButtons: [
      { text: 'Button', variant: 'outlined' },
    ],
    theme: 'light',
    disableRipple: true,
  },
};
 
export const LightButtonsTwoButtons: Story = {
  args: {
    ctaButtons: [
      { text: 'Button 1', variant: 'contained' },
      { text: 'Button 2', variant: 'outlined' },
    ],
    theme: 'light',
    disableRipple: false,
  },
};
 
export const LightButtonsTwoButtonsNoRipple: Story = {
  args: {
    ctaButtons: [
      { text: 'Button 1', variant: 'contained' },
      { text: 'Button 2', variant: 'outlined' },
    ],
    theme: 'light',
    disableRipple: true,
  },
};