import * as t from 'io-ts';
import { ThemeCodec } from './Theme';

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

export type ctaButtons = t.TypeOf<typeof CtaButtonsSchema>;

export const CtaGroupCodec = t.intersection([
  t.type({
    theme: ThemeCodec,
  }),
  t.partial({
    ctaButtons: t.array(CtaButtonsSchema),
  }),
]);

export type ctapreButtons = t.TypeOf<typeof CtaGroupCodec>;
