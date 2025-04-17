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
    background: {
      name: 'Sfondo personalizzato',
      control: 'text',
      description:
        'URL immagine. Se vuoto, lo sfondo non sarà mostrato. Default: sfondo IO',
    },
    showStoreButtons: {
      name: 'Mostra Store buttons',
      control: 'boolean',
      description:
        'Mostra gli store buttons. Attiva solo uno tra questo e i CTA per evitare errori',
      table: { defaultValue: { summary: '-' } },
    },
    showCtaButtons: {
      name: 'Mostra CTA buttons',
      control: 'boolean',
      description:
        'Mostra i pulsanti CTA. Attiva solo uno tra questo e gli store buttons per evitare errori',
      table: { defaultValue: { summary: '-' } },
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

export const Default = Template.bind({});
Default.args = {
  title: 'Scarica l’app IO',
  theme: 'light',
  layout: 'left',
  background: 'https://assets.innovazione.gov.it/1610704590-io.png',
  showStoreButtons: true,
  showCtaButtons: false,
};
