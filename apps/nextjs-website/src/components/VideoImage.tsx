'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { VideoImage as VideoImageRC } from '@react-components/components';
import { VideoImageProps } from '@react-components/types';
import { VideoImageSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';

const makeVideoImageProps = ({
  locale,
  defaultLocale,
  title,
  subtitle,
  caption,
  image,
  mobileImage,
  video,
  ...rest
}: VideoImageSection & SiteWidePageData): VideoImageProps => ({
  ...rest,
  ...(title && { title }),
  ...(subtitle && {
    subtitle: MarkdownRenderer({ markdown: subtitle, locale, defaultLocale }),
  }),
  ...(caption && { caption }),
  ...(video &&
    video.src && {
      video: {
        src: video.src.url,
        autoplay: video.autoplay,
        loop: video.loop,
        showControls: video.showControls,
        fallback: video.fallback,
        playButtonLabel: video.playButtonLabel,
        pausedPlayButtonLabel: video.pausedPlayButtonLabel,
      },
    }),
  ...((!video || (!video.srcURL && !video.src)) &&
    image && {
      image: {
        src: image.url,
        alt: image.alternativeText ?? '',
        srcSet: makeSrcSetFromStrapiImageData(image),
      },
      mobileImage: {
        src: mobileImage?.url ?? image.url,
        alt: mobileImage?.alternativeText ?? image.alternativeText ?? '',
        srcSet: makeSrcSetFromStrapiImageData(mobileImage ?? image),
      },
    }),
});

const VideoImage = (props: VideoImageSection & SiteWidePageData) => (
  <VideoImageRC {...makeVideoImageProps(props)} />
);

export default VideoImage;
