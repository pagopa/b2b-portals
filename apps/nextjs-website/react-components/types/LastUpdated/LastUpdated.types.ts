import { LinkProps } from '../common/Common.types';

export interface LastUpdatedProps {
  readonly sectionID: string | null;
  readonly lastUpdated?: string;
  readonly label: string;
  readonly licenseLink: LinkProps;
}
