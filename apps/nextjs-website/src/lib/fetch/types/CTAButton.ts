import * as t from 'io-ts';

const CTAButtonVariant = t.keyof({
  text: null,
  outlined: null,
  contained: null,
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
  }),
  t.partial({
    icon: t.union([t.string, t.null]),
    size: CTAButtonSize,
  }),
]);
