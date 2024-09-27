'use client';
import { FramedVideo as FramedVideoRC } from '@react-components/components';
import { FramedVideoProps } from '@react-components/types';
import { FramedVideoSection } from '@/lib/fetch/types/PageSection';

const makeFramedVideoProps = ({
  videoURL,
  video,
  text,
  sectionID,
  theme,
}: FramedVideoSection): FramedVideoProps => ({
  sectionID,
  theme,
  ...(videoURL && { videoURL }),
  ...(video.data && { videoURL: video.data.attributes.url }),
  ...(text && { text }),
});

const FramedVideo = (props: FramedVideoSection) => (
  <FramedVideoRC {...makeFramedVideoProps(props)} />
);

export default FramedVideo;
