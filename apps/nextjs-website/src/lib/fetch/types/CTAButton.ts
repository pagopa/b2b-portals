import * as t from 'io-ts';

const CTAButtonVariant = t.keyof({
  text: null,
  outlined: null,
  contained: null,
});

const CTAButtonColor = t.keyof({
  inherit: null,
  primary: null,
  secondary: null,
  success: null,
  error: null,
  info: null,
  warning: null,
});

const CTAButtonSize = t.keyof({
  small: null,
  medium: null,
  large: null,
});

export const CTAButtonSchema = t.intersection([
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

export type CTAButtonType = t.TypeOf<typeof CTAButtonSchema>;
