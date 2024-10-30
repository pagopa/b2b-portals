import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { SectionProps } from '../common/Common.types';

export interface Step {
  readonly iconURL?: string;
  readonly title: string;
  readonly description: string | JSX.Element;
}

export interface HowToStepProps extends Step {
  readonly index: number;
  readonly theme: 'light' | 'dark';
  readonly themeVariant: ThemeVariant;
  readonly isLastStep: boolean;
}

export interface HowToProps extends SectionProps {
  readonly title: string;
  readonly steps: ReadonlyArray<Step>;
  readonly link?: {
    readonly href: string;
    readonly label: string;
    readonly target?: React.HTMLAttributeAnchorTarget;
  };
  readonly rowMaxSteps?: number;
  readonly stepsAlignment?: 'right' | 'center' | 'left';
}
