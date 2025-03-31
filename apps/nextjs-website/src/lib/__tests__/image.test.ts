import { describe, it, expect } from 'vitest';
import { makeSrcSetFromStrapiImageData } from '../image';
import { StrapiImage } from '../fetch/types/StrapiImage';

const strapiImage: Record<string, StrapiImage> = {
  allSizes: {
    url: 'url',
    alternativeText: null,
    mime: 'jpg',
    height: 2000,
    width: 2000,
    formats: {
      small: {
        url: 'smallURL',
      },
      medium: {
        url: 'mediumURL',
      },
      large: {
        url: 'largeURL',
      },
    },
  },
  noLarge: {
    url: 'url',
    alternativeText: null,
    mime: 'jpg',
    height: 2000,
    width: 2000,
    formats: {
      small: {
        url: 'smallURL',
      },
      medium: {
        url: 'mediumURL',
      },
    },
  },
  noMedium: {
    url: 'url',
    alternativeText: null,
    mime: 'jpg',
    height: 2000,
    width: 2000,
    formats: {
      small: {
        url: 'smallURL',
      },
    },
  },
  noFormats: {
    url: 'url',
    alternativeText: null,
    mime: 'jpg',
    height: 2000,
    width: 2000,
    formats: null,
  },
};

describe('makeSrcSetFromStrapiImageData', () => {
  it('should return a valid srcset (all sizes)', () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const actual = makeSrcSetFromStrapiImageData(strapiImage['allSizes']!);
    expect(actual).toStrictEqual(
      'smallURL 500w, mediumURL 750w, largeURL 1000w, url 2000w',
    );
  });

  it('should return a valid srcset (no large size)', () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const actual = makeSrcSetFromStrapiImageData(strapiImage['noLarge']!);
    expect(actual).toStrictEqual('smallURL 500w, mediumURL 750w, url 2000w');
  });

  it('should return a valid srcset (no medium size)', () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const actual = makeSrcSetFromStrapiImageData(strapiImage['noMedium']!);
    expect(actual).toStrictEqual('smallURL 500w, url 2000w');
  });

  it('should return a valid srcset (no formats)', () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const actual = makeSrcSetFromStrapiImageData(strapiImage['noFormats']!);
    expect(actual).toStrictEqual('url 2000w');
  });
});
