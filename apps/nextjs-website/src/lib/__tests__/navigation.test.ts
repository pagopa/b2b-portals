/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { describe, it, expect } from 'vitest';
import { navigationToPageDataArray, PageData } from '../navigation';
import { Navigation } from '../fetch/navigation';

const navigation: Navigation = {
  data: [
    {
      id: 1,
      attributes: {
        slug: 'homepage',
        seo: {
          metaTitle: 'title',
          metaDescription: 'description',
          keywords: null,
          canonicalURL: null,
          ogTitle: null,
          ogDescription: null,
          structuredData: null,
        },
        sections: [
          {
            __component: 'sections.stripe-link',
            theme: 'dark',
            subtitle: 'subtitle',
            icon: {
              data: null,
            },
            link: {
              label: 'link',
              href: '/',
            },
            sectionID: null,
          },
        ],
      },
    },
    {
      id: 2,
      attributes: {
        slug: 'other-page',
        seo: {
          metaTitle: 'title',
          metaDescription: 'description',
          keywords: null,
          canonicalURL: null,
          ogTitle: null,
          ogDescription: null,
          structuredData: null,
        },
        sections: [
          {
            __component: 'sections.stripe-link',
            theme: 'dark',
            subtitle: 'subtitle',
            icon: {
              data: null,
            },
            link: {
              label: 'link',
              href: '/',
            },
            sectionID: null,
          },
        ],
      },
    },
  ],
};

describe('navigationToPageDataArray', () => {
  it('should replace homepage slug with an empty string', () => {
    const actual = navigationToPageDataArray(navigation);
    const expected: ReadonlyArray<PageData> = [
      {
        seo: navigation.data[0]!.attributes.seo,
        sections: navigation.data[0]!.attributes.sections,
        slug: [''],
      },
      {
        seo: navigation.data[1]!.attributes.seo,
        sections: navigation.data[1]!.attributes.sections,
        slug: ['other-page'],
      },
    ];

    expect(actual).toStrictEqual(expected);
  });
});
