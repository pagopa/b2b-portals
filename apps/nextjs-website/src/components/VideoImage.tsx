'use client';
import { VideoImage as VideoImageRC } from '@react-components/components';
import { VideoImageProps } from '@react-components/types';
import { VideoImageSection } from '@/lib/fetch/types/PageSection';

const makeVideoImageProps = ({
  title,
  subtitle,
  caption,
  image,
  video,
  ...rest
}: VideoImageSection): VideoImageProps => ({
  ...rest,
  ...(title && { title }),
  ...(subtitle && { subtitle }),
  ...(caption && { caption }),
  // If user uploaded a video, use it
  ...(video &&
    video.src.data && {
      video: {
        src: video.src.data.attributes.url,
        autoplay: video.autoplay,
        loop: video.loop,
        showControls: video.showControls,
        fallback: video.fallback,
        playButtonLabel: video.playButtonLabel,
        pausedPlayButtonLabel: video.pausedPlayButtonLabel,
      },
    }),
  // If user did not upload a video, check if they input a URL
  ...(video &&
    !video.src.data &&
    video.srcURL && {
      video: {
        src: video.srcURL,
        autoplay: video.autoplay,
        loop: video.loop,
        showControls: video.showControls,
        fallback: video.fallback,
        playButtonLabel: video.playButtonLabel,
        pausedPlayButtonLabel: video.pausedPlayButtonLabel,
      },
    }),
  // If user did not input any video source, check if they uploaded an image
  ...((!video || (!video.srcURL && !video.src.data)) &&
    image.data && {
      image: {
        src: image.data.attributes.url,
        alt: image.data.attributes.alternativeText ?? '',
      },
    }),
});

const VideoImage = (props: VideoImageSection) => (
  <VideoImageRC {...makeVideoImageProps(props)} />
);

export default VideoImage;
