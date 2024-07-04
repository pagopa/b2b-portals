'use client';
import React from 'react';
import { defaultMenuItems } from '../../stories/MegaHeader/megaheaderCommon';
import MegaHeaderRC from '@react-components/components/MegaHeader/MegaHeader';
import { MegaHeaderProps } from '@react-components/types/MegaHeader/MegaHeader.types';
import { MegaHeaderSection } from '@/lib/fetch/types/PageSection';

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
