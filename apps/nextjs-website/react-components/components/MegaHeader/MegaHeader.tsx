import React, { useState, useEffect, MouseEvent } from 'react';
import { IconButton, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import {
  MegaHeaderProps,
  MegaMenuItem,
} from '@react-components/types/MegaHeader/MegaHeader.types';
import {
  Container,
  Content,
  Dropdown,
  DropdownTitle,
  Logo,
  MobileMenu,
  Nav,
} from './MegaHeader.Helpers';
import { CtaButtons } from '../common/Common';

const MegaHeader = (props: MegaHeaderProps) => {
  const { logoSrc, logoAlt, ctaButton } = props;
  const menuItems = props.menuItems || [];

  const { palette } = useTheme();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    menu: string
  ) => {
    event.preventDefault();
    setDropdownOpen((prev) => (prev === menu ? null : menu));
    setActiveItem(menu);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Container position='static'>
        <Content>
          <Logo>
            <img src={logoSrc} alt={logoAlt} />
          </Logo>
          {!isMobile && (
            <>
              <Nav>
                {menuItems.map((menuItem: MegaMenuItem, index) => (
                  <li key={index}>
                    <a
                      href='/'
                      className={`menuPrimaryItem ${dropdownOpen === menuItem.primary ? 'active' : ''}`}
                      onClick={(e) => handleClick(e, menuItem.primary)}
                    >
                      {menuItem.primary}
                    </a>
                  </li>
                ))}
              </Nav>
              {ctaButton && <CtaButtons ctaButtons={[{
                ...ctaButton,
                sx: {
                  backgroundColor: '#0B3EE3',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: 2,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    backgroundColor: '#005bb5',
                  },
                  '&:focus': {
                    backgroundColor: '#005bb5',
                  },
                  '&:active': {
                    backgroundColor: '#004999',
                  },
                  '&:visited': {
                    color: 'white',
                  },
                }
              }]} />}
            </>
          )}
          <IconButton
            className='hamburger'
            onClick={handleMobileMenuToggle}
            sx={{
              display: { md: 'none' },
              color: palette.custom.primaryColorDark,
            }}
          >
            {mobileMenuOpen ? (
              <CloseIcon style={{ color: palette.custom.primaryColorDark }} />
            ) : (
              <MenuIcon style={{ color: palette.custom.primaryColorDark }} />
            )}
          </IconButton>
        </Content>
      </Container>
      {!isMobile && (
        <Box
          id='desktopMenu'
          sx={{ position: 'absolute', top: '56px', width: '100%', zIndex: 999 }}
        >
          {menuItems.map((menuItem: MegaMenuItem, index) => (
            <Dropdown
              key={index}
              className={dropdownOpen === menuItem.primary ? 'open' : ''}
            >
              {dropdownOpen === menuItem.primary &&
                menuItem.secondary.map((submenu, subIndex) => (
                  <div key={subIndex} className='dropdownSection'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {submenu.title && (
                        <DropdownTitle>{submenu.title}</DropdownTitle>
                      )}
                      <div style={{ display: 'flex' }}>
                        {Array.from(
                          { length: Math.ceil(submenu.items.length / 7) },
                          (_, colIndex) => (
                            <div
                              key={colIndex}
                              className='column'
                              style={{ flex: 1 }}
                            >
                              {submenu.items
                                .slice(colIndex * 7, (colIndex + 1) * 7)
                                .map((item, itemIndex) => (
                                  <a
                                    key={itemIndex}
                                    href={item.href}
                                    className={`menuSecondaryItem ${activeItem === item.label ? 'active' : ''}`}
                                    onClick={() => setActiveItem(item.label)}
                                  >
                                    {item.label}
                                    <ArrowForwardIcon className='arrowIcon' />
                                  </a>
                                ))}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </Dropdown>
          ))}
        </Box>
      )}
      <MobileMenu id='mobileMenu' className={mobileMenuOpen ? 'open' : ''}>
        {menuItems.map((menuItem: MegaMenuItem, index) => (
          <React.Fragment key={index}>
            <Box
              className={`mobileMenuPrimaryItem ${dropdownOpen === `mobile${menuItem.primary}` ? 'active' : ''}`}
              onClick={(e) =>
                handleClick(e as any, `mobile${menuItem.primary}`)
              }
            >
              {menuItem.primary}
              <KeyboardArrowDownIcon
                style={{
                  transform:
                    dropdownOpen === `mobile${menuItem.primary}`
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                  color: palette.custom.primaryColorDark,
                }}
              />
            </Box>
            <Box
              className={`dropdownMobile ${dropdownOpen === `mobile${menuItem.primary}` ? 'open' : ''}`}
            >
              {menuItem.secondary.map((submenu, subIndex) => (
                <div key={subIndex}>
                  {submenu.title && (
                    <DropdownTitle>{submenu.title}</DropdownTitle>
                  )}
                  {submenu.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.href}
                      className={`mobileMenuSecondaryItem ${activeItem === item.label ? 'active' : ''}`}
                      onClick={() => setActiveItem(item.label)}
                    >
                      {item.label}
                      <ArrowForwardIcon className='arrowIcon' />
                    </a>
                  ))}
                </div>
              ))}
            </Box>
          </React.Fragment>
        ))}
        {ctaButton && <CtaButtons ctaButtons={[{
          ...ctaButton,
          sx: {
            backgroundColor: '#0B3EE3',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 2,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            margin: '30px',
            '&:hover': {
              backgroundColor: '#005bb5',
            },
            '&:focus': {
              backgroundColor: '#005bb5',
            },
            '&:active': {
              backgroundColor: '#004999',
            },
            '&:visited': {
              color: 'white',
            },
          }
        }]} />}
      </MobileMenu>
    </>
  );
};

export default MegaHeader;
