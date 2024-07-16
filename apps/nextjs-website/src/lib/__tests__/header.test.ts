import { describe, it, expect } from 'vitest';
import { makeHeaderWithNavigation } from '../header';
import { Header } from '../fetch/header';

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
    // TODO: Update test when header will be implemented
    const navigation = { data: [] };
    const actual = makeHeaderWithNavigation(navigation, header);
    const expected = {
      theme: 'light',
      ...header.data.attributes,
      menu: [],
    };
    expect(actual).toStrictEqual(expected);
  });
});
