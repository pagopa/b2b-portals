import { Meta, StoryFn } from '@storybook/react';
import { PreFooter } from '@react-components/components';
import { PreFooterTemplate, defaultPropsLight } from './prefooterCommons';

// Define the default export with metadata about your component
const meta: Meta<typeof PreFooter> = {
  title: 'Components/PreFooter/Light',
  component: PreFooter,
};
export default meta;

export const PreFooterFull: StoryFn<typeof PreFooter> = PreFooterTemplate.bind(
  {}
);
PreFooterFull.args = {
  ...defaultPropsLight,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const PreFooterOnlyTitle: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
PreFooterOnlyTitle.args = {
  ...defaultPropsLight,
};

export const PreFooterStandardButtons: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
PreFooterStandardButtons.args = {
  ...defaultPropsLight,
  useStoreButtons: false,
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
