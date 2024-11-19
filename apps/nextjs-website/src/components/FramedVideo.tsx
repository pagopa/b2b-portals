'use client';
import { FramedVideo as FramedVideoRC } from '@react-components/components';
import { FramedVideoProps } from '@react-components/types';
import { FramedVideoSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LocalizeURL } from '@/lib/linkLocalization';

const makeFramedVideoProps = ({
  locale,
  defaultLocale,
  videoURL,
  video,
  text,
  ...rest
}: FramedVideoSection & SiteWidePageData): FramedVideoProps => ({
  ...(videoURL && { videoURL }),
  ...(video.data && { videoURL: video.data.attributes.url }),
  ...(text && {
    text: {
      ...text,
      link: {
        label: text.link.label,
        href: LocalizeURL({ URL: text.link.href, locale, defaultLocale }),
      },
    },
  }),
  ...rest,
});

const FramedVideo = (props: FramedVideoSection & SiteWidePageData) => (
  <FramedVideoRC {...makeFramedVideoProps(props)} />
);

export default FramedVideo;
