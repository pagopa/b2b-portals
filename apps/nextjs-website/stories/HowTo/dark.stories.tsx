// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { HowTo } from '@react-components/components';
import { HowToProps } from '@react-components/types';
import { HowToStepProps } from '@react-components/types/HowTo/HowTo.types';

// Define the default export with metadata about your component
export default {
  title: 'Components/HowTo/Dark',
  component: HowTo,
} as Meta;

// Function to generate steps
const generateStepsWithIcons = (count: number): HowToStepProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Step ${i + 1}`,
    description: `This is step ${i + 1}`,
    stepIcon: {
      icon: 'MarkEmailReadOutlined',
    },
    index: i,
    theme: 'dark',
    isLastStep: i === count - 1,
  })
);

// Function to generate steps
const generateStepsWithoutIcons = (count: number): HowToStepProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Step ${i + 1}`,
    description: `This is step ${i + 1}`,
    index: i,
    theme: 'dark',
    isLastStep: i === count - 1,
  })
);

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<HowToProps> = (args) => <HowTo {...args} />;

// Define the default props
const defaultProps: Partial<HowToProps> = {
  theme: 'dark',
  title: 'How To Title',
};

export const DarkHowToFull = Template.bind({});
DarkHowToFull.args = {
  ...defaultProps,
  steps: generateStepsWithIcons(4),
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'center',
};

export const DarkHowToFullNoLink = Template.bind({});
DarkHowToFullNoLink.args = {
  ...defaultProps,
  steps: generateStepsWithIcons(4),
  stepsAlignment: 'center',
};

export const DarkHowToNoIcons = Template.bind({});
DarkHowToNoIcons.args = {
  ...defaultProps,
  link: {
    label: 'Learn More',
    href: '#'
  },
  steps: generateStepsWithoutIcons(4),
  stepsAlignment: 'center',
};

export const DarkHowToNoLinkNoIcons = Template.bind({});
DarkHowToNoLinkNoIcons.args = {
  ...defaultProps,
  steps: generateStepsWithoutIcons(4),
  stepsAlignment: 'center',
};

export const DarkHowToFullCenter = Template.bind({});
DarkHowToFullCenter.args = {
  ...defaultProps,
  steps: generateStepsWithIcons(4),
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'center',
};

export const DarkHowToFullLeft = Template.bind({});
DarkHowToFullLeft.args = {
  ...defaultProps,
  steps: generateStepsWithIcons(4),
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'left',
};

export const DarkHowToFullRight = Template.bind({});
DarkHowToFullRight.args = {
  ...defaultProps,
  steps: generateStepsWithIcons(4),
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'right',
};