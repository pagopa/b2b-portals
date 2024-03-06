import * as t from 'io-ts';

export const MUISocialIconCodec = t.keyof({
  Instagram: null,
  LinkedIn: null,
  Facebook: null,
  Twitter: null,
});

export type MUISocialIcon = t.TypeOf<typeof MUISocialIconCodec>;

export const IsMUISocialIcon = (icon: string): boolean =>
  Object.keys(MUISocialIconCodec.keys).includes(icon);
