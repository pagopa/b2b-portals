import { Meta, StoryFn } from '@storybook/react';
import { PreFooter } from '@react-components/components';
import { PreFooterTemplate, defaultPropsLight } from './prefooterCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof PreFooter> = {
  title: 'Components/PreFooter/Light',
  component: PreFooter,
};
export default meta;

export const PreFooterStoreButtons: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
PreFooterStoreButtons.args = {
  ...defaultPropsLight,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const PreFooterStandardButtons: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
PreFooterStandardButtons.args = {
  ...defaultPropsLight,
  ctaButtons: [
    {
      text: 'Learn More',
      href: '#',
      variant: 'contained',
    },
    {
      text: 'Get Started',
      href: '#',
      variant: 'contained',
    },
  ],
};

export const PreFooterOnlyTitle: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
PreFooterOnlyTitle.args = {
  ...defaultPropsLight,
  ctaButtons: [],
};

export const PreFooterCenterButtons: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
PreFooterCenterButtons.args = {
  ...defaultPropsLight,
  layout: 'center',
};
