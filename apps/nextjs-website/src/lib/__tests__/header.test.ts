import { describe, it, expect } from 'vitest';
import { removeHomepageSlugFromMenu } from '../header';
import { HeaderData } from '../fetch/header';

const noMenuHeader: HeaderData = {
  data: {
    attributes: {
      beta: true,
      ctaButtons: [],
      logo: {
        data: null,
      },
      productName: 'Demo',
      menu: [],
    },
  },
};

const standardMenuHeader: HeaderData = {
  data: {
    attributes: {
      beta: true,
      ctaButtons: [],
      logo: {
        data: null,
      },
      productName: 'Demo',
      menu: [
        {
          __component: 'menu.menu',
          links: [
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: {
                data: {
                  attributes: {
                    slug: 'homepage',
                  },
                },
              },
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { data: { attributes: { slug: 'otherpage1' } } },
                },
              ],
            },
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: {
                data: {
                  attributes: {
                    slug: 'otherpage2',
                  },
                },
              },
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { data: { attributes: { slug: 'homepage' } } },
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

const parsedStandardMenuHeader: HeaderData = {
  data: {
    attributes: {
      beta: true,
      ctaButtons: [],
      logo: {
        data: null,
      },
      productName: 'Demo',
      menu: [
        {
          // eslint-disable-next-line no-underscore-dangle
          __component: 'menu.menu',
          links: [
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: {
                data: {
                  attributes: {
                    slug: '/',
                  },
                },
              },
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { data: { attributes: { slug: 'otherpage1' } } },
                },
              ],
            },
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: {
                data: {
                  attributes: {
                    slug: 'otherpage2',
                  },
                },
              },
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { data: { attributes: { slug: '/' } } },
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

const megaMenuHeader: HeaderData = {
  data: {
    attributes: {
      beta: true,
      ctaButtons: [],
      logo: {
        data: null,
      },
      productName: 'Demo',
      menu: [
        {
          __component: 'menu.mega-menu',
          links: [
            {
              label: 'label',
              sublinkGroups: [
                {
                  title: 'group1',
                  sublinks: [
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: { data: { attributes: { slug: 'homepage' } } },
                    },
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: { data: { attributes: { slug: 'not-homepage' } } },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

const parsedMegaMenuHeader: HeaderData = {
  data: {
    attributes: {
      beta: true,
      ctaButtons: [],
      logo: {
        data: null,
      },
      productName: 'Demo',
      menu: [
        {
          __component: 'menu.mega-menu',
          links: [
            {
              label: 'label',
              sublinkGroups: [
                {
                  title: 'group1',
                  sublinks: [
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: { data: { attributes: { slug: '/' } } },
                    },
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: { data: { attributes: { slug: 'not-homepage' } } },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

describe('removeHomepageSlugFromMenu', () => {
  it('should do nothing if the menu is empty', () => {
    const actual = removeHomepageSlugFromMenu(noMenuHeader.data.attributes);
    expect(actual).toStrictEqual(noMenuHeader.data.attributes);
  });
  it('should replace the "homepage" slug with "/" in all levels of the standard menu', () => {
    const actual = removeHomepageSlugFromMenu(
      standardMenuHeader.data.attributes
    );
    expect(actual).toStrictEqual(parsedStandardMenuHeader.data.attributes);
  });
  it('should replace the "homepage" slug with "/" in all levels of the megaMenu', () => {
    const actual = removeHomepageSlugFromMenu(megaMenuHeader.data.attributes);
    expect(actual).toStrictEqual(parsedMegaMenuHeader.data.attributes);
  });
});
