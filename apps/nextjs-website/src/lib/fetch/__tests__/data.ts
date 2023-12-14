import { Navigation } from '../navigation';

export const homepageNavItem: Navigation[0] = {
  order: 1,
  id: 1,
  title: 'Home',
  path: '/',
  parent: null,
  menuAttached: false,
  related: {
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
  path: 'parent',
  parent: null,
  menuAttached: true,
  related: {
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
  path: 'child',
  parent: parentNavItem,
  menuAttached: true,
  related: {
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
