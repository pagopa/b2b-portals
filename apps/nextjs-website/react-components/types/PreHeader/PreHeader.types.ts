import { CtaButtonProps } from '../common/Common.types';

export type PreHeaderProps =
  | {
      rightCtas: CtaButtonProps[];
      leftCtas: CtaButtonProps[];
      readonly includeSlugs?: string[];
      readonly pressReleasesParentSlug?: string;
    }
  | {
      rightCtas: CtaButtonProps[];
      leftCtas?: CtaButtonProps[];
      readonly includeSlugs?: string[];
      readonly pressReleasesParentSlug?: string;
    }
  | {
      rightCtas?: CtaButtonProps[];
      leftCtas: CtaButtonProps[];
      readonly includeSlugs?: string[];
      readonly pressReleasesParentSlug?: string;
    };
