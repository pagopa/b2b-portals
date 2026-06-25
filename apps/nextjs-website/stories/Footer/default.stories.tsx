import React from 'react';
import { Footer } from '@pagopa/mui-italia';
import { FooterProps } from '@react-components/types';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer/Default',
  component: Footer,
};

export default meta;

const FooterTemplate: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const FooterSection: StoryFn<typeof Footer> = FooterTemplate.bind({});

const links: FooterProps['preLoginLinks'] = {
  aboutUs: {
    links: [
      {
        label: 'Chi siamo',
        href: '#',
        ariaLabel: 'Chi siamo',
        linkType: 'internal',
      },
      { label: 'PNRR', href: '#', ariaLabel: 'PNRR', linkType: 'internal' },
      { label: 'Media', href: '#', ariaLabel: 'Media', linkType: 'internal' },
      {
        label: 'Lavora con noi',
        href: '#',
        ariaLabel: 'Lavora con noi',
        linkType: 'internal',
      },
    ],
  },
  resources: {
    title: 'Prodotti e Servizi',
    links: [
      {
        label: 'App IO',
        href: '#',
        ariaLabel: 'App IO',
        linkType: 'internal',
      },
      {
        label: 'Piattaforma pagoPA',
        href: '#',
        ariaLabel: 'Piattaforma pagoPA',
        linkType: 'internal',
      },
      { label: 'SEND', href: '#', ariaLabel: 'SEND', linkType: 'internal' },
      {
        label: 'Centro stella',
        href: '#',
        ariaLabel: 'Centro stella',
        linkType: 'internal',
      },
      {
        label: 'Check IBAN',
        href: '#',
        ariaLabel: 'Check IBAN',
        linkType: 'internal',
      },
      {
        label: 'Piattaforma Dati',
        href: '#',
        ariaLabel: 'Piattaforma Dati',
        linkType: 'internal',
      },
    ],
  },
  followUs: {
    title: 'Seguici su',
    links: [
      {
        label: 'Accessibilità',
        href: '#',
        ariaLabel: 'Accessibilità',
        linkType: 'internal',
      },
      {
        label: 'Italiano',
        href: '#',
        ariaLabel: 'Lingua',
        linkType: 'internal',
      },
    ],
    socialLinks: [
      {
        icon: 'linkedin',
        title: 'linkedin',
        href: '#',
        ariaLabel: 'Social linkedin',
      },
      {
        icon: 'instagram',
        title: 'instagram',
        href: '#',
        ariaLabel: 'Social instagram',
      },
      {
        icon: 'threads',
        title: 'threads',
        href: '#',
        ariaLabel: 'Social threads',
      },
      {
        icon: 'youtube',
        title: 'youtube',
        href: '#',
        ariaLabel: 'Social youtube',
      },
      {
        icon: 'medium',
        title: 'medium',
        href: '#',
        ariaLabel: 'Social medium',
      },
      {
        icon: 'twitter',
        title: 'twitter',
        href: '#',
        ariaLabel: 'Social twitter',
      },
    ],
  },
};

const legalInfo = (
  <>
    **PagoPA S.p.A.** — Società per azioni con socio unico · Capitale sociale di
    euro 1.000.000 interamente versato · Sede legale in Roma, Piazza Colonna
    370, CAP 00187 · N. di iscrizione a Registro Imprese di Roma, CF e P.IVA
    15376371009
  </>
);

FooterSection.args = {
  preLoginLinks: links,
  postLoginLinks: [],
  loggedUser: false,
  legalInfo,
  companyLink: { href: '#', ariaLabel: 'Company' },
  languages: {
    it: {
      it: 'Italiano',
      en: 'Inglese',
      fr: 'Francese',
      de: 'Tedesco',
      sl: 'Sloveno',
    },
    en: {
      it: 'Italian',
      en: 'English',
      fr: 'French',
      de: 'German',
      sl: 'Slovenian',
    },
    fr: {
      it: 'Italien',
      en: 'Anglais',
      fr: 'Français',
      de: 'Allemand',
      sl: 'Slovène',
    },
    de: {
      it: 'Italienisch',
      en: 'Englisch',
      fr: 'Französisch',
      de: 'Deutsch',
      sl: 'Slowenisch',
    },
    sl: {
      it: 'Italijanščina',
      en: 'Angleščina',
      fr: 'Francoščina',
      de: 'Nemščina',
      sl: 'Slovenščina',
    },
  },
  currentLangCode: 'it',
  onLanguageChanged: () => ({}),
};
