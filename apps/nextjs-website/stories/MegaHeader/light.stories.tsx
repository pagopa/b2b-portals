import { Meta, StoryFn } from '@storybook/react';
import { StorybookMegaHeader, StorybookMegaHeaderProps } from './component';

const meta: Meta<typeof StorybookMegaHeader> = {
  title: 'Components/MegaHeader/Light',
  component: StorybookMegaHeader,
  argTypes: {
    logo: {
      name: 'Logo',
      description: 'Mostra logo di esempio (o logo personalizzato se inserito)',
      control: 'boolean',
    },
    customLogo: {
      name: 'Logo Personalizzato',
      description:
        'Carica un logo personalizzato (ricaricare la pagina per rimuoverlo)',
      control: { type: 'file', accept: '.jpg,.jpeg,.png,.svg' },
    },
    showCtaButton: {
      name: 'Mostra CTA',
      description:
        'Mostra il pulsante di call to action (CTA) a destra nell’header',
      control: 'boolean',
    },
    ctaText: {
      name: 'Testo CTA',
      description: 'Testo mostrato all’interno del pulsante CTA',
      control: 'text',
    },
    drawer: {
      name: 'Drawer',
      description: 'Mostra esempio di drawer',
      control: {
        type: 'radio',
        labels: {
          full: 'Completo',
          min: 'Solo campi obbligatori',
          none: 'Nessuno',
        },
      },
      options: ['full', 'min', 'none'],
    },
  },
};

export default meta;

const Template: StoryFn<StorybookMegaHeaderProps> = (args) => (
  <StorybookMegaHeader {...args} />
);

export const MegaHeaderFullWithLogo = Template.bind({});
MegaHeaderFullWithLogo.args = {
  logo: true,
  customLogo: null,
  showCtaButton: true,
  ctaText: 'Assistenza',
  drawer: 'full',
};
