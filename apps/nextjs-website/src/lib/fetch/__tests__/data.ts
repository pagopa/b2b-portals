import { Navigation } from '../navigation';

export const homepageNavItem: Navigation[0] = {
  order: 1,
  id: 1,
  title: 'Home',
  path: '/',
  parent: null,
  menuAttached: false,
  related: {
    id: 4,
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
>>>>>>> cb8a739 (Updated tests to include related field)
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
>>>>>>> cb8a739 (Updated tests to include related field)
  },
};
