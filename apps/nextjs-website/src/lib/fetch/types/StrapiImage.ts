import * as t from 'io-ts';

const ResponsiveImageDataCodec = t.strict({
  url: t.string,
});

const ImageDataCodec = t.strict({
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

const GenericMediaDataCodec = t.strict({
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

export const StrapiImageSchema = t.union([ImageDataCodec, t.null]);
export const StrapiImageRequiredSchema = ImageDataCodec;
export const StrapiImageRequiredArraySchema = t.array(ImageDataCodec);
export const StrapiGenericMediaRequiredSchema = GenericMediaDataCodec;

export type StrapiImage = t.TypeOf<typeof StrapiImageRequiredSchema>;
