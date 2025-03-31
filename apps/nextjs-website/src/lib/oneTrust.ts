export const extractNoticeIDFromOneTrustURL = (
  OTNoticeURLString: string,
): string | null => {
  // Check that given URL comes from onetrust.com and points to a .json file as it should before parsing
  const OTNoticeURL = URL.canParse(OTNoticeURLString)
    ? new URL(OTNoticeURLString)
    : null;

  if (
    OTNoticeURL === null ||
    OTNoticeURL.protocol !== 'https:' ||
    !OTNoticeURL.hostname.endsWith('onetrust.com') ||
    !OTNoticeURL.pathname.endsWith('.json')
  ) {
    return null;
  }

  const splitURL = OTNoticeURL.pathname.split('/');
  const fileName = splitURL[splitURL.length - 1];

  // We have already verified above (line 13) that the file name ends in .json, so we can assert the existence of a return value
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
  return fileName?.split('.')[0]!;
};
