export interface StatsItemProps {
  readonly title: string;
  readonly description?: string;
  readonly iconURL?: string;
}

export interface StatsProps {
  readonly eyelet?: string;
  readonly title: string;
  readonly body?: string;
  stats: ReadonlyArray<StatsItemProps>;
  sectionID?: string | null;
}
