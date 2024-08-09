/* eslint-disable no-underscore-dangle */
import { HeaderData, HeaderSublink } from './fetch/header';

// The functions below doesn't technically "remove" the slug altogether
// It replaces it with "/" because if we passed "" to the Header,
// the links wouldn't go to the home page, but to the currently open page

const removeHomepageSlugFromSublink = ({
  page,
  ...sublink
}: HeaderSublink): HeaderSublink => ({
  ...sublink,
  page: {
    data: {
      attributes: {
        slug:
          page.data.attributes.slug === 'homepage'
            ? '/'
            : page.data.attributes.slug,
      },
    },
  },
});

export const removeHomepageSlugFromMenu = (
  header: HeaderData['data']['attributes']['header'][0]
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
                      slug:
                        page.data.attributes.slug === 'homepage'
                          ? '/'
                          : page.data.attributes.slug,
                    },
                  }
                : null,
            },
            sublinks: sublinks.map(removeHomepageSlugFromSublink),
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
                sublinks: sublinks.map(removeHomepageSlugFromSublink),
              })
            ),
          })),
        },
      };
  }
};
