import { FramedVideo as FramedVideoRC } from '@react-components/components';
import { FramedVideoProps } from '@react-components/types';
import { FramedVideoSection } from '@/lib/fetch/types/PageSection';

const makeFramedVideoProps = ({
  videoURL,
  text,
  sectionID,
  theme,
}: FramedVideoSection): FramedVideoProps => ({
  sectionID,
  theme,
  video: {
    src: videoURL,
    autoplay: false,
    loop: false,
    showControls: true,
    fallback: 'Video failed to load',
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
  ...(text && { text }),
});

const FramedVideo = (props: FramedVideoSection) => (
  <FramedVideoRC {...makeFramedVideoProps(props)} />
);

export default FramedVideo;
