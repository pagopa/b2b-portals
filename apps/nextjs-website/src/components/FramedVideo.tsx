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
  videoURL: videoURL ?? '',
  video: video
    ? {
        srcURL: video.srcURL ?? '',
        autoplay: video.autoplay,
        loop: video.loop,
        showControls: video.showControls,
        fallback: video.fallback,
        playButtonLabel: video.playButtonLabel,
        pausedPlayButtonLabel: video.pausedPlayButtonLabel,
      }
    : undefined,

  ...(text && { text }),
});

const FramedVideo = (props: FramedVideoSection) => (
  <FramedVideoRC {...makeFramedVideoProps(props)} />
);

export default FramedVideo;
