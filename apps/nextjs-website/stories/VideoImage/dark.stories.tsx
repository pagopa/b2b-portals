import { StoryFn, Meta } from '@storybook/react';
import { VideoImage } from '@react-components/components';
import { defaultsDark, VideoImageTemplate } from './videoImageCommons';

// Define metadata for the Storybook
const meta: Meta<typeof VideoImage> = {
  title: 'Components/Video-Image/Dark',
  component: VideoImage,
};
export default meta;

export const VideoFull: StoryFn<typeof VideoImage> = VideoImageTemplate.bind(
  {}
);
VideoFull.args = {
  ...defaultsDark,
  title: 'Sample Video Title',
  subtitle: 'Sample Video Subtitle',
  video: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
    autoplay: false,
    fallback: 'fallback',
    loop: false,
    showControls: true,
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
};

export const VideoFullNoSubtitle: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
VideoFullNoSubtitle.args = {
  ...defaultsDark,
  title: 'Sample Video Title',
  video: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
    autoplay: false,
    fallback: 'fallback',
    loop: false,
    showControls: true,
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
};

export const VideoFullNoTitleNoSubtitle: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
VideoFullNoTitleNoSubtitle.args = {
  ...defaultsDark,
  video: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
    autoplay: false,
    fallback: 'fallback',
    loop: false,
    showControls: true,
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
};

export const VideoFullWithCaption: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
VideoFullWithCaption.args = {
  ...defaultsDark,
  title: 'Sample Video Title',
  subtitle: 'Sample Video Subtitle',
  caption: 'Sample Video Caption',
  video: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
    autoplay: false,
    fallback: 'fallback',
    loop: false,
    showControls: true,
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
};

export const VideoFullNoSubtitleWithCaption: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
VideoFullNoSubtitleWithCaption.args = {
  ...defaultsDark,
  title: 'Sample Video Title',
  caption: 'Sample Video Caption',
  video: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
    autoplay: false,
    fallback: 'fallback',
    loop: false,
    showControls: true,
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
};

export const VideoFullNoTitleNoSubtitleWithCaption: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
VideoFullNoTitleNoSubtitleWithCaption.args = {
  ...defaultsDark,
  caption: 'Sample Video Caption',
  isCentered: true,
  video: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
    autoplay: false,
    fallback: 'fallback',
    loop: false,
    showControls: true,
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
};

export const ImageFull: StoryFn<typeof VideoImage> = VideoImageTemplate.bind(
  {}
);
ImageFull.args = {
  ...defaultsDark,
  title: 'Sample Image Title',
  subtitle: 'Sample Image Subtitle',
  image: {
    src: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://notifichedigitali.pagopa.it/static/images/pi-hero-background.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
  caption: 'Sample Video Caption',
};

export const ImageNoTextWithCaptionCentered: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
ImageNoTextWithCaptionCentered.args = {
  ...defaultsDark,
  image: {
    src: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://notifichedigitali.pagopa.it/static/images/pi-hero-background.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
  caption: 'Sample Video Caption',
  isCentered: true,
};

export const ImageNoTextWithCaptionLeft: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
ImageNoTextWithCaptionLeft.args = {
  ...defaultsDark,
  image: {
    src: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://notifichedigitali.pagopa.it/static/images/pi-hero-background.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
  caption: 'Sample Video Caption',
};

export const ImageNoCaptionWithTextCenter: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
ImageNoCaptionWithTextCenter.args = {
  ...defaultsDark,
  title: 'Sample Image Title',
  subtitle: 'Sample Image Subtitle',
  image: {
    src: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://notifichedigitali.pagopa.it/static/images/pi-hero-background.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
  isCentered: true,
};

export const ImageNoCaptionWithTextLeft: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
ImageNoCaptionWithTextLeft.args = {
  ...defaultsDark,
  title: 'Sample Image Title',
  subtitle: 'Sample Image Subtitle',
  image: {
    src: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://notifichedigitali.pagopa.it/static/images/pi-hero-background.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
};

export const ImageNoTitleNoCaption: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
ImageNoTitleNoCaption.args = {
  ...defaultsDark,
  image: {
    src: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://notifichedigitali.pagopa.it/static/images/pi-hero-background.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
};
