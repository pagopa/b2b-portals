import { Meta } from '@storybook/react';
import { Feature } from '@react-components/components';
import { FeatureProps } from '@react-components/types';
import { FeatureTemplate, defaultPropsLightWithLinks, defaultPropsLightWithoutLinks } from './featureCommons';

// Define the default export with metadata about your component
export default {
  title: 'Components/Feature/Light',
  component: Feature,
} as Meta<FeatureProps>;

export const LightFeatureFull = FeatureTemplate.bind({});
LightFeatureFull.args = {
  ...defaultPropsLightWithLinks
};

export const LightFeatureNoLinks = FeatureTemplate.bind({});
LightFeatureNoLinks.args = {
  ...defaultPropsLightWithoutLinks
};

export const LightFeatureFullWithCarouselMobileOnly = FeatureTemplate.bind({});
LightFeatureFullWithCarouselMobileOnly.args = {
  ...defaultPropsLightWithLinks,
  showCarouselMobile: true,
};

export const LightFeatureFullWithCustomBackground = FeatureTemplate.bind({});
LightFeatureFullWithCustomBackground.args = {
  ...defaultPropsLightWithLinks,
  background: '#000',
};