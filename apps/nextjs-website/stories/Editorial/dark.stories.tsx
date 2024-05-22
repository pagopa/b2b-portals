import { Meta } from '@storybook/react';
import { Editorial } from '@react-components/components';
import { EditorialProps } from '@react-components/types';
import { EditorialTemplate, defaultPropsDark, generateCtaButtons } from './editorialCommons';

// Define the default export with metadata about your component
export default {
  title: 'Components/Editorial/Dark',
  component: Editorial,
} as Meta<EditorialProps>;

export const DarkEditorialFullOneButtonNoPattern = EditorialTemplate.bind({});
DarkEditorialFullOneButtonNoPattern.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
};

export const DarkEditorialFullOneButtonNoPatternReversed = EditorialTemplate.bind({});
DarkEditorialFullOneButtonNoPatternReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const DarkEditorialFullOneButtonWithPattern = EditorialTemplate.bind({});
DarkEditorialFullOneButtonWithPattern.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  pattern: 'dots',
};

export const DarkEditorialFullOneButtonWithPatternReversed = EditorialTemplate.bind({});
DarkEditorialFullOneButtonWithPatternReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
  pattern: 'dots',
};

export const DarkEditorialFullTwoButtons = EditorialTemplate.bind({});
DarkEditorialFullTwoButtons.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
};

export const DarkEditorialFullTwoButtonsReversed = EditorialTemplate.bind({});
DarkEditorialFullTwoButtonsReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const DarkEditorialFullNoButtons = EditorialTemplate.bind({});
DarkEditorialFullNoButtons.args = {
  ...defaultPropsDark,
  eyelet: 'Editorial Eyelet',
};

export const DarkEditorialFullReversedNoButtons = EditorialTemplate.bind({});
DarkEditorialFullReversedNoButtons.args = {
  ...defaultPropsDark,
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const DarkEditorialNoEyelet = EditorialTemplate.bind({});
DarkEditorialNoEyelet.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1)
};

export const DarkEditorialNoEyeletReversed = EditorialTemplate.bind({});
DarkEditorialNoEyeletReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  reversed: true,
};

export const DarkEditorialFullStoreButtons = EditorialTemplate.bind({});
DarkEditorialFullStoreButtons.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const DarkEditorialFullStoreButtonsReversed = EditorialTemplate.bind({});
DarkEditorialFullStoreButtonsReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
  reversed: true,
};

export const DarkEditorialFullOneStoreButtons = EditorialTemplate.bind({});
DarkEditorialFullOneStoreButtons.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefApple: 'https://apple.com'
  },
};

export const DarkEditorialFullOneStoreButtonsReversed = EditorialTemplate.bind({});
DarkEditorialFullOneStoreButtonsReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com'
  },
  reversed: true,
};