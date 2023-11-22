import { describe, it, expect } from 'vitest';
import { makeHeaderProps } from '../header'; // Adjust the import path based on your file structure

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

const navigationWithParentAndChild = [parentNavItem, childNavItem];

const header = {
  data: {
    attributes: {
      theme: 'light' || 'dark',
      avatar: {
        data: {
          attributes: {
            url: 'path/to/avatar.jpg',
            alternativeText: 'Alt text', // Add this line if alternativeText is part of your data structure
          },
        },
      },
      beta: true,
      reverse: false,
      productName: 'My Product',
      ctaButtons: ['Button 1', 'Button 2'],
    },
  },
};

describe('makeHeaderProps', () => {
  it('should return header props with avatar when avatar is present', () => {
    const actual = makeHeaderProps(navigationWithParentAndChild, header);
    const expected = {
      theme: 'light',
      avatar: {
        src: 'path/to/avatar.jpg',
      },
      beta: true,
      reverse: false,
      product: {
        name: 'My Product',
        href: '/',
      },
      ctaButtons: ['Button 1', 'Button 2'],
      menu: [], // You may need to adjust this based on your specific implementation
    };
    expect(actual).toStrictEqual(expected);
  });

  it('should return header props without avatar when avatar is not present', () => {
    const actual = makeHeaderProps(navigationWithParentAndChild, header);
    const expected = {
      theme: 'light',
      beta: true,
      reverse: false,
      product: {
        name: 'My Product',
        href: '/',
      },
      ctaButtons: ['Button 1', 'Button 2'],
      menu: [],
    };
    expect(actual).toStrictEqual(expected);
  });
});
