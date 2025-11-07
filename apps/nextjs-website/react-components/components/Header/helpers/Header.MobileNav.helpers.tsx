import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {
  Stack,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { MenuDropdownProp } from '@react-components/types/Header/Header.types';

const drawerStyles = {
  '& .MuiDrawer-paperAnchorLeft': {
    backgroundColor: '#f2f2f2',
    width: { xs: '100%', md: '75%' },
    height: '100%',
  },
};

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  anchor: Anchor;
  menu: MenuDropdownProp[];
  theme: 'dark' | 'light';
}

export default function MobileNav({
  isOpen,
  onClose,
  anchor,
  menu,
}: MobileNavProps) {
  const [openMenuIndex, setOpenMenuIndex] = React.useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const goToLink = (href: string) => (window.location.href = href);

  return (
    <Drawer anchor={anchor} open={isOpen} onClose={onClose} sx={drawerStyles}>
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
                    onClick={() =>
                      goToLink(item.href ? item.href : `#${item.label}`)
                    }
                    component={Button}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                      '&:focus': {
                        backgroundColor: 'transparent',
                      },
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontWeight: 600,
                      color: '#5c6f82',
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: 600,
                        color: '#5c6f82',
                      }}
                    >
                      {item.label}
                    </Typography>
                    {item.items && (
                      <IconButton
                        onClick={() => toggleMenu(index)}
                        sx={{
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <ArrowDropDown
                          style={{
                            transition: 'transform 0.3s',
                            transform: isSelected
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                            color: '#5c6f82',
                          }}
                        />
                      </IconButton>
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
                            fontWeight: 600,
                            color: '#5c6f82',
                          }}
                          component={Button}
                          onClick={() =>
                            goToLink(
                              subItem.href ? subItem.href : `#${subItem.label}`,
                            )
                          }
                        >
                          <ListItemText
                            primary={
                              <Typography
                                style={{
                                  color: '#5c6f82',
                                  fontWeight: 600,
                                }}
                              >
                                {subItem.label}
                              </Typography>
                            }
                          />
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
    </Drawer>
  );
}
