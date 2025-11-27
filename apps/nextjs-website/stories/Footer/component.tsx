import React from 'react';
import { Footer } from '@react-components/components';
import { FooterProps } from '@react-components/types';

interface Props {
  showFundedByNextGenerationEULogo: boolean;
}

export const StorybookFooter = ({
  showFundedByNextGenerationEULogo,
}: Props) => {
  const links: FooterProps['links'] = {
    aboutUs: {
      links: [
        { label: 'Chi siamo', href: '#', ariaLabel: 'Chi siamo' },
        { label: 'PNRR', href: '#', ariaLabel: 'PNRR' },
        { label: 'Media', href: '#', ariaLabel: 'Media' },
        { label: 'Lavora con noi', href: '#', ariaLabel: 'Lavora con noi' },
      ],
    },
    services: {
      title: 'Prodotti e Servizi',
      links: [
        { label: 'App IO', href: '#', ariaLabel: 'App IO' },
        {
          label: 'Piattaforma pagoPA',
          href: '#',
          ariaLabel: 'Piattaforma pagoPA',
        },
        { label: 'SEND', href: '#', ariaLabel: 'SEND' },
        { label: 'Centro stella', href: '#', ariaLabel: 'Centro stella' },
        { label: 'Check IBAN', href: '#', ariaLabel: 'Check IBAN' },
        { label: 'Piattaforma Dati', href: '#', ariaLabel: 'Piattaforma Dati' },
      ],
    },
    resources: {
      title: 'Risorse',
      links: [
        { label: 'Note legali', href: '#', ariaLabel: 'Note legali' },
        {
          label: 'Informativa Privacy',
          href: '#',
          ariaLabel: 'Informativa Privacy',
        },
        {
          label: 'Preferenza cookie',
          href: '#',
          ariaLabel: 'Preferenza cookie',
        },
        {
          label: 'Protezione dati personali',
          href: '#',
          ariaLabel: 'Protezione dati personali',
        },
        {
          label: 'Sicurezza e qualità',
          href: '#',
          ariaLabel: 'Sicurezza e qualità',
        },
      ],
    },
    followUs: {
      title: 'Seguici su',
      links: [
        { label: 'Accessibilità', href: '#', ariaLabel: 'Accessibilità' },
        { label: 'Italiano', href: '#', ariaLabel: 'Lingua' },
      ],
      socialLinks: [
        {
          iconURL:
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg',
          href: '#',
          ariaLabel: 'Social',
        },
      ],
    },
  };

  const legalInfo =
    '**PagoPA S.p.A.** — Società per azioni con socio unico · Capitale sociale di euro 1.000.000 interamente versato · Sede legale in Roma, Piazza Colonna 370, CAP 00187 · N. di iscrizione a Registro Imprese di Roma, CF e P.IVA 15376371009';

  return (
    <Footer
      links={links}
      legalInfo={legalInfo}
      showFundedByNextGenerationEULogo={showFundedByNextGenerationEULogo}
      companyLink={{ href: '#', ariaLabel: 'Company' }}
      languages={[]}
      activeLanguage={{ id: 'it', value: 'Italiano', href: '#' }}
      titleSVG="Finanziato dall'Unione Europea · NextGenerationEU"
    />
  );
};
