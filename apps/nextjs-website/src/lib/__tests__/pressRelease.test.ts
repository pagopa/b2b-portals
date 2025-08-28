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
    credits: {
      body: 'Corpo del testo dei crediti',
      image: {
        url: 'url',
        alternativeText: null,
        mime: 'jpg',
        height: 2000,
        width: 2000,
        formats: null,
      },
      sectionID: null,
      imageLinkTitle: null,
      imageLinkUrl: null,
    },
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
      {
        __component: 'sections.text-and-image',
        body: 'Corpo del testo dei crediti',
        image: {
          url: 'url',
          alternativeText: null,
          mime: 'jpg',
          height: 2000,
          width: 2000,
          formats: null,
        },
        sectionID: null,
        imageLinkTitle: null,
        imageLinkUrl: null,
      },
    ],
  },
};

const previewPressReleaseDataNoCredits: PreviewPressReleaseData = {
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
const previewPageDataNoCredits: PreviewPageData = {
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
  it('should convert the press release content into a standard page section (no credits)', () => {
    const actual = previewPressReleaseToPreviewPageData(
      previewPressReleaseDataNoCredits,
    );
    expect(actual).toStrictEqual(previewPageDataNoCredits);
  });
  it('should convert the press release content into a standard page section (with credits)', () => {
    const actual = previewPressReleaseToPreviewPageData(
      previewPressReleaseData,
    );
    expect(actual).toStrictEqual(previewPageData);
  });
});
