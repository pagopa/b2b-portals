'use client';
import React from 'react';
import MegaHeaderRC from '@react-components/components/MegaHeader/MegaHeader';
import { MegaHeaderProps } from '@react-components/types/MegaHeader/MegaHeader.types';
import { MegaHeaderSection } from '@/lib/fetch/types/PageSection';
import { defaultMenuItems, defaultSocialMediaLinks } from '../../stories/MegaHeader/light.stories';



const makeMegaHeaderProps = ({
  menuItems = defaultMenuItems,
  socialMediaLinks = defaultSocialMediaLinks,
  ...rest
}: MegaHeaderSection): MegaHeaderProps => ({
  menuItems,
  socialMediaLinks,
  ...rest,
});

const MegaHeader = (props: MegaHeaderSection) => (
  <MegaHeaderRC {...makeMegaHeaderProps(props)} />
);

export default MegaHeader;