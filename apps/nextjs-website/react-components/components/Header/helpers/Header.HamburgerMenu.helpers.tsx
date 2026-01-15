import React from 'react';
import { useTheme } from '@mui/material';
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
  const muiTheme = useTheme();

  return open ? (
    <CloseIcon
      sx={{ color: muiTheme.palette.text.secondary }}
      cursor='pointer'
      onClick={onClose}
      aria-label={ariaLabels.closeMenu}
      aria-haspopup='true'
      aria-expanded='true'
    />
  ) : (
    <MenuIcon
      sx={{ color: muiTheme.palette.text.secondary }}
      cursor='pointer'
      onClick={onOpen}
      aria-label={ariaLabels.openMenu}
      aria-haspopup='true'
      aria-expanded='false'
    />
  );
};
