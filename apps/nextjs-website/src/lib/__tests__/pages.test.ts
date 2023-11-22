import { describe, it, expect } from 'vitest';
import { makePageListFromNavigation } from '../pages';

const parentNavItem = {
  order: 1,
  id: 1,
  title: 'Parent',
  path: 'parent',
  parent: null,
  related: {
    id: 2,
    slug: 'parent',
  },
};
const childNavItem = {
  order: 1,
  id: 2,
  title: 'Child',
  path: 'child',
  parent: parentNavItem,
  related: {
    id: 3,
    slug: 'child',
  },
};

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
        related: { id: 1, slug: '/' },
      },
    ]);
    const expected = [{ slug: [], id: 1 }];
    expect(actual).toStrictEqual(expected);
  });
  it('should return pages list given a navigation with parent', () => {
    const actual = makePageListFromNavigation([parentNavItem, childNavItem]);
    const expected = [
      { slug: [parentNavItem.path], id: parentNavItem.related.id },
      {
        slug: [parentNavItem.path, childNavItem.path],
        id: childNavItem.related.id,
      },
    ];
    expect(actual).toStrictEqual(expected);
  });
});
