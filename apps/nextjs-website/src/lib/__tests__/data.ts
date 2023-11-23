export const parentNavItem = {
  order: 1,
  id: 1,
  title: 'Parent',
  path: 'parent',
  parent: null,
  menuAttached: true,
};

export const childNavItem = {
  order: 1,
  id: 2,
  title: 'Child',
  path: 'child',
  parent: parentNavItem,
  menuAttached: true,
};
