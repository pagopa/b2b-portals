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
      content: {
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
    },
    {
      id: 2,
      buttonText: 'Button 2',
      content: {
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
    },
    {
      id: 3,
      buttonText: 'Button 3',
      content: {
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
    },
  ],
});

export const defaultPropsDark = generateDefaultProps('dark');
export const defaultPropsLight = generateDefaultProps('light');
