import * as t from 'io-ts';

export const ThemeSchema = t.keyof({
  light: null,
  dark: null,
});

export const CTAButtonVariant = t.keyof({
  text: null,
  outlined: null,
  contained: null,
});

export const CTAButtonColor = t.keyof({
  inherit: null,
  primary: null,
  secondary: null,
  success: null,
  error: null,
  info: null,
  warning: null,
});

export const CTAButtonSize = t.keyof({
  small: null,
  medium: null,
  large: null,
});

export const CtaButtonsSchema = t.type({
  text: t.string,
  href: t.string,
  variant: CTAButtonVariant,
  color: CTAButtonColor,
  icon: t.union([t.string, t.nullType]),
  size: t.union([CTAButtonSize, t.nullType]),
});
