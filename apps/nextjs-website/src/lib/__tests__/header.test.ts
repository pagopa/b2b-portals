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
  logo: null,
  productName: 'Demo',
  supportLink: '/assistenza',
  drawer: {
    buttonText: 'Accedi',
    title: 'Accedi o Iscriviti',
    subtitle: null,
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
        icons: [
          {
            width: 32,
            height: 32,
            alternativeText: null,
            formats: null,
            mime: 'png',
            url: 'iconURL',
          },
        ],
      },
      {
        buttonText: 'Accedi',
        href: '#',
        title: 'Imprese',
        subtitle: 'Sottotitolo Imprese',
        icons: [
          {
            width: 32,
            height: 32,
            alternativeText: null,
            formats: null,
            mime: 'png',
            url: 'iconURL',
          },
        ],
      },
    ],
  },
};
const megaHeaderBaseFields: Omit<MegaHeaderData, 'menu'> = {
  __component: 'headers.mega-header',
  logo: {
    height: 300,
    width: 300,
    mime: 'jpg',
    url: 'imgSrc',
    alternativeText: 'altText',
    formats: null,
  },
  ctaButton: {
    href: '#',
    icon: null,
    size: 'medium',
    text: 'CTA',
    variant: 'contained',
  },
  appCtaButton: null,
  drawer: null,
  mixpanelCtaClickEvent: null,
};

const standardHeader: HeaderData = {
  data: {
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
                slug: 'homepage',
              },
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { slug: 'otherpage1' },
                  externalURL: null,
                },
              ],
            },
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: { slug: 'otherpage2' },
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { slug: 'homepage' },
                  externalURL: null,
                },
                {
                  label: 'label',
                  sectionID: null,
                  page: null,
                  externalURL: 'externalURL',
                },
              ],
            },
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: null,
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { slug: 'homepage' },
                  externalURL: null,
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
const parsedStandardHeader_DefaultLocale: HeaderData = {
  data: {
    header: [
      {
        ...standardHeaderBaseFields,
        menu: {
          links: [
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: { slug: '/' },
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { slug: '/otherpage1' },
                  externalURL: null,
                },
              ],
            },
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: {
                slug: '/otherpage2',
              },
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { slug: '/' },
                  externalURL: null,
                },
                {
                  label: 'label',
                  sectionID: null,
                  page: null,
                  externalURL: 'externalURL',
                },
              ],
            },
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: null,
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { slug: '/' },
                  externalURL: null,
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
const parsedStandardHeader_NonDefaultLocale: HeaderData = {
  data: {
    header: [
      {
        ...standardHeaderBaseFields,
        menu: {
          links: [
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: { slug: '/en/' },
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { slug: '/en/otherpage1' },
                  externalURL: null,
                },
              ],
            },
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: {
                slug: '/en/otherpage2',
              },
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { slug: '/en/' },
                  externalURL: null,
                },
                {
                  label: 'label',
                  sectionID: null,
                  page: null,
                  externalURL: 'externalURL',
                },
              ],
            },
            {
              alignRight: false,
              label: 'label',
              sectionID: null,
              page: null,
              sublinks: [
                {
                  label: 'label',
                  sectionID: null,
                  page: { slug: '/en/' },
                  externalURL: null,
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
const standardHeader_MissingSublink: HeaderData = {
  data: {
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
                slug: 'homepage',
              },
              sublinks: [
                {
                  label: 'sublink1',
                  sectionID: null,
                  page: { slug: 'homepage' },
                  externalURL: null,
                },
                {
                  label: 'sublink1',
                  sectionID: null,
                  page: null,
                  externalURL: null,
                },
              ],
            },
          ],
        },
      },
    ],
  },
};

