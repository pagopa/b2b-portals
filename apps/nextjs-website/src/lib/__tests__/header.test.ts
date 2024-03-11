import { describe, it, expect } from 'vitest';
import { makeHeaderWithNavigation } from '../header';
import { Header } from '../fetch/header';
import * as data from '../fetch/__tests__/data';

const header: Header = {
  data: {
    attributes: {
      beta: true,
      productName: 'aProductName',
      ctaButtons: [
        {
          text: 'Primary',
          href: 'primary.com',
          variant: 'contained',
          size: 'medium',
          icon: null,
        },
      ],
      logo: {
        data: null,
      },
    },
  },
};

describe('makeHeaderWithNavigation', () => {
  it("should add theme (with fixed 'light' value) and menu fields", () => {
    const navigation = [data.parentNavItem, data.childNavItem];
    const actual = makeHeaderWithNavigation(navigation, header);
    const expected = {
      theme: 'light',
      ...header.data.attributes,
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
