import { Header } from './fetch/header';
import { Navigation } from './fetch/navigation';
import {
  MenuDropdownProp,
  NavigationProps,
} from '@react-components/types/Header/Header.types';

export type HeaderWithNavigation = Header['data']['attributes'] &
  NavigationProps;

const makeMenuItemFromNavItem = (
  item: Navigation[0],
  navigation: Navigation,
  theme: 'light' | 'dark'
): MenuDropdownProp => {
  const { title, related } = item;
  const itemsArray = navigation
    .filter((child) => child.parent?.id === item.id && child.menuAttached)
    .map((child) => ({
      href: `/${item.related.slug}/${child.related.slug}`,
      label: child.title,
    }));

  return {
    theme,
    label: title,
    href: `/${related.slug}`,
    ...(itemsArray.length > 0 && { items: itemsArray }),
  };
};

const makeMenuFromNavigation = (
  navigation: Navigation,
  theme: 'light' | 'dark'
): ReadonlyArray<MenuDropdownProp> =>
  navigation
    .filter((item) => !item.parent && item.menuAttached)
    .map((item) => makeMenuItemFromNavItem(item, navigation, theme));

export const makeHeaderWithNavigation = (
  navigation: Navigation,
  header: Header
): HeaderWithNavigation => ({
  theme: 'light',
  ...header.data.attributes,
  menu: Array.from(makeMenuFromNavigation(navigation, 'light')),
});
