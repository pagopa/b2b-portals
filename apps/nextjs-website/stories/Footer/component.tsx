import React, { useMemo } from 'react';
import { Footer } from '@react-components/components';
import { FooterProps } from '@react-components/types';

export type LanguageID = 'it' | 'en' | 'fr' | 'de' | 'sl';

export interface Language {
  id: LanguageID;
  value: string;
  href: string;
}

export const LANGUAGES: Language[] = [
  { id: 'it', value: 'Italiano', href: '#' },
  { id: 'en', value: 'English', href: '#' },
  { id: 'fr', value: 'Français', href: '#' },
  { id: 'de', value: 'Deutsch', href: '#' },
  { id: 'sl', value: 'Slovenščina', href: '#' },
];

type Translations = Record<
  LanguageID,
  {
    aboutUsLabel: string;
    servicesTitle: string;
    servicesLabel: string;
    resourcesTitle: string;
    resourcesLabel: string;
    followUsTitle: string;
    followUsLabel: string;
    legalInfo: string;
  }
>;

const TRANSLATIONS: Translations = {
  it: {
    aboutUsLabel: 'Chi siamo',
    servicesTitle: 'Servizi',
    servicesLabel: 'Servizio 1',
    resourcesTitle: 'Risorse',
    resourcesLabel: 'Risorsa 1',
    followUsTitle: 'Seguici su',
    followUsLabel: 'Social media 1',
    legalInfo:
      '**PagoPA S.p.A.** — società per azioni con socio unico · capitale sociale di euro 1.000.000 interamente versato · sede legale in Roma, Piazza Colonna 370, CAP 00187 · n. di iscrizione al Registro Imprese di Roma, CF e P.IVA: 15376371009',
  },
  en: {
    aboutUsLabel: 'About us',
    servicesTitle: 'Services',
    servicesLabel: 'Service 1',
    resourcesTitle: 'Resources',
    resourcesLabel: 'Resource 1',
    followUsTitle: 'Follow us',
    followUsLabel: 'Social Media 1',
    legalInfo:
      '**PagoPA S.p.A.** — joint-stock company with sole shareholder · share capital of €1,000,000 fully paid-up · registered office in Rome, Piazza Colonna 370, CAP 00187 · registered with the Companies Register of Rome, VAT no: 15376371009',
  },
  fr: {
    aboutUsLabel: 'À propos de nous',
    servicesTitle: 'Services',
    servicesLabel: 'Service 1',
    resourcesTitle: 'Ressources',
    resourcesLabel: 'Ressource 1',
    followUsTitle: 'Suivez-nous',
    followUsLabel: 'Médias sociaux 1',
    legalInfo:
      '**PagoPA S.p.A.** — société par actions à associé unique · capital social de 1 000 000 € entièrement libéré · siège social à Rome, Piazza Colonna 370, CAP 00187 · immatriculée au Registre du commerce de Rome, TVA : 15376371009',
  },
  de: {
    aboutUsLabel: 'Über uns',
    servicesTitle: 'Dienste',
    servicesLabel: 'Dienst 1',
    resourcesTitle: 'Ressourcen',
    resourcesLabel: 'Ressource 1',
    followUsTitle: 'Folge uns',
    followUsLabel: 'Soziale Medien 1',
    legalInfo:
      '**PagoPA S.p.A.** — Aktiengesellschaft mit alleinigem Gesellschafter · Stammkapital von 1.000.000 € vollständig eingezahlt · eingetragener Sitz in Rom, Piazza Colonna 370, CAP 00187 · eingetragen im Handelsregister Rom, USt-ID: 15376371009',
  },
  sl: {
    aboutUsLabel: 'O nas',
    servicesTitle: 'Storitve',
    servicesLabel: 'Storitev 1',
    resourcesTitle: 'Viri',
    resourcesLabel: 'Vir 1',
    followUsTitle: 'Sledi nam',
    followUsLabel: 'Družbena omrežja',
    legalInfo:
      '**PagoPA S.p.A.** — delniška družba z enim delničarjem · osnovni kapital 1.000.000 € v celoti vplačan · sedež podjetja v Rimu, Piazza Colonna 370, CAP 00187 · vpisana v Poslovni register Rima, ID za DDV: 15376371009',
  },
};

interface Props {
  companyHref: string;
  companyAriaLabel: string;
  activeLanguage: LanguageID;
  showFundedByNextGenerationEULogo: boolean;
  aboutUsLabel: string;
  servicesTitle: string;
  servicesLabel: string;
  resourcesTitle: string;
  resourcesLabel: string;
  followUsTitle: string;
  followUsLabel: string;
  legalInfo: string;
}

export const StorybookFooter = ({
  companyHref,
  companyAriaLabel,
  activeLanguage,
  showFundedByNextGenerationEULogo,
  aboutUsLabel,
  servicesTitle,
  servicesLabel,
  resourcesTitle,
  resourcesLabel,
  followUsTitle,
  followUsLabel,
  legalInfo,
}: Props) => {
  const lang = TRANSLATIONS[activeLanguage];

  const links = useMemo(() => ({
    aboutUs: {
      links: [
        {
          label: aboutUsLabel || lang.aboutUsLabel,
          href: '#',
          ariaLabel: aboutUsLabel || lang.aboutUsLabel,
        },
      ],
    },
    services: {
      title: servicesTitle || lang.servicesTitle,
      links: [
        {
          label: servicesLabel || lang.servicesLabel,
          href: '#',
          ariaLabel: servicesLabel || lang.servicesLabel,
        },
      ],
    },
    resources: {
      title: resourcesTitle || lang.resourcesTitle,
      links: [
        {
          label: resourcesLabel || lang.resourcesLabel,
          href: '#',
          ariaLabel: resourcesLabel || lang.resourcesLabel,
        },
      ],
    },
    followUs: {
      title: followUsTitle || lang.followUsTitle,
      links: [
        {
          label: followUsLabel || lang.followUsLabel,
          href: '#',
          ariaLabel: followUsLabel || lang.followUsLabel,
        },
      ],
      socialLinks: [
        {
          iconURL:
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
          href: '#',
          ariaLabel: 'Social',
        },
      ],
    },
  }), [
    aboutUsLabel,
    servicesTitle,
    servicesLabel,
    resourcesTitle,
    resourcesLabel,
    followUsTitle,
    followUsLabel,
    lang,
  ]);

  const finalLegalInfo = legalInfo || lang.legalInfo;

  return (
    <Footer
      companyLink={{ href: companyHref, ariaLabel: companyAriaLabel }}
      links={links}
      legalInfo={finalLegalInfo}
      showFundedByNextGenerationEULogo={showFundedByNextGenerationEULogo}
      languages={LANGUAGES as FooterProps['languages']}
      activeLanguage={LANGUAGES.find((l) => l.id === activeLanguage) as FooterProps['activeLanguage']}
    />
  );
};
