'use client'
import React from 'react';
import { Hero } from '@pagopa/pagopa-editorial-components';
import { type CtaProps } from '@pagopa/pagopa-editorial-components/dist/components/Ctas';

function Cittadini() {

  return (

    <div>

      <Hero
        theme="dark"
        image="./hero_image.afd0102b.png"
        size="small"
        title="Inviare notifiche? Facile a dirsi."
        subtitle="E da oggi anche a farsi. SEND, Servizio Notifiche Digitali (anche nota come Piattaforma Notifiche Digitali di cui all'art. 26 del decreto-legge 76/2020 s.m.i.) digitalizza la gestione delle comunicazioni a valore legale, semplificando il processo per tutti: chi le invia, e chi le riceve."
      />

    </div>

  );
}

export default Cittadini;
