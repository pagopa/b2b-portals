/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { describe, it, expect } from 'vitest';
import { pressReleaseToPageDataArray } from '../pressRelease';
import { PressReleases } from '../fetch/pressRelease';
import { PageData } from '../navigation';

const pressReleases: PressReleases = {
  data: [
    {
      slug: 'art-2',
      seo: {
        metaTitle: 'SEND - PagoPA',
        metaDescription: "Descrizione per l'homepage del sito vetrina di AppIO",
        keywords: null,
        canonicalURL: null,
        ogTitle: null,
        ogDescription: null,
        structuredData: null,
      },
      pressRelease: {
        title: 'Articolo completo',
        subtitle: 'Con perfino un sottotitolo',
        body: 'E anche un corpo con tanto di testo **in grassetto** e [un link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
        sectionID: null,
        date: '2024-11-30',
      },
    },
    {
      slug: 'art-1',
      seo: {
        metaTitle: 'test',
        metaDescription: "Descrizione per l'homepage del sito vetrina di AppIO",
        keywords: null,
        canonicalURL: null,
        ogTitle: null,
        ogDescription: null,
        structuredData: null,
      },
      pressRelease: {
        title: 'Articolo minimo',
        subtitle: null,
        body: 'Corpo minimo',
        sectionID: null,
        date: '2024-11-26',
      },
    },
  ],
};

describe('pressReleaseToPageDataArray', () => {
  it('prepend "press-releases" to all slugs', () => {
    const actual = pressReleaseToPageDataArray(pressReleases);
    const expected: ReadonlyArray<PageData> = [
      {
        seo: pressReleases.data[0]!.seo,
        sections: [
          {
            __component: 'sections.press-release',
            ...pressReleases.data[0]!.pressRelease,
          },
        ],
        slug: ['press-releases', 'art-2'],
      },
      {
        seo: pressReleases.data[1]!.seo,
        sections: [
          {
            __component: 'sections.press-release',
            ...pressReleases.data[1]!.pressRelease,
          },
        ],
        slug: ['press-releases', 'art-1'],
      },
    ];

    expect(actual).toStrictEqual(expected);
  });
});
