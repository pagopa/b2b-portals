'use client';
import { Video as VideoRC } from '@react-components/components';
import { VideoProps } from '@react-components/types';
import { VideoSection } from '@/lib/fetch/types/PageSection';

const makeVideoProps = ({
  title,
  subtitle,
  src,
  fallback,
  playButtonLabel,
  ...rest
}: VideoSection): VideoProps => ({
  ...rest,
  title,
  subtitle,
  src,
  fallback,
  playButtonLabel,
});

const Video = (props: VideoSection) => <VideoRC {...makeVideoProps(props)} />;

export default Video;
