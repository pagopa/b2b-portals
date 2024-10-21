'use client';
import { FramedVideo as FramedVideoRC } from '@react-components/components';
import { FramedVideoProps } from '@react-components/types';
import { FramedVideoSection } from '@/lib/fetch/types/PageSection';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';

const makeFramedVideoProps = ({
  videoURL,
  video,
  text,
  ...rest
}: FramedVideoSection & { themeVariant: ThemeVariant }): FramedVideoProps => ({
  ...(videoURL && { videoURL }),
  ...(video.data && { videoURL: video.data.attributes.url }),
  ...(text && { text }),
  ...rest,
});

const FramedVideo = (
  props: FramedVideoSection & { themeVariant: ThemeVariant }
) => <FramedVideoRC {...makeFramedVideoProps(props)} />;

export default FramedVideo;
