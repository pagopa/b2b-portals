import type { Meta, StoryObj } from '@storybook/react';
import { CtaButtons } from '@react-components/components/common/Common';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

interface CtaButtonsProps {
  readonly ctaButtons: ReadonlyArray<CtaButtonProps | JSX.Element>;
  readonly theme?: 'dark' | 'light';
  readonly disableRipple?: boolean;
}

const meta: Meta<CtaButtonsProps> = {
  title: 'General/Buttons/Dark',
  component: CtaButtons,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['dark', 'light'],
      },
    },
    disableRipple: {
      control: 'boolean',
    },
    ctaButtons: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkButtonsSingleButtonContained: Story = {
  args: {
    ctaButtons: [
      { text: 'Button', variant: 'contained' },
    ],
    theme: 'dark',
    disableRipple: false,
  },
};

export const DarkButtonsSingleButtonOutlined: Story = {
  args: {
    ctaButtons: [
      { text: 'Button', variant: 'outlined' },
    ],
    theme: 'dark',
    disableRipple: false,
  },
};

export const DarkButtonsSingleButtonOutlinedNoRipple: Story = {
  args: {
    ctaButtons: [
      { text: 'Button', variant: 'outlined' },
    ],
    theme: 'dark',
    disableRipple: true,
  },
};

export const DarkButtonsTwoButtons: Story = {
  args: {
    ctaButtons: [
      { text: 'Button 1', variant: 'contained' },
      { text: 'Button 2', variant: 'outlined' },
    ],
    theme: 'dark',
    disableRipple: false,
  },
};

export const DarkButtonsTwoButtonsNoRipple: Story = {
  args: {
    ctaButtons: [
      { text: 'Button 1', variant: 'contained' },
      { text: 'Button 2', variant: 'outlined' },
    ],
    theme: 'dark',
    disableRipple: true,
  },
};
