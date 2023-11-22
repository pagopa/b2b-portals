import { describe, it, expect } from 'vitest';
import { makeMenuFromNavigation } from '../menu';

const parentNavItem = {
  order: 1,
  id: 1,
  title: 'Parent',
  path: 'parent',
  parent: null,
  menuAttached: true,
};

const childNavItem = {
  order: 1,
  id: 2,
  title: 'Child',
  path: 'child',
  parent: parentNavItem,
  menuAttached: true,
};

describe('makeMenuFromNavigation', () => {
  it('should return an empty array given empty navigation', () => {
    const actual = makeMenuFromNavigation([], 'light');
    expect(actual).toStrictEqual([]);
  });

  it('should return an array with a menu item for parentNavItem', () => {
    const actual = makeMenuFromNavigation([parentNavItem], 'light');
    const expected = [
      {
        theme: 'light',
        label: 'Parent',
        href: '/parent',
      },
    ];
    expect(actual).toStrictEqual(expected);
  });

  it('should return an array with a menu item for parentNavItem and a submenu for childNavItem', () => {
    const actual = makeMenuFromNavigation(
      [parentNavItem, childNavItem],
      'dark'
    );
    const expected = [
      {
        theme: 'dark',
        label: 'Parent',
        href: '/parent',
        items: [
          {
            href: '/parent/child',
            label: 'Child',
          },
        ],
      },
    ];
    expect(actual).toStrictEqual(expected);
  });
});
