// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { Editorial } from '@react-components/components';
import { EditorialProps } from '@react-components/types/Editorial/Editorial.types';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Editorial/Dark',
  component: Editorial,
} as Meta;

// Define a "Template" function that sets how args map to rendering
const Template: StoryFn<EditorialProps> = (args) => <Editorial {...args} />;

// Function to generate CTA buttons
const generateCtaButtons = (count: number): CtaButtonProps[] =>
  Array.from({ length: count }, (_, i) => ({
    text: `CTA Button ${i + 1}`,
    variant: 'contained',
  })
);

// Define the default props
const defaultProps: Partial<EditorialProps> = {
  theme: 'dark',
  title: 'Editorial Title',
  body: 'Editorial Body',
  width: 'standard',
  image: <img src='https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png' alt="placeholder" />,
};

export const DarkEditorialFullOneButtonNoPattern = Template.bind({});
DarkEditorialFullOneButtonNoPattern.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
};

export const DarkEditorialFullOneButtonNoPatternReversed = Template.bind({});
DarkEditorialFullOneButtonNoPatternReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const DarkEditorialFullOneButtonWithPattern = Template.bind({});
DarkEditorialFullOneButtonWithPattern.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  pattern: 'dots',
};

export const DarkEditorialFullOneButtonWithPatternReversed = Template.bind({});
DarkEditorialFullOneButtonWithPatternReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
  pattern: 'dots',
};

export const DarkEditorialFullTwoButtons = Template.bind({});
DarkEditorialFullTwoButtons.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
};

export const DarkEditorialFullTwoButtonsReversed = Template.bind({});
DarkEditorialFullTwoButtonsReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const DarkEditorialFullNoButtons = Template.bind({});
DarkEditorialFullNoButtons.args = {
  ...defaultProps,
  eyelet: 'Editorial Eyelet',
};

export const DarkEditorialFullReversedNoButtons = Template.bind({});
DarkEditorialFullReversedNoButtons.args = {
  ...defaultProps,
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const DarkEditorialNoEyelet = Template.bind({});
DarkEditorialNoEyelet.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1)
};

export const DarkEditorialNoEyeletReversed = Template.bind({});
DarkEditorialNoEyeletReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  reversed: true,
};

export const DarkEditorialFullStoreButtons = Template.bind({});
DarkEditorialFullStoreButtons.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const DarkEditorialFullStoreButtonsReversed = Template.bind({});
DarkEditorialFullStoreButtonsReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
  reversed: true,
};

export const DarkEditorialFullOneStoreButtons = Template.bind({});
DarkEditorialFullOneStoreButtons.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefApple: 'https://apple.com'
  },
};

export const DarkEditorialFullOneStoreButtonsReversed = Template.bind({});
DarkEditorialFullOneStoreButtonsReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com'
  },
  reversed: true,
};