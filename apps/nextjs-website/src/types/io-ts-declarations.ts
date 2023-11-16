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

export const CtaButtonsSchema = t.intersection([
  t.type({
    text: t.string,
    href: t.string,
    variant: CTAButtonVariant,
    color: CTAButtonColor,
  }),
  t.partial({
    icon: t.union([t.string, t.null]),
    size: CTAButtonSize,
  }),
]);

export const CtaGroupCodec = t.intersection([
  t.type({
    theme: ThemeSchema,
  }),
  t.partial({
    ctaButtons: t.array(CtaButtonsSchema),
  }),
]);

export const StrapiImageSchema = t.type({
  data: t.union([
    t.type({
      attributes: t.type({
        alternativeText: t.union([t.string, t.null]),
        url: t.string,
      }),
    }),
    t.null,
  ]),
});

export const linkTypes = t.keyof({
  internal: null,
  external: null,
});
