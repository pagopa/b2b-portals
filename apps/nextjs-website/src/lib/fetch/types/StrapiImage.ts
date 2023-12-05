import * as t from 'io-ts';

export const StrapiImageSchema = t.strict({
  data: t.union([
    t.strict({
      attributes: t.strict({
        alternativeText: t.union([t.string, t.null]),
        url: t.string,
      }),
    }),
    t.null,
  ]),
});

export type Image = t.TypeOf<typeof StrapiImageSchema>;
