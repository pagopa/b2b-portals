'use client';

import { Locale, SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { FeedbackFormSection } from '@/lib/fetch/types/PageSection';
import { FeedbackForm as FeedbackFormRC } from '@react-components/components';
import { FeedbackFormProps } from '@react-components/types';

const feedbackFormLabels: Record<Locale, FeedbackFormProps['labels']> = {
  it: {
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
  en: {
    title: 'Hi, was this page helpful?',
    yes: 'Yes',
    no: 'No',
    send: 'Send',
    sendDetails: 'Send details',
    sending: 'Sending...',
    feedbackSent: 'Feedback sent. Thank you.',
    thanksForYourOpinion: 'Thanks for your opinion!',
    helpUs: 'Help us improve by providing more details.',
    whyNot: "Why wasn't the page helpful?",
    questionDidNotFoundInfo: "I didn't find the information I was looking for",
    questionNotExhaustiveInfo: "The information isn't explained clearly",
    questionOther: 'Other',
    howWeDoBetter: 'How could we improve this page?',
    anonymousQuestion:
      'Your answer will remain anonymous and will help us understand how to improve your experience.',
    textPlaceholder: 'Enter your answer here',
    maximumCharacters: (max: number) =>
      `You have ${max} characters. Please do not enter personal data in this field`,
    error: (
      <>
        There was a problem sending 😞
        <br />
        Would you like to try again later? 🙏
      </>
    ),
  },
  de: {
    title: 'Hallo, war diese Seite hilfreich?',
    yes: 'Ja',
    no: 'Nein',
    send: 'Senden',
    sendDetails: 'Details senden',
    sending: 'Wird gesendet...',
    feedbackSent: "Feedback gesendet.' Vielen Dank.",
    thanksForYourOpinion: 'Vielen Dank für Ihre Meinung!',
    helpUs:
      'Helfen Sie uns, uns zu verbessern, indem Sie weitere Details angeben.',
    whyNot: 'Warum war die Seite nicht hilfreich?',
    questionDidNotFoundInfo:
      'Ich habe die gesuchten Informationen nicht gefunden',
    questionNotExhaustiveInfo: 'Die Informationen sind nicht klar erklärt',
    questionOther: 'Sonstiges',
    howWeDoBetter: 'Wie können wir diese Seite verbessern?',
    anonymousQuestion:
      'Ihre Antwort bleibt anonym und hilft uns zu verstehen, wie wir Ihre Benutzererfahrung verbessern können.',
    textPlaceholder: 'Geben Sie hier Ihre Antwort ein',
    maximumCharacters: (max: number) =>
      `Sie haben ${max} Zeichen. Bitte geben Sie in diesem Feld keine persönlichen Informationen ein.`,
    error: (
      <>
        Es gab ein Problem beim Senden 😞
        <br />
        Möchten Sie es später noch einmal versuchen? 🙏
      </>
    ),
  },
  fr: {
    title: 'Bonjour, cette page vous a-t-elle été utile ?',
    yes: 'Oui',
    no: 'Non',
    send: 'Envoyer',
    sendDetails: "Détails d'envoi",
    sending: 'Envoi en cours...',
    feedbackSent: 'Commentaire envoyé. Merci.',
    thanksForYourOpinion: 'Merci pour votre avis !',
    helpUs: 'Aidez-nous à améliorer cette page en fournissant plus de détails.',
    whyNot: 'Pourquoi cette page ne vous a-t-elle pas été utile ?',
    questionDidNotFoundInfo:
      "Je n'ai pas trouvé l'information que je cherchais",
    questionNotExhaustiveInfo: "L'information n'est pas expliquée clairement",
    questionOther: 'Autre',
    howWeDoBetter: 'Comment pourrions-nous améliorer cette page ?',
    anonymousQuestion:
      'Votre réponse restera anonyme et nous aidera à comprendre comment améliorer votre expérience.',
    textPlaceholder: 'Saisissez votre réponse ici',
    maximumCharacters: (max: number) =>
      `Vous disposez de ${max}caractères. Veuillez ne pas saisir d'informations personnelles dans ce champ.`,
    error: (
      <>
        Un problème est survenu lors de l&apos;envoi 😞
        <br /> Voulez-vous réessayer plus tard ? 🙏
      </>
    ),
  },
  sl: {
    title: 'Živjo, vam je bila ta stran v pomoč?',
    yes: 'Da',
    no: 'Ne',
    send: 'Pošlji',
    sendDetails: 'Pošlji podrobnosti',
    sending: 'Pošiljanje ...',
    feedbackSent: "Povratne informacije poslane.' Hvala.",
    thanksForYourOpinion: 'Hvala za vaše mnenje!',
    helpUs: 'Pomagajte nam izboljšati se tako, da navedete več podrobnosti.',
    whyNot: 'Zakaj stran ni bila koristna?',
    questionDidNotFoundInfo: 'Nisem našel informacij, ki sem jih iskal',
    questionNotExhaustiveInfo: 'Informacije niso jasno pojasnjene',
    questionOther: 'Drugo',
    howWeDoBetter: 'Kako bi lahko izboljšali to stran?',
    anonymousQuestion:
      'Vaš odgovor bo ostal anonimen in nam bo pomagal razumeti, kako izboljšati vašo izkušnjo.',
    textPlaceholder: 'Vnesite svoj odgovor tukaj',
    maximumCharacters: (max: number) =>
      `Imate ${max} znakov. V to polje ne vnašajte osebnih podatkov`,
    error: (
      <>
        Pri pošiljanju je prišlo do težave 😞
        <br />
        Bi želeli poskusiti znova pozneje? 🙏
      </>
    ),
  },
};

const makeFeedbackFormProps = ({
  locale,
  sectionID,
}: FeedbackFormSection & SiteWidePageData): FeedbackFormProps => {
  const tenant = process.env['NEXT_PUBLIC_TENANT'];
  const token = process.env['NEXT_PUBLIC_TOKEN'];
  return {
    sectionID,
    labels: feedbackFormLabels[locale],
    locale,
    ...(tenant && { tenant }),
    ...(token && { token }),
  };
};

const FeedbackForm = (props: FeedbackFormSection & SiteWidePageData) => (
  <FeedbackFormRC {...makeFeedbackFormProps(props)} />
);

export default FeedbackForm;
