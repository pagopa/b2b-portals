// EditorialSwitch.stories.tsx

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { EditorialSwitch } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types';

// Define the default export with metadata about your component
const meta: Meta<typeof EditorialSwitch> = {
  title: 'Components/EditorialSwitch/Light',
  component: EditorialSwitch,
};
export default meta;

const EditorialSwitchTemplate: StoryFn<EditorialSwitchProps> = (args) => <EditorialSwitch {...args} />;

export const Default: StoryFn<typeof EditorialSwitch> = EditorialSwitchTemplate.bind({});
Default.args = {
  theme: 'light',
  reversed: false,
  width: 'wide',
  toptitle: 'Top Title',
  topsubtitle: 'Top Subtitle',
  buttons: ['Button 1', 'Button 2'],
  content: [
    {
      eyelet: 'Eyelet',
      body: 'Body',
      title: 'Title',
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
      eyelet: 'Eyelet',
      body: 'Body',
      title: 'Title',
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