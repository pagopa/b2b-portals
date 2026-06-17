import { Meta, StoryFn } from '@storybook/react';
import { PressReleaseProps } from '@react-components/types';
import { PressRelease } from '@react-components/components';
import MarkdownRenderer from '@/components/MarkdownRenderer';

// Define the default export with metadata about your component
const meta: Meta<typeof PressRelease> = {
  title: 'Components/PressRelease/Default',
  component: PressRelease,
};
export default meta;

// Define a 'Template' function that sets how args map to rendering
const PressReleaseTemplate: StoryFn<PressReleaseProps> = (args) => (
  <PressRelease {...args} />
);

export const PressReleaseSimple: StoryFn<typeof PressRelease> =
  PressReleaseTemplate.bind({});
PressReleaseSimple.args = {
  themeVariant: 'WALLET',
  title:
    'Rimborsi in arrivo, scadenze e altri avvisi personalizzati. L’Agenzia comunica con i cittadini anche sull’App IO',
  subtitle:
    'A un anno dal lancio, in app oltre 12 mila servizi. Oggi IO supera gli 11,3 milioni di download e già 3,4 milioni di cittadini usano l’app almeno una volta alla settimana.',
  body: (
    <div>
      <p>
        Roma, 10 aprile 2024 - Se hai un rimborso in arrivo o la registrazione
        del tuo contratto di locazione sta per scadere, l’Agenzia delle Entrate
        ti avvisa con un messaggio personalizzato su{' '}
        <a href='https://www.io.italia.it'>IO, l’app dei servizi pubblici</a>,
        sviluppata e gestita da PagoPA. Grazie a questa novità, diventa ancora
        più semplice tenersi aggiornati e non dimenticare date e adempimenti
        fiscali: IO consente infatti di ricevere, comodamente in un’unica app
        sul cellulare, i messaggi del Fisco insieme a quelli delle altre
        amministrazioni, locali e nazionali, accreditate al servizio.
      </p>
      <p>
        Quali messaggi del Fisco arrivano su “IO” – Rimborsi in arrivo, scadenze
        di contratti, adempimenti e rate, comunicazioni non recapitate: sono
        alcuni dei messaggi in forma semplice e chiara che l’Agenzia invia ai
        cittadini sulle questioni fiscali di maggior interesse. Gli avvisi
        riguardano anche le abilitazioni conferite alle persone di fiducia per
        l’accesso alla propria area riservata e alcune date da ricordare, ma nel
        tempo si aggiungeranno via via nuovi contenuti.
      </p>
      <p>
        Dove trovare l’App – L’app dei servizi pubblici “IO” è disponibile
        gratuitamente negli store iOS e Android. Per poterla utilizzare è
        necessario effettuare il login con carta d’identità elettronica (Cie) o
        con Spid. L’uso dell’app come canale di comunicazione permette di
        eliminare il ricorso agli sms e alle email, che possono prestarsi con
        più facilità a campagne di phishing.
      </p>
    </div>
  ),
  date: '10 Aprile 2024',
  backlink: {
    label: 'Torna ai comunicati stampa',
    href: '/',
    ariaLabel: 'Torna indietro',
  },
};

export const PressReleaseParagraphs: StoryFn<typeof PressRelease> =
  PressReleaseTemplate.bind({});
PressReleaseParagraphs.args = {
  themeVariant: 'WALLET',
  title: 'Lorem ipsum dolor sit amet consectetur vulputate dui augue',
  body: MarkdownRenderer({
    markdown: 'Lorem ipsum dolor sit amet consectetur.',
    locale: 'it',
    defaultLocale: 'it',
  }),
  date: '10 Aprile 2024',
  metadata: {
    readingTime: '7 minuti',
    labels: {
      copyLink: 'Copia link',
      linkCopied: 'Link salvato negli appunti',
      readingTime: 'Tempo di lettura: ',
      shareLink: 'Condividi',
    },
  },
  image: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    srcSet:
      'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png 220vw',
    sizes: '100vw',
  },
  paragraphs: [
    {
      title: 'Lorem ipsum',
      body: MarkdownRenderer({
        locale: 'it',
        defaultLocale: 'it',
        markdown:
          'Lorem ipsum dolor sit amet consectetur. Vulputate dui augue eget in tristique rhoncus tincidunt nunc tincidunt. Vulputate dui augue eget in tristique rhoncus tincidunt nunc tincidunt.',
      }),
      cards: [
        {
          themeVariant: 'WALLET',
          title: 'Scopri lorem ipsum',
          alignLinkIconLeft: true,
          iconURL:
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
          text: MarkdownRenderer({
            markdown:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            locale: 'it',
            defaultLocale: 'it',
          }),
          links: [
            {
              label: 'Scopri lorem ipsum',
              href: '#',
            },
          ],
        },
      ],
    },
    {
      title: 'Lorem ipsum',
      body: MarkdownRenderer({
        locale: 'it',
        defaultLocale: 'it',
        markdown:
          'Lorem ipsum dolor sit amet consectetur. Vulputate dui augue eget in tristique rhoncus tincidunt nunc tincidunt. Vulputate dui augue eget in tristique rhoncus tincidunt nunc tincidunt.',
      }),
    },
    {
      title: 'Aggiornamenti utili',
      cards: [
        {
          themeVariant: 'WALLET',
          title: 'Scopri lorem ipsum',
          alignLinkIconLeft: true,
          iconURL:
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
          text: MarkdownRenderer({
            markdown:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            locale: 'it',
            defaultLocale: 'it',
          }),
          links: [
            {
              label: 'Scopri lorem ipsum',
              href: '#',
            },
          ],
        },
        {
          themeVariant: 'WALLET',
          title: 'Scopri lorem ipsum',
          alignLinkIconLeft: true,
          iconURL:
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
          text: MarkdownRenderer({
            markdown:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            locale: 'it',
            defaultLocale: 'it',
          }),
          links: [
            {
              label: 'Scopri lorem ipsum',
              href: '#',
            },
          ],
        },
      ],
    },
  ],
};
