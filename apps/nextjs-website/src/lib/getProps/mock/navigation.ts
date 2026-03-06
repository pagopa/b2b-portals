import { Getters } from '../types';
import { mockPageSEOData } from './commons';

export const mockAllPages: Getters['getAllPages'] = async () => [
  {
    slug: ['mock1', 'mock1'],
    seo: mockPageSEOData,
    sections: [],
  },
  {
    slug: ['mock2', 'mock2'],
    seo: mockPageSEOData,
    sections: [],
  },
];

export const mockPageProps: Getters['getPageProps'] = async () => ({
  slug: ['mock1', 'mock1'],
  seo: mockPageSEOData,
  sections: [],
});
