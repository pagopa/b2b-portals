import { describe, it, expect } from 'vitest';
import { makeHeaderProps } from '../header';
import { Header } from '../fetch/header';
import * as data from './data';

const navigation = [data.parentNavItem, data.childNavItem];

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
      productName: 'aProductName',
      ctaButtons: [
        {
          text: 'Primary',
          href: 'primary.com',
          variant: 'contained',
          color: 'inherit',
        },
      ],
    },
  },
};

describe('makeHeaderProps', () => {
  it('should return header props with avatar when avatar is present', () => {
    const actual = makeHeaderProps(navigation, header);
    const expected = {
      theme: 'light',
      avatar: {
        src: 'path/to/avatar.jpg',
      },
      beta: true,
      reverse: false,
      product: {
        name: 'aProductName',
        href: '/',
      },
      ctaButtons: header.data.attributes.ctaButtons,
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
