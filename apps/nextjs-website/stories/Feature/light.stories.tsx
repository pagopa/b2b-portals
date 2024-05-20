// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { Feature } from '@react-components/components';
import { FeatureProps } from '@react-components/types';
import { FeatureItem } from '@react-components/types/Feature/Feature.types';


// Define the default export with metadata about your component
export default {
  title: 'Components/Feature/Light',
  component: Feature,
} as Meta;

// Function to generate items
const generateItemsWithLinks = (count: number): FeatureItem[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Feature ${i + 1}`,
    subtitle: `This is feature ${i + 1}`,
    stackIcon: {
      icon: 'AccessAlarm',
    },
    link: {
      text: `Link ${i + 1}`,
      url: `https://example.com/link${i + 1}`,
    },
  })
);

// Function to generate items
const generateItemsWithoutLinks = (count: number): FeatureItem[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `Feature ${i + 1}`,
    subtitle: `This is feature ${i + 1}`,
    stackIcon: {
      icon: 'AccessAlarm',
    }
  })
);

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<FeatureProps> = (args) => <Feature {...args} />;

// Define the default props
const defaultProps: Partial<FeatureProps> = {
  theme: 'light',
  title: 'Feature Title',
};

export const LightFeatureFull = Template.bind({});
LightFeatureFull.args = {
  ...defaultProps,
  items: generateItemsWithLinks(3),
};

export const LightFeatureNoLinks = Template.bind({});
LightFeatureNoLinks.args = {
  ...defaultProps,
  items: generateItemsWithoutLinks(3),
};

export const LightFeatureFullWithCarouselMobileOnly = Template.bind({});
LightFeatureFullWithCarouselMobileOnly.args = {
  ...defaultProps,
  items: generateItemsWithLinks(3),
  showCarouselMobile: true,
};

export const LightFeatureFullWithCustomBackground = Template.bind({});
LightFeatureFullWithCustomBackground.args = {
  ...defaultProps,
  items: generateItemsWithLinks(3),
  background: '#000',
};