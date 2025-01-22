import { StoryFn } from '@storybook/react';
import { EditorialSwitch } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types/Editorial-Switch/Editorial-Switch.types';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

// Define a 'Template' function that sets how args map to rendering
export const EditorialSwitchTemplate: StoryFn<EditorialSwitchProps> = (
  args,
) => <EditorialSwitch {...args} />;

// Function to generate CTA buttons
export const generateCtaButtons = (count: number): CtaButtonProps[] =>
  Array.from({ length: count }, (_, i) => ({
    text: `CTA Button ${i + 1}`,
    variant: 'contained',
  }));

// Function to generate default props
const generateDefaultProps = (
  theme: 'light' | 'dark',
): Partial<EditorialSwitchProps> => ({
  theme,
  title: 'Top Title',
  subtitle: (
    <p>
      Top Subtitle with <a href='/'>link</a>
    </p>
  ),
  themeVariant: 'SEND',
});

// Define the default props
export const defaultPropsDark = generateDefaultProps('dark');
export const defaultPropsLight = generateDefaultProps('light');
