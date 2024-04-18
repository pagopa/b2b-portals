import { EIconProps } from "../../components/common/EIcon";

export interface Step {
  readonly stepIcon?: EIconProps;
  readonly title: string;
  readonly description: string | JSX.Element;
}

export interface HowToStepProps extends Step {
  readonly index: number;
  readonly theme: 'light' | 'dark';
  readonly isLastStep: boolean;
}

export interface HowToProps {
  readonly title: string;
  readonly steps: ReadonlyArray<Step>;
  readonly theme: 'light' | 'dark';
  readonly link?: {
    readonly href: string;
    readonly label: string;
    readonly target?: React.HTMLAttributeAnchorTarget;
  };
  readonly rowMaxSteps?: number;
  readonly stepsAlignment?: 'right' | 'center' | 'left';
}