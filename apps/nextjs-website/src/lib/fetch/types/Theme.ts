import * as t from 'io-ts';

export const ThemeCodec = t.keyof({
  light: null,
  dark: null,
});

export type Theme = t.TypeOf<typeof ThemeCodec>;
