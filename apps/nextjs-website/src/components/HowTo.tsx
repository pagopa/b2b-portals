'use client';
import React from 'react';
import { HowToProps } from '@pagopa/pagopa-editorial-components/dist/components/HowTo';
import { HowTo as HowToEC } from '@pagopa/pagopa-editorial-components';

const HowTo: React.FC<HowToProps> = (howtoData) => <HowToEC {...howtoData} />;

export default HowTo;
