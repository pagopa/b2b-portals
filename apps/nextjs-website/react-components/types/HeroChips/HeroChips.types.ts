import { SectionProps, Generic } from "../common/Common.types";

export interface HeroChipsProps extends SectionProps {
  readonly background?: string | Generic;
  readonly title: string;
  readonly subtitle?: string | Generic;
  readonly centerText: boolean;
  readonly chips: ReadonlyArray<ChipProps>;
}

export interface ChipProps {
  readonly label: string;
  readonly targetID: string;
}