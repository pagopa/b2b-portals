import { StoryFn } from '@storybook/react';
import { FramedVideo } from '@react-components/components';
import { FramedVideoProps } from '@react-components/types';

// Define a 'Template' function that sets how args map to rendering
export const FramedVideoTemplate: StoryFn<FramedVideoProps> = (args) => (
  <FramedVideo {...args} />
);

const createFramedVideoDefaults = (
  theme: 'dark' | 'light'
): FramedVideoProps => ({
  theme,
  sectionID: null,
  autoplay: false,
  loop: false,
  themeVariant: 'SEND',
});

export const defaultsDark = createFramedVideoDefaults('dark');
export const defaultsLight = createFramedVideoDefaults('light');
