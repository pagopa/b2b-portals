'use client';
import React from 'react';
import {
  PreHeaderProps,
  PreHeader as PreHeaderEC,
} from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import '@/styles/preHeader.css';
// TODO: Component styles are loaded client-side (even if we move the import to a server side component above this one). This causes a flash of the unstyled component (even when everything is rendered as static HTML) that needs to be fixed.

const PreHeader: React.FC<PreHeaderProps> = (preHeaderData) => (
  <div id='pre-header'>
    <PreHeaderEC {...preHeaderData} />
  </div>
);

export default PreHeader;
