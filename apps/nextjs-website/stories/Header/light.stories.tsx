// Import the necessary modules
import { StoryFn, Meta } from '@storybook/react';
import { Header } from '@react-components/components';
import { HeaderProps } from '@react-components/types/Header/Header.types';

// Define the default export with metadata about your component
const meta: Meta<typeof Header> = {
  title: 'Components/Header/Light',
  component: Header,
};
export default meta;

// Define a "Template" function that sets how args map to rendering
const HeaderTemplate: StoryFn<HeaderProps> = (args) => <Header {...args} />;

// Define the default props
const defaultProps: HeaderProps = {
  theme: 'light',
  product: {
    name: 'Product Name',
    href: 'https://product.com',
  },
  menu: [
    {
      label: 'Menu Dropdown 1',
      active: true,
      theme: 'light',
      items: [
        {
          label: 'Dropdown Item 1',
          href: 'https://dropdown-item-1.com',
        },
        {
          label: 'Dropdown Item 2',
          href: 'https://dropdown-item-2.com',
        },
      ],
    },
    {
      label: 'Menu Dropdown 2',
      theme: 'light',
      items: [
        {
          label: 'Dropdown Item 3',
          href: 'https://dropdown-item-3.com',
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
    href: 'https://logo.com',
  },
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: 'https://cta-button-1.com',
    },
  ],
};

export const HeaderFullWithoutLogo: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullWithoutLogo.args = {
  ...defaultProps,
  avatar: {
    src: 'https://avatar.com/avatar.png',
    alt: 'Avatar',
  },
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: 'https://cta-button-1.com',
    },
  ],
};

export const HeaderFullWithoutLogoBeta: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullWithoutLogoBeta.args = {
  ...defaultProps,
  beta: true,
  avatar: {
    src: 'https://avatar.com/avatar.png',
    alt: 'Avatar',
  },
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: 'https://cta-button-1.com',
    },
  ],
};

export const HeaderFullWithOnlyName: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullWithOnlyName.args = {
  ...defaultProps,
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: 'https://cta-button-1.com',
    },
  ],
};

export const HeaderFullWithOnlyNameBeta: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullWithOnlyNameBeta.args = {
  ...defaultProps,
  beta: true,
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: 'https://cta-button-1.com',
    },
  ],
};

export const HeaderFullNoCtaButtonWithLogo: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullNoCtaButtonWithLogo.args = {
  ...defaultProps,
  logo: {
    src: 'https://notifichedigitali.pagopa.it/static/images/logo.svg',
    alt: 'Logo',
    href: 'https://logo.com',
  },
};

export const HeaderFullNoCtaButtonWithoutLogo: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullNoCtaButtonWithoutLogo.args = {
  ...defaultProps,
  avatar: {
    src: 'https://avatar.com/avatar.png',
    alt: 'Avatar',
  },
};

export const HeaderFullNoCtaButtonWithoutLogoBeta: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullNoCtaButtonWithoutLogoBeta.args = {
  ...defaultProps,
  beta: true,
  avatar: {
    src: 'https://avatar.com/avatar.png',
    alt: 'Avatar',
  },
};

export const HeaderFullNoCtaButtonOnlyName: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullNoCtaButtonOnlyName.args = {
  ...defaultProps,
};

export const HeaderFullNoCtaButtonOnlyNameBeta: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullNoCtaButtonOnlyNameBeta.args = {
  ...defaultProps,
  beta: true,
};

export const HeaderFullWithLogoWithoutMenu: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullWithLogoWithoutMenu.args = {
  ...defaultProps,
  logo: {
    src: 'https://notifichedigitali.pagopa.it/static/images/logo.svg',
    alt: 'Logo',
    href: 'https://logo.com',
  },
  menu: [],
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: 'https://cta-button-1.com',
    },
  ],
};

export const HeaderFullWithoutLogoWithoutMenu: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullWithoutLogoWithoutMenu.args = {
  ...defaultProps,
  avatar: {
    src: 'https://avatar.com/avatar.png',
    alt: 'Avatar',
  },
  menu: [],
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: 'https://cta-button-1.com',
    },
  ],
};

export const HeaderFullWithoutLogoBetaWithoutMenu: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullWithoutLogoBetaWithoutMenu.args = {
  ...defaultProps,
  beta: true,
  avatar: {
    src: 'https://avatar.com/avatar.png',
    alt: 'Avatar',
  },
  menu: [],
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: 'https://cta-button-1.com',
    },
  ],
};

export const HeaderFullOnlyNameWithoutMenu: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullOnlyNameWithoutMenu.args = {
  ...defaultProps,
  menu: [],
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: 'https://cta-button-1.com',
    },
  ],
};

export const HeaderFullOnlyNameBetaWithoutMenu: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullOnlyNameBetaWithoutMenu.args = {
  ...defaultProps,
  beta: true,
  menu: [],
  ctaButtons: [
    {
      text: 'CTA Button 1',
      href: 'https://cta-button-1.com',
    },
  ],
};

export const HeaderFullNoCtaButtonWithLogoWithoutMenu: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullNoCtaButtonWithLogoWithoutMenu.args = {
  ...defaultProps,
  logo: {
    src: 'https://notifichedigitali.pagopa.it/static/images/logo.svg',
    alt: 'Logo',
    href: 'https://logo.com',
  },
  menu: [],
};

export const HeaderFullNoCtaButtonWithoutLogoWithoutMenu: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullNoCtaButtonWithoutLogoWithoutMenu.args = {
  ...defaultProps,
  avatar: {
    src: 'https://avatar.com/avatar.png',
    alt: 'Avatar',
  },
  menu: [],
};

export const HeaderFullNoCtaButtonWithoutLogoBetaWithoutMenu: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullNoCtaButtonWithoutLogoBetaWithoutMenu.args = {
  ...defaultProps,
  beta: true,
  avatar: {
    src: 'https://avatar.com/avatar.png',
    alt: 'Avatar',
  },
  menu: [],
};

export const HeaderFullNoCtaButtonOnlyNameWithoutMenu: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullNoCtaButtonOnlyNameWithoutMenu.args = {
  ...defaultProps,
  menu: [],
};

export const HeaderFullNoCtaButtonOnlyNameBetaWithoutMenu: StoryFn<typeof Header> = HeaderTemplate.bind({});
HeaderFullNoCtaButtonOnlyNameBetaWithoutMenu.args = {
  ...defaultProps,
  beta: true,
  menu: [],
};