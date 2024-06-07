import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { EditorialSwitch } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types';

// Define the default export with metadata about your component
const meta: Meta<typeof EditorialSwitch> = {
  title: 'Components/EditorialSwitch/Dark',
  component: EditorialSwitch,
};
export default meta;

const EditorialSwitchTemplate: StoryFn<EditorialSwitchProps> = (args) => <EditorialSwitch {...args} />;

export const Default: StoryFn<typeof EditorialSwitch> = EditorialSwitchTemplate.bind({});
Default.args = {
  theme: 'dark',
  reversed: false,
  width: 'wide',
  toptitle: 'Top Title',
  topsubtitle: 'Top Subtitle',
  buttons: [
    { id: '1', text: 'Button 1' },
    { id: '2', text: 'Button 2' },
  ],
  content: [
    {
      id: '1',
      eyelet: 'Eyelet Content 1',
      body: 'Body Content 1',
      title: 'Title Content 1',
      pattern: 'dots',
      image: <img src="https://notifichedigitali.pagopa.it/static/images/pa-infoblock-3.png" alt="Placeholder" />,
      ctaButtons: [
        {
          text: 'CTA Button 1',
        },
        {
          text: 'CTA Button 2',
        },
      ],
    },
    {
      id: '2',
      eyelet: 'Eyelet Content 2',
      body: 'Body Content 2',
      title: 'Title Content 2',
      pattern: 'none',
      image: <img src="https://notifichedigitali.pagopa.it/static/images/pa-infoblock-3.png" alt="Placeholder" />,
      ctaButtons: [
        {
          text: 'CTA Button 1',
        },
      ],
    },
  ],
  title: 'Title',
  eyelet: 'Eyelet',
  body: 'Body',
  image: <img src="https://notifichedigitali.pagopa.it/static/images/pa-infoblock-3.png" alt="Placeholder" />,
  ctaButtons: [
    {
      text: 'CTA Button 1',
    },
    {
      text: 'CTA Button 2',
    },
  ],
};