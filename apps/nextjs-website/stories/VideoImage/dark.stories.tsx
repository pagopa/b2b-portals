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
  subtitle: (
    <p>
      Sample Video Subtitle with <a href='/'>link</a>
    </p>
  ),
  video: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/2023_12_14_16_24_35_Trim_online_video_cutter_com_d9b4283685.mp4',
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
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/2023_12_14_16_24_35_Trim_online_video_cutter_com_d9b4283685.mp4',
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
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/2023_12_14_16_24_35_Trim_online_video_cutter_com_d9b4283685.mp4',
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
  subtitle: (
    <p>
      Sample Video Subtitle with <a href='/'>link</a>
    </p>
  ),
  caption: 'Sample Video Caption',
  video: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/2023_12_14_16_24_35_Trim_online_video_cutter_com_d9b4283685.mp4',
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
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/2023_12_14_16_24_35_Trim_online_video_cutter_com_d9b4283685.mp4',
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
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/2023_12_14_16_24_35_Trim_online_video_cutter_com_d9b4283685.mp4',
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
  title: 'Perché esiste IO',
  subtitle: (
    <p>
      IO rende concreto l’articolo 64bis del Codice dell’Amministrazione
      Digitale (decreto legislativo 7 marzo 2005, n. 82). Questa legge prevede
      un{' '}
      <strong>
        unico punto di accesso per tutti i servizi digitali pubblici
      </strong>
      , erogato dalla Presidenza del Consiglio dei Ministri.
    </p>
  ),
  image: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
  caption: 'Sample Image Caption',
};

export const ImageNoTextWithCaptionCentered: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
ImageNoTextWithCaptionCentered.args = {
  ...defaultsDark,
  image: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
  caption: 'Sample Image Caption',
  isCentered: true,
};

export const ImageNoTextWithCaptionLeft: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
ImageNoTextWithCaptionLeft.args = {
  ...defaultsDark,
  image: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
  caption: 'Sample Image Caption',
};

export const ImageNoCaptionWithTextCenter: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
ImageNoCaptionWithTextCenter.args = {
  ...defaultsDark,
  title: 'Perché esiste IO',
  subtitle: (
    <p>
      IO rende concreto l’articolo 64bis del Codice dell’Amministrazione
      Digitale (decreto legislativo 7 marzo 2005, n. 82). Questa legge prevede
      un{' '}
      <strong>
        unico punto di accesso per tutti i servizi digitali pubblici
      </strong>
      , erogato dalla Presidenza del Consiglio dei Ministri.
    </p>
  ),
  image: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
  isCentered: true,
};

export const ImageNoCaptionWithTextLeft: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
ImageNoCaptionWithTextLeft.args = {
  ...defaultsDark,
  title: 'Perché esiste IO',
  subtitle: (
    <p>
      IO rende concreto l’articolo 64bis del Codice dell’Amministrazione
      Digitale (decreto legislativo 7 marzo 2005, n. 82). Questa legge prevede
      un{' '}
      <strong>
        unico punto di accesso per tutti i servizi digitali pubblici
      </strong>
      , erogato dalla Presidenza del Consiglio dei Ministri.
    </p>
  ),
  image: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
};

export const ImageNoTitleNoCaption: StoryFn<typeof VideoImage> =
  VideoImageTemplate.bind({});
ImageNoTitleNoCaption.args = {
  ...defaultsDark,
  image: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Image Alt',
    srcSet: '',
  },
  mobileImage: {
    src: 'https://d2mk0pc4ejgxx6.cloudfront.net/hero_enti_background_35829ff95a.png',
    alt: 'Sample Mobile Image Alt',
    srcSet: '',
  },
};
