import * as t from 'io-ts';

export const InternalSocialIconCodec = t.keyof({
  Medium: null,
});

export type InternalSocialIcon = t.TypeOf<typeof InternalSocialIconCodec>;
