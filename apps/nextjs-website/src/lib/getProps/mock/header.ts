import { Getters } from '../types';
import { mockCTAButtonData, mockImageData } from './commons';

export const mockHeaderProps: Getters['getHeaderProps'] = async () => ({
  __component: 'headers.mega-header',
  ctaButton: mockCTAButtonData,
  drawer: {
    buttonText: 'mock',
    ctaCard: {
      subtitle: 'mock',
      title: 'mock',
      link: {
        label: 'mock',
        ariaLabel: 'mock',
        href: 'mock',
      },
    },
    linkCards: [
      {
        icons: [mockImageData, mockImageData],
        subtitle: 'mock',
        title: 'mock',
        link: {
          label: 'mock',
          ariaLabel: 'mock',
          href: 'mock',
        },
      },
    ],
    subtitle: 'mock',
    title: 'mock',
  },
  exclude: [],
  logo: mockImageData,
  mixpanelCtaClickEvent: null,
  mobileCtaButton: mockCTAButtonData,
  socialLinks: [
    {
      ariaLabel: 'mock',
      href: 'mock',
      icon: mockImageData,
    },
    {
      ariaLabel: 'mock',
      href: 'mock',
      icon: mockImageData,
    },
  ],
  menu: {
    trackSublinkClickEvent: null,
    links: [
      {
        label: 'mock',
        ctaButton: mockCTAButtonData,
        sublinkGroups: [
          {
            title: 'mock',
            sublinks: [
              {
                label: 'mock',
                isNew: true,
                externalURL: 'mock',
                page: { slug: 'mock' },
                sectionID: 'mock',
              },
            ],
          },
        ],
      },
    ],
  },
});
