import * as t from 'io-ts';

export const ResponsiveImageDataCodec = t.strict({
  url: t.string,
});

export const ImageDataCodec = t.strict({
  alternativeText: t.union([t.string, t.null]),
  url: t.string,
  width: t.number,
  height: t.number,
  mime: t.string,
  formats: t.union([
    t.partial({
      small: ResponsiveImageDataCodec,
      medium: ResponsiveImageDataCodec,
      large: ResponsiveImageDataCodec,
    }),
    t.null,
  ]),
});

export const GenericMediaDataCodec = t.strict({
  alternativeText: t.union([t.string, t.null]),
  url: t.string,
  width: t.union([t.number, t.null]),
  height: t.union([t.number, t.null]),
  mime: t.string,
  formats: t.union([
    t.partial({
      small: ResponsiveImageDataCodec,
      medium: ResponsiveImageDataCodec,
      large: ResponsiveImageDataCodec,
    }),
    t.null,
  ]),
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

export const StrapiGenericMediaRequiredSchema = t.strict({
  data: t.strict({
    attributes: GenericMediaDataCodec,
  }),
});

export type StrapiImage = t.TypeOf<typeof StrapiImageRequiredSchema>;
