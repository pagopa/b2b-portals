export const extractNoticeIDFromOneTrustURL = (
  OTNoticeURLString: string
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

  return fileName?.split('.')[0] ?? null;
};
