import { Getters } from '../types';
import { mockImageData } from './commons';

export const mockHeaderProps: Getters['getHeaderProps'] = async () => ({
  __component: 'headers.mega-header',
  ctaButton: {
    href: 'mock',
    icon: 'HelpOutlineOutlined',
    openInNewTab: true,
    size: 'medium',
    text: 'mock',
    variant: 'contained',
  },
  drawer: {
    buttonText: 'mock',
    ctaCard: {
      buttonText: 'mock',
      href: 'mock',
      subtitle: 'mock',
      title: 'mock',
    },
    linkCards: [
      {
        buttonText: 'mock',
        href: 'mock',
        icons: [mockImageData, mockImageData],
        subtitle: 'mock',
        title: 'mock',
      },
    ],
    subtitle: 'mock',
    title: 'mock',
  },
  exclude: [],
  logo: mockImageData,
  mixpanelCtaClickEvent: null,

});
