import { StrapiImage } from './fetch/types/StrapiImage';

/*
Current (default) Strapi generated image sizes

small: 500px width
medium: 750px width
large: 1000px width

(Any size larger than the original image won't be generated)
*/

export const makeSrcSetFromStrapiImageData = (image: StrapiImage): string => {
  const small = image.formats?.small?.url;
  const medium = image.formats?.medium?.url;
  const large = image.formats?.large?.url;
  const original = image.url;
  const originalWidth = image.width;

  return large
    ? `${small} 500w, ${medium} 750w, ${large} 1000w, ${original} ${originalWidth}w`
    : medium
      ? `${small} 500w, ${medium} 750w, ${original} ${originalWidth}w`
      : small
        ? `${small} 500w, ${original} ${originalWidth}w`
        : `${original} ${originalWidth}w`;
};
