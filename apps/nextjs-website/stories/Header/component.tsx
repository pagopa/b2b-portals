import { Header } from '@react-components/components';
import { Theme } from '@react-components/types/common/Common.types';
import { HeaderProps } from '@react-components/types/Header/Header.types';

export interface StorybookHeaderProps {
  beta: boolean;
  productName: string;
  logo: boolean;
  customLogo?: string | null; // Accepting null as a value to allow inserting the field into args to determine its order in the controls
  supportLink: boolean;
  drawer: 'full' | 'min' | 'none';
  menuLink_NoSublinks: boolean;
  menuLink_Sublinks: boolean;
}

const makeHeaderProps = ({
  beta,
  productName,
  logo,
  customLogo,
  supportLink,
  menuLink_NoSublinks,
  menuLink_Sublinks,
  drawer,
}: StorybookHeaderProps): HeaderProps => ({
  theme: 'light',
  beta,
  product: {
    name: productName,
    href: '#',
  },
  ...(logo && {
    logo: {
      src:
        customLogo ??
        'https://notifichedigitali.pagopa.it/static/images/logo.svg',
      alt: 'Logo',
      href: '#',
    },
  }),
  ...(supportLink && {
    supportLink: '#',
  }),
  menu: [
    ...(menuLink_NoSublinks
      ? [
          {
            label: 'Link senza sottolink',
            href: '#',
            theme: 'light' as Theme,
          },
        ]
      : []),
    ...(menuLink_Sublinks
      ? [
          {
            label: 'Link con sottolink',
            theme: 'light' as Theme,
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
        ]
      : []),
  ],
  ...(drawer === 'full' && {
    drawer: {
      buttonText: 'Apri Drawer',
      title: 'Titolo Drawer',
      subtitle: 'Sottotitolo Drawer',
      ctaCard: {
        title: 'Titolo Card CTA',
        subtitle: (
          <p>
            Sottotitolo Card CTA abilitato al <strong>markdown</strong>
          </p>
        ),
        buttonText: 'Bottone CTA',
        href: '#',
      },
      linkCards: [
        {
          title: 'Titolo Card Link 1',
          subtitle: (
            <p>
              Sottotitolo Card Link abilitato al <strong>markdown</strong>
            </p>
          ),
          buttonText: 'Bottone Card Link',
          href: '#',
          icons: [
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
          ],
        },
        {
          title: 'Titolo Card Link 2',
          subtitle: (
            <p>
              Sottotitolo Card Link abilitato al <strong>markdown</strong>
            </p>
          ),
          buttonText: 'Bottone Card Link',
          href: '#',
          icons: [
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
          ],
        },
        {
          title: 'Titolo Card Link 3',
          subtitle: (
            <p>
              Sottotitolo Card Link abilitato al <strong>markdown</strong>
            </p>
          ),
          buttonText: 'Bottone Card Link',
          href: '#',
          icons: [
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
          ],
        },
      ],
    },
  }),
  ...(drawer === 'min' && {
    drawer: {
      buttonText: 'Apri Drawer',
      title: 'Titolo Drawer',
      ctaCard: {
        title: 'Titolo Card CTA',
        subtitle: (
          <p>
            Sottotitolo Card CTA abilitato al <strong>markdown</strong>
          </p>
        ),
        buttonText: 'Bottone CTA',
        href: '#',
      },
      linkCards: [
        {
          title: 'Titolo Card Link',
          subtitle: (
            <p>
              Sottotitolo Card Link abilitato al <strong>markdown</strong>
            </p>
          ),
          buttonText: 'Bottone Card Link',
          href: '#',
          icons: [
            'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
          ],
        },
      ],
    },
  }),
});

export const StorybookHeader = (props: StorybookHeaderProps) => {
  return <Header {...makeHeaderProps(props)} />;
};
