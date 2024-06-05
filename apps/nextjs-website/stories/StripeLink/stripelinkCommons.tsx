import { StoryFn } from '@storybook/react';
import { StripeLink } from '@react-components/components';
import { StripeLinkProps } from '@react-components/types';

// Define a "Template" function that sets how args map to rendering
export const StripeLinkTemplate: StoryFn<StripeLinkProps> = (args) => <StripeLink {...args} />;

// Function to generate default props
const generateDefaultProps = (theme: 'dark' | 'light'): Partial<StripeLinkProps> => ({
  theme,
  subtitle: 'StripeLink Subtitle',
});

// Define the default props
export const defaultPropsDark = generateDefaultProps('dark');
export const defaultPropsLight = generateDefaultProps('light');