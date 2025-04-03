'use client';

import { DynamicsForm as DynamicsFormRC } from '@react-components/components';
import { DynamicsFormSectionProps } from '@/lib/fetch/types/PageSection';

const DynamicsForm = (props: DynamicsFormSectionProps) => (
  <DynamicsFormRC {...props} />
);

export default DynamicsForm;
