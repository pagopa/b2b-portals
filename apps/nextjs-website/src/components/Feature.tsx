'use client';
import React from 'react';
import { Feature as FeatureEC } from '@pagopa/pagopa-editorial-components';
import { FeatureProps } from '@pagopa/pagopa-editorial-components/dist/components/Feature/Feature';

const Feature: React.FC<FeatureProps> = (featureData) => (
  <FeatureEC {...featureData} />
);

export default Feature;
