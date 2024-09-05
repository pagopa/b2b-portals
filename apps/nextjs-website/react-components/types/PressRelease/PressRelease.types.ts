import { Theme } from '../common/Common.types';

export interface PressReleaseProps {
  readonly eyelet: string | null;
  readonly title: string;
  readonly subtitle?: string | null;
  readonly body: string;
  readonly ctaText: string | null;
  readonly ctaHref: string | null;
  readonly theme: Theme;
}
