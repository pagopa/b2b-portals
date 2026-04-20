import { SectionProps, ThemeVariant } from '../common/Common.types';

export interface PressReleasePreviewProps {
  date: string;
  dateIso: string;
  title: string;
  link: {
    label: string;
    href: string;
  };
  themeVariant: ThemeVariant;
}

export interface PressReleaseListProps extends Omit<SectionProps, 'theme'> {
  title: string;
  pressReleases: PressReleasePreviewProps[];
}
