import { describe, it, expect } from 'vitest';
import { makeHeaderProps } from '../header';
import { Header } from '../fetch/header';
import { CTAButtonType } from '../fetch/types/CTAButton';
import { parentNavItem, childNavItem } from './data';

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
            alternativeText: 'Alt text',
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
      ],
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
      ],
    };
    expect(actual).toStrictEqual(expected);
  });
});
