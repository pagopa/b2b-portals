import { CtaButtons } from "@react-components/components/common/Common";
import { CtaButtonProps } from "@react-components/types/common/Common.types";
import { Meta } from "@storybook/react";
 
export interface CtaButtonsProps {
  readonly ctaButtons: ReadonlyArray<CtaButtonProps | JSX.Element>;
  readonly theme?: 'dark' | 'light';
  readonly disableRipple?: boolean;
}
 
export const commonButtonsMeta: Meta<CtaButtonsProps> = {
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
}