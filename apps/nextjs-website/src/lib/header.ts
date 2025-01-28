/* eslint-disable no-underscore-dangle */
import { HeaderData, HeaderSublink } from './fetch/header';
import { Locale } from './fetch/siteWideSEO';

const formatSlug = (
  slug: string,
  locale: Locale,
  defaultLocale: Locale,
): string => {
  const localeString = locale === defaultLocale ? '' : `/${locale}`;
  const slugString = slug === 'homepage' ? '/' : `/${slug}`;

  return localeString + slugString;
};

const formatSublink = ({
  locale,
  defaultLocale,
  page,
  ...sublink
}: HeaderSublink & {
  readonly locale: Locale;
  readonly defaultLocale: Locale;
}): HeaderSublink => ({
  ...sublink,
  page: {
    data: page.data
      ? {
          attributes: {
            slug: formatSlug(page.data.attributes.slug, locale, defaultLocale),
          },
        }
      : null,
  },
});

// This function does 2 things to all links and sublinks:
// 1. Substitutes the 'homepage' slug with '/'
// 2. Prepends the locale, unless it's the default one
export const formatHeaderLinks = (
  header: HeaderData['data']['attributes']['header'][0],
  locale: Locale,
  defaultLocale: Locale,
): HeaderData['data']['attributes']['header'][0] => {
  switch (header.__component) {
    case 'headers.standard-header':
      return {
        ...header,
        menu: {
          links: header.menu.links.map(({ page, sublinks, ...link }) => ({
            ...link,
            page: {
              data: page.data
                ? {
                    attributes: {
                      slug: formatSlug(
                        page.data.attributes.slug,
                        locale,
                        defaultLocale,
                      ),
                    },
                  }
                : null,
            },
            sublinks: sublinks.map((sublink) =>
              formatSublink({ locale, defaultLocale, ...sublink }),
            ),
          })),
        },
      };
    case 'headers.mega-header':
      return {
        ...header,
        menu: {
          links: header.menu.links.map(({ sublinkGroups, ...link }) => ({
            ...link,
            sublinkGroups: sublinkGroups.map(
              ({ sublinks, ...sublinkGroup }) => ({
                ...sublinkGroup,
                sublinks: sublinks.map((sublink) =>
                  formatSublink({ locale, defaultLocale, ...sublink }),
                ),
              }),
            ),
          })),
        },
      };
  }
};

export const allSublinksNonEmpty = (
  header: HeaderData['data']['attributes']['header'][0],
): boolean => {
  if (header.__component === 'headers.mega-header') {
    const links = header.menu.links;
    const sublinkGroups = links.flatMap((link) => link.sublinkGroups);
    const sublinks = sublinkGroups.flatMap(
      (sublinkGroup) => sublinkGroup.sublinks,
    );
    const emptySublink = sublinks.find(
      (sublink) => !sublink.page.data && !sublink.externalURL,
    );

    if (emptySublink) {
      return false;
    }
  } else {
    // header.__component === 'headers.standard-header'
    const links = header.menu.links;
    const sublinks = links.flatMap((link) => link.sublinks);
    const emptySublink = sublinks.find(
      (sublink) => !sublink.page.data && !sublink.externalURL,
    );

    if (emptySublink) {
      return false;
    }
  }
  return true;
};
