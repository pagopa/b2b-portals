import { Meta, StoryFn } from '@storybook/react';
import { Feature } from '@react-components/components';
import {
  FeatureTemplate,
  defaultPropsLightWithLinks,
  defaultPropsLightWithoutLinks,
} from './featureCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof Feature> = {
  title: 'Components/Feature/Light',
  component: Feature,
};
export default meta;

export const LightFeatureFull: StoryFn<typeof Feature> = FeatureTemplate.bind(
  {},
);
LightFeatureFull.args = {
  ...defaultPropsLightWithLinks,
};

export const LightFeatureNoLinks: StoryFn<typeof Feature> =
  FeatureTemplate.bind({});
LightFeatureNoLinks.args = {
  ...defaultPropsLightWithoutLinks,
};

export const LightFeatureFullWithCarouselMobileOnly: StoryFn<typeof Feature> =
  FeatureTemplate.bind({});
LightFeatureFullWithCarouselMobileOnly.args = {
  ...defaultPropsLightWithLinks,
  showCarouselMobile: true,
};

export const LightFeatureFullWithCustomBackground: StoryFn<typeof Feature> =
  FeatureTemplate.bind({});
LightFeatureFullWithCustomBackground.args = {
  ...defaultPropsLightWithLinks,
  background: '#000',
};
