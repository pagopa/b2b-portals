import { FormProps } from '@react-components/types/Form/Form.types';
import { StoryFn } from '@storybook/react';
import Form from '@react-components/components/Form/Form';

const generateFormProps = (theme: 'light' | 'dark'): FormProps => ({
  title: 'Sei un ente e vuoi altre informazioni sull’adesione?',
  subtitle: 'Per altri dettagli su Firma con IO, inserisci i dati richiesti. I nostri account ti contatteranno al più presto per rispondere alle tue domande.',
  privacyText: 'Inviando la richiesta i tuoi dati saranno trattati come descritto nell\'',
  privacyLink: '#',
  privacyLinkText: 'informativa sul trattamento dei dati personali',
  theme,
  backgroundImage: '#',
  ctaButtons: [{
    text: 'Invia Richiesta',
  }],
});

export const FormTemplate: StoryFn<FormProps> = (args) => <Form {...args} />;

export const defaultPropsDark = generateFormProps('dark');
export const defaultPropsLight = generateFormProps('light');