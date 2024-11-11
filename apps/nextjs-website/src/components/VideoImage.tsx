'use client';
import { VideoImage as VideoImageRC } from '@react-components/components';
import { VideoImageProps } from '@react-components/types';
import { VideoImageSection } from '@/lib/fetch/types/PageSection';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';

const makeVideoImageProps = ({
  title,
  subtitle,
  caption,
  image,
  mobileImage,
  video,
  ...rest
}: VideoImageSection & { themeVariant: ThemeVariant }): VideoImageProps => ({
  ...rest,
  ...(title && { title }),
  ...(subtitle && { subtitle }),
  ...(caption && { caption }),
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
  ...((!video || (!video.srcURL && !video.src.data)) &&
    image.data && {
      image: {
        src: image.data.attributes.url,
        alt: image.data.attributes.alternativeText ?? '',
        srcSet: makeSrcSetFromStrapiImageData(image.data),
      },
      mobileImage: {
        src: mobileImage?.data?.attributes?.url ?? image.data.attributes.url,
        alt:
          mobileImage?.data?.attributes?.alternativeText ??
          image.data.attributes.alternativeText ??
          '',
        srcSet: makeSrcSetFromStrapiImageData(mobileImage.data ?? image.data),
      },
    }),
});

const VideoImage = (
  props: VideoImageSection & { themeVariant: ThemeVariant }
) => <VideoImageRC {...makeVideoImageProps(props)} />;

export default VideoImage;
