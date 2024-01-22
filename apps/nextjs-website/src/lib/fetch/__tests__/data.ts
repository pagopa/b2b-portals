import { Navigation } from '../navigation';

export const homepageNavItem: Navigation[0] = {
  order: 1,
  id: 1,
  title: 'Home',
  parent: null,
  menuAttached: false,
  related: {
    slug: 'homepage',
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
        useHoverlay: true,
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
    sections: [
      {
        __component: 'sections.editorial',
        image: null,
        ctaButtons: [],
        sectionID: null,
        theme: 'light',
        title: 'light',
        body: 'body',
        eyelet: 'eyelet',
        pattern: 'dots',
        reversed: false,
        width: 'standard',
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
        useHoverlay: true,
      },
    ],
  },
};
