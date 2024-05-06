import { CtaButtonProps } from '../common/Common.types';

export type PreHeaderProps =
  | {
      rightCtas: CtaButtonProps[];
      leftCtas: CtaButtonProps[];
    }
  | {
      rightCtas: CtaButtonProps[];
      leftCtas?: CtaButtonProps[];
    }
  | {
      rightCtas?: CtaButtonProps[];
      leftCtas: CtaButtonProps[];
    };
