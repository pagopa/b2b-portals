import { Getters } from '../types';
import { mockImageData, mockPageSEOData } from './commons';

export const mockPressReleasePages: Getters['getPressReleasePages'] =
  async () => [
    {
      slug: 'mock',
      seo: mockPageSEOData,
      pressRelease: {
        backlink: {
          href: 'mock',
          label: 'mock',
          ariaLabel: 'label',
        },
        body: 'mock',
        date: 'mock',
        sectionID: 'mock',
        subtitle: 'mock',
        title: 'mock',
      },
      credits: {
        body: 'mock',
        image: mockImageData,
        imageLinkTitle: 'mock',
        imageLinkUrl: 'mock',
        sectionID: 'mock',
      },
      createdAt: '2024-11-28T15:14:28.486Z',
      publishedAt: '2024-11-28T15:14:29.486Z',
      updatedAt: '2024-11-28T15:14:28.486Z',
    },
  ];
