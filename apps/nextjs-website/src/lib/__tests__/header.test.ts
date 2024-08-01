import { describe, it, expect } from 'vitest';
import { removeHomepageSlugFromMenu } from '../header';
import { HeaderData } from '../fetch/header';

const standardHeader: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          __component: 'headers.standard-header',
          beta: true,
          logo: {
            data: null,
          },
          productName: 'Demo',
          supportLink: '/assistenza',
          menu: {
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
          drawer: {
            buttonText: 'Accedi',
            title: 'Accedi o Iscriviti',
            ctaCard: {
              buttonText: 'Accedi',
              href: '#',
              title: 'Titolo',
              subtitle: 'Sottotitolo',
            },
            linkCards: [
              {
                buttonText: 'Accedi',
                href: '#',
                title: 'Cittadini',
                subtitle: 'Sottotitolo Cittadini',
                stackIcon: 'People',
              },
              {
                buttonText: 'Accedi',
                href: '#',
                title: 'Imprese',
                subtitle: 'Sottotitolo Imprese',
                stackIcon: 'Business',
              },
            ],
          },
        },
      ],
    },
  },
};

const parsedStandardHeader: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          __component: 'headers.standard-header',
          beta: true,
          logo: {
            data: null,
          },
          productName: 'Demo',
          supportLink: '/assistenza',
          menu: {
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
          drawer: {
            buttonText: 'Accedi',
            title: 'Accedi o Iscriviti',
            ctaCard: {
              buttonText: 'Accedi',
              href: '#',
              title: 'Titolo',
              subtitle: 'Sottotitolo',
            },
            linkCards: [
              {
                buttonText: 'Accedi',
                href: '#',
                title: 'Cittadini',
                subtitle: 'Sottotitolo Cittadini',
                stackIcon: 'People',
              },
              {
                buttonText: 'Accedi',
                href: '#',
                title: 'Imprese',
                subtitle: 'Sottotitolo Imprese',
                stackIcon: 'Business',
              },
            ],
          },
        },
      ],
    },
  },
};

const megaHeader: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          __component: 'headers.mega-header',
          logo: {
            data: {
              attributes: {
                height: 300,
                width: 300,
                mime: 'jpg',
                url: 'imgSrc',
                alternativeText: 'altText',
              },
            },
          },
          ctaButton: {
            href: '#',
            icon: null,
            size: 'medium',
            text: 'CTA',
            variant: 'contained',
          },
          menu: {
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
                        page: {
                          data: { attributes: { slug: 'not-homepage' } },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
};

const parsedMegaHeader: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          __component: 'headers.mega-header',
          logo: {
            data: {
              attributes: {
                height: 300,
                width: 300,
                mime: 'jpg',
                url: 'imgSrc',
                alternativeText: 'altText',
              },
            },
          },
          ctaButton: {
            href: '#',
            icon: null,
            size: 'medium',
            text: 'CTA',
            variant: 'contained',
          },
          menu: {
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
                        page: {
                          data: { attributes: { slug: 'not-homepage' } },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
};

describe('removeHomepageSlugFromMenu', () => {
  it('should replace the "homepage" slug with "/" in all levels of the standard menu', () => {
    const actual = removeHomepageSlugFromMenu(
      standardHeader.data.attributes.header[0]!
    );
    expect(actual).toStrictEqual(
      parsedStandardHeader.data.attributes.header[0]
    );
  });
  it('should replace the "homepage" slug with "/" in all levels of the mega menu', () => {
    const actual = removeHomepageSlugFromMenu(
      megaHeader.data.attributes.header[0]!
    );
    expect(actual).toStrictEqual(parsedMegaHeader.data.attributes.header[0]);
  });
});
