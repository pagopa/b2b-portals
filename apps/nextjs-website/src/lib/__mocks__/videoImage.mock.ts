import { VideoImageSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const videoImageMockData: VideoImageSection & SiteWidePageData = {
  __component: 'sections.video-image',
  sectionID: 'video-image-section',
  theme: 'dark',
  title: 'Perché esiste IO',
  subtitle:
    'IO rende concreto l’articolo 64bis del Codice dell’Amministrazione Digitale. Questa legge prevede un **unico punto di accesso** per tutti i servizi digitali pubblici, erogato dalla Presidenza del Consiglio dei Ministri.',
  caption: 'Sample Video Caption',
  isCentered: true,
  image: {
    url: 'https://notifichedigitali.pagopa.it/static/images/hero-enti-background.png',
    alternativeText: 'Sample Image Alt',
    width: 1600,
    height: 800,
    mime: 'image/png',
    formats: null,
  },
  mobileImage: {
    url: 'https://notifichedigitali.pagopa.it/static/images/pi-hero-background.png',
    alternativeText: 'Sample Mobile Image Alt',
    width: 800,
    height: 600,
    mime: 'image/png',
    formats: null,
  },
  video: {
    src: {
      url: 'https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4',
    },
    srcURL: null,
    autoplay: false,
    loop: false,
    showControls: true,
    fallback: 'fallback',
    playButtonLabel: 'Play Video',
    pausedPlayButtonLabel: 'Resume Video',
  },
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
