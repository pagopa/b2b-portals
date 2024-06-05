import { StoryFn } from '@storybook/react';
import { Feature } from '@react-components/components';
import { FeatureProps } from '@react-components/types';
import { FeatureItem } from '@react-components/types/Feature/Feature.types';

// Define a "Template" function that sets how args map to rendering
export const FeatureTemplate: StoryFn<FeatureProps> = (args) => <Feature {...args} />;

// Function to generate items
const generateItems = (count: number, withLinks: boolean): FeatureItem[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Feature ${i + 1}`,
    subtitle: `This is feature ${i + 1}`,
    stackIcon: {
      icon: 'AccessAlarm',
    },
    ...(withLinks ? { link: { text: `Link ${i + 1}`, url: `https://example.com/link${i + 1}` } } : {}),
  }));

// Function to generate default props
const generateDefaultProps = (theme: 'dark' | 'light', withLinks: boolean): Partial<FeatureProps> => ({
  theme,
  title: 'Feature Title',
  items: generateItems(3, withLinks),
});

// Define the default props
export const defaultPropsDarkWithLinks = generateDefaultProps('dark', true);
export const defaultPropsDarkWithoutLinks = generateDefaultProps('dark', false);
export const defaultPropsLightWithLinks = generateDefaultProps('light', true);
export const defaultPropsLightWithoutLinks = generateDefaultProps('light', false);