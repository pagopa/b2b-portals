import { RowTextSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const rowTextMockData: RowTextSection & SiteWidePageData = {
  __component: 'sections.row-text',
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'Consectetur adipiscing elit',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, [sed do eiusmod tempor incididunt](#) ut labore et dolore magna aliqua.',
  layout: 'center',
  sectionID: 'row-text-example',
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
