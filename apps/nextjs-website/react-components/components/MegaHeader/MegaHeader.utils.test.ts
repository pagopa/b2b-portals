import { describe, expect, it } from 'vitest';
import { isMegaHeaderSublinkActive } from './MegaHeader.utils';

describe('isMegaHeaderSublinkActive', () => {
  it('marks a localized link active on its page and descendants', () => {
    expect(
      isMegaHeaderSublinkActive({
        pathname: '/en/contacts',
        href: '/en/contacts',
      }),
    ).toBe(true);
    expect(
      isMegaHeaderSublinkActive({
        pathname: '/en/contacts/details',
        href: '/en/contacts',
      }),
    ).toBe(true);
  });

  it('marks a localized homepage active only on the homepage', () => {
    expect(isMegaHeaderSublinkActive({ pathname: '/en', href: '/en/' })).toBe(
      true,
    );
    expect(
      isMegaHeaderSublinkActive({
        pathname: '/en/contacts',
        href: '/en/',
      }),
    ).toBe(false);
  });

  it('does not mark external links as active', () => {
    expect(
      isMegaHeaderSublinkActive({
        pathname: '/en/contacts',
        href: 'https://www.google.com',
      }),
    ).toBe(false);
  });
});
