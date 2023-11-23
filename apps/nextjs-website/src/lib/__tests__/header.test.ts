import { describe, it, expect } from 'vitest';
import { makeHeaderProps } from '../header'; // Adjust the import path based on your file structure
import { Header } from '../fetch/header';
import { CTAButtonType } from '../fetch/types/CTAButton';

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

const productName = 'My Product';
const ctaButtons: ReadonlyArray<CTAButtonType> = [
  {
    text: 'Primary',
    href: 'primary.com',
    variant: 'contained',
    color: 'inherit',
  },
  {
    text: 'Secondary',
    href: 'secondary.com',
    variant: 'outlined',
    color: 'inherit',
  },
];

const header: Header = {
  data: {
    attributes: {
      theme: 'light',
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
      productName,
      ctaButtons: Array.from(ctaButtons),
    },
  },
};

const headerNoAvatar: Header = {
  data: {
    attributes: {
      theme: 'light',
      avatar: {
        data: null,
      },
      beta: true,
      reverse: false,
      productName,
      ctaButtons: Array.from(ctaButtons),
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
        name: productName,
        href: '/',
      },
      ctaButtons,
      menu: [
        {
          href: '/parent',
          label: 'Parent',
          theme: 'light',
          items: [
            {
              href: '/parent/child',
              label: 'Child',
            },
          ],
        },
      ], // You may need to adjust this based on your specific implementation
    };
    expect(actual).toStrictEqual(expected);
  });

  it('should return header props without avatar when avatar is not present', () => {
    const actual = makeHeaderProps(
      navigationWithParentAndChild,
      headerNoAvatar
    );
    const expected = {
      theme: 'light',
      beta: true,
      reverse: false,
      product: {
        name: productName,
        href: '/',
      },
      ctaButtons,
      menu: [
        {
          href: '/parent',
          label: 'Parent',
          theme: 'light',
          items: [
            {
              href: '/parent/child',
              label: 'Child',
            },
          ],
        },
      ], // You may need to adjust this based on your specific implementation
    };
    expect(actual).toStrictEqual(expected);
  });
});
