import { Getters } from '../types';
import { mockCTAButtonData, mockImageData } from './commons';

export const mockPreFooterProps: Getters['getPreFooterProps'] = async () => ({
  background: mockImageData,
  ctaButtons: [mockCTAButtonData, mockCTAButtonData],
  exclude: [],
  layout: 'left',
  storeButtons: null,
  theme: 'light',
  title: 'mock',
});
