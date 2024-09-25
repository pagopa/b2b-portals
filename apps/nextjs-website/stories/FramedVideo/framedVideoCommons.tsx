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
  video: {
    src: '',
    autoplay: false,
    loop: false,
    showControls: true,
    fallback: 'Video failed to load',
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
});

// Usage example
export const defaultsDark = createFramedVideoDefaults('dark');
export const defaultsLight = createFramedVideoDefaults('light');
