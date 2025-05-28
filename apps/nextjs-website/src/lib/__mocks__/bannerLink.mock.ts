import { BannerLinkSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const bannerLinkMockData: BannerLinkSection & SiteWidePageData = {
  __component: 'sections.banner-link',
  theme: 'light',
  sectionID: 'mock-banner-link-section',
  sections: [
    {
      title: 'Scrivici',
      body: 'Mock **body** per il contatto email.',
      icon: {
        alternativeText: null,
        url: '/mock-icon-email.svg',
        width: 32,
        height: 32,
        mime: 'image/svg+xml',
        formats: null,
      },
      ctaButtons: [
        {
          text: 'Scrivici',
          href: 'mailto:mock@email.com',
          variant: 'contained',
          icon: 'HelpOutlineOutlined',
          size: 'medium',
        },
        {
          text: 'Scrivici',
          href: 'mailto:mock@email.com',
          variant: 'outlined',
          icon: null,
          size: 'medium',
        },
      ],
    },
    {
      title: 'Chiamaci',
      body: 'Mock _body_ per il contatto telefonico.',
      icon: {
        alternativeText: null,
        url: '/mock-icon-phone.svg',
        width: 32,
        height: 32,
        mime: 'image/svg+xml',
        formats: null,
      },
      ctaButtons: [
        {
          text: 'Chiamaci',
          href: 'tel:0123456789',
          variant: 'contained',
          icon: 'HelpOutlineOutlined',
          size: 'medium',
        },
        {
          text: 'Chiamaci',
          href: 'tel:0123456789',
          variant: 'outlined',
          icon: null,
          size: 'medium',
        },
      ],
    },
  ],
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
