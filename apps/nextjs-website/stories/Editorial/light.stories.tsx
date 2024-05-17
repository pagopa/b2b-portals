// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { Editorial } from '@react-components/components';
import { EditorialProps } from '@react-components/types/Editorial/Editorial.types';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

// Define the default export with metadata about your component
export default {
  title: 'Components/Editorial/Light',
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
  theme: 'light',
  title: 'Editorial Title',
  body: 'Editorial Body',
  width: 'standard',
  image: <img src='https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png' alt="placeholder" />,
};

export const LightEditorialFullOneButtonNoPattern = Template.bind({});
LightEditorialFullOneButtonNoPattern.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
};

export const LightEditorialFullOneButtonNoPatternReversed = Template.bind({});
LightEditorialFullOneButtonNoPatternReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const LightEditorialFullOneButtonWithPattern = Template.bind({});
LightEditorialFullOneButtonWithPattern.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  pattern: 'dots',
};

export const LightEditorialFullOneButtonWithPatternReversed = Template.bind({});
LightEditorialFullOneButtonWithPatternReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  reversed: true,
  pattern: 'dots',
};

export const LightEditorialFullTwoButtons = Template.bind({});
LightEditorialFullTwoButtons.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
};

export const LightEditorialFullTwoButtonsReversed = Template.bind({});
LightEditorialFullTwoButtonsReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(2),
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const LightEditorialFullNoButtons = Template.bind({});
LightEditorialFullNoButtons.args = {
  ...defaultProps,
  eyelet: 'Editorial Eyelet',
};

export const LightEditorialFullReversedNoButtons = Template.bind({});
LightEditorialFullReversedNoButtons.args = {
  ...defaultProps,
  eyelet: 'Editorial Eyelet',
  reversed: true,
};

export const LightEditorialNoEyelet = Template.bind({});
LightEditorialNoEyelet.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1)
};

export const LightEditorialNoEyeletReversed = Template.bind({});
LightEditorialNoEyeletReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  reversed: true,
};

export const LightEditorialFullStoreButtons = Template.bind({});
LightEditorialFullStoreButtons.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const LightEditorialFullStoreButtonsReversed = Template.bind({});
LightEditorialFullStoreButtonsReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
  reversed: true,
};

export const LightEditorialFullOneStoreButtons = Template.bind({});
LightEditorialFullOneStoreButtons.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefApple: 'https://apple.com'
  },
};

export const LightEditorialFullOneStoreButtonsReversed = Template.bind({});
LightEditorialFullOneStoreButtonsReversed.args = {
  ...defaultProps,
  ctaButtons: generateCtaButtons(1),
  eyelet: 'Editorial Eyelet',
  storeButtons: {
    hrefGoogle: 'https://play.google.com'
  },
  reversed: true,
};