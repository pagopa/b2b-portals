import * as t from 'io-ts';

export const SocialIconCodec = t.keyof({
  Instagram: null,
  LinkedIn: null,
  Facebook: null,
  Twitter: null,
  Medium: null,
});
