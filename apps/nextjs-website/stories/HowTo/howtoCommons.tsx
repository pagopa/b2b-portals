import { StoryFn } from '@storybook/react';
import { HowTo } from '@react-components/components';
import { HowToProps } from '@react-components/types';
import { HowToStepProps } from '@react-components/types/HowTo/HowTo.types';

// Define a "Template" function that sets how args map to rendering
export const HowToTemplate: StoryFn<HowToProps> = (args) => <HowTo {...args} />;

// Function to generate steps
const generateSteps = (count: number, theme: 'dark' | 'light', withIcons: boolean): HowToStepProps[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Il destinatario la riceve`,
    description: `Il destinatario accede alla piattaforma. Lì, può scaricare i documenti notificati e pagare contestualmente quanto dovuto, grazie all'integrazione con pagoPA. Se la riceve tramite IO, può fare tutto direttamente in app.`,
    ...(withIcons ? { stepIcon: { icon: 'MarkEmailReadOutlined' } } : {}),
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