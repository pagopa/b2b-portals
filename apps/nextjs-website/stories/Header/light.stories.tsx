import { StoryFn, Meta } from '@storybook/react';
import { StorybookHeader, StorybookHeaderProps } from './component';

const meta: Meta<typeof StorybookHeader> = {
  title: 'Components/Header/Light',
  component: StorybookHeader,
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
    productName: {
      name: 'Nome prodotto',
      control: 'text',
      description: 'Mostrato solo in assenza del logo',
    },
    beta: {
      name: 'Beta',
      description: 'Mostra etichetta "beta"',
      control: 'boolean',
    },
    supportLink: {
      name: 'Link Assistenza',
      description: 'Mostra link per assistenza',
      control: 'boolean',
    },
    menuLink_NoSublinks: {
      name: 'Menu - Link senza sottolink',
      description: 'Mostra esempio di link senza sottolink',
      control: 'boolean',
    },
    menuLink_Sublinks: {
      name: 'Menu - Link con sottolink',
      description: 'Mostra esempio di link con sottolinks',
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

const HeaderTemplate: StoryFn<StorybookHeaderProps> = (args) => (
  <StorybookHeader {...args} />
);

export const HeaderFullWithLogo: StoryFn<typeof StorybookHeader> =
  HeaderTemplate.bind({});
HeaderFullWithLogo.args = {
  logo: true,
  customLogo: null,
  productName: 'Nome Prodotto',
  beta: true,
  supportLink: true,
  menuLink_NoSublinks: true,
  menuLink_Sublinks: true,
  drawer: 'full',
};
