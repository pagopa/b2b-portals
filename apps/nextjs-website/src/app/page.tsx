'use client';
import { Editorial, Hero } from '@pagopa/pagopa-editorial-components';

export default function Home() {
  return (
    <main>
      <div>
        <Hero title={'Home Page'} />
        <Editorial
          body="Con Piattaforma Notifiche, ricevi e gestisci nello stesso spazio tutti gli atti di notifica che ti inviano Enti e Pubbliche Amministrazioni, come multe o certificati elettorali. E, grazie all'integrazione con pagoPA, puoi anche pagare eventuali costi. Così, risparmi tempo e denaro."
          ctaButtons={[
            {
              onClick: function noRefCheck(){},
              text: 'Accedi'
            },
            {
              onClick: function noRefCheck(){},
              text: 'Scopri di più'
            }
          ]}
          eyelet="per i cittadini"
          image={{
            alt: 'a landscape photo',
            src: 'static/media/regular.d1ac9ad6.png'
          }}
          theme="light"
          title="Non perderti più nessuna notifica"
        />
      </div>
    </main>
  );
}
