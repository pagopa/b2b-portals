/* eslint-disable no-underscore-dangle */
import { HeaderData, HeaderSublink } from './fetch/header';

const formatSlug = (
  slug: string,
  locale: 'it' | 'en',
  defaultLocale: 'it' | 'en'
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
  readonly locale: 'it' | 'en';
  readonly defaultLocale: 'it' | 'en';
}): HeaderSublink => ({
  ...sublink,
  page: {
    data: {
      attributes: {
        slug: formatSlug(page.data.attributes.slug, locale, defaultLocale),
      },
    },
  },
});

// This function does 2 things to all links and sublinks:
// 1. Substitutes the 'homepage' slug with '/'
// 2. Prepends the locale, unless it's the default one
export const formatHeaderLinks = (
  header: HeaderData['data']['attributes']['header'][0],
  locale: 'it' | 'en',
  defaultLocale: 'it' | 'en'
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
                        defaultLocale
                      ),
                    },
                  }
                : null,
            },
            sublinks: sublinks.map((sublink) =>
              formatSublink({ locale, defaultLocale, ...sublink })
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
                  formatSublink({ locale, defaultLocale, ...sublink })
                ),
              })
            ),
          })),
        },
      };
  }
};
