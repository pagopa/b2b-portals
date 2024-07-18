import { StoryFn, Meta } from '@storybook/react';
import { VideoImage } from '@react-components/components';
import { defaultsDark } from './videoImageCommons';
import { VideoImageProps } from '@react-components/types';

// Define metadata for the Storybook
const meta: Meta<typeof VideoImage> = {
  title: 'Components/Video-Image/Dark',
  component: VideoImage,
};
export default meta;

// Template function to render the Video component
const VideoTemplate: StoryFn<VideoImageProps> = (args) => <VideoImage {...args} />;

export const VideoFull = VideoTemplate.bind({});
VideoFull.args = {
  ...defaultsDark,
  title: 'Sample Video Title',
  subtitle: 'Sample Video Subtitle',
};

export const VideoFullNoSubtitle = VideoTemplate.bind({});
VideoFullNoSubtitle.args = { ...defaultsDark, title: 'Sample Video Title' };

export const VideoFullNoTitleNoSubtitle = VideoTemplate.bind({});
VideoFullNoTitleNoSubtitle.args = { ...defaultsDark };

export const VideoFullWithCaption = VideoTemplate.bind({});
VideoFullWithCaption.args = {
  ...defaultsDark,
  title: 'Sample Video Title',
  subtitle: 'Sample Video Subtitle',
  caption: 'Sample Video Caption',
};

export const VideoFullNoSubtitleWithCaption = VideoTemplate.bind({});
VideoFullNoSubtitleWithCaption.args = {
  ...defaultsDark,
  title: 'Sample Video Title',
  caption: 'Sample Video Caption',
};

export const VideoFullNoTitleNoSubtitleWithCaption = VideoTemplate.bind({});
VideoFullNoTitleNoSubtitleWithCaption.args = {
  ...defaultsDark,
  caption: 'Sample Video Caption',
  isCentered: true,
};

export const ImageNoTitleNoCaption = VideoTemplate.bind({});
ImageNoTitleNoCaption.args = {
  ...defaultsDark,
  imagesrc:
    'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
  imagealt: 'Sample Image Alt',
  showVideo: false,
};

export const ImageNoTextWithCaptionCentered = VideoTemplate.bind({});
ImageNoTextWithCaptionCentered.args = {
  ...defaultsDark,
  imagesrc:
    'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
  imagealt: 'Sample Image Alt',
  caption: 'Sample Video Caption',
  showVideo: false,
  isCentered: true,
};

export const ImageNoTextWithCaptionLeft = VideoTemplate.bind({});
ImageNoTextWithCaptionLeft.args = {
  ...defaultsDark,
  imagesrc:
    'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
  imagealt: 'Sample Image Alt',
  caption: 'Sample Video Caption',
  showVideo: false,
};

export const ImageFull = VideoTemplate.bind({});
ImageFull.args = {
  ...defaultsDark,
  title: 'Sample Image Title',
  subtitle: 'Sample Image Subtitle',
  imagesrc:
    'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
  imagealt: 'Sample Image Alt',
  caption: 'Sample Video Caption',
  showVideo: false,
};
