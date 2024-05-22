import { Meta } from '@storybook/react';
import { Editorial } from '@react-components/components';
import { EditorialProps } from '@react-components/types';
import { EditorialTemplate, defaultPropsLight, generateCtaButtons } from './editorialCommons';

// Define the default export with metadata about your component
export default {
  title: 'Components/Editorial/Light',
  component: Editorial,
} as Meta<EditorialProps>;

export const LightEditorialFullOneButtonNoPattern = EditorialTemplate.bind({});
LightEditorialFullOneButtonNoPattern.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
};

export const LightEditorialFullOneButtonNoPatternReversed = EditorialTemplate.bind({});
LightEditorialFullOneButtonNoPatternReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const LightEditorialFullOneButtonWithPattern = EditorialTemplate.bind({});
LightEditorialFullOneButtonWithPattern.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  pattern: 'dots',
};

export const LightEditorialFullOneButtonWithPatternReversed = EditorialTemplate.bind({});
LightEditorialFullOneButtonWithPatternReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
  pattern: 'dots',
};

export const LightEditorialFullTwoButtons = EditorialTemplate.bind({});
LightEditorialFullTwoButtons.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
};

export const LightEditorialFullTwoButtonsReversed = EditorialTemplate.bind({});
LightEditorialFullTwoButtonsReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const LightEditorialFullNoButtons = EditorialTemplate.bind({});
LightEditorialFullNoButtons.args = {
  ...defaultPropsLight,
  eyelet: 'Editorial Eyelet',
};

export const LightEditorialFullReversedNoButtons = EditorialTemplate.bind({});
LightEditorialFullReversedNoButtons.args = {
  ...defaultPropsLight,
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const LightEditorialNoEyelet = EditorialTemplate.bind({});
LightEditorialNoEyelet.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1)
};

export const LightEditorialNoEyeletReversed = EditorialTemplate.bind({});
LightEditorialNoEyeletReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  reversed: true,
};

export const LightEditorialFullStoreButtons = EditorialTemplate.bind({});
LightEditorialFullStoreButtons.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const LightEditorialFullStoreButtonsReversed = EditorialTemplate.bind({});
LightEditorialFullStoreButtonsReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
  reversed: true,
};

export const LightEditorialFullOneStoreButtons = EditorialTemplate.bind({});
LightEditorialFullOneStoreButtons.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefApple: 'https://apple.com'
  },
};

export const LightEditorialFullOneStoreButtonsReversed = EditorialTemplate.bind({});
LightEditorialFullOneStoreButtonsReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com'
  },
  reversed: true,
};