import { EditorialSwitchSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const editorialSwitchMockData: EditorialSwitchSection &
  SiteWidePageData = {
  __component: 'sections.editorial-switch',
  theme: 'light',
  title: 'Mock Editorial Switch Title',
  subtitle: 'Mock **subtitle** with _markdown_.',
  sections: [
    {
      id: 1,
      buttonText: 'Button 1',
      content: {
        title: 'Mock Editorial 1',
        eyelet: 'Mock Eyelet 1',
        body: 'This is **body** of editorial 1.',
        width: 'standard',
        theme: 'light',
        reversed: false,
        sectionID: 'mock-editorial-1',
        image: {
          url: '/mock-editorial-image-1.png',
          alternativeText: 'Editorial image 1',
          width: 800,
          height: 600,
          mime: 'image/png',
          formats: null,
        },
        mobileImage: {
          url: '/mock-editorial-mobile-1.png',
          alternativeText: 'Mobile image 1',
          width: 400,
          height: 300,
          mime: 'image/png',
          formats: null,
        },
        ctaButtons: [
          {
            text: 'Mock CTA 1',
            href: '#',
            variant: 'contained',
            size: 'medium',
            icon: 'HelpOutlineOutlined',
          },
        ],
        storeButtons: {
          hrefGoogle: 'https://play.google.com',
          hrefApple: null,
        },
        titleTag: 'h2',
        pattern: 'dots',
      },
    },
    {
      id: 2,
      buttonText: 'Button 2',
      content: {
        title: 'Mock Editorial 2',
        eyelet: 'Mock Eyelet 2',
        body: 'This is **body** of editorial 2.',
        width: 'standard',
        theme: 'light',
        reversed: true,
        sectionID: 'mock-editorial-2',
        image: {
          url: '/mock-editorial-image-2.png',
          alternativeText: 'Editorial image 2',
          width: 800,
          height: 600,
          mime: 'image/png',
          formats: null,
        },
        mobileImage: {
          url: '/mock-editorial-mobile-2.png',
          alternativeText: 'Mobile image 2',
          width: 400,
          height: 300,
          mime: 'image/png',
          formats: null,
        },
        ctaButtons: [],
        storeButtons: {
          hrefGoogle: null,
          hrefApple: 'https://apple.com',
        },
        titleTag: 'h3',
        pattern: 'solid',
      },
    },
  ],
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
