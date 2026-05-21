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
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MenuDropdownProp } from '@react-components/types/Header/Header.types';
import {
  ExternalLinkIcon,
  isValidExternalLink,
} from '@react-components/components/common/Common';
import { ExpandMore } from '@mui/icons-material';

const drawerStyles = {
  '& .MuiDrawer-paperAnchorLeft': {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
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

  return (
    <Drawer anchor={anchor} open={isOpen} onClose={onClose} sx={drawerStyles}>
      <Stack
        sx={{
          height: '100%',
        }}
        direction='row'
        role='presentation'
      >
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
                    sx={{
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                      '&:focus': {
                        backgroundColor: 'transparent',
                      },
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 600,
                      px: 2,
                      color: '#0066CC',
                    }}
                  >
                    <Link
                      href={item.href ? item.href : `#${item.label}`}
                      underline='none'
                      sx={{
                        color: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 600,
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: 600,
                          color: 'inherit',
                        }}
                      >
                        {item.label}
                        <ExternalLinkIcon
                          show={isValidExternalLink(item.href)}
                        />
                      </Typography>
                    </Link>
                    {item.items && (
                      <Box
                        onClick={() => toggleMenu(index)}
                        sx={{
                          cursor: 'pointer',
                          color: 'inherit',
                          display: 'flex',
                          alignItems: 'center',
                          ml: 1,
                        }}
                      >
                        <ExpandMore
                          sx={{
                            transition: 'transform 0.3s',
                            transform: isSelected
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                          }}
                        />
                      </Box>
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
                          component={Link}
                          href={
                            subItem.href ? subItem.href : `#${subItem.label}`
                          }
                        >
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  fontWeight: 300,
                                  py: 2,
                                  color: '#0066CC',
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
        <Box
          sx={{
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
            }}
          >
            <CloseIcon sx={{ color: 'white', width: 32, height: 32 }} />
          </IconButton>
        </Box>
      </Stack>
    </Drawer>
  );
}
