import * as t from 'io-ts';
import { ThemeCodec } from './Theme';
import { CTAButtonSchema } from './CTAButton';

export const CTAGroupCodec = t.intersection([
  t.type({
    theme: ThemeCodec,
  }),
  t.partial({
    ctaButtons: t.array(CTAButtonSchema),
  }),
]);
