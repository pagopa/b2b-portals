import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { SectionProps } from '../common/Common.types';

export interface PressReleasePreviewProps {
  date: string;
  title: string;
  link: {
    label: string;
    href: string;
  };
  themeVariant: ThemeVariant;
  locale: string;
}

export interface PressReleaseListProps extends Omit<SectionProps, 'theme'> {
  title: string;
  pressReleases: PressReleasePreviewProps[];
  locale: string;
}
