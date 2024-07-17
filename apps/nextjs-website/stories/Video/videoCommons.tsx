import { StoryFn } from '@storybook/react';
import { Video } from "@react-components/components";
import { VideoProps } from "@react-components/types";

// Define a "Template" function that sets how args map to rendering
export const VideoTemplate: StoryFn<VideoProps> = (args) => <Video {...args} />;

// Default story
export const defaultProps = VideoTemplate.bind({});
defaultProps.args = {
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: false,
  loop: false,
  full: false,
  theme: 'dark',
  fallback: 'Ops! Something went wrong... Please try again later.',
  playButtonLabel: 'Watch the video',
};