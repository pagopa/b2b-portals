const getPathSegments = (path: string): string[] =>
  (path.split(/[?#]/)[0] ?? '').split('/').filter(Boolean);

export const isMegaHeaderSublinkActive = ({
  pathname,
  href,
}: {
  pathname: string | null;
  href: string;
}): boolean => {
  if (!pathname || /^https?:/i.test(href)) {
    return false;
  }

  const hrefPath = href.split(/[?#]/)[0] ?? '';
  const currentPathSegments = getPathSegments(pathname);
  const hrefPathSegments = getPathSegments(href);
  const isHomepageLink =
    hrefPath === '/' ||
    (hrefPath.endsWith('/') && hrefPathSegments.length === 1);

  if (isHomepageLink) {
    return (
      currentPathSegments.length === hrefPathSegments.length &&
      hrefPathSegments.every(
        (segment, index) => currentPathSegments[index] === segment,
      )
    );
  }

  return hrefPathSegments.every(
    (segment, index) => currentPathSegments[index] === segment,
  );
};
