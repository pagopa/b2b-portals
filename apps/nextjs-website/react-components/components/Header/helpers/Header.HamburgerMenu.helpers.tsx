import React from 'react';
import menuIcon from '@react-components/assets/icon-menu-white.svg';
import Image from 'next/image';

export const HamburgerMenu = ({
  open,
  onOpen,
  ariaLabels,
}: {
  open: boolean;
  onOpen: () => void;
  ariaLabels: {
    openMenu: string;
  };
}) => {
  return !open ? (
    <Image
      width={20}
      height={20}
      src={menuIcon}
      alt={ariaLabels.openMenu}
      onClick={onOpen}
      aria-label={ariaLabels.openMenu}
      aria-haspopup='true'
      aria-expanded='false'
    />
  ) : null;
};
