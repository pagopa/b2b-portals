import { Meta, StoryFn } from '@storybook/react';
import { StorybookMegaHeader, StorybookMegaHeaderProps } from './component';

const meta: Meta<typeof StorybookMegaHeader> = {
  title: 'Components/MegaHeader/Light',
  component: StorybookMegaHeader,
  argTypes: {
    customLogo: {
      name: 'Logo Personalizzato',
      description:
        'Carica un logo personalizzato (ricaricare la pagina per rimuoverlo)',
      control: { type: 'file', accept: '.jpg,.jpeg,.png,.svg' },
    },
    showCtaButton: {
      name: 'Mostra CTA',
      description:
        'Mostra il pulsante di call to action (CTA) a destra nell’header (se attivo ha priorità sul drawer)',
      control: 'boolean',
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

export const MegaHeaderFullWithLogo: StoryFn<typeof StorybookMegaHeader> = Template.bind({});
MegaHeaderFullWithLogo.args = {
  customLogo: null,
  showCtaButton: true,
  drawer: 'full',
};
