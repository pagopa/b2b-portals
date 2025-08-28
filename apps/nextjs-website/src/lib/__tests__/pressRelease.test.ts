/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { describe, it, expect } from 'vitest';
import {
  pressReleaseToPageDataArray,
  previewPressReleaseToPreviewPageData,
} from '../pressRelease';
import { PressReleases } from '../fetch/pressRelease';
import { PageData } from '../navigation';
import { PreviewPageData, PreviewPressReleaseData } from '../fetch/preview';

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
        backlink: {
          label: 'Torna ai comunicati stampa',
          href: '/',
        },
      },
      credits: null,
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
        backlink: {
          label: 'Torna ai comunicati stampa',
          href: '/',
        },
      },
      credits: null,
    },
  ],
};

const previewPressReleaseData: PreviewPressReleaseData = {
  data: {
    locale: 'it',
    pressRelease: {
      title: 'Articolo completo',
      subtitle: 'Con perfino un sottotitolo',
      body: 'E anche un corpo con tanto di testo **in grassetto** e [un link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
      sectionID: null,
      date: '2024-11-30',
      backlink: {
        label: 'Torna ai comunicati stampa',
        href: '/',
      },
    },
    credits: null,
  },
};
const previewPageData: PreviewPageData = {
  data: {
    locale: 'it',
    sections: [
      {
        __component: 'sections.press-release',
        title: 'Articolo completo',
        subtitle: 'Con perfino un sottotitolo',
        body: 'E anche un corpo con tanto di testo **in grassetto** e [un link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
        sectionID: null,
        date: '2024-11-30',
        backlink: {
          label: 'Torna ai comunicati stampa',
          href: '/',
        },
      },
    ],
  },
};

describe('pressReleaseToPageDataArray', () => {
  it('should prepend "press-releases" to all slugs', () => {
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

describe('previewPressReleaseToPreviewPageData', () => {
  it('should convert the press release content into a standard page section', () => {
    const actual = previewPressReleaseToPreviewPageData(
      previewPressReleaseData,
    );
    expect(actual).toStrictEqual(previewPageData);
  });
});
