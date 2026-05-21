import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export const HamburgerMenu = ({
  open,
  onOpen,
  onClose,
  ariaLabels,
}: {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  ariaLabels: {
    openMenu: string;
    closeMenu: string;
  };
}) => {
  return open ? (
    <CloseIcon
      sx={{ color: 'inherit' }}
      cursor='pointer'
      onClick={onClose}
      aria-label={ariaLabels.closeMenu}
      aria-haspopup='true'
      aria-expanded='true'
    />
  ) : (
    <MenuIcon
      sx={{ color: 'inherit', width: 24, height: 24 }}
      cursor='pointer'
      onClick={onOpen}
      aria-label={ariaLabels.openMenu}
      aria-haspopup='true'
      aria-expanded='false'
    />
  );
};
