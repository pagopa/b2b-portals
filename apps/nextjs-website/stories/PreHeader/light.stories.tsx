// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { PreHeader } from '@react-components/components';
import { PreHeaderProps } from '@react-components/types';
import { CtaButtonProps } from '@react-components/types/common/Common.types';
import { HelpOutlineOutlined } from '@mui/icons-material';

// Define the default export with metadata about your component
const meta: Meta<typeof PreHeader> = {
  title: 'Components/PreHeader/Light',
  component: PreHeader,
};
export default meta;

// Define a "Template" function that sets how args map to rendering
const PreHeaderTemplate: StoryFn<PreHeaderProps> = (args) => (
  <PreHeader {...args} />
);

// Function to generate default CTA button props
const generateCtaButtonProps = (withIcon: boolean): CtaButtonProps => ({
  text: 'Click Me',
  ...(withIcon ? { startIcon: <HelpOutlineOutlined /> } : {}),
});

// Function to generate PreHeaderProps
const generatePreHeaderProps = (
  withIcon: boolean,
): Partial<PreHeaderProps> => ({
  leftCtas: [generateCtaButtonProps(false)],
  rightCtas: [generateCtaButtonProps(withIcon)],
});

// Define the default props
const defaultProps = generatePreHeaderProps(true);
const defaultPropsNoIcon = generatePreHeaderProps(false);

export const DefaultPreHeader: StoryFn<typeof PreHeader> =
  PreHeaderTemplate.bind({});
DefaultPreHeader.args = {
  ...defaultProps,
};

export const DefaultPreHeaderNoIcon: StoryFn<typeof PreHeader> =
  PreHeaderTemplate.bind({});
DefaultPreHeaderNoIcon.args = {
  ...defaultPropsNoIcon,
};
