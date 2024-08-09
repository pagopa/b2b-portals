import { StoryFn } from '@storybook/react';
import { PageSwitch } from '@react-components/components';
import { PageSwitchProps } from '@react-components/types';
import MailIcon from '@mui/icons-material/Mail';

export const PageSwitchTemplate: StoryFn<PageSwitchProps> = (args) => (
  <PageSwitch {...args} />
);

const generateDefaultProps = (theme: 'light' | 'dark'): Partial<PageSwitchProps> => ({
  theme,
  title: 'Top Title',
  subtitle: [{ text: 'Top Subtitle', link: null }],
  sections: [
    {
      id: 1,
      buttonText: 'Button 1',
      contents: [
        {
          type: 'Editorial',
          props: {
            theme: 'light',
            title: 'Editorial 1',
            body: 'Light Editorial',
            width: 'standard',
            image: <img src="https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png" alt="placeholder" />,
            mobileImage: <img src="https://notifichedigitali.pagopa.it/static/images/pi-infoblock-1.png" alt="placeholder" />,
          },
        },
        {
          type: 'Cards',
          props: {
            theme: 'dark',
            items: [
              {
                title: 'Card 1',
                text: 'This is card 1',
                cardIcon: { icon: 'AccessAlarm' },
              },
              {
                title: 'Card 2',
                text: 'This is card 2',
                cardIcon: { icon: 'AccessAlarm' },
              },
            ],
            text: {
              title: 'Cards',
              subtitle: 'Cards subtitle',
              body: 'Cards Body',
            },
          },
        },
        {
          type: 'BannerLink',
          props: {
            theme: 'light',
            sections: [
              {
                title: 'Scrivici',
                body: (
                  <p>
                    Richiedi assistenza via email scrivendo a{' '}
                    <a href="mailto:destinatari-send@assistenza.pagopa.it">
                      destinatari-send@assistenza.pagopa.it
                    </a>
                  </p>
                ),
                icon: <MailIcon style={{ fontSize: 60 }} />,
                ctaButtons: [
                  {
                    text: 'Scrivici',
                    variant: 'contained',
                    href: 'mailto:destinatari-send@assistenza.pagopa.it',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 2,
      buttonText: 'Button 2',
      contents: [
        {
          type: 'Editorial',
          props: {
            theme: 'dark',
            title: 'Editorial 2',
            body: 'Dark Editorial',
            width: 'standard',
            image: <img src="https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png" alt="placeholder" />,
            mobileImage: <img src="https://notifichedigitali.pagopa.it/static/images/pi-infoblock-1.png" alt="placeholder" />,
          },
        },
        {
          type: 'Cards',
          props: {
            theme: 'light',
            items: [
              {
                title: 'Card 3',
                text: 'This is card 3',
                cardIcon: { icon: 'AccessAlarm' },
              },
              {
                title: 'Card 4',
                text: 'This is card 4',
                cardIcon: { icon: 'AccessAlarm' },
              },
            ],
            text: {
              title: 'Cards 2',
              subtitle: 'Cards subtitle 2',
              body: 'Cards Body 2',
            },
          },
        },
        {
          type: 'BannerLink',
          props: {
            theme: 'dark',
            sections: [
              {
                title: 'Contattaci',
                body: (
                  <p>
                    Richiedi assistenza via email scrivendo a{' '}
                    <a href="mailto:destinatari-send@assistenza.pagopa.it">
                      destinatari-send@assistenza.pagopa.it
                    </a>
                  </p>
                ),
                icon: <MailIcon style={{ fontSize: 60 }} />,
                ctaButtons: [
                  {
                    text: 'Contattaci',
                    variant: 'contained',
                    href: 'mailto:destinatari-send@assistenza.pagopa.it',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 3,
      buttonText: 'Button 3',
      contents: [
        {
          type: 'Editorial',
          props: {
            theme: 'light',
            title: 'Editorial 3',
            body: 'Light Editorial 3',
            width: 'standard',
            image: <img src="https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png" alt="placeholder" />,
            mobileImage: <img src="https://notifichedigitali.pagopa.it/static/images/pi-infoblock-1.png" alt="placeholder" />,
          },
        },
        {
          type: 'Cards',
          props: {
            theme: 'dark',
            items: [
              {
                title: 'Card 5',
                text: 'This is card 5',
                cardIcon: { icon: 'AccessAlarm' },
              },
              {
                title: 'Card 6',
                text: 'This is card 6',
                cardIcon: { icon: 'AccessAlarm' },
              },
            ],
            text: {
              title: 'Cards 3',
              subtitle: 'Cards subtitle 3',
              body: 'Cards Body 3',
            },
          },
        },
        {
          type: 'BannerLink',
          props: {
            theme: 'light',
            sections: [
              {
                title: 'Aiuto',
                body: (
                  <p>
                    Richiedi assistenza via email scrivendo a{' '}
                    <a href="mailto:destinatari-send@assistenza.pagopa.it">
                      destinatari-send@assistenza.pagopa.it
                    </a>
                  </p>
                ),
                icon: <MailIcon style={{ fontSize: 60 }} />,
                ctaButtons: [
                  {
                    text: 'Aiuto',
                    variant: 'contained',
                    href: 'mailto:destinatari-send@assistenza.pagopa.it',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
});

export const defaultPropsDark = generateDefaultProps('dark');
export const defaultPropsLight = generateDefaultProps('light');
