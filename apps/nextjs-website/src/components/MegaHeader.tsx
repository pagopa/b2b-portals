'use client';
import React from 'react';
import MegaHeaderRC from '@react-components/components/MegaHeader/MegaHeader';
import { MegaHeaderProps } from '@react-components/types/MegaHeader/MegaHeader.types';
import { MegaHeaderSection } from '@/lib/fetch/types/PageSection';

const makeMegaHeaderProps = ({
  menuItems,
  logoSrc,
  logoAlt,
  buttonHref,
  ...rest
}: MegaHeaderSection): MegaHeaderProps => ({
  menuItems,
  ...rest,
  logoSrc,
  logoAlt,
  buttonHref,
});

const MegaHeader = (props: MegaHeaderSection) => (
  <MegaHeaderRC {...makeMegaHeaderProps(props)} />
);

export default MegaHeader;
