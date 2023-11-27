import { Navigation } from '../navigation';

export const homepageNavItem: Navigation[0] = {
  order: 1,
  id: 1,
  title: 'Home',
  path: '/',
  parent: null,
  menuAttached: false,
};

export const parentNavItem: Navigation[0] = {
  order: 2,
  id: 2,
  title: 'Parent',
  path: 'parent',
  parent: null,
  related: {
    id: 1,
    slug: "Home",
},
  menuAttached: true,
};

export const childNavItem: Navigation[0] = {
  order: 3,
  id: 3,
  title: 'Child',
  path: 'child',
  parent: parentNavItem,
  menuAttached: true,
};
