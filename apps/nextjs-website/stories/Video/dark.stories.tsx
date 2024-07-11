import { StoryFn, Meta } from '@storybook/react';
import { Video } from '@react-components/components';
import { VideoProps } from '@react-components/types/Video/Video.types';

// Define metadata for the Storybook
const meta: Meta<typeof Video> = {
  title: 'Components/Video/Dark',
  component: Video,
  argTypes: {
    autoplay: {
      control: 'boolean',
    },
    loop: {
      control: 'boolean',
    },
    full: {
      control: 'boolean',
    },
    reverse: {
      control: 'boolean',
    },
    theme: {
      control: { type: 'select', options: ['dark', 'light'] },
    },
  },
};
export default meta;

// Template function to render the Video component
const VideoTemplate: StoryFn<VideoProps> = (args) => <Video {...args} />;

// Default story
export const Default = VideoTemplate.bind({});
Default.args = {
  title: 'Sample Video Title',
  subtitle: 'Sample Video Subtitle',
  src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  autoplay: false,
  loop: false,
  full: false,
  reverse: false,
  theme: 'dark',
  fallback: 'Ops! Something went wrong... Please try again later.',
  playButtonLabel: 'Watch the video',
};