import { Meta } from '@storybook/react';
import { Feature } from '@react-components/components';
import { FeatureTemplate, defaultPropsDarkWithLinks, defaultPropsDarkWithoutLinks } from './featureCommons';

// Define the default export with metadata about your component
export default {
  title: 'Components/Feature/Dark',
  component: Feature,
} as Meta;

export const DarkFeatureFull = FeatureTemplate.bind({});
DarkFeatureFull.args = {
  ...defaultPropsDarkWithLinks
};

export const DarkFeatureNoLinks = FeatureTemplate.bind({});
DarkFeatureNoLinks.args = {
  ...defaultPropsDarkWithoutLinks
};

export const DarkFeatureFullWithCarouselMobileOnly = FeatureTemplate.bind({});
DarkFeatureFullWithCarouselMobileOnly.args = {
  ...defaultPropsDarkWithLinks,
  showCarouselMobile: true,
};

export const DarkFeatureFullWithCustomBackground = FeatureTemplate.bind({});
DarkFeatureFullWithCustomBackground.args = {
  ...defaultPropsDarkWithLinks,
  background: '#000',
};