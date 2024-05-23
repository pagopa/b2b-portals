import { Meta, StoryFn } from '@storybook/react';
import { Editorial } from '@react-components/components';
import {
  EditorialTemplate,
  defaultPropsDark,
  generateCtaButtons,
} from './editorialCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof Editorial> = {
  title: 'Components/Editorial/Dark',
  component: Editorial,
};
export default meta;

export const DarkEditorialFullOneButtonNoPattern: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
DarkEditorialFullOneButtonNoPattern.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
};

export const DarkEditorialFullOneButtonNoPatternReversed: StoryFn<
  typeof Editorial
> = EditorialTemplate.bind({});
DarkEditorialFullOneButtonNoPatternReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const DarkEditorialFullOneButtonWithPattern: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
DarkEditorialFullOneButtonWithPattern.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  pattern: 'dots',
};

export const DarkEditorialFullOneButtonWithPatternReversed: StoryFn<
  typeof Editorial
> = EditorialTemplate.bind({});
DarkEditorialFullOneButtonWithPatternReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
  pattern: 'dots',
};

export const DarkEditorialFullTwoButtons: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
DarkEditorialFullTwoButtons.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
};

export const DarkEditorialFullTwoButtonsReversed: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
DarkEditorialFullTwoButtonsReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const DarkEditorialFullNoButtons: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
DarkEditorialFullNoButtons.args = {
  ...defaultPropsDark,
  eyelet: 'Editorial Eyelet',
};

export const DarkEditorialFullReversedNoButtons: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
DarkEditorialFullReversedNoButtons.args = {
  ...defaultPropsDark,
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const DarkEditorialNoEyelet: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
DarkEditorialNoEyelet.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
};

export const DarkEditorialNoEyeletReversed: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
DarkEditorialNoEyeletReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  reversed: true,
};

export const DarkEditorialFullStoreButtons: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
DarkEditorialFullStoreButtons.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const DarkEditorialFullStoreButtonsReversed: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
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

export const DarkEditorialFullOneStoreButtons: StoryFn<typeof Editorial> =
  EditorialTemplate.bind({});
DarkEditorialFullOneStoreButtons.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefApple: 'https://apple.com',
  },
};

export const DarkEditorialFullOneStoreButtonsReversed: StoryFn<
  typeof Editorial
> = EditorialTemplate.bind({});
DarkEditorialFullOneStoreButtonsReversed.args = {
  ...defaultPropsDark,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
  },
  reversed: true,
};
