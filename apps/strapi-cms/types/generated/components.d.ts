import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCtaButton extends Schema.Component {
  collectionName: 'components_components_cta_buttons';
  info: {
    displayName: 'CTAButton';
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

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'components.cta-button': ComponentsCtaButton;
      'components.link-group': ComponentsLinkGroup;
      'components.link': ComponentsLink;
    }
  }
}
