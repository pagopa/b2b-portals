import { Header } from './fetch/header';
import { Navigation } from './fetch/navigation';
import {
  // MenuDropdownProp,
  NavigationProps,
} from '@react-components/types/Header/Header.types';

export type HeaderWithNavigation = Header['data']['attributes'] &
  NavigationProps;

export const makeHeaderWithNavigation = (
  navigation: Navigation,
  header: Header
): HeaderWithNavigation => ({
  theme: 'light',
  ...header.data.attributes,
  // TODO: Remove below comment when header is implemented
  // eslint-disable-next-line
  menu: navigation.data.length <= 0 ? (navigation.data as []) : [],
});
