import { describe, it, expect } from 'vitest';
import { ExtractNoticeIDFromOneTrustURL } from '../oneTrust';

describe('ExtractNoticeIDFromOneTrustURL', () => {
  it('should extract the notice ID from a valid URL', () => {
    const actual = ExtractNoticeIDFromOneTrustURL(
      'https://valid-url-example.onetrust.com/client-id/service-id/draft/noticeID.json'
    );
    expect(actual).toStrictEqual('noticeID');
  });
  it('should return null from a non-OneTrust URL', () => {
    const actual = ExtractNoticeIDFromOneTrustURL(
      'https://non-onetrust-url-example.othersite.com/client-id/service-id/draft/noticeID.json'
    );
    expect(actual).toBeNull();
  });
  it('should return null from a URL that does not point to a .json file', () => {
    const actual = ExtractNoticeIDFromOneTrustURL(
      'https://no-json-url-example.onetrust.com/client-id/service-id/draft/noticeID'
    );
    expect(actual).toBeNull();
  });
});
