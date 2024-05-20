// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { PreHeader } from '@react-components/components';
import { PreHeaderProps } from '@react-components/types';
import { CtaButtonProps } from '@react-components/types/common/Common.types';
import { HelpOutlineOutlined } from '@mui/icons-material';

// Define the default export with metadata about your component
export default {
  title: 'Components/PreHeader/Light',
  component: PreHeader,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<PreHeaderProps> = (args) => <PreHeader {...args} />;

// Define the left default props
const defaultLeftCtaButtonProps: CtaButtonProps = {
  text: 'Click Me',
  variant: 'contained',
};

// Define the right default props
const defaultRightCtaButtonProps: CtaButtonProps = {
  text: 'Click Me',
  variant: 'contained',
  startIcon: <HelpOutlineOutlined />
};

const defaultRightCtaButtonPropsNoIcon: CtaButtonProps = {
  text: 'Click Me',
  variant: 'contained',
};

const defaultProps: Partial<PreHeaderProps> = {
  leftCtas: [defaultLeftCtaButtonProps],
  rightCtas: [defaultRightCtaButtonProps],
};

const defaultPropsNoIcon: Partial<PreHeaderProps> = {
  leftCtas: [defaultLeftCtaButtonProps],
  rightCtas: [defaultRightCtaButtonPropsNoIcon],
};

export const DefaultPreHeader = Template.bind({});
DefaultPreHeader.args = {
  ...defaultProps,
};

export const DefaultPreHeaderNoIcon = Template.bind({});
DefaultPreHeaderNoIcon.args = {
  ...defaultPropsNoIcon,
};