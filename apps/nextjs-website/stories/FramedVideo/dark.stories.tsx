import { StoryFn, Meta } from '@storybook/react';
import { FramedVideo } from '@react-components/components';
import { defaultsDark, FramedVideoTemplate } from './framedVideoCommons';

// Define metadata for the Storybook
const meta: Meta<typeof FramedVideo> = {
  title: 'Components/Framed-Video/Dark',
  component: FramedVideo,
};
export default meta;

export const VideoWithTextLeft: StoryFn<typeof FramedVideo> =
  FramedVideoTemplate.bind({});
VideoWithTextLeft.args = {
  ...defaultsDark,
  video: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
    autoplay: false,
    fallback: 'Video failed to load',
    loop: false,
    showControls: true,
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
  text: {
    title: 'Aenean commodo ligula eget dolor',
    body: `Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
           Phasellus viverra nulla ut metus varius laoreet.
           Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.`,
    link: {
      href: '#',
      label: 'Guarda il video',
    },
    textPosition: 'left',
  },
};

export const VideoWithTextRight: StoryFn<typeof FramedVideo> =
  FramedVideoTemplate.bind({});
VideoWithTextRight.args = {
  ...defaultsDark,
  video: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
    autoplay: false,
    fallback: 'Video failed to load',
    loop: false,
    showControls: true,
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
  text: {
    title: 'Aenean commodo ligula eget dolor',
    body: `Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
           Phasellus viverra nulla ut metus varius laoreet.
           Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.`,
    link: {
      href: '#',
      label: 'Guarda il video',
    },
    textPosition: 'right',
  },
};

export const VideoFullScreen: StoryFn<typeof FramedVideo> =
  FramedVideoTemplate.bind({});
VideoFullScreen.args = {
  ...defaultsDark,
  video: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
    autoplay: false,
    fallback: 'Video failed to load',
    loop: false,
    showControls: true,
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
  text: null,
};
