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
    const expected = [{ slug: [], id: 4 }];
    expect(actual).toStrictEqual(expected);
  });
  it('should return pages list given a navigation with parent', () => {
    const navigation = [data.parentNavItem, data.childNavItem];
    const actual = makePageListFromNavigation(navigation);
    const expected = [
      { slug: [data.parentNavItem.path], id: data.parentNavItem.related.id },
      {
        slug: [data.parentNavItem.path, data.childNavItem.path],
        id: data.childNavItem.related.id,
      },
    ];
    expect(actual).toStrictEqual(expected);
  });
});
