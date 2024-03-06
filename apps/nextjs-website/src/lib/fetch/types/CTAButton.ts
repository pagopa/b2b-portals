import * as t from 'io-ts';
import { MUIButtonSizeCodec } from './MUIButtonSize';
import { MUIButtonIconCodec } from './icons/ButtonIcon';

const CTAButtonVariant = t.keyof({
  text: null,
  outlined: null,
  contained: null,
});

const CTAButtonColor = t.keyof({
  inherit: null,
  primary: null,
  error: null,
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

export const CTAButtonSimpleCodec = t.strict({
  text: t.string,
  href: t.string,
  variant: t.keyof({ contained: null, outlined: null }),
  size: MUIButtonSizeCodec,
  icon: t.union([MUIButtonIconCodec, t.null]),
});
