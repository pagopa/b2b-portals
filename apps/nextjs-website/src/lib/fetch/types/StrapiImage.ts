import * as t from 'io-ts';

export const StrapiImageSchema = t.type({
  data: t.union([
    t.type({
      attributes: t.type({
        alternativeText: t.union([t.string, t.null]),
        url: t.string,
      }),
    }),
    t.null,
  ]),
});

export type Image = t.TypeOf<typeof StrapiImageSchema>;
