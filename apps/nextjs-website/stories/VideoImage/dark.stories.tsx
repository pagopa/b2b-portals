import { StoryFn, Meta } from '@storybook/react';
import { VideoImage } from '@react-components/components';
import { defaultsDark, VideoImageTemplate } from './videoImageCommons';


// Define metadata for the Storybook
const meta: Meta<typeof VideoImage> = {
  title: 'Components/Video-Image/Dark',
  component: VideoImage,
};
export default meta;

export const VideoFull: StoryFn<typeof VideoImage> = VideoImageTemplate.bind({});
VideoFull.args = {
  ...defaultsDark,
  title: 'Sample Video Title',
  subtitle: 'Sample Video Subtitle',
};

export const VideoFullNoSubtitle: StoryFn<typeof VideoImage> = VideoImageTemplate.bind({});
VideoFullNoSubtitle.args = { ...defaultsDark, title: 'Sample Video Title' };

export const VideoFullNoTitleNoSubtitle: StoryFn<typeof VideoImage> = VideoImageTemplate.bind({});
VideoFullNoTitleNoSubtitle.args = { ...defaultsDark };

export const VideoFullWithCaption: StoryFn<typeof VideoImage> = VideoImageTemplate.bind({});
VideoFullWithCaption.args = {
  ...defaultsDark,
  title: 'Sample Video Title',
  subtitle: 'Sample Video Subtitle',
  caption: 'Sample Video Caption',
};

export const VideoFullNoSubtitleWithCaption: StoryFn<typeof VideoImage> = VideoImageTemplate.bind({});
VideoFullNoSubtitleWithCaption.args = {
  ...defaultsDark,
  title: 'Sample Video Title',
  caption: 'Sample Video Caption',
};

export const VideoFullNoTitleNoSubtitleWithCaption: StoryFn<typeof VideoImage> = VideoImageTemplate.bind({});
VideoFullNoTitleNoSubtitleWithCaption.args = {
  ...defaultsDark,
  caption: 'Sample Video Caption',
  isCentered: true,
};

export const ImageNoTitleNoCaption: StoryFn<typeof VideoImage> = VideoImageTemplate.bind({});
ImageNoTitleNoCaption.args = {
  ...defaultsDark,
  src:
    'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
  alt: 'Sample Image Alt',
};

export const ImageNoTextWithCaptionCentered: StoryFn<typeof VideoImage> = VideoImageTemplate.bind({});
ImageNoTextWithCaptionCentered.args = {
  ...defaultsDark,
  src:
    'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
  alt: 'Sample Image Alt',
  caption: 'Sample Video Caption',
  isCentered: true,
};

export const ImageNoTextWithCaptionLeft: StoryFn<typeof VideoImage> = VideoImageTemplate.bind({});
ImageNoTextWithCaptionLeft.args = {
  ...defaultsDark,
  src:
    'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
  alt: 'Sample Image Alt',
  caption: 'Sample Video Caption',
};

export const ImageFull: StoryFn<typeof VideoImage> = VideoImageTemplate.bind({});
ImageFull.args = {
  ...defaultsDark,
  title: 'Sample Image Title',
  subtitle: 'Sample Image Subtitle',
  src:
    'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
  alt: 'Sample Image Alt',
  caption: 'Sample Video Caption',
};
