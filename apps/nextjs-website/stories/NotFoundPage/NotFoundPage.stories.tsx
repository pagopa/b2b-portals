import { Meta, StoryFn } from '@storybook/react';
import { StorybookNotFoundPage, StorybookNotFoundPageProps } from './component';

const meta: Meta<typeof StorybookNotFoundPage> = {
  title: 'Components/NotFoundPage/Default',
  component: StorybookNotFoundPage,
  tags: ['autodocs'],
  args: {
    defaultLocale: 'it',
  },
  argTypes: {
    defaultLocale: {
      name: 'Lingua',
      control: {
        type: 'select',
        labels: {
          it: 'Italiano',
          en: 'English',
          fr: 'Français',
          de: 'Deutsch',
          sl: 'Slovenščina',
        },
      },
      options: ['it', 'en', 'fr', 'de', 'sl'],
    }
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

const Template: StoryFn<StorybookNotFoundPageProps> = (args) => (
  <StorybookNotFoundPage {...args} />
);

export const Default: StoryFn<typeof StorybookNotFoundPage> = Template.bind({});
