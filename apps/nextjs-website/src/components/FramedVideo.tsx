'use client';
import { FramedVideo as FramedVideoRC } from '@react-components/components';
import { FramedVideoProps } from '@react-components/types';
import { FramedVideoSection } from '@/lib/fetch/types/PageSection';

const makeFramedVideoProps = ({
  videoURL,
  video,
  text,
  ...rest
}: FramedVideoSection): FramedVideoProps => ({
  ...(videoURL && { videoURL }),
  ...(video.data && { videoURL: video.data.attributes.url }),
  ...(text && { text }),
  ...rest,
});

const FramedVideo = (props: FramedVideoSection) => (
  <FramedVideoRC {...makeFramedVideoProps(props)} />
);

export default FramedVideo;
