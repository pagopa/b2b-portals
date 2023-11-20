import * as t from 'io-ts';

export const LinkTypesCodec = t.keyof({
  internal: null,
  external: null,
  wrapper: null,
  social: null,
});

export type LinkTypes = t.TypeOf<typeof LinkTypesCodec>;
