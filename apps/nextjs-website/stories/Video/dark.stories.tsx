import { StoryFn, Meta } from '@storybook/react';
import { Video } from '@react-components/components';
import { VideoProps } from '@react-components/types/Video/Video.types';

// Define metadata for the Storybook
const meta: Meta<typeof Video> = {
  title: 'Components/Video/Dark',
  component: Video,
};
export default meta;

// Template function to render the Video component
const VideoTemplate: StoryFn<VideoProps> = (args) => <Video {...args} />;

export const VideoFull = VideoTemplate.bind({});
VideoFull.args = {
  title: 'Sample Video Title',
  subtitle: 'Sample Video Subtitle',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: false,
  loop: false,
  full: false,
  theme: 'dark',
  fallback: 'Ops! Something went wrong... Please try again later.',
  playButtonLabel: 'Watch the video',
};

export const VideoFullNoSubtitle = VideoTemplate.bind({});
VideoFullNoSubtitle.args = {
  title: 'Sample Video Title',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: false,
  loop: false,
  full: false,
  theme: 'dark',
  fallback: 'Ops! Something went wrong... Please try again later.',
  playButtonLabel: 'Watch the video',
};

export const VideoFullNoTitleNoSubtitle = VideoTemplate.bind({});
VideoFullNoTitleNoSubtitle.args = {
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: false,
  loop: false,
  full: false,
  theme: 'dark',
  fallback: 'Ops! Something went wrong... Please try again later.',
  playButtonLabel: 'Watch the video',
};

export const VideoFullWithCaption = VideoTemplate.bind({});
VideoFullWithCaption.args = {
  title: 'Sample Video Title',
  subtitle: 'Sample Video Subtitle',
  caption: 'Sample Video Caption',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: false,
  loop: false,
  full: false,
  theme: 'dark',
  fallback: 'Ops! Something went wrong... Please try again later.',
  playButtonLabel: 'Watch the video',
};

export const VideoFullNoSubtitleWithCaption = VideoTemplate.bind({});
VideoFullNoSubtitleWithCaption.args = {
  title: 'Sample Video Title',
  caption: 'Sample Video Caption',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: false,
  loop: false,
  full: false,
  theme: 'dark',
  fallback: 'Ops! Something went wrong... Please try again later.',
  playButtonLabel: 'Watch the video',
};

export const VideoFullNoTitleNoSubtitleWithCaption = VideoTemplate.bind({});
VideoFullNoTitleNoSubtitleWithCaption.args = {
  caption: 'Sample Video Caption',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: false,
  loop: false,
  full: false,
  theme: 'dark',
  fallback: 'Ops! Something went wrong... Please try again later.',
  playButtonLabel: 'Watch the video',
};