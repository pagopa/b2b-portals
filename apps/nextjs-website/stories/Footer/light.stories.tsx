import { Meta, StoryFn } from '@storybook/react';
import { StorybookFooter } from './component';
import type { LanguageID } from './component';

const meta: Meta = {
  title: 'Components/Footer/Light',
  component: StorybookFooter,
  argTypes: {
    companyHref: {
      name: 'Link azienda - href',
      control: 'text',
      description: 'URL del link aziendale',
      required: true,
    },
    companyAriaLabel: {
      name: 'Link azienda - ariaLabel',
      control: 'text',
      description: 'Etichetta per accessibilità',
      required: true,
    },
    activeLanguage: {
      name: 'Lingua attiva',
      control: { type: 'select' },
      options: ['it', 'en', 'fr', 'de', 'sl'],
      description: 'Lingua attualmente selezionata',
      defaultValue: 'it',
      required: true,
    },
    showFundedByNextGenerationEULogo: {
      name: 'Mostra logo EU',
      control: 'boolean',
      description: 'Mostra il logo NextGenerationEU nel footer',
      required: true,
    },
    aboutUsLabel: {
      name: 'Testo sezione Chi siamo',
      control: 'text',
      description: 'Testo del link nella sezione "Chi siamo"',
      required: true,
    },
    servicesTitle: {
      name: 'Titolo sezione Servizi',
      control: 'text',
      description: 'Titolo della sezione "Servizi"',
      required: true,
    },
    servicesLabel: {
      name: 'Testo link Servizi',
      control: 'text',
      description: 'Testo del link nella sezione "Servizi"',
      required: true,
    },
    resourcesTitle: {
      name: 'Titolo sezione Risorse',
      control: 'text',
      description: 'Titolo della sezione "Risorse"',
      required: true,
    },
    resourcesLabel: {
      name: 'Testo link Risorse',
      control: 'text',
      description: 'Testo del link nella sezione "Risorse"',
      required: true,
    },
    followUsTitle: {
      name: 'Titolo sezione Seguici su',
      control: 'text',
      description: 'Titolo della sezione "Seguici su"',
      required: true,
    },
    followUsLabel: {
      name: 'Testo link Seguici su',
      control: 'text',
      description: 'Testo del link nella sezione "Seguici su"',
      required: true,
    },
    legalInfo: {
      name: 'Informazioni legali',
      control: 'text',
      description: "Testo visualizzato come informazioni legali nel footer",
      required: true,
    },
  },
};

export default meta;

const Template: StoryFn<any> = (args) => <StorybookFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  companyHref: '#',
  companyAriaLabel: 'Company',
  activeLanguage: 'it' as LanguageID,
  showFundedByNextGenerationEULogo: true,
  aboutUsLabel: '',
  servicesTitle: '',
  servicesLabel: '',
  resourcesTitle: '',
  resourcesLabel: '',
  followUsTitle: '',
  followUsLabel: '',
  legalInfo: '',
};
