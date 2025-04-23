import { Meta, StoryFn } from '@storybook/react';
import { StorybookPreHeader, StorybookPreHeaderProps } from './component';

const meta: Meta<typeof StorybookPreHeader> = {
  title: 'Components/PreHeader/Light',
  component: StorybookPreHeader,
  argTypes: {
    leftText: {
      name: 'Testo CTA sinistra',
      description: 'Testo mostrato nel pulsante a sinistra del preheader',
      control: 'text',
    },
    rightText: {
      name: 'Testo CTA destra',
      description: 'Testo mostrato nel pulsante a destra del preheader',
      control: 'text',
    },
    showLeftIcon: {
      name: 'Mostra icona sinistra',
      description: 'Aggiunge un’icona alla CTA di sinistra',
      control: 'boolean',
    },
    showRightIcon: {
      name: 'Mostra icona destra',
      description: 'Aggiunge un’icona alla CTA di destra',
      control: 'boolean',
    },
  },
};

export default meta;

const Template: StoryFn<StorybookPreHeaderProps> = (args) => (
  <StorybookPreHeader {...args} />
);

export const PreHeaderDefault = Template.bind({});
PreHeaderDefault.args = {
  leftText: 'PagoPA S.p.A.',
  rightText: 'Assistenza',
  showLeftIcon: false,
  showRightIcon: true,
};
