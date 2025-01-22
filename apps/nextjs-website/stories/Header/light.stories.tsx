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
  beta: false,
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

export const HeaderFullWithLogo: StoryFn<typeof Header> = HeaderTemplate.bind(
  {}
);
HeaderFullWithLogo.args = {
  ...defaultProps,
  logo: {
    src: 'https://notifichedigitali.pagopa.it/static/images/logo.svg',
    alt: 'Logo',
    href: '#',
  },
  beta: true,
  supportLink: '/assistenza',
  drawer: {
    buttonText: 'Accedi',
    title: 'Accedi a SEND',
    ctaCard: {
      title: 'Sei un Ente?',
      subtitle: (
        <p>
          Il tuo ente non ha ancora aderito? <a href='/'>Scopri come aderire</a>
        </p>
      ),
      buttonText: 'Scopri di più',
      href: '#',
    },
    linkCards: [
      {
        title: 'Cittadini',
        subtitle: (
          <p>
            Accedi come persona fisica, libero professionista o ditta
            individuale.
          </p>
        ),
        buttonText: 'Accedi',
        href: '#',
        stackIcon: 'People',
      },
      {
        title: 'Imprese',
        subtitle: <p>Accedi come persona giuridica</p>,
        buttonText: 'Accedi',
        href: '#',
        stackIcon: 'Business',
      },
    ],
  },
};
