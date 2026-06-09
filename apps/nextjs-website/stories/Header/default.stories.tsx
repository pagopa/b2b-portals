import { StoryFn, Meta } from '@storybook/react';
import { HeaderProps } from '@react-components/types';
import { Header } from '@react-components/components';

const meta: Meta<typeof Header> = {
  title: 'Components/Header/Default',
  component: Header,
};
export default meta;

const HeaderTemplate: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const HeaderFull: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFull.args = {
  theme: 'dark',
  themeVariant: 'WALLET',
  product: {
    name: 'IT-Wallet',
    href: '#',
  },
  logo: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/logo_sedn_6453fc30cd.svg',
    alt: 'Logo',
    href: '#',
  },
  topBarHeaderLogo: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/logo_sedn_6453fc30cd.svg',
    alt: 'Logo',
    href: '#',
  },
  topBarHeaderTitle: 'TITOLO LUNGO',
  topBarHeaderTitleMobile: 'TITOLO',
  topBarHeaderLink: '#',
  defaultLocale: 'it',
  activeLanguage: {
    id: 'it',
    value: 'italiano',
    href: '#',
  },
  languages: [
    { id: 'it', value: 'italiano', href: '#' },
    { id: 'en', value: 'inglese', href: '#' },
  ],
  menu: [
    {
      label: 'Link senza sottolink',
      href: '#',
      theme: 'dark',
    },
    {
      label: 'Link con sottolink',
      theme: 'dark',
      items: [
        {
          label: 'Sottolink 1',
          href: '#',
        },
        {
          label: 'Sottolink 2',
          href: '#',
        },
        {
          label: 'Sottolink 3',
          href: '#',
        },
      ],
    },
  ],
  labels: {
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
    shortMainMenu: 'Menu',
    mainMenu: 'Menu principale',
  },
};
