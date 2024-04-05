import { Navigation } from '../navigation';

export const homepageNavItem: Navigation[0] = {
  order: 1,
  id: 1,
  title: 'Home',
  parent: null,
  menuAttached: false,
  related: {
    slug: 'homepage',
    seo: {
      metaTitle: 'SEND - PagoPA',
      metaDescription: 'Homepage description',
      keywords: 'homepage1\nhomepage2\nhomepage3',
      canonicalURL: 'https://dsf3knok9k0v5.cloudfront.net/homepage-canonical',
      ogTitle: 'Homepage og title',
      ogDescription: 'Homepage og description',
    },
    sections: [
      {
        __component: 'sections.hero',
        image: null,
        background: null,
        ctaButtons: [],
        inverse: false,
        sectionID: null,
        size: 'small',
        subtitle: 'subtitle',
        theme: 'light',
        title: 'light',
      },
    ],
  },
};

export const parentNavItem: Navigation[0] = {
  order: 2,
  id: 2,
  title: 'Parent',
  parent: null,
  menuAttached: true,
  related: {
    slug: 'parent',
    seo: {
      metaTitle: 'SEND - Parent',
      metaDescription: 'Parent description',
      keywords: 'parent1\nparent2\nparent3',
      canonicalURL: 'https://dsf3knok9k0v5.cloudfront.net/parent-canonical',
      ogTitle: 'Parent og title',
      ogDescription: 'Parent og description',
    },
    sections: [
      {
        __component: 'sections.editorial',
        image: {
          url: 'someUrl',
          alternativeText: null,
          width: 1000,
          height: 1000,
          mime: 'image/jpeg',
        },
        ctaButtons: [],
        sectionID: null,
        theme: 'light',
        title: 'light',
        body: 'body',
        eyelet: 'eyelet',
        pattern: 'dots',
        reversed: false,
        width: 'standard',
        storeButtons: null,
      },
    ],
  },
};

export const childNavItem: Navigation[0] = {
  order: 3,
  id: 3,
  title: 'Child',
  parent: parentNavItem,
  menuAttached: true,
  related: {
    slug: 'child',
    seo: {
      metaTitle: 'SEND - Child',
      metaDescription: 'Child description',
      keywords: 'child1\nchild2\nchild3',
      canonicalURL: 'https://dsf3knok9k0v5.cloudfront.net/child-canonical',
      ogTitle: 'Child og title',
      ogDescription: 'Child og description',
    },
    sections: [
      {
        __component: 'sections.hero',
        image: null,
        background: null,
        ctaButtons: [],
        inverse: false,
        sectionID: null,
        size: 'small',
        subtitle: 'subtitle',
        theme: 'light',
        title: 'light',
      },
    ],
  },
};