const megaHeader: HeaderData = {
  data: {
    header: [
      {
        ...megaHeaderBaseFields,
        menu: {
          trackSublinkClickEvent: null,
          links: [
            {
              label: 'label',
              ctaButton: {
                text: 'CTA',
                href: '/',
                variant: 'contained',
                size: 'medium',
                icon: null,
              },
              sublinkGroups: [
                {
                  title: 'group1',
                  sublinks: [
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: { slug: 'homepage' },
                      externalURL: null,
                      isNew: false,
                    },
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: {
                        slug: 'not-homepage',
                      },
                      externalURL: null,
                      isNew: false,
                    },
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: null,
                      externalURL: 'externalURL',
                      isNew: false,
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
};
const parsedMegaHeader_DefaultLocale: HeaderData = {
  data: {
    header: [
      {
        ...megaHeaderBaseFields,
        menu: {
          trackSublinkClickEvent: null,
          links: [
            {
              label: 'label',
              ctaButton: {
                text: 'CTA',
                href: '/',
                variant: 'contained',
                size: 'medium',
                icon: null,
              },
              sublinkGroups: [
                {
                  title: 'group1',
                  sublinks: [
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: { slug: '/' },
                      externalURL: null,
                      isNew: false,
                    },
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: {
                        slug: '/not-homepage',
                      },
                      externalURL: null,
                      isNew: false,
                    },
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: null,
                      externalURL: 'externalURL',
                      isNew: false,
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
};
const parsedMegaHeader_NonDefaultLocale: HeaderData = {
  data: {
    header: [
      {
        ...megaHeaderBaseFields,
        menu: {
          trackSublinkClickEvent: null,
          links: [
            {
              label: 'label',
              ctaButton: {
                text: 'CTA',
                href: '/',
                variant: 'contained',
                size: 'medium',
                icon: null,
              },
              sublinkGroups: [
                {
                  title: 'group1',
                  sublinks: [
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: { slug: '/en/' },
                      externalURL: null,
                      isNew: false,
                    },
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: {
                        slug: '/en/not-homepage',
                      },
                      externalURL: null,
                      isNew: false,
                    },
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: null,
                      externalURL: 'externalURL',
                      isNew: false,
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
};
const megaHeader_MissingSublink: HeaderData = {
  data: {
    header: [
      {
        ...megaHeaderBaseFields,
        menu: {
          trackSublinkClickEvent: null,
          links: [
            {
              label: 'label',
              ctaButton: {
                text: 'CTA',
                href: '/',
                variant: 'contained',
                size: 'medium',
                icon: null,
              },
              sublinkGroups: [
                {
                  title: 'group1',
                  sublinks: [
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: { slug: 'homepage' },
                      externalURL: null,
                      isNew: false,
                    },
                    {
                      label: 'sublink1',
                      sectionID: null,
                      page: null,
                      externalURL: null,
                      isNew: false,
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
};

const locale_it = 'it';
const locale_en = 'en';
const defaultLocale = 'it';

describe('formatHeaderLinks', () => {
  it('should replace the "homepage" slug with "/" in all levels of the standard menu, while not prepending the default locale', () => {
    const actual = formatHeaderLinks(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      standardHeader.data.header[0]!,
      locale_it,
      defaultLocale,
    );
    expect(actual).toStrictEqual(
      parsedStandardHeader_DefaultLocale.data.header[0],
    );
  });
  it('should replace the "homepage" slug with "/" in all levels of the mega menu, while not prepending the default locale', () => {
    const actual = formatHeaderLinks(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      megaHeader.data.header[0]!,
      locale_it,
      defaultLocale,
    );
    expect(actual).toStrictEqual(parsedMegaHeader_DefaultLocale.data.header[0]);
  });
  it('should replace the "homepage" slug with "/" in all levels of the standard menu, while prepending all non-default locales', () => {
    const actual = formatHeaderLinks(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      standardHeader.data.header[0]!,
      locale_en,
      defaultLocale,
    );
    expect(actual).toStrictEqual(
      parsedStandardHeader_NonDefaultLocale.data.header[0],
    );
  });
  it('should replace the "homepage" slug with "/" in all levels of the mega menu, while prepending all non-default locales', () => {
    const actual = formatHeaderLinks(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      megaHeader.data.header[0]!,
      locale_en,
      defaultLocale,
    );
    expect(actual).toStrictEqual(
      parsedMegaHeader_NonDefaultLocale.data.header[0],
    );
  });
});

describe('allSublinksNonEmpty', () => {
  it('should return false if any standard header sublink has neither a page nor external URL to which to link', () => {
    const actual = allSublinksNonEmpty(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      standardHeader_MissingSublink.data.header[0]!,
    );
    expect(actual).toStrictEqual(false);
  });

  it('should return false if any mega header sublink has neither a page nor external URL to which to link', () => {
    const actual = allSublinksNonEmpty(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      megaHeader_MissingSublink.data.header[0]!,
    );
    expect(actual).toStrictEqual(false);
  });

  it('should return true only if all sublinks link to a page or external URL', () => {
    const actual = allSublinksNonEmpty(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      megaHeader.data.header[0]!,
    );
    expect(actual).toStrictEqual(true);
  });
});
