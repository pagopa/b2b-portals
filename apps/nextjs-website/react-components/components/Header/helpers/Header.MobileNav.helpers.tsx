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
import closeIcon from '@react-components/assets/icons/icon-close-white.svg';
import {
  HeaderProps,
  MenuDropdownProp,
} from '@react-components/types/Header/Header.types';
import {
  ExternalLinkIcon,
  isValidExternalLink,
} from '@react-components/components/common/Common';
import chevronBlueIcon from '@react-components/assets/icons/icon-chevron-blue.svg';
import Image from 'next/image';

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
  labels: HeaderProps['labels'];
}

export default function MobileNav({
  isOpen,
  onClose,
  anchor,
  menu,
  labels,
}: MobileNavProps) {
  const [openMenuIndex, setOpenMenuIndex] = React.useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <>
      <Drawer
        anchor={anchor}
        open={isOpen}
        onClose={onClose}
        sx={drawerStyles}
        role='navigation'
      >
        <Stack
          sx={{
            height: '100%',
          }}
          direction='row'
          role='presentation'
          aria-label={labels.mainMenu}
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
                          width: item.items ? 'default' : '100%',
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
                          <Image
                            src={chevronBlueIcon}
                            alt={
                              isSelected ? labels.openMenu : labels.closeMenu
                            }
                            style={{
                              transition: 'transform 0.3s',
                              transform: !isSelected
                                ? 'rotate(180deg)'
                                : 'rotate(0deg)',
                            }}
                          />
                        </Box>
                      )}
                    </ListItem>
                    {isSelected && item.items && (
                      <List disablePadding>
                        {item.items.map((subItem, subIndex) => (
                          <ListItem
                            key={subIndex}
                            sx={{
                              p: 0,
                              '&:hover': {
                                backgroundColor: 'transparent',
                              },
                              '&:focus': {
                                backgroundColor: 'transparent',
                              },
                            }}
                          >
                            <Link
                              href={
                                subItem.href
                                  ? subItem.href
                                  : `#${subItem.label}`
                              }
                              sx={{
                                textDecoration: 'none',
                                m: 0,
                                pl: 4,
                                py: 2,
                                width: '100%',
                              }}
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
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    )}
                  </React.Fragment>
                );
              })}
            </List>
          </div>
          <Box>
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
              <Image
                src={closeIcon}
                alt={labels.closeMenu}
                width={20}
                height={20}
              />
            </IconButton>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
