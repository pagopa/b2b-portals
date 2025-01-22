import { describe, it, expect } from 'vitest';
import { allSublinksNonEmpty, formatHeaderLinks } from '../header';
import {
  HeaderData,
  MegaHeaderData,
  StandardHeaderData,
} from '../fetch/header';

const standardHeaderBaseFields: Omit<StandardHeaderData, 'menu'> = {
  __component: 'headers.standard-header',
  beta: true,
  logo: {
    data: null,
  },
  productName: 'Demo',
  supportLink: '/assistenza',
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
};
const megaHeaderBaseFields: Omit<MegaHeaderData, 'menu'> = {
  __component: 'headers.mega-header',
  logo: {
    data: {
      attributes: {
        height: 300,
        width: 300,
        mime: 'jpg',
        url: 'imgSrc',
        alternativeText: 'altText',
        formats: null,
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
};

const standardHeader: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          ...standardHeaderBaseFields,
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
                    externalURL: null,
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
                    externalURL: null,
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
const parsedStandardHeader_DefaultLocale: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          ...standardHeaderBaseFields,
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
                    page: { data: { attributes: { slug: '/otherpage1' } } },
                    externalURL: null,
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
                      slug: '/otherpage2',
                    },
                  },
                },
                sublinks: [
                  {
                    label: 'label',
                    sectionID: null,
                    page: { data: { attributes: { slug: '/' } } },
                    externalURL: null,
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
const parsedStandardHeader_NonDefaultLocale: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          ...standardHeaderBaseFields,
          menu: {
            links: [
              {
                alignRight: false,
                label: 'label',
                sectionID: null,
                page: {
                  data: {
                    attributes: {
                      slug: '/en/',
                    },
                  },
                },
                sublinks: [
                  {
                    label: 'label',
                    sectionID: null,
                    page: { data: { attributes: { slug: '/en/otherpage1' } } },
                    externalURL: null,
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
                      slug: '/en/otherpage2',
                    },
                  },
                },
                sublinks: [
                  {
                    label: 'label',
                    sectionID: null,
                    page: { data: { attributes: { slug: '/en/' } } },
                    externalURL: null,
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

const megaHeader: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          ...megaHeaderBaseFields,
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
                        externalURL: null,
                      },
                      {
                        label: 'sublink1',
                        sectionID: null,
                        page: {
                          data: { attributes: { slug: 'not-homepage' } },
                        },
                        externalURL: null,
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
const parsedMegaHeader_DefaultLocale: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          ...megaHeaderBaseFields,
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
                        externalURL: null,
                      },
                      {
                        label: 'sublink1',
                        sectionID: null,
                        page: {
                          data: { attributes: { slug: '/not-homepage' } },
                        },
                        externalURL: null,
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
const parsedMegaHeader_NonDefaultLocale: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          ...megaHeaderBaseFields,
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
                        page: { data: { attributes: { slug: '/en/' } } },
                        externalURL: null,
                      },
                      {
                        label: 'sublink1',
                        sectionID: null,
                        page: {
                          data: { attributes: { slug: '/en/not-homepage' } },
                        },
                        externalURL: null,
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
const megaHeader_MissingSublink: HeaderData = {
  data: {
    attributes: {
      header: [
        {
          ...megaHeaderBaseFields,
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
                        externalURL: null,
                      },
                      {
                        label: 'sublink1',
                        sectionID: null,
                        page: { data: null },
                        externalURL: null,
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

const locale_it = 'it';
const locale_en = 'en';
const defaultLocale = 'it';

describe('formatHeaderLinks', () => {
  it('should replace the "homepage" slug with "/" in all levels of the standard menu, while not prepending the default locale', () => {
    const actual = formatHeaderLinks(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      standardHeader.data.attributes.header[0]!,
      locale_it,
      defaultLocale
    );
    expect(actual).toStrictEqual(
      parsedStandardHeader_DefaultLocale.data.attributes.header[0]
    );
  });
  it('should replace the "homepage" slug with "/" in all levels of the mega menu, while not prepending the default locale', () => {
    const actual = formatHeaderLinks(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      megaHeader.data.attributes.header[0]!,
      locale_it,
      defaultLocale
    );
    expect(actual).toStrictEqual(
      parsedMegaHeader_DefaultLocale.data.attributes.header[0]
    );
  });
  it('should replace the "homepage" slug with "/" in all levels of the standard menu, while prepending all non-default locales', () => {
    const actual = formatHeaderLinks(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      standardHeader.data.attributes.header[0]!,
      locale_en,
      defaultLocale
    );
    expect(actual).toStrictEqual(
      parsedStandardHeader_NonDefaultLocale.data.attributes.header[0]
    );
  });
  it('should replace the "homepage" slug with "/" in all levels of the mega menu, while prepending all non-default locales', () => {
    const actual = formatHeaderLinks(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      megaHeader.data.attributes.header[0]!,
      locale_en,
      defaultLocale
    );
    expect(actual).toStrictEqual(
      parsedMegaHeader_NonDefaultLocale.data.attributes.header[0]
    );
  });
});

describe('allSublinksNonEmpty', () => {
  it('should return false if any sublink has neither a page nor external URL to which to link', () => {
    const actual = allSublinksNonEmpty(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      megaHeader_MissingSublink.data.attributes.header[0]!
    );
    expect(actual).toStrictEqual(false);
  });

  it('should return true only if all sublinks link to a page or external URL', () => {
    const actual = allSublinksNonEmpty(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      megaHeader.data.attributes.header[0]!
    );
    expect(actual).toStrictEqual(true);
  });
});
