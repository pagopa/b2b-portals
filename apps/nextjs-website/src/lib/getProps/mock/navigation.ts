import { Getters } from '../types';
import { mockPageSEOData } from './commons';

export const mockAllPages: Getters['getAllPages'] = async () => [
  {
    slug: ['mock1', 'mock1'],
    seo: mockPageSEOData,
    sections: [],
    createdAt: '2024-11-28T15:14:28.486Z',
    publishedAt: '2024-11-28T15:14:29.486Z',
    updatedAt: '2024-11-28T15:14:28.486Z',
  },
  {
    slug: ['mock2', 'mock2'],
    seo: mockPageSEOData,
    sections: [],
    createdAt: '2024-11-28T15:14:28.486Z',
    publishedAt: '2024-11-28T15:14:29.486Z',
    updatedAt: '2024-11-28T15:14:28.486Z',
  },
];

export const mockPageProps: Getters['getPageProps'] = async () => ({
  slug: ['mock1', 'mock1'],
  seo: mockPageSEOData,
  sections: [],
  createdAt: '2024-11-28T15:14:28.486Z',
  publishedAt: '2024-11-28T15:14:29.486Z',
  updatedAt: '2024-11-28T15:14:28.486Z',
});
