'use client';
import { VideoImage as VideoImageRC } from '@react-components/components';
import { VideoImageProps } from '@react-components/types';
import { VideoImageSection } from '@/lib/fetch/types/PageSection';

const makeVideoImageProps = ({
  src,
  alt,
  ...rest
}: VideoImageSection): VideoImageProps => ({
  ...rest,
  ...(src.data && {
    src: {
      url: src.data.attributes.url,
      mime: src.data.attributes.mime,
    },
  }),
  alt,
});
const VideoImage = (props: VideoImageSection) => (
  <VideoImageRC {...makeVideoImageProps(props)} />
);

export default VideoImage;
