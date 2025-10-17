import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { EditorialSwitch } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types';
import { defaultPropsLight } from './editorialCommons';

const meta: Meta<typeof EditorialSwitch> = {
  title: 'Components/EditorialSwitch/Light',
  component: EditorialSwitch,
};
export default meta;

const EditorialSwitchTemplate: StoryFn<EditorialSwitchProps> = (args) => (
  <EditorialSwitch {...args} />
);

export const Default: StoryFn<typeof EditorialSwitch> =
  EditorialSwitchTemplate.bind({});
Default.args = {
  ...defaultPropsLight,
  sections: [
    {
      id: 1,
      buttonText: 'Button 1',
      content: {
        sectionID: null,
        theme: 'light',
        title: 'Editorial 1',
        body: 'Light Editorial',
        width: 'standard',
        image: (
          <img
            src='https://d2mk0pc4ejgxx6.cloudfront.net/editorial_4e8d32980e.png'
            alt='placeholder'
          />
        ),
        mobileImage: (
          <img
            src='https://d2mk0pc4ejgxx6.cloudfront.net/editorial_4e8d32980e.png'
            alt='placeholder'
          />
        ),
        themeVariant: 'SEND',
        reversed: true,
      },
    },
    {
      id: 2,
      buttonText: 'Button 2',
      content: {
        sectionID: null,
        theme: 'light',
        title: 'Editorial 2',
        body: 'Dark Editorial',
        width: 'standard',
        image: (
          <img
            src='https://d2mk0pc4ejgxx6.cloudfront.net/editorial_4e8d32980e.png'
            alt='placeholder'
          />
        ),
        mobileImage: (
          <img
            src='https://d2mk0pc4ejgxx6.cloudfront.net/editorial_4e8d32980e.png'
            alt='placeholder'
          />
        ),
        themeVariant: 'SEND',
      },
    },
  ],
};
