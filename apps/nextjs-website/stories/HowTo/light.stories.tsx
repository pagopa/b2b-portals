// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { HowTo } from '@react-components/components';
import { HowToProps } from '@react-components/types';
import { HowToStepProps } from '@react-components/types/HowTo/HowTo.types';

// Define the default export with metadata about your component
export default {
  title: 'Components/HowTo/Light',
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
    theme: 'light',
    isLastStep: i === count - 1,
  })
);

// Function to generate steps
const generateStepsWithoutIcons = (count: number): HowToStepProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Step ${i + 1}`,
    description: `This is step ${i + 1}`,
    index: i,
    theme: 'light',
    isLastStep: i === count - 1,
  })
);

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<HowToProps> = (args) => <HowTo {...args} />;

// Define the default props
const defaultProps: Partial<HowToProps> = {
  theme: 'light',
  title: 'How To Title',
};

export const LightHowToFull = Template.bind({});
LightHowToFull.args = {
  ...defaultProps,
  steps: generateStepsWithIcons(4),
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'center',
};

export const LightHowToFullNoLink = Template.bind({});
LightHowToFullNoLink.args = {
  ...defaultProps,
  steps: generateStepsWithIcons(4),
  stepsAlignment: 'center',
};

export const LightHowToNoIcons = Template.bind({});
LightHowToNoIcons.args = {
  ...defaultProps,
  link: {
    label: 'Learn More',
    href: '#'
  },
  steps: generateStepsWithoutIcons(4),
  stepsAlignment: 'center',
};

export const LightHowToNoLinkNoIcons = Template.bind({});
LightHowToNoLinkNoIcons.args = {
  ...defaultProps,
  steps: generateStepsWithoutIcons(4),
  stepsAlignment: 'center',
};

export const LightHowToFullCenter = Template.bind({});
LightHowToFullCenter.args = {
  ...defaultProps,
  steps: generateStepsWithIcons(4),
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'center',
};

export const LightHowToFullLeft = Template.bind({});
LightHowToFullLeft.args = {
  ...defaultProps,
  steps: generateStepsWithIcons(4),
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'left',
};

export const LightHowToFullRight = Template.bind({});
LightHowToFullRight.args = {
  ...defaultProps,
  steps: generateStepsWithIcons(4),
  link: {
    label: 'Learn More',
    href: '#'
  },
  stepsAlignment: 'right',
};