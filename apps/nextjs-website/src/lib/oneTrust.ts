export const ExtractNoticeIDFromOneTrustURL = (
  oneTrustNoticeURL: string
): string | null => {
  // Check that given URL comes from onetrust.com and points to a .json file as it should
  if (
    !oneTrustNoticeURL.includes('onetrust.com/') ||
    !oneTrustNoticeURL.endsWith('.json')
  ) {
    return null;
  }

  const splitURL = oneTrustNoticeURL.split('/');
  const fileName = splitURL[splitURL.length - 1];

  return fileName?.split('.')[0] ?? null;
};
