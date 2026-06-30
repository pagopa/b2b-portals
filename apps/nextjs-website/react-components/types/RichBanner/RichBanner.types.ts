import { SectionProps, ThemeVariant } from '../common/Common.types';

export interface RichBannerProps extends Pick<SectionProps, 'sectionID'> {
  readonly title?: JSX.Element;
  readonly body?: JSX.Element;
  readonly themeVariant: ThemeVariant;
}
