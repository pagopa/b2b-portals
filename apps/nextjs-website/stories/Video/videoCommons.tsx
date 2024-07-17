import { StoryFn } from '@storybook/react';
import { Video } from "@react-components/components";
import { VideoImageProps } from '@react-components/types/Video/Video.types';

// Define a "Template" function that sets how args map to rendering
export const VideoTemplate: StoryFn<VideoImageProps> = (args) => <Video {...args} />;

const createVideoDefaults = (theme: 'dark' | 'light') => ({
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: false,
  loop: false,
  full: false,
  theme,
  fallback: 'Ops! Something went wrong... Please try again later.',
  playButtonLabel: 'Watch the video',
});

// Usage example
export const defaultsDark = createVideoDefaults('dark');
export const defaultsLight = createVideoDefaults('light');