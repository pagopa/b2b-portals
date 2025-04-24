import { Meta, StoryFn } from '@storybook/react';
import { StorybookPreFooter, StorybookPreFooterProps } from './component';

const meta: Meta<typeof StorybookPreFooter> = {
  title: 'Components/PreFooter/Default',
  component: StorybookPreFooter,
  argTypes: {
    title: {
      name: 'Titolo',
      control: 'text',
      description: 'Testo principale del PreFooter',
    },
    theme: {
      name: 'Tema',
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Tema del componente',
    },
    layout: {
      name: 'Layout',
      control: { type: 'radio' },
      options: ['left', 'center'],
      description: 'Allineamento del contenuto',
    },
    ctaVariant: {
      name: 'CTA',
      control: {
        type: 'radio',
        labels: {
          none: 'Nessuno',
          store: 'Bottoni Store',
          cta: 'Bottoni Semplici',
        },
      },
      options: ['none', 'store', 'cta'],
      description: 'Mostra i bottoni nel PreFooter',
    },
    showBackground: {
      name: 'Mostra sfondo',
      control: 'boolean',
      description: 'Mostra o nasconde lo sfondo',
    },
    background: {
      name: 'Sfondo personalizzato',
      control: { type: 'file', accept: '.jpg,.jpeg,.png,.svg' },
      description: 'Carica un’immagine di sfondo personalizzata',
    },
    storeButtons: { table: { disable: true } },
    ctaButtons: { table: { disable: true } },
    excludeSlugs: { table: { disable: true } },
  },
};

export default meta;

const Template: StoryFn<StorybookPreFooterProps> = (args) => (
  <StorybookPreFooter {...args} />
);

export const Default: StoryFn<typeof StorybookPreFooter> = Template.bind({});
Default.args = {
  title: 'Scarica l’app IO',
  theme: 'light',
  layout: 'left',
  ctaVariant: 'store',
  showBackground: true,
};
