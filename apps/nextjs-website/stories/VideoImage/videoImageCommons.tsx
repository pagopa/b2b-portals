import { StoryFn } from '@storybook/react';
import { VideoImage } from '@react-components/components';
import { VideoImageProps } from '@react-components/types';

// Define a "Template" function that sets how args map to rendering
export const VideoImageTemplate: StoryFn<VideoImageProps> = (args) => <VideoImage {...args} />;

const createVideoImageDefaults = (theme: 'dark' | 'light') => ({
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: false,
  loop: false,
  full: false,
  theme,
  fallback: 'Ops! Something went wrong... Please try again later.',
  playButtonLabel: 'Watch the video',
  pausedplayButtonLabel: 'Resume video',
});

// Usage example
export const defaultsDark = createVideoImageDefaults('dark');
export const defaultsLight = createVideoImageDefaults('light');