import { describe, it, expect } from 'vitest';
import { makePageListFromNavigation } from '../pages';
import { parentNavItem, childNavItem } from './data';

describe('makePageListFromNavigation', () => {
  it('should return empty list given empty navigation', () => {
    const actual = makePageListFromNavigation([]);
    expect(actual).toStrictEqual([]);
  });
  it('should return pages list given a navigation with homepage', () => {
    const actual = makePageListFromNavigation([
      {
        order: 1,
        id: 1,
        title: 'Home',
        path: '/',
        parent: null,
        menuAttached: true,
      },
    ]);
    const expected = [{ slug: [] }];
    expect(actual).toStrictEqual(expected);
  });
  it('should return pages list given a navigation with parent', () => {
    const actual = makePageListFromNavigation([parentNavItem, childNavItem]);
    const expected = [
      { slug: [parentNavItem.path] },
      { slug: [parentNavItem.path, childNavItem.path] },
    ];
    expect(actual).toStrictEqual(expected);
  });
});
