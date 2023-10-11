import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentiAccordionItem extends Schema.Component {
  collectionName: 'components_componenti_accordion_items';
  info: {
    displayName: 'AccordionItem';
  };
  attributes: {
    Titolo: Attribute.String & Attribute.Required;
    Paragrafo: Attribute.RichText & Attribute.Required;
  };
}

export interface ComponentiBottone extends Schema.Component {
  collectionName: 'components_componenti_bottones';
  info: {
    displayName: 'Bottone';
  };
  attributes: {
    Testo: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface ComponentiFeatureItem extends Schema.Component {
  collectionName: 'components_componenti_feature_items';
  info: {
    displayName: 'FeatureItem';
    description: '';
  };
  attributes: {
    Icona: Attribute.Media & Attribute.Required;
    Titolo: Attribute.String & Attribute.Required;
    Paragrafo: Attribute.Text & Attribute.Required;
    Link_Testo: Attribute.String;
    Link_URL: Attribute.String;
  };
}

export interface ComponentiHowToItem extends Schema.Component {
  collectionName: 'components_componenti_how_to_items';
  info: {
    displayName: 'HowToItem';
    description: '';
  };
  attributes: {
    Icona: Attribute.Media;
    Titolo: Attribute.String & Attribute.Required;
    Descrizione: Attribute.RichText & Attribute.Required;
  };
}

export interface SezioniAccordion extends Schema.Component {
  collectionName: 'components_sezioni_accordions';
  info: {
    displayName: 'Accordion';
    description: '';
  };
  attributes: {
    Titolo: Attribute.String & Attribute.Required;
    Sottotitolo: Attribute.String & Attribute.Required;
    Paragrafo: Attribute.RichText;
    Elementi: Attribute.Component<'componenti.accordion-item', true> &
      Attribute.Required;
    Tema: Attribute.Enumeration<['Light', 'Dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'Light'>;
    Posizionamento_Testo: Attribute.Enumeration<
      ['Sinistra', 'Centro', 'Destra']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Sinistra'>;
  };
}

export interface SezioniEditorial extends Schema.Component {
  collectionName: 'components_sezioni_editorials';
  info: {
    displayName: 'Editorial';
    description: '';
  };
  attributes: {
    Titolo: Attribute.String & Attribute.Required;
    Label: Attribute.String;
    Paragrafo: Attribute.RichText & Attribute.Required;
    Bottone_Primario: Attribute.Component<'componenti.bottone'>;
    Bottone_Secondario: Attribute.Component<'componenti.bottone'>;
    Immagine: Attribute.Media & Attribute.Required;
    Tema: Attribute.Enumeration<['Light', 'Dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'Light'>;
    Posizionamento_Testo: Attribute.Enumeration<['Sinistra', 'Destra']> &
      Attribute.Required &
      Attribute.DefaultTo<'Sinistra'>;
    Pattern_Background: Attribute.Enumeration<['Nessuno', 'Punti', 'Solido']> &
      Attribute.Required &
      Attribute.DefaultTo<'Nessuno'>;
  };
}

export interface SezioniFeature extends Schema.Component {
  collectionName: 'components_sezioni_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    Titolo: Attribute.String & Attribute.Required;
    Items: Attribute.Component<'componenti.feature-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 3;
        max: 4;
      }>;
    Tema: Attribute.Enumeration<['Light', 'Dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'Light'>;
    Carosello_Mobile: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SezioniHero extends Schema.Component {
  collectionName: 'components_sezioni_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Titolo: Attribute.String & Attribute.Required;
    Bottone_Primario: Attribute.Component<'componenti.bottone'>;
    Bottone_Secondario: Attribute.Component<'componenti.bottone', true>;
    Immagine: Attribute.Media;
    Immagine_Background: Attribute.Media;
    Tema: Attribute.Enumeration<['Light', 'Dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'Light'>;
    Posizionamento_Testo: Attribute.Enumeration<['Sinistra', 'Destra']> &
      Attribute.Required &
      Attribute.DefaultTo<'Sinistra'>;
    Altezza_Sezione: Attribute.Enumeration<['Bassa', 'Alta']> &
      Attribute.Required &
      Attribute.DefaultTo<'Alta'>;
    Paragrafo: Attribute.RichText;
  };
}

export interface SezioniHowTo extends Schema.Component {
  collectionName: 'components_sezioni_how_tos';
  info: {
    displayName: 'HowTo';
    description: '';
  };
  attributes: {
    Titolo: Attribute.String;
    Steps: Attribute.Component<'componenti.how-to-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 3;
      }>;
    Tema: Attribute.Enumeration<['Light', 'Dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'Light'>;
    Carosello_Mobile: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'componenti.accordion-item': ComponentiAccordionItem;
      'componenti.bottone': ComponentiBottone;
      'componenti.feature-item': ComponentiFeatureItem;
      'componenti.how-to-item': ComponentiHowToItem;
      'sezioni.accordion': SezioniAccordion;
      'sezioni.editorial': SezioniEditorial;
      'sezioni.feature': SezioniFeature;
      'sezioni.hero': SezioniHero;
      'sezioni.how-to': SezioniHowTo;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
