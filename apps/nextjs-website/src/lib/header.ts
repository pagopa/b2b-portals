import { type MenuDropdownProp } from '@pagopa/pagopa-editorial-components/dist/components/Header/components/MenuDropdown';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { Header } from './fetch/header';
import { Navigation } from './fetch/navigation';

const makeMenuItemFromNavItem = (
  item: Navigation[0],
  navigation: Navigation,
  theme: Header['data']['attributes']['theme']
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
  theme: Header['data']['attributes']['theme']
): ReadonlyArray<MenuDropdownProp> =>
  navigation
    .filter((item) => !item.parent && item.menuAttached)
    .map((item) => makeMenuItemFromNavItem(item, navigation, theme));

export const makeHeaderProps = (
  navigation: Navigation,
  header: Header
): HeaderProps => ({
  theme: header.data.attributes.theme,
  ...(header.data.attributes.avatar &&
    header.data.attributes.avatar.data && {
      avatar: {
        src: header.data.attributes.avatar.data.attributes.url,
      },
    }),
  beta: header.data.attributes.beta,
  reverse: header.data.attributes.reverse,
  product: {
    name: header.data.attributes.productName,
    href: '/',
  },
  ...(header.data.attributes.ctaButtons && {
    ctaButtons: header.data.attributes.ctaButtons,
  }),
  menu: Array.from(
    makeMenuFromNavigation(navigation, header.data.attributes.theme)
  ),
});
