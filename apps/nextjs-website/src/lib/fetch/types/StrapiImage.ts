import * as t from 'io-ts';

export const ImageDataCodec = t.strict({
  alternativeText: t.union([t.string, t.null]),
  url: t.string,
  width: t.number,
  height: t.number,
  mime: t.string,
});

export const StrapiImageSchema = t.strict({
  data: t.union([
    t.strict({
      attributes: ImageDataCodec,
    }),
    t.null,
  ]),
});

export const StrapiImageRequiredSchema = t.strict({
  data: t.strict({
    attributes: ImageDataCodec,
  }),
});

export type Image = t.TypeOf<typeof StrapiImageSchema>;
