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

export const Italian = Template.bind({});
Italian.args = {
  image,
  mobileImage,
  redirectUrl: '/',
  disableRedirect: true,
  theme: 'light',
  themeVariant: 'SEND',
  locale: 'it',
};

export const English = Template.bind({});
English.args = {
  ...Italian.args,
  locale: 'en',
};

export const French = Template.bind({});
French.args = {
  ...Italian.args,
  locale: 'fr',
};

export const German = Template.bind({});
German.args = {
  ...Italian.args,
  locale: 'de',
};

export const Slovenian = Template.bind({});
Slovenian.args = {
  ...Italian.args,
  locale: 'sl',
};
