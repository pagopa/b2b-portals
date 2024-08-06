import { CommonProps, Generic } from "../common/Common.types";

export interface HeroChipsProps extends CommonProps {
  readonly background?: string | Generic;
  readonly title: string;
  readonly subtitle?: string | Generic;
  readonly isTitleCentered?: boolean;
  readonly isSubtitleCentered?: boolean;
  readonly chips: ReadonlyArray<ChipProps>;
}

export interface ChipProps {
  readonly label: string;
  readonly targetID: string;
}