import { Navigation } from '../navigation';

export const homepageNavItem: Navigation[0] = {
  order: 1,
  id: 1,
  title: 'Home',
  path: '/',
  parent: null,
  menuAttached: false,
  related: {
<<<<<<< HEAD
    id: 4,
=======
    id: 1,
>>>>>>> 1a8a2815e644a0f2108205263f3393fc94792e6e
    slug: '/',
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
<<<<<<< HEAD
    id: 5,
    slug: 'parent-slug',
=======
    id: 2,
    slug: 'parent',
>>>>>>> 1a8a2815e644a0f2108205263f3393fc94792e6e
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
<<<<<<< HEAD
    id: 6,
    slug: 'child-slug',
=======
    id: 3,
    slug: 'child',
>>>>>>> 1a8a2815e644a0f2108205263f3393fc94792e6e
  },
};
