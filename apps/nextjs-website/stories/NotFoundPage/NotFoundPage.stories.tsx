import { Meta, StoryFn } from '@storybook/react';
import NotFoundPage from '@react-components/components/NotFoundPage/NotFoundPage';
import { NotFoundPageProps } from '@react-components/types/NotFoundPage/NotFoundPage.types';

const meta: Meta<typeof NotFoundPage> = {
  title: 'Components/NotFoundPage/Default',
  component: NotFoundPage,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
    themeVariant: {
      control: { type: 'radio' },
      options: ['SEND', 'IO'],
    },
  },
};

export default meta;

const Template: StoryFn<NotFoundPageProps> = (args) => (
  <NotFoundPage {...args} />
);

const image = (
  <img
    src='https://notifichedigitali.pagopa.it/static/images/pa-infoblock-5.png'
    alt='404'
    style={{ maxWidth: 240 }}
  />
);

const mobileImage = (
  <img
    src='https://notifichedigitali.pagopa.it/static/images/pi-infoblock-1.png'
    alt='404 mobile'
    style={{ maxWidth: 200 }}
  />
);

const baseArgs = {
  image,
  mobileImage,
  title: 'Pagina non trovata',
  body: 'Oops! La pagina che stai cercando non è disponibile.',
  redirectIntroText: 'Se il reindirizzamento non avviene,',
  redirectText: 'clicca qui per tornare alla home',
  redirectUrl: '/',
  disableRedirect: true,
};

export const LightSend = Template.bind({});
LightSend.args = {
  ...baseArgs,
  theme: 'light',
  themeVariant: 'SEND',
};

export const LightIo = Template.bind({});
LightIo.args = {
  ...baseArgs,
  theme: 'light',
  themeVariant: 'IO',
};

export const DarkSend = Template.bind({});
DarkSend.args = {
  ...baseArgs,
  theme: 'dark',
  themeVariant: 'SEND',
};

export const DarkIo = Template.bind({});
DarkIo.args = {
  ...baseArgs,
  theme: 'dark',
  themeVariant: 'IO',
};
