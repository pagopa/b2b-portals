import { Getters } from '../types';
import { mockImageData } from './commons';

export const mockFooterProps: Getters['getFooterProps'] = async () => ({
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
      },
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: false,
      },
    ],
  },
  links_services: {
    title: 'mock',
    links: [
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: true,
      },
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: false,
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
      },
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: false,
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
      },
      {
        label: 'mock',
        href: 'mock',
        ariaLabel: 'mock',
        showOneTrustPreferencies: false,
      },
    ],
    socialLinks: [
      {
        icon: mockImageData,
        href: 'mock',
        ariaLabel: 'mock',
      },
      {
        icon: mockImageData,
        href: 'mock',
        ariaLabel: 'mock',
      },
    ],
  },
});
