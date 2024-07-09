import { StoryFn } from '@storybook/react';
import { BannerLink } from '@react-components/components';
import { BannerLinkProps } from '@react-components/types';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

export const BannerLinkTemplate: StoryFn<BannerLinkProps> = (args) => <BannerLink {...args} />;

const generateDefaultProps = (theme: 'light' | 'dark'): Partial<BannerLinkProps> => ({
  sections: [
    {
      title: 'Scrivici',
      normalText: 'Richiedi assistenza via email scrivendo a',
      boldText: 'destinatari-send@assistenza.pagopa.it',
      extraNormalText: ': includi informazioni utili come il codice univoco della notifica (IUN).',
      link: 'mailto:destinatari-send@assistenza.pagopa.it',
      icon: <MailIcon style={{ fontSize: 60 }} />,
      ctaButtons: [
        {
          text: 'Scrivici',
          variant: 'contained',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
        }
      ],
    }
  ],
  theme,
});

export const defaultPropsLight = generateDefaultProps('light');
export const defaultPropsDark = generateDefaultProps('dark');

const generateTwoColumnProps = (theme: 'light' | 'dark'): Partial<BannerLinkProps> => ({
  sections: [
    {
      title: 'Scrivici',
      normalText: 'Richiedi assistenza via email scrivendo a',
      boldText: 'destinatari-send@assistenza.pagopa.it',
      extraNormalText: ': includi informazioni utili come il codice univoco della notifica (IUN).',
      link: 'mailto:destinatari-send@assistenza.pagopa.it',
      icon: <MailIcon style={{ fontSize: 60 }} />,
      ctaButtons: [
        {
          text: 'Scrivici',
          variant: 'contained',
          href: 'mailto:destinatari-send@assistenza.pagopa.it',
        }
      ],
    },
    {
      title: 'Chiamaci',
      normalText: 'Il contact center di PagoPA S.p.A. è a tua disposizione al numero',
      boldText: '06.4520.2323',
      extraNormalText: ' per assistenza dedicata dal lunedì al venerdì dalle 08:00 alle 20:00 e il sabato dalle 08:00 alle 14:00.',
      link: 'tel:0645202323',
      icon: <PhoneIcon style={{ fontSize: 60 }} />,
      ctaButtons: [
        {
          text: 'Chiamaci',
          variant: 'contained',
          href: 'tel:0645202323',
        }
      ],
    }
  ],
  theme,
});

export const defaultPropsTwoColumnsLight = generateTwoColumnProps('light');
export const defaultPropsTwoColumnsDark = generateTwoColumnProps('dark');
