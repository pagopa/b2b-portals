import { Getters } from '../types';

export const mockFooterProps: Getters['getFooterProps'] = async () => ({
  __component: 'footers.standard-footer',
  companyLink: {
    ariaLabel: 'mock',
    href: 'mock',
  },
  legalInfo: 'mock',
  showFundedByNextGenerationEULogo: true,
  links_aboutUs: {
    title: 'mock',
    links: [
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: true,
        page: null,
      },
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: false,
        page: null,
      },
    ],
  },
  links_resources: {
    title: 'mock',
    links: [
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: true,
        page: null,
      },
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: false,
        page: null,
      },
    ],
  },
  links_followUs: {
    title: 'mock',
    links: [
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: true,
        page: null,
      },
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: false,
        page: null,
      },
    ],
    socialLinks: [
      {
        icon: 'linkedin',
        title: 'linkedin',
        href: 'mock',
        ariaLabel: 'mock',
      },
      {
        icon: 'youtube',
        title: 'youtube',
        href: 'mock',
        ariaLabel: 'mock',
      },
    ],
  },
});
