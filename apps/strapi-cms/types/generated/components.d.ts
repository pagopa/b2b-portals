import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCtaButton extends Schema.Component {
  collectionName: 'components_components_cta_buttons';
  info: {
    displayName: 'CTAButton';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['text', 'contained', 'outlined']> &
      Attribute.Required &
      Attribute.DefaultTo<'text'>;
    color: Attribute.Enumeration<
      ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'inherit'>;
    icon: Attribute.String;
  };
}

export interface ComponentsCtaGroup extends Schema.Component {
  collectionName: 'components_components_cta_groups';
  info: {
    displayName: 'CTAGroup';
  };
  attributes: {
    ctaButtons: Attribute.Component<'components.cta-button', true>;
    reverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    theme: Attribute.Enumeration<['light', 'dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'light'>;
  };
}

export interface ComponentsLinkGroup extends Schema.Component {
  collectionName: 'components_components_link_groups';
  info: {
    displayName: 'linkGroup';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'components.link', true> & Attribute.Required;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String & Attribute.Required;
    linkType: Attribute.Enumeration<
      ['internal', 'external', 'wrapper', 'social']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'internal'>;
    ariaLabel: Attribute.String;
    icon: Attribute.String;
  };
}

export interface SectionsEditorial extends Schema.Component {
  collectionName: 'components_sections_editorials';
  info: {
    displayName: 'Editorial';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    eyelet: Attribute.String;
    body: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    theme: Attribute.Enumeration<['light', 'dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'light'>;
    pattern: Attribute.Enumeration<['none', 'dots', 'solid']> &
      Attribute.Required &
      Attribute.DefaultTo<'none'>;
    width: Attribute.Enumeration<['standard', 'wide', 'center']> &
      Attribute.Required &
      Attribute.DefaultTo<'standard'>;
    reversed: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    ctaButtons: Attribute.Component<'components.cta-button', true> &
      Attribute.SetMinMax<{
        max: 2;
      }>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.RichText;
    ctaButtons: Attribute.Component<'components.cta-button', true> &
      Attribute.SetMinMax<{
        max: 2;
      }>;
    image: Attribute.Media;
    background: Attribute.Media;
    theme: Attribute.Enumeration<['light', 'dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'light'>;
    inverse: Attribute.Boolean & Attribute.DefaultTo<false>;
    size: Attribute.Enumeration<['small', 'big']> &
      Attribute.Required &
      Attribute.DefaultTo<'small'>;
    useHoverlay: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'components.cta-button': ComponentsCtaButton;
      'components.cta-group': ComponentsCtaGroup;
      'components.link-group': ComponentsLinkGroup;
      'components.link': ComponentsLink;
      'sections.editorial': SectionsEditorial;
      'sections.hero': SectionsHero;
    }
  }
}
