'use client';
import { FramedVideo as FramedVideoRC } from '@react-components/components';
import { FramedVideoProps } from '@react-components/types';
import { FramedVideoSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const makeFramedVideoProps = ({
  videoURL,
  video,
  text,
  ...rest
}: FramedVideoSection & SiteWidePageData): FramedVideoProps => ({
  ...(videoURL && { videoURL }),
  ...(video.data && { videoURL: video.data.attributes.url }),
  ...(text && { text }),
  ...rest,
});

const FramedVideo = (props: FramedVideoSection & SiteWidePageData) => (
  <FramedVideoRC {...makeFramedVideoProps(props)} />
);

export default FramedVideo;
