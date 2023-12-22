import { type MenuDropdownProp } from '@pagopa/pagopa-editorial-components/dist/components/Header/components/MenuDropdown';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { Header } from './fetch/header';
import { Navigation } from './fetch/navigation';

const makeMenuItemFromNavItem = (
  item: Navigation[0],
  navigation: Navigation,
  theme: Header['data']['attributes']['theme']
): MenuDropdownProp => {
  const { title, path } = item;
  const itemsArray = navigation
    .filter((child) => child.parent?.id === item.id && child.menuAttached)
    .map((child) => ({
      href: `/${item.path}/${child.path}`,
      label: child.title,
    }));

  return {
    theme,
    label: title,
    href: `/${path}`,
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
        src:
          'http://localhost:1337' +
          header.data.attributes.avatar.data.attributes.url, // TODO: Replace localhost with MEDIA_LIBRARY_URL when merged
      },
    }),
  beta: header.data.attributes.beta,
  reverse: header.data.attributes.reverse,
  product: {
    name: header.data.attributes.productName,
    href: '/',
  },
  ...(header.data.attributes.ctaButtons && {
    ctaButtons: header.data.attributes.ctaButtons.map((ctaBtn) => ({
      ...ctaBtn,
      color: header.data.attributes.theme === 'dark' ? 'negative' : 'primary',
    })),
  }),
  menu: Array.from(
    makeMenuFromNavigation(navigation, header.data.attributes.theme)
  ),
});
