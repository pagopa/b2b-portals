import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';

export type ExtendedEditorialProps = EditorialProps & {
  readonly theme: 'light' | 'dark';
};
