import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export const HamburgerMenu = ({
  open,
  onOpen,
  onClose,
}: {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const muiTheme = useTheme();

  return (
    <IconButton onClick={() => (open ? onClose() : onOpen())}>
      {open ? (
        <CloseIcon
          sx={{ color: muiTheme.palette.text.secondary }}
          cursor='pointer'
          aria-label='chiudi'
          aria-haspopup='true'
          aria-expanded='true'
        />
      ) : (
        <MenuIcon
          sx={{ color: muiTheme.palette.text.secondary }}
          cursor='pointer'
          aria-label='apri'
          aria-haspopup='true'
          aria-expanded='false'
        />
      )}
    </IconButton>
  );
};
