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
            ariaLabel: 'test',
          },
          sectionID: null,
        },
      ],
      createdAt: '2024-11-28T15:14:28.486Z',
      publishedAt: '2024-11-28T15:14:29.486Z',
      updatedAt: '2024-11-28T15:14:28.486Z',
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
            ariaLabel: 'test',
          },
          sectionID: null,
        },
      ],
      createdAt: '2024-11-28T15:14:28.486Z',
      publishedAt: '2024-11-28T15:14:29.486Z',
      updatedAt: '2024-11-28T15:14:28.486Z',
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
        createdAt: '2024-11-28T15:14:28.486Z',
        publishedAt: '2024-11-28T15:14:29.486Z',
        updatedAt: '2024-11-28T15:14:28.486Z',
      },
      {
        seo: navigation.data[1]!.seo,
        sections: navigation.data[1]!.sections,
        slug: ['other-page'],
        createdAt: '2024-11-28T15:14:28.486Z',
        publishedAt: '2024-11-28T15:14:29.486Z',
        updatedAt: '2024-11-28T15:14:28.486Z',
      },
    ];

    expect(actual).toStrictEqual(expected);
  });
});
