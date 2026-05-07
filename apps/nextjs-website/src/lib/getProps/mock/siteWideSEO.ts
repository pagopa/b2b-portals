import { Getters } from '../types';
import { mockImageData } from './commons';

export const mockSiteWideSEO: Getters['getSiteWideSEO'] = async () => ({
  analytics: null,
  appleTouchIcon: mockImageData,
  defaultLocale: 'it',
  favicon: mockImageData,
  locales: {
    de: false,
    en: false,
    fr: false,
    it: true,
    sl: false,
  },
  metaImage: mockImageData,
  oneTrustToken: null,
  pressReleasesParentSlug: 'mock',
  siteName: {
    alternateName: 'mock',
    name: 'mock',
    ogSiteName: 'mock',
    url: 'mock',
  },
  themeVariant: 'IO',
  updatedAt: '2024-11-28T15:14:28.486Z',
  publishedAt: '2024-11-28T15:14:29.486Z',
});
