'use client';
import React from 'react';

import MegaHeaderRC from '@react-components/components/MegaHeader/MegaHeader';
import { MegaHeaderProps } from '@react-components/types/MegaHeader/MegaHeader.types';
import { MegaHeaderSection } from '@/lib/fetch/types/PageSection';
import { defaultMenuItems } from '../../stories/MegaHeader/megaheaderCommon';

const makeMegaHeaderProps = ({
  menuItems = defaultMenuItems,
  ...rest
}: MegaHeaderSection): MegaHeaderProps => ({
  menuItems,
  ...rest,
});

const MegaHeader = (props: MegaHeaderSection) => (
  <MegaHeaderRC {...makeMegaHeaderProps(props)} />
);

export default MegaHeader;
