'use client';
import React from 'react';
import Feature, { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';

const FeatureComponent: React.FC<FeatureProps> = (featureData) => (
  <Feature {...featureData} />
);

export default FeatureComponent;

