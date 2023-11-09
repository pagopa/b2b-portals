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

export interface ComponentsFeatureItem extends Schema.Component {
  collectionName: 'components_components_feature_items';
  info: {
    displayName: 'FeatureItem';
    description: '';
  };
  attributes: {
    icon: Attribute.String;
    iconColor: Attribute.Enumeration<
      ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'inherit'>;
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    linkText: Attribute.String;
    linkURL: Attribute.String;
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

export interface ComponentsStep extends Schema.Component {
  collectionName: 'components_components_steps';
  info: {
    displayName: 'Step';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    icon: Attribute.String;
    iconColor: Attribute.Enumeration<
      ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'inherit'>;
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

export interface SectionsFeature extends Schema.Component {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    theme: Attribute.Enumeration<['light', 'dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'light'>;
    showCarouselMobile: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    background: Attribute.String;
    items: Attribute.Component<'components.feature-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 3;
        max: 4;
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

export interface SectionsHowTo extends Schema.Component {
  collectionName: 'components_sections_how_tos';
  info: {
    displayName: 'HowTo';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    theme: Attribute.Enumeration<['light', 'dark']> &
      Attribute.Required &
      Attribute.DefaultTo<'light'>;
    link: Attribute.Component<'components.link'>;
    rowMaxSteps: Attribute.Integer;
    stepsAlignment: Attribute.Enumeration<['center', 'left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'center'>;
    steps: Attribute.Component<'components.step', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'components.cta-button': ComponentsCtaButton;
      'components.cta-group': ComponentsCtaGroup;
      'components.feature-item': ComponentsFeatureItem;
      'components.link-group': ComponentsLinkGroup;
      'components.link': ComponentsLink;
      'components.step': ComponentsStep;
      'sections.editorial': SectionsEditorial;
      'sections.feature': SectionsFeature;
      'sections.hero': SectionsHero;
      'sections.how-to': SectionsHowTo;
    }
  }
}
