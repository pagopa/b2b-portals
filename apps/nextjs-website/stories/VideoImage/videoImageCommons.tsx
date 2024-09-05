import { StoryFn } from '@storybook/react';
import { VideoImage } from '@react-components/components';
import { VideoImageProps } from '@react-components/types';

// Define a "Template" function that sets how args map to rendering
export const VideoImageTemplate: StoryFn<VideoImageProps> = (args) => <VideoImage {...args} />;

const createVideoImageDefaults = (theme: 'dark' | 'light'): VideoImageProps => ({
  theme,
  isCentered: false,
  sectionID: null,
});

// Usage example
export const defaultsDark = createVideoImageDefaults('dark');
export const defaultsLight = createVideoImageDefaults('light');