import { Meta, StoryFn } from '@storybook/react';
import { PreFooter } from '@react-components/components';
import { PreFooterTemplate, defaultPropsLight } from './prefooterCommons';
import { StoreButtonsProps } from '@react-components/types/Editorial/Editorial.types';

// Define the default export with metadata about your component
const meta: Meta<typeof PreFooter> = {
  title: 'Components/PreFooter/Light',
  component: PreFooter,
};
export default meta;

export const PreFooterFull: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
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

export const PreFooterNoStoreButtons: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
PreFooterNoStoreButtons.args = {
  ...defaultPropsLight,
  storeButtons: {} as StoreButtonsProps, 
};