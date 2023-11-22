import { type MenuDropdownProp } from '@pagopa/pagopa-editorial-components/dist/components/Header/components/MenuDropdown';
import { Navigation } from './fetch/navigation';

const makeMenuItemFromNavItem = (
  item: Navigation[0],
  navigation: Navigation,
  theme: 'light' | 'dark'
): MenuDropdownProp => {
  const { title, path } = item;
  const itemsArray = navigation
    .filter(
      (child) =>
        child.parent && child.parent.id === item.id && child.menuAttached
    )
    .map((child) => ({
      href: '/' + item.path + '/' + child.path,
      label: child.title,
    }));

  return {
    theme,
    label: title,
    href: '/' + path,
    ...(itemsArray.length > 0 && { items: itemsArray }),
  };
};

export const makeMenuFromNavigation = (
  navigation: Navigation,
  theme: 'light' | 'dark'
): ReadonlyArray<MenuDropdownProp> =>
  navigation
    .filter((item) => !item.parent && item.menuAttached)
    .map((item) => makeMenuItemFromNavItem(item, navigation, theme));
