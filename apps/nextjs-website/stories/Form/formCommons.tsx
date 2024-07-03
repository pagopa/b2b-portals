import { FormProps } from '@react-components/types/Form/Form.types';
import { StoryFn } from '@storybook/react';
import Form from '@react-components/components/Form/Form';

const generateFormProps = (theme: 'light' | 'dark'): FormProps => ({
  title: 'Resta aggiornato, iscriviti alla newsletter!',
  subtitle: '',
  privacyLinkRecaptchaPolicy: 'https://policies.google.com/privacy',
  privacyLinkTextRecaptchaPolicy: 'Privacy Policy',
  privacyLinkRecaptchaTerms: 'https://policies.google.com/terms',
  privacyLinkTextRecaptchaTerms: 'Termini di servizio',
  theme,
  backgroundImage: '#',
  ctaButtons: [
    {
      text: 'Iscriviti',
    },
  ],
  showFirstName: false,
  showLastName: false,
  showEmail: true,
  showOrganization: false,
  formCategories: [
    { label: 'Cittadino' },
    { label: 'Dipendente/ Consulente di un ente pubblico' },
    { label: 'Partner tecnologico di un ente pubblico', additionalLabel: '(presso  società in-house, software house, ecc.)' },
    { label: 'Sviluppatore' },
    { label: 'Giornalista' },
  ],
  checkboxTitle: 'Vorrei ricevere news sul progetto IO in qualità di*:',
  showCheckboxInfo: true,
  showPrivacyDisclaimer: true,
  privacyDisclaimerText:
    'Inserendo il tuo indirizzo email stai accettando la nostra informativa sul trattamento dei dati personali per la newsletter.',
});

export const FormTemplate: StoryFn<FormProps> = (args) => (
  <Form {...args} onSubmit={() => alert('Form submitted')} />
);

export const defaultPropsDark = {
  ...generateFormProps('dark'),
  showCitizen: true,
  showPublicEmployee: true,
  showTechPartner: true,
  showDeveloper: true,
  showJournalist: true,
};

export const defaultPropsLight = {
  ...generateFormProps('light'),
  showCitizen: true,
  showPublicEmployee: true,
  showTechPartner: true,
  showDeveloper: true,
  showJournalist: true,
};
