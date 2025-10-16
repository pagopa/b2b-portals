import { StoryFn } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';

export const BannerLinkTemplate: StoryFn<BannerLinkProps> = (args) => (
  <BannerLink {...args} />
);

const getIcon = (theme: 'light' | 'dark') =>
  theme === 'light'
    ? 'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_45a3f353d1.svg'
    : 'https://d2mk0pc4ejgxx6.cloudfront.net/dark_icon_dee9ab4f99.svg';

const generateDefaultProps = (
  theme: 'light' | 'dark'
): Partial<BannerLinkProps> => ({
  sections: [
    {
      title: 'Scrivici',
      body: (
        <p>
          Richiedi assistenza via email scrivendo a{' '}
          <a href='#'>destinatari-send@assistenza.pagopa.it</a>: includi
          informazioni utili come il codice univoco della notifica (IUN)
        </p>
      ),
      iconURL: getIcon(theme),
      ctaButtons: [
        {
          text: 'Scrivici',
          variant: 'contained',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
        },
        {
          text: 'Scrivici',
          variant: 'outlined',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
        },
      ],
    },
  ],
  theme,
  themeVariant: 'SEND',
});

export const defaultPropsLight = generateDefaultProps('light');
export const defaultPropsDark = generateDefaultProps('dark');

const generateTwoColumnProps = (
  theme: 'light' | 'dark'
): Partial<BannerLinkProps> => ({
  sections: [
    {
      title: 'Scrivici',
      body: (
        <p>
          Richiedi assistenza via email scrivendo a{' '}
          <a href='#'>destinatari-send@assistenza.pagopa.it</a>: includi
          informazioni utili come il codice univoco della notifica (IUN)
        </p>
      ),
      iconURL: getIcon(theme),
      ctaButtons: [
        {
          text: 'Scrivici',
          variant: 'contained',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
        },
        {
          text: 'Scrivici',
          variant: 'outlined',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
        },
      ],
    },
    {
      title: 'Chiamaci',
      body: (
        <p>
          Il contact center di PagoPA S.p.A. è a tua disposizione al numero{' '}
          <a href='#'>06.4520.2323</a> per assistenza dedicata dal lunedì al
          venerdì dalle 08:00 alle 20:00 e il sabato dalle 08:00 alle 14:00.
        </p>
      ),
      iconURL: getIcon(theme),
      ctaButtons: [
        {
          text: 'Chiamaci',
          variant: 'contained',
          href: 'tel:0645202323',
        },
        {
          text: 'Chiamaci',
          variant: 'outlined',
          href: 'tel:0645202323',
        },
      ],
    },
  ],
  theme,
  themeVariant: 'SEND',
});

export const defaultPropsTwoColumnsLight = generateTwoColumnProps('light');
export const defaultPropsTwoColumnsDark = generateTwoColumnProps('dark');
