import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Stack, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { MenuItem } from '@react-components/types/Header/Header.types';

const drawerStyles = {
  '& .MuiDrawer-paperAnchorLeft': {
    backgroundColor: '#f2f2f2',
    width: { xs: '100%', md: '75%' },
    height: '100%',
  },
};

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  anchor: Anchor;
  menu: MenuItem[];
  theme: 'dark' | 'light';
}

export default function MobileDrawer({
  isOpen,
  onClose,
  anchor,
  menu,
  theme,
}: MobileDrawerProps) {
  const [openMenuIndex, setOpenMenuIndex] = React.useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        padding: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
      role='presentation'
    >
      <Stack direction='row' justifyContent='flex-end' alignItems='center'>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '1em',
          backgroundColor: '#fff',
        }}
      >
        <List>
          {menu.map((item, index) => {
            const isSelected = openMenuIndex === index;
            return (
              <React.Fragment key={index}>
                <ListItem
                  button
                  onClick={() => toggleMenu(index)}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                    '&:focus': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        style={{
                          color: isSelected ? '#0b79d0' : '#5c6f82',
                          fontWeight: isSelected ? 600 : 'normal',
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                  {item.items && (
                    <ArrowDropDown
                      style={{
                        transition: 'transform 0.3s',
                        transform: isSelected ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: isSelected ? '#0b79d0' : '#5c6f82',
                      }}
                    />
                  )}
                </ListItem>
                {isSelected && item.items && (
                  <List component='div' disablePadding>
                    {item.items.map((subItem, subIndex) => (
                      <ListItem
                        button
                        key={subIndex}
                        sx={{
                          pl: 4,
                          '&:hover': {
                            backgroundColor: 'transparent',
                          },
                          '&:focus': {
                            backgroundColor: 'transparent',
                          },
                        }}
                      >
                        <ListItemText primary={<Typography style={{ color: '#5c6f82' }}>{subItem.label}</Typography>} />
                      </ListItem>
                    ))}
                  </List>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </div>
    </Box>
  );

  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
      onClose={onClose}
      sx={drawerStyles}
    >
      {list(anchor)}
    </Drawer>
  );
}
