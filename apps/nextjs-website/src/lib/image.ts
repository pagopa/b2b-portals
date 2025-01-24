import { StrapiImage } from './fetch/types/StrapiImage';

/*
Current (default) Strapi generated image sizes

small: 500px width
medium: 750px width
large: 1000px width

(Any size larger than the original image won't be generated)
*/

export const makeSrcSetFromStrapiImageData = ({
  attributes,
}: StrapiImage['data']): string => {
  const small = attributes.formats?.small?.url;
  const medium = attributes.formats?.medium?.url;
  const large = attributes.formats?.large?.url;
  const original = attributes.url;
  const originalWidth = attributes.width;

  return large
    ? `${small} 500w, ${medium} 750w, ${large} 1000w, ${original} ${originalWidth}w`
    : medium
      ? `${small} 500w, ${medium} 750w, ${original} ${originalWidth}w`
      : small
        ? `${small} 500w, ${original} ${originalWidth}w`
        : `${original} ${originalWidth}w`;
};
