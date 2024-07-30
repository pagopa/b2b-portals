import { StoryFn } from '@storybook/react';
import { Editorial } from '@react-components/components';
import { EditorialProps } from '@react-components/types/Editorial/Editorial.types';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

// Define a "Template" function that sets how args map to rendering
export const EditorialTemplate: StoryFn<EditorialProps> = (args) => <Editorial {...args} />;

// Function to generate CTA buttons
export const generateCtaButtons = (count: number): CtaButtonProps[] =>
  Array.from({ length: count }, (_, i) => ({
    text: `CTA Button ${i + 1}`,
    variant: 'contained',
  })
);

// Function to generate default props
const generateDefaultProps = (theme: 'light' | 'dark'): Partial<EditorialProps> => ({
  theme,
  title: 'Editorial Title',
  body: 'Editorial Body',
  width: 'standard',
  image: <img src='https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png' alt="placeholder" />,
  mobileImage: <img src='https://notifichedigitali.pagopa.it/static/images/pi-infoblock-1.png' alt="placeholder" />,
});

// Define the default props
export const defaultPropsDark = generateDefaultProps('dark');
export const defaultPropsLight = generateDefaultProps('light');