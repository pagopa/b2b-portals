import { FeatureSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const featureMockData: FeatureSection & SiteWidePageData = {
  __component: 'sections.feature',
  title: 'Mock Feature Title',
  theme: 'light',
  showCarouselMobile: false,
  sectionID: 'mock-feature-section',
  items: [
    {
      id: 1,
      title: 'Mock Feature 1',
      subtitle: 'Mock subtitle 1',
      icon: {
        url: '/mock-feature-icon-1.svg',
        alternativeText: 'Feature icon 1',
        width: 64,
        height: 64,
        mime: 'image/svg+xml',
        formats: null,
      },
      link: {
        label: 'Mock Link 1',
        href: 'https://example.com/link1',
      },
    },
    {
      id: 2,
      title: 'Mock Feature 2',
      subtitle: 'Mock subtitle 2',
      icon: {
        url: '/mock-feature-icon-2.svg',
        alternativeText: 'Feature icon 2',
        width: 64,
        height: 64,
        mime: 'image/svg+xml',
        formats: null,
      },
      link: {
        label: 'Mock Link 2',
        href: 'https://example.com/link2',
      },
    },
    {
      id: 3,
      title: 'Mock Feature 3',
      subtitle: 'Mock subtitle 3',
      icon: {
        url: '/mock-feature-icon-3.svg',
        alternativeText: 'Feature icon 3',
        width: 64,
        height: 64,
        mime: 'image/svg+xml',
        formats: null,
      },
      link: null,
    },
  ],
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
