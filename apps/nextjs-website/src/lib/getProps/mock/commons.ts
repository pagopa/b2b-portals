import { CTAButtonSimple } from '@/lib/fetch/types/CTAButton';
import { StrapiImage } from '@/lib/fetch/types/StrapiImage';

export const mockImageData: StrapiImage = {
  alternativeText: 'mock',
  url: 'mock',
  width: 300,
  height: 300,
  mime: 'mock',
  formats: null,
};

export const mockCTAButtonData: CTAButtonSimple = {
  href: 'mock',
  icon: 'HelpOutlineOutlined',
  openInNewTab: true,
  size: 'medium',
  text: 'mock',
  variant: 'contained',
};
