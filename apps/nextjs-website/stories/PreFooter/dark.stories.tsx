import { Meta, StoryFn } from '@storybook/react';
import { PreFooter } from '@react-components/components';
import { PreFooterTemplate, defaultPropsDark } from './prefooterCommons';
import { StoreButtonsProps } from '@react-components/types/Editorial/Editorial.types';

// Define the default export with metadata about your component
const meta: Meta<typeof PreFooter> = {
  title: 'Components/PreFooter/Dark',
  component: PreFooter,
};
export default meta;

export const PreFooterFull: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
PreFooterFull.args = {
  ...defaultPropsDark,
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
};

export const PreFooterOnlyTitle: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
PreFooterOnlyTitle.args = {
  ...defaultPropsDark,
};

export const PreFooterNoStoreButtons: StoryFn<typeof PreFooter> =
  PreFooterTemplate.bind({});
PreFooterNoStoreButtons.args = {
  ...defaultPropsDark,
  storeButtons: {} as StoreButtonsProps, 
};