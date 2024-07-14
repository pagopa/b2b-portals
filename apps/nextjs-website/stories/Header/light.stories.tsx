import { StoryFn, Meta } from '@storybook/react';
import { Header } from '@react-components/components';
import { HeaderProps } from '@react-components/types/Header/Header.types';

const meta: Meta<typeof Header> = {
  title: 'Components/Header/Light',
  component: Header,
};
export default meta;

const HeaderTemplate: StoryFn<HeaderProps> = (args) => <Header {...args} />;

const defaultProps: HeaderProps = {
  theme: 'light',
  product: {
    name: 'Product Name',
    href: '#product-name',
  },
  menu: [
    {
      label: 'Menu Dropdown 1',
      active: true,
      theme: 'light',
      items: [
        {
          label: 'Dropdown Item 1',
          href: '#item-1',
        },
        {
          label: 'Dropdown Item 2',
          href: '#item-2',
        },
      ],
    },
    {
      label: 'Menu Dropdown 2',
      theme: 'light',
      items: [
        {
          label: 'Dropdown Item 3',
          href: '#item-3',
        },
      ],
    },
  ],
};

export const HeaderFullWithLogo: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullWithLogo.args = {
  ...defaultProps,
  logo: {
    src: 'https://notifichedigitali.pagopa.it/static/images/logo.svg',
    alt: 'Logo',
    href: '#',
  },
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: '#cta-1',
    },
  ],
};

export const HeaderFullWithoutLogoBeta: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullWithoutLogoBeta.args = {
  ...defaultProps,
  beta: true,
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: '#cta-1-beta',
    },
  ],
};