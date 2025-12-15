import { CtaButtonProps } from '../common/Common.types';

type PreHeaderButtons =
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

export type PreHeaderProps = PreHeaderButtons & {
  readonly includeSlugs?: string[];
  readonly pressReleasesParentSlug?: string;
};
