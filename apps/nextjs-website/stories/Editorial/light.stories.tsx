import { Meta, StoryFn } from '@storybook/react';
import { Editorial } from '@react-components/components';
import {
  EditorialTemplate,
  defaultPropsLight,
  generateCtaButtons,
} from './editorialCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof Editorial> = {
  title: 'Components/Editorial/Light',
  component: Editorial,
};
export default meta;

export const LightEditorialFullOneButtonNoPattern: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
LightEditorialFullOneButtonNoPattern.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
};

export const LightEditorialFullOneButtonNoPatternReversed: StoryFn<
  typeof Editorial
> = EditorialTemplate.bind({});
LightEditorialFullOneButtonNoPatternReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const LightEditorialFullOneButtonWithPattern: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
LightEditorialFullOneButtonWithPattern.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  pattern: 'dots',
};

export const LightEditorialFullOneButtonWithPatternReversed: StoryFn<
  typeof Editorial
> = EditorialTemplate.bind({});
LightEditorialFullOneButtonWithPatternReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
  pattern: 'dots',
};

export const LightEditorialFullTwoButtons: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
LightEditorialFullTwoButtons.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
};

export const LightEditorialFullTwoButtonsReversed: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
LightEditorialFullTwoButtonsReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const LightEditorialFullNoButtons: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
LightEditorialFullNoButtons.args = {
  ...defaultPropsLight,
  eyelet: 'Editorial Eyelet',
};

export const LightEditorialFullReversedNoButtons: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
LightEditorialFullReversedNoButtons.args = {
  ...defaultPropsLight,
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const LightEditorialNoEyelet: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
LightEditorialNoEyelet.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
};

export const LightEditorialNoEyeletReversed: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
LightEditorialNoEyeletReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  reversed: true,
};

export const LightEditorialFullStoreButtons: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
LightEditorialFullStoreButtons.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const LightEditorialFullStoreButtonsReversed: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
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

export const LightEditorialFullOneStoreButtons: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
LightEditorialFullOneStoreButtons.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefApple: 'https://apple.com',
  },
};

export const LightEditorialFullOneStoreButtonsReversed: StoryFn<
  typeof Editorial
> = EditorialTemplate.bind({});
LightEditorialFullOneStoreButtonsReversed.args = {
  ...defaultPropsLight,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
  },
  reversed: true,
};
