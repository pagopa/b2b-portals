'use client'
import React from 'react';
import { Editorial, Feature, Hero, HowTo } from '@pagopa/pagopa-editorial-components';
import Image from 'next/image';
import HeroImage from './hero-image.png';
import Editorial01 from './editorial-block-01.png';
import Editorial02 from './editorial-block-02.png';
import Editorial03 from './editorial-block-03.png';
import Editorial04 from './editorial-block-04.png';
import FeatureIcon from './feature-icon-01.svg';
import CircleIcon from './circle-icon.svg';
import SquareIcon from './square-icon.svg';

function PubblicheAmministrazioni() {

  return (

    <div>

      <Hero

        theme="dark"
        image={ <Image src={HeroImage} alt="hero image" style={{ width: '100%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', justifyItems: 'center' }} /> }
        size="small"
        title="Inviare notifiche? Facile a dirsi."
        subtitle="E da oggi anche a farsi. SEND, Servizio Notifiche Digitali (anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i.) digitalizza la gestione delle comunicazioni a valore legale, semplificando il processo per tutti: chi le invia, e chi le riceve."
        

      />

      <Editorial

        body= {
        
          <>

            <p>

            SEND digitalizza e semplifica la gestione delle comunicazioni a valore legale. Gli enti mittenti devono solo depositare l'atto da notificare: sarà la piattaforma a occuparsi dell'invio, per via digitale o analogica. <br /> <br /> Con SEND diminuisce l'incertezza della reperibilità dei destinatari e si riducono i tempi e i costi di gestione.

            </p>
          
          </>
        
        }

        image={ <Image src={Editorial01} alt="editorial image 01" style={{ width: '100%', height: 'auto', margin: 'auto' }} /> }
        theme="light"
        title="Un modo più semplice di gestire le notifiche"
        width="wide"

      />

      <Editorial
      
        body= {
        
          <>

            <p>

            SEND si integra con il protocollo degli enti e offre sia API per l'invio automatico delle notifiche, sia la possibilità di fare invii manuali. Una volta effettuato il caricamento degli atti e dei moduli di pagamento, la piattaforma genera lo IUN, un codice univoco identificativo della notifica. <br /> <br /> Successivamente, cerca nei suoi archivi e nei registri pubblici una PEC riconducibile al destinatario e invia la notifica. Poi, invia un avviso di cortesia agli altri recapiti digitali (app IO, email e SMS) del destinatario. <br /> <br /> Se il destinatario non ha indicato alcun recapito digitale e non ha accesso alla piattaforma, questa procede con la ricerca di un indirizzo fisico, e quindi con l'invio tramite raccomandata cartacea.

            </p>
          
          </>
        
        }
        image={ <Image src={Editorial02} alt="editorial image 02" style={{ width: '100%', height: 'auto', margin: 'auto' }} /> }
        reversed
        theme="light"
        title="Carica l'atto. Poi, dimenticatene"
        width="wide"

      />
      
      <Editorial

        body= {
        
          <>

            <p>

            Il destinatario accede alla piattaforma tramite SPID o CIE, dove può visionare e scaricare l'atto notificato. Grazie all'integrazione con pagoPA, può anche pagare contestualmente quanto dovuto. Se ha attivato il servizio su app IO, potrà fare tutto direttamente in app. <br/> <br/> Come l'ente, anche il destinatario ha accesso alla cronologia degli stati della notifica e alle attestazioni opponibili a terzi che ne danno prova.

            </p>
          
          </>
        
        }
        image={ <Image src={Editorial03} alt="editorial image 03" style={{ width: '100%', height: 'auto', margin: 'auto' }} /> }
        theme="light"
        title="E il destinatario?"
        width="wide"

      />

      <Feature

        items={[
          {
            stackIcon: {
              icon: <Image src={FeatureIcon} alt="Feature Icon" style={{ width: '30%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
            },
            subtitle: 'Le notifiche sono inviate, gestite e monitorate tramite un solo canale, accessibile da più referenti dello stesso ente',
            title: 'Unico'
          },
          {
            stackIcon: {
              icon: <Image src={FeatureIcon} alt="Feature Icon" style={{ width: '30%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
            },
            subtitle: 'Si possono caricare notifiche tramite API o manualmente: depositati i documenti, la piattaforma si occupa dell’invio e tiene traccia dei cambi di stato',
            title: 'Semplice'
          },
          {
            stackIcon: {
              icon: <Image src={FeatureIcon} alt="Feature Icon" style={{ width: '30%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
            },
            subtitle: 'Se il destinatario ha un recapito digitale, i tempi di invio diminuiscono notevolmente',
            title: 'Immediato'
          },
          {
            stackIcon: {
              icon: <Image src={FeatureIcon} alt="Feature Icon" style={{ width: '30%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
            },
            subtitle: 'Il processo di notificazione è normato e c’è maggiore certezza di consegna al destinatario',
            title: 'Certo'
          }
        ]}
        theme="light"
        title="Un solo modo per risparmiare in tanti modi"

      />

      <Editorial

      body={

        <>

          <p>

          La procedura per avviare le attività tecniche e amministrative necessarie per l'adesione e l'integrazione degli enti a SEND, Servizio Notifiche Digitali, prevede le seguenti fasi:

          </p>

          <h6> 01. Scegli come integrarti </h6>

          <p>

          Ogni ente può decidere se integrarsi a SEND direttamente oppure tramite un fornitore. Nel secondo caso, è disponibile la lista dei Partner e Intermediari tecnologici che stanno implementando le attività di integrazione alla piattaforma e di cui è possibile avvalersi per un supporto nella gestione degli aspetti tecnici. <br /> <br />

          <span>

          I soggetti che intendono integrarsi a SEND in qualità di Partner o Intermediari Tecnologici possono manifestare il proprio interesse ad avviare la procedura ed essere inseriti nella lista inviando una mail all'indirizzo account@pagopa.it.
          
          </span>
          
          </p>

          <h6> 02. Sottoscrivi l'accordo di adesione </h6>

          <p>

          Per ricevere l'accordo di adesione, l'ente dovrà accedere all'Area Riservata e seguire i passaggi descritti in questa guida. <br />

          Una volta sottoscritto l'accordo in digitale, l'ente dovrà caricarlo e inviarlo a PagoPA S.p.A. sempre dall'Area Riservata. Inoltre, a integrazione dell'accordo, dovranno essere inviati i seguenti moduli debitamente compilati ove richiesto: <br /> <br />

          <ul>

            <li>Documento 1 - Termini e Condizioni di adesione e uso</li>

            <li>Documento 2 - Atto di Nomina a Responsabile Trattamento Dati Personali</li>

            <li>

              Documento 3 - Documentazione tecnica

              <ul>
                <li>manuale operativo</li>
                <li>API b2b per le pubbliche amministrazioni</li>
                <li>API b2b per l'avanzamento delle notifiche</li>
              </ul>

            </li>

            <li>Documento 4 - Ciclo attivo</li>
            <li>Modulo di Profilazione necessario per l'avvio in esercizio</li>
            <li>Modulo Commessa necessario per la fatturazione</li>
            <li>SLA di servizio</li>

          </ul>

          Per ulteriori informazioni e chiarimenti, è possibile consultare qui le principali FAQ.

          </p>

        </>

      }
      image={ <Image src={Editorial04} alt="editorial image 04" style={{ width: '100%', height: 'auto', margin: 'auto' }} /> }
      theme="light"
      title="Scopri come aderire"
      width="wide"

      />

      <HowTo

        steps={[          
          {
            description: 'Con l’uso di API Key o manualmente, l’ente crea la richiesta di notifica e carica gli allegati.',
            stepIcon: {
              icon: <Image src={CircleIcon} alt="Circle Icon" style={{ width: '60%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
            },
            title: 'L’ente crea la richiesta di notifica'
          },
          {
            description: 'SEND verifica la completezza e correttezza delle informazioni. Ad ogni cambio di stato, viene sempre generata la relativa attestazione opponibile a terzi.',
            stepIcon: {
              icon: <Image src={SquareIcon} alt="Square Icon" style={{ width: '60%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
            },
            title: 'La piattaforma la prende in carico'
          },
          {
            description: 'SEND comunica al destinatario la presenza di una notifica tramite diversi possibili canali: PEC, App IO, email, SMS. In alternativa, ricerca un indirizzo fisico e invia una raccomandata cartacea.',
            stepIcon: {
              icon: <Image src={CircleIcon} alt="Circle Icon" style={{ width: '60%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
            },
            title: 'La notifica viene inviata'
          },
          {
            description: 'Il destinatario accede alla piattaforma. Lì, può scaricare i documenti notificati e pagare contestualmente quanto dovuto, grazie all’integrazione con pagoPA. Se la riceve tramite IO, può fare tutto direttamente in app.',
            stepIcon: {
              icon: <Image src={SquareIcon} alt="Square Icon" style={{ width: '60%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
            },
            title: 'Il destinatario la riceve'
          }
        ]}

      />

    </div>

  );
}

export default PubblicheAmministrazioni;
