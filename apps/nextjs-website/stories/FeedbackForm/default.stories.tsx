import { FeedbackForm } from '@react-components/components';
import { FeedbackFormProps } from '@react-components/types';
import { Meta, StoryFn } from '@storybook/react';

// Define the default export with metadata about your component
const meta: Meta<typeof FeedbackForm> = {
  title: 'Components/FeedbackForm/Default',
  component: FeedbackForm,
};
export default meta;

// Define a 'Template' function that sets how args map to rendering
const FeedbackFormTemplate: StoryFn<FeedbackFormProps> = (args) => (
  <FeedbackForm {...args} />
);

export const FeedbackFormSection: StoryFn<typeof FeedbackForm> =
  FeedbackFormTemplate.bind({});
FeedbackFormSection.args = {
  sectionID: 'sectionID',
  locale: 'it',
  token: 'token',
  strapiApiBaseUrl: 'strapi_url',
  labels: {
    title: 'Ciao, questa pagina è stata utile?',
    yes: 'Sì',
    no: 'No',
    send: 'Invia',
    sendDetails: 'Invia dettagli',
    sending: 'Invio in corso...',
    feedbackSent: 'Feedback inviato. Grazie.',
    thanksForYourOpinion: 'Grazie per la tua opinione!',
    helpUs: 'Aiutaci a migliorare dandoci qualche dettaglio in più.',
    whyNot: 'Perché la pagina non è stata utile?',
    questionDidNotFoundInfo: "Non ho trovato l'informazione che cercavo",
    questionNotExhaustiveInfo:
      'Le informazioni non sono spiegate in modo chiaro',
    questionOther: 'Altro',
    howWeDoBetter: 'Come potremmo migliorare questa pagina?',
    anonymousQuestion:
      'La tua risposta rimarrà anonima e ci aiuterà a capire come rendere migliore la tua esperienza.',
    textPlaceholder: 'Inserisci qui la tua risposta',
    maximumCharacters: (max: number) =>
      `Hai a disposizione ${max} caratteri. Per favore non inserire dati personali in questo campo`,
    error: (
      <>
        C&apos;è stato un problema nell&apos;invio 😞
        <br />
        Ti va di riprovare più tardi? 🙏
      </>
    ),
  },
};
