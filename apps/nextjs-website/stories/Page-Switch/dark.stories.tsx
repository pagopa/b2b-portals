import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PageSwitch } from '@react-components/components';
import { PageSwitchProps } from '@react-components/types';
import { defaultPropsDark } from './pageSwitchCommons';

const meta: Meta<typeof PageSwitch> = {
  title: 'Components/PageSwitch/Dark',
  component: PageSwitch,
};
export default meta;

const PageSwitchTemplate: StoryFn<PageSwitchProps> = (args) => (
  <PageSwitch {...args} />
);

export const Default: StoryFn<typeof PageSwitch> = PageSwitchTemplate.bind({});
Default.args = {
  ...defaultPropsDark,
  sections: [
    {
      id: 1,
      buttonText: 'Button 1',
      contents: [
        {
          type: 'Editorial',
          props: {
            theme: 'dark',
            title: 'Editorial 1',
            body: 'Light Editorial',
            width: 'standard',
            image: (
              <img
                src='https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png'
                alt='placeholder'
              />
            ),
            mobileImage: (
              <img
                src='https://notifichedigitali.pagopa.it/static/images/pi-infoblock-1.png'
                alt='placeholder'
              />
            ),
            sectionID: '',
            themeVariant: 'SEND',
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
                iconURL:
                  'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
              },
              {
                title: 'Card 2',
                text: 'This is card 2',
                iconURL:
                  'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
              },
            ],
            text: {
              title: 'Cards',
              subtitle: 'Cards subtitle',
              body: 'Cards Body',
            },
            sectionID: '',
            textPosition: 'left',
            themeVariant: 'SEND',
          },
        },
        {
          type: 'BannerLink',
          props: {
            theme: 'dark',
            sections: [
              {
                title: 'Scrivici',
                body: (
                  <p>
                    Richiedi assistenza via email scrivendo a{' '}
                    <a href='mailto:destinatari-send@assistenza.pagopa.it'>
                      destinatari-send@assistenza.pagopa.it
                    </a>
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
            sectionID: '',
            themeVariant: 'SEND',
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
            image: (
              <img
                src='https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png'
                alt='placeholder'
              />
            ),
            mobileImage: (
              <img
                src='https://notifichedigitali.pagopa.it/static/images/pi-infoblock-1.png'
                alt='placeholder'
              />
            ),
            sectionID: '',
            themeVariant: 'SEND',
            reversed: true,
          },
        },
        {
          type: 'Cards',
          props: {
            theme: 'dark',
            items: [
              {
                title: 'Card 3',
                text: 'This is card 3',
                iconURL:
                  'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
              },
            ],
            text: {
              title: 'Cards 2',
              subtitle: 'Cards subtitle 2',
              body: 'Cards Body 2',
            },
            sectionID: '',
            textPosition: 'left',
            themeVariant: 'SEND',
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
                    <a href='mailto:destinatari-send@assistenza.pagopa.it'>
                      destinatari-send@assistenza.pagopa.it
                    </a>
                  </p>
                ),
                iconURL:
                  'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
                ctaButtons: [
                  {
                    text: 'Contattaci',
                    variant: 'contained',
                    href: 'mailto:destinatari-send@assistenza.pagopa.it',
                  },
                ],
              },
            ],
            sectionID: '',
            themeVariant: 'SEND',
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
            theme: 'dark',
            title: 'Editorial 3',
            body: 'Light Editorial 3',
            width: 'standard',
            image: (
              <img
                src='https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png'
                alt='placeholder'
              />
            ),
            mobileImage: (
              <img
                src='https://notifichedigitali.pagopa.it/static/images/pi-infoblock-1.png'
                alt='placeholder'
              />
            ),
            sectionID: '',
            themeVariant: 'SEND',
          },
        },
        {
          type: 'Cards',
          props: {
            theme: 'dark',
            items: [
              {
                title: 'Card 4',
                text: 'This is card 4',
                iconURL:
                  'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
              },
              {
                title: 'Card 5',
                text: 'This is card 5',
                iconURL:
                  'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
              },
            ],
            text: {
              title: 'Cards 3',
              subtitle: 'Cards subtitle 3',
              body: 'Cards Body 3',
            },
            sectionID: '',
            textPosition: 'left',
            themeVariant: 'SEND',
          },
        },
        {
          type: 'BannerLink',
          props: {
            theme: 'dark',
            sections: [
              {
                title: 'Aiuto',
                body: (
                  <p>
                    Richiedi assistenza via email scrivendo a{' '}
                    <a href='mailto:destinatari-send@assistenza.pagopa.it'>
                      destinatari-send@assistenza.pagopa.it
                    </a>
                  </p>
                ),
                iconURL:
                  'https://d2mk0pc4ejgxx6.cloudfront.net/light_icon_f76dbe7883.svg',
                ctaButtons: [
                  {
                    text: 'Aiuto',
                    variant: 'contained',
                    href: 'mailto:destinatari-send@assistenza.pagopa.it',
                  },
                ],
              },
            ],
            sectionID: '',
            themeVariant: 'SEND',
          },
        },
      ],
    },
  ],
};
