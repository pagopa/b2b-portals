import { SectionProps, Generic } from "../common/Common.types";

export interface HeroChipsProps extends SectionProps {
  readonly background?: {
    src: string;
    srcSet: string;
  };
  readonly title: string;
  readonly subtitle?: string | Generic;
  readonly chips: ReadonlyArray<ChipProps>;
}

export interface ChipProps {
  readonly label: string;
  readonly targetID: string;
}