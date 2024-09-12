import { Meta, StoryFn } from '@storybook/react';
import { TextSectionProps } from '@react-components/types/TextSection/TextSection.types';
import { TextSection } from '@react-components/components';

// Define the default export with metadata about your component
const meta: Meta<typeof TextSection> = {
  title: 'Components/TextSection/Default',
  component: TextSection,
};
export default meta;

// Define a 'Template' function that sets how args map to rendering
const TextSectionTemplate: StoryFn<TextSectionProps> = (args) => (
  <TextSection {...args} />
);

export const TextSectionFull: StoryFn<typeof TextSection> =
  TextSectionTemplate.bind({});
TextSectionFull.args = {
  title:
    'Rimborsi in arrivo, scadenze e altri avvisi personalizzati. L’Agenzia comunica con i cittadini anche sull’App IO',
  subtitle: (
    <p>
      A un anno dal lancio, in app oltre 12 mila servizi. Oggi IO supera gli
      11,3 milioni di download e già 3,4 milioni di cittadini usano l’app almeno
      una volta alla settimana.
    </p>
  ),
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
  eyelet: '31 GENNAIO 2024',
  link: {
    label: 'Torna ai comunicati stampa',
    href: '#',
  },
};

export const TextSectionOnlyBody: StoryFn<typeof TextSection> =
  TextSectionTemplate.bind({});
TextSectionOnlyBody.args = {
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
};
