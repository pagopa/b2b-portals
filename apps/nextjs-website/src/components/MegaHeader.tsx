'use client';
import React from 'react';
import MegaHeaderRC from '@react-components/components/MegaHeader/MegaHeader';
import { MegaHeaderProps } from '@react-components/types/MegaHeader/MegaHeader.types';
import { MegaHeaderSection } from '@/lib/fetch/types/PageSection';

const MegaHeader = (props: MegaHeaderSection) => (
  <MegaHeaderRC {...props} />
);

export default MegaHeader;
