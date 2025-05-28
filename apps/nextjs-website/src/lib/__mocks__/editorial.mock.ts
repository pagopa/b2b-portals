import { EditorialSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const editorialMockData: EditorialSection & SiteWidePageData = {
  __component: 'sections.editorial',
  title: 'Mock Editorial Title',
  body: 'Mock **body** with _markdown_ content for the editorial.',
  theme: 'light',
  width: 'standard',
  reversed: false,
  sectionID: 'mock-editorial-section',
  image: {
    url: '/mock-editorial-image.png',
    alternativeText: 'Mock image',
    width: 800,
    height: 600,
    mime: 'image/png',
    formats: null,
  },
  mobileImage: {
    url: '/mock-editorial-image-mobile.png',
    alternativeText: 'Mock mobile image',
    width: 400,
    height: 300,
    mime: 'image/png',
    formats: null,
  },
  eyelet: 'Mock Editorial Eyelet',
  pattern: 'dots',
  titleTag: 'h2',
  ctaButtons: [
    {
      text: 'Mock CTA',
      href: '#',
      variant: 'contained',
      size: 'medium',
      icon: 'HelpOutlineOutlined',
    },
  ],
  storeButtons: {
    hrefGoogle: 'https://play.google.com',
    hrefApple: 'https://apple.com',
  },
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
