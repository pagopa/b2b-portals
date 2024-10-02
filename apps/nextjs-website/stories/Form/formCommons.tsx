import { FormProps } from '@react-components/types/Form/Form.types';
import { StoryFn } from '@storybook/react';
import Form from '@react-components/components/Form/Form';

const generateFormProps = (theme: 'light' | 'dark'): FormProps => ({
  title: 'Resta aggiornato, iscriviti alla newsletter!',
  theme,
  sectionID: null,
  showName: true,
  showSurname: true,
  showOrganization: true,
  categories: [
    { label: 'Cittadino', categoryID: '1' },
    { label: 'Dipendente/ Consulente di un ente pubblico', categoryID: '2' },
    {
      label: 'Partner tecnologico di un ente pubblico',
      categoryID: '3',
      additionalInfo: '(presso  società in-house, software house, ecc.)',
    },
    { label: 'Sviluppatore', categoryID: '4' },
    { label: 'Giornalista', categoryID: '5' },
  ],
  categoriesTitle: 'Vorrei ricevere news sul progetto IO in qualità di*:',
  defaultCategoryID: '61',
  clientID: 'io',
  listID: 'listID',
  recaptchaSiteKey: 'sitekey',
  notes: (
    <p>
      Form protetto tramite reCAPTCHA e Google{' '}
      <a href='https://policies.google.com/privacy'>Privacy Policy</a> e{' '}
      <a href='https://policies.google.com/terms'>Termini di servizio</a>{' '}
      applicati.
    </p>
  ),
});

export const FormTemplate: StoryFn<FormProps> = (args) => <Form {...args} />;

export const defaultPropsDark = {
  ...generateFormProps('dark'),
};

export const defaultPropsLight = {
  ...generateFormProps('light'),
};
