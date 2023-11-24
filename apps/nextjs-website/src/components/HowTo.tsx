'use client';
import React from 'react';
import {
  HowToProps,
  HowTo as HowToEC,
} from '@pagopa/pagopa-editorial-components/dist/components/HowTo';

const HowTo: React.FC<HowToProps> = (howtoData) => <HowToEC {...howtoData} />;

export default HowTo;
