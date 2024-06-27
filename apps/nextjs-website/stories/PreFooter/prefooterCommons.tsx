import { StoryFn } from '@storybook/react';
import { PreFooter } from '@react-components/components';
import { PreFooterProps, StoreButtonsProps } from '@react-components/types/PreFooter/PreFooter';

// Define a "Template" function that sets how args map to rendering
export const PreFooterTemplate: StoryFn<PreFooterProps> = (args) => <PreFooter {...args} />;

// Function to generate default props with a given theme
const generateDefaultProps = (theme: 'light' | 'dark'): Partial<PreFooterProps> => ({
  title: 'This is the Title',
  theme,
  storeButtons: {} as StoreButtonsProps, // Ensure storeButtons is defined but empty
});

// Define the default props with light theme
export const defaultPropsLight = generateDefaultProps('light');

// Define the default props with dark theme
export const defaultPropsDark = generateDefaultProps('dark');

(defaultPropsDark.storeButtons as StoreButtonsProps) = {
  hrefGoogle: 'https://play.google.com',
  hrefApple: 'https://apple.com',
};