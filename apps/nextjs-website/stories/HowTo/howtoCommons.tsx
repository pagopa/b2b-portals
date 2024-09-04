import { StoryFn } from '@storybook/react';
import { HowTo } from '@react-components/components';
import { HowToProps } from '@react-components/types';
import { HowToStepProps } from '@react-components/types/HowTo/HowTo.types';

// Define a "Template" function that sets how args map to rendering
export const HowToTemplate: StoryFn<HowToProps> = (args) => <HowTo {...args} />;

// Function to generate steps
const generateSteps = (count: number, theme: 'dark' | 'light', withIcons: boolean): HowToStepProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Step ${i + 1}`,
    description: `This is step ${i + 1}`,
    ...(withIcons && { iconURL: theme === 'dark' ? 'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg' : 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg' }),
    index: i,
    theme,
    isLastStep: i === count - 1,
  })
);

// Function to generate default props
const generateDefaultProps = (theme: 'dark' | 'light', withIcons: boolean): Partial<HowToProps> => ({
  theme,
  title: 'HowTo Title',
  steps: generateSteps(4, theme, withIcons),
});

// Define the default props
export const defaultPropsDarkWithIcon = generateDefaultProps('dark', true);
export const defaultPropsDarkWithoutIcon = generateDefaultProps('dark', false);
export const defaultPropsLightWithIcon = generateDefaultProps('light', true);
export const defaultPropsLightWithoutIcon = generateDefaultProps('light', false);