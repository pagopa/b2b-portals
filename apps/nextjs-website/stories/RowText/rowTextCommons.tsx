import { StoryFn } from '@storybook/react';
import { RowText } from '@react-components/components';
import { RowTextProps } from '@react-components/types';

// Define a 'Template' function that sets how args map to rendering
export const RowTextTemplate: StoryFn<RowTextProps> = (args) => (
  <RowText {...args} />
);

// Define the default props with light theme
export const defaultPropsLight: Partial<RowTextProps> = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'Consectetur adipiscing elit',
  body: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,{' '}
      <a href='/'>
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </a>
    </p>
  ),
  layout: 'center',
};
