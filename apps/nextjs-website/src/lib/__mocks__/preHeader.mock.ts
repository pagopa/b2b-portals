import { PreHeaderAttributes } from '@/lib/fetch/preHeader';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const preHeaderMockData: PreHeaderAttributes & SiteWidePageData = {
  leftCtas: [
    {
      text: 'PagoPA S.p.A.',
      href: 'https://pagopa.it',
      icon: null,
      size: 'medium',
    },
  ],
  rightCtas: [
    {
      text: 'Assistenza',
      href: '/assistenza',
      icon: 'HelpOutlineOutlined',
      size: 'medium',
    },
  ],
  locale: 'it',
  defaultLocale: 'it',
  themeVariant: 'SEND',
};
