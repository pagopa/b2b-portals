import { AccordionSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const accordionMockData: AccordionSection & SiteWidePageData = {
  __component: 'sections.accordion',
  title: 'Mock Accordion Title',
  subtitle: 'Mock Accordion Subtitle',
  description: 'This is a **mock description** for the accordion.',
  trackItemOpen: true,
  accordionItems: [
    {
      itemID: 'item-1',
      header: 'Mock Header 1',
      content: 'Mock **content** for item 1.',
    },
    {
      itemID: 'item-2',
      header: 'Mock Header 2',
      content: 'Mock _content_ for item 2.',
    },
  ],
  theme: 'light',
  layout: 'center',
  textAlignment: 'center',
  sectionID: 'mock-accordion-section',
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
