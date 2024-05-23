import { Meta, StoryFn } from '@storybook/react';
import { Feature } from '@react-components/components';
import { FeatureTemplate, defaultPropsDarkWithLinks, defaultPropsDarkWithoutLinks } from './featureCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof Feature> = {
  title: 'Components/Feature/Dark',
  component: Feature,
};
export default meta;

export const DarkFeatureFull: StoryFn<typeof Feature> = FeatureTemplate.bind({});
DarkFeatureFull.args = {
  ...defaultPropsDarkWithLinks
};

export const DarkFeatureNoLinks: StoryFn<typeof Feature> = FeatureTemplate.bind({});
DarkFeatureNoLinks.args = {
  ...defaultPropsDarkWithoutLinks
};

export const DarkFeatureFullWithCarouselMobileOnly: StoryFn<typeof Feature> = FeatureTemplate.bind({});
DarkFeatureFullWithCarouselMobileOnly.args = {
  ...defaultPropsDarkWithLinks,
  showCarouselMobile: true,
};

export const DarkFeatureFullWithCustomBackground: StoryFn<typeof Feature> = FeatureTemplate.bind({});
DarkFeatureFullWithCustomBackground.args = {
  ...defaultPropsDarkWithLinks,
  background: '#000',
};