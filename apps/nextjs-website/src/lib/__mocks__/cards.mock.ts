import { CardsSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const cardsMockData: CardsSection & SiteWidePageData = {
  __component: 'sections.cards',
  theme: 'light',
  title: 'Mock Cards Title',
  subtitle: 'Mock Cards Subtitle',
  body: 'This is a **mock** description for the cards.',
  textPosition: 'center',
  sectionID: 'mock-cards-section',
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
  ctaButtons: [
    {
      text: 'Mock CTA 1',
      href: '#',
      variant: 'contained',
      size: 'medium',
      icon: 'HelpOutlineOutlined',
    },
    {
      text: 'Mock CTA 2',
      href: '#',
      variant: 'outlined',
      size: 'medium',
      icon: null,
    },
  ],
  items: [
    {
      title: 'Mock Card 1',
      text: 'This is card 1',
      label: 'Mock Label 1',
      icon: {
        url: '/mock-icon.png',
        alternativeText: null,
        width: 32,
        height: 32,
        mime: 'image/png',
        formats: null,
      },
      links: [
        {
          label: 'Mock Link 1',
          href: '#',
        },
      ],
    },
    {
      title: 'Mock Card 2',
      text: 'This is card 2',
      label: 'Mock Label 2',
      icon: {
        url: '/mock-icon.png',
        alternativeText: null,
        width: 32,
        height: 32,
        mime: 'image/png',
        formats: null,
      },
      links: [],
    },
  ],
  bottomCTA: {
    text: 'Mock Bottom CTA',
    href: '#',
    variant: 'contained',
    size: 'medium',
    icon: null,
  },
};
