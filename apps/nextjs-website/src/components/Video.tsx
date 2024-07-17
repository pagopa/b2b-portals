'use client';
import { Video as VideoRC } from '@react-components/components';
import { VideoImageProps } from '@react-components/types';
import { VideoSection } from '@/lib/fetch/types/PageSection';

const makeVideoProps = ({
  title,
  subtitle,
  src,
  fallback,
  playButtonLabel,
  isCentered,
  ...rest
}: VideoSection): VideoImageProps => ({
  ...rest,
  title,
  subtitle,
  ...(src.data && {
    src: {
      url: src.data.attributes.url,
      alternativeText: src.data.attributes.alternativeText || null,
      mime: src.data.attributes.mime,
    },
  }),
  fallback,
  playButtonLabel,
  isCentered,
});

const Video = (props: VideoSection) => <VideoRC {...makeVideoProps(props)} />;

export default Video;
