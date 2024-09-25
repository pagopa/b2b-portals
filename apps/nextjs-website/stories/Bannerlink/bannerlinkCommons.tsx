import { StoryFn } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';

export const BannerLinkTemplate: StoryFn<BannerLinkProps> = (args) => (
  <BannerLink {...args} />
);

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
      iconURL:
        'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
      ctaButtons: [
        {
          text: 'Scrivici',
          variant: 'contained',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
        },
      ],
    },
  ],
  theme,
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
      iconURL:
        'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
      ctaButtons: [
        {
          text: 'Scrivici',
          variant: 'contained',
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
      iconURL:
        'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
      ctaButtons: [
        {
          text: 'Chiamaci',
          variant: 'contained',
          href: 'tel:0645202323',
        },
      ],
    },
  ],
  theme,
});

export const defaultPropsTwoColumnsLight = generateTwoColumnProps('light');
export const defaultPropsTwoColumnsDark = generateTwoColumnProps('dark');
