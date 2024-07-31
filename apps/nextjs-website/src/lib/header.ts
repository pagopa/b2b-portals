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
  header: HeaderData['data']['attributes']
): HeaderData['data']['attributes'] => {
  const menu = header.menu[0];

  // If menu is empty, return header as-is (an error may be thrown later if appropriate)
  if (menu === undefined) {
    return header;
  }

  switch (menu.__component) {
    case 'menu.menu':
      return {
        beta: header.beta,
        ctaButtons: header.ctaButtons,
        logo: header.logo,
        productName: header.productName,
        menu: [
          {
            __component: menu.__component,
            links: menu.links.map(({ page, sublinks, ...link }) => ({
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
        ],
        drawerMenuTitle: '',
        ctaTitle: '',
        ctaButtonText: '',
        ctaHref: '',
        ctaBodyText: '',
        drawerCardsData: [
          {
            title: '',
            subtitle: '',
            stackIcon: 'People',
            buttonText: '',
            href: '',
          },
        ],
      };

    case 'menu.mega-menu':
      return {
        beta: header.beta,
        ctaButtons: header.ctaButtons,
        logo: header.logo,
        productName: header.productName,
        menu: [
          {
            __component: menu.__component,
            links: menu.links.map(({ sublinkGroups, ...link }) => ({
              ...link,
              sublinkGroups: sublinkGroups.map(
                ({ sublinks, ...sublinkGroup }) => ({
                  ...sublinkGroup,
                  sublinks: sublinks.map(removeHomepageSlugFromSublink),
                })
              ),
            })),
          },
        ],
      };
  }
};
