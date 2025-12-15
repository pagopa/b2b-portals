/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { describe, it, expect } from 'vitest';
import { navigationToPageDataArray, PageData } from '../navigation';
import { Navigation } from '../fetch/navigation';

const navigation: Navigation = {
  data: [
    {
      slug: 'homepage',
      seo: {
        metaTitle: 'title',
        metaDescription: 'description',
        keywords: null,
        canonicalURL: null,
        ogTitle: null,
        ogDescription: null,
        structuredData: null,
        hideFromSearchEngines: null,
      },
      sections: [
        {
          __component: 'sections.stripe-link',
          theme: 'dark',
          subtitle: 'subtitle',
          icon: null,
          link: {
            label: 'link',
            href: '/',
          },
          sectionID: null,
        },
      ],
    },
    {
      slug: 'other-page',
      seo: {
        metaTitle: 'title',
        metaDescription: 'description',
        keywords: null,
        canonicalURL: null,
        ogTitle: null,
        ogDescription: null,
        structuredData: null,
        hideFromSearchEngines: null,
      },
      sections: [
        {
          __component: 'sections.stripe-link',
          theme: 'dark',
          subtitle: 'subtitle',
          icon: null,
          link: {
            label: 'link',
            href: '/',
          },
          sectionID: null,
        },
      ],
    },
  ],
};

describe('navigationToPageDataArray', () => {
  it('should replace homepage slug with an empty string', () => {
    const actual = navigationToPageDataArray(navigation);
    const expected: ReadonlyArray<PageData> = [
      {
        seo: navigation.data[0]!.seo,
        sections: navigation.data[0]!.sections,
        slug: [''],
      },
      {
        seo: navigation.data[1]!.seo,
        sections: navigation.data[1]!.sections,
        slug: ['other-page'],
      },
    ];

    expect(actual).toStrictEqual(expected);
  });
});
