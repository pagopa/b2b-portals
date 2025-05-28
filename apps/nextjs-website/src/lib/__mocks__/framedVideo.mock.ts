import { FramedVideoSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const framedVideoMockData: FramedVideoSection & SiteWidePageData = {
  __component: 'sections.framed-video',
  sectionID: 'mock-framed-video',
  theme: 'light',
  videoURL:
    'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  video: {
    url: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
  },
  autoplay: false,
  loop: false,
  text: {
    title: 'Aenean commodo ligula eget dolor',
    body: `Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
           Phasellus viverra nulla ut metus varius laoreet.
           Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.`,
    textPosition: 'left',
    link: {
      href: '#',
      label: 'Guarda il video',
    },
  },
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
