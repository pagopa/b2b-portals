import { describe, it, expect } from 'vitest';
import { makePageListFromNavigation } from '../pages';
import * as data from '../fetch/__tests__/data';

describe('makePageListFromNavigation', () => {
  it('should return empty list given empty navigation', () => {
    const actual = makePageListFromNavigation([]);
    expect(actual).toStrictEqual([]);
  });
  it('should return pages list given a navigation with homepage', () => {
    const actual = makePageListFromNavigation([data.homepageNavItem]);
    const expected = [
      {
        slug: [],
        sections: data.homepageNavItem.related.sections,
        seo: data.homepageNavItem.related.seo,
      },
    ];
    expect(actual).toStrictEqual(expected);
  });
  it('should return pages list given a navigation with parent', () => {
    const navigation = [data.parentNavItem, data.childNavItem];
    const actual = makePageListFromNavigation(navigation);
    const expected = [
      {
        slug: [data.parentNavItem.related.slug],
        sections: data.parentNavItem.related.sections,
        seo: data.parentNavItem.related.seo,
      },
      {
        slug: [data.parentNavItem.related.slug, data.childNavItem.related.slug],
        sections: data.childNavItem.related.sections,
        seo: data.childNavItem.related.seo,
      },
    ];
    expect(actual).toStrictEqual(expected);
  });
});
