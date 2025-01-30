import React, { useState, useEffect, MouseEvent, useRef } from 'react';
import { IconButton, useMediaQuery, Typography, Stack } from '@mui/material';
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
  LinkLabel,
  Overlay,
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
  const menuRef = useRef<HTMLDivElement>(null);

  const activeMenuItem = menuItems.find(
    (menuItem) => menuItem.primary === activeItem
  );
  const activeCta = activeMenuItem?.ctaButton || ctaButton;

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

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        !isMobile &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
        setActiveItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {!isMobile && dropdownOpen && (
        <Overlay
          className={dropdownOpen ? 'open' : ''}
          onClick={() => setDropdownOpen(null)}
        />
      )}
      <Container
        ref={menuRef}
        style={{
          boxShadow: dropdownOpen
            ? 'none'
            : '0 4px 16px 0 rgba(14, 15, 19, 0.06)',
        }}
      >
        <Content>
          <Logo>
            <a href='/'>
              <img src={logoSrc} alt={logoAlt} />
            </a>
          </Logo>
          {!isMobile && (
            <>
              <Nav>
                {menuItems.map((menuItem: MegaMenuItem, index) => (
                  <Typography component='li' key={index}>
                    <a
                      href='/'
                      className={`menuPrimaryItem ${
                        dropdownOpen === menuItem.primary ? 'active' : ''
                      }`}
                      onClick={(e) => handleClick(e, menuItem.primary)}
                    >
                      {menuItem.primary}
                    </a>
                  </Typography>
                ))}
              </Nav>
              {activeCta && (
                <CtaButtons
                  ctaButtons={[
                    {
                      ...activeCta,
                      sx: {
                        backgroundColor: '#0B3EE3',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: 2,
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        fontSize: '16px!important',
                        fontWeight: '700!important',
                        letterSpacing: '0.3px',
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
                      },
                    },
                  ]}
                />
              )}
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

        {!isMobile &&
          menuItems.map((menuItem: MegaMenuItem, index) => (
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
                          {
                            length: Math.ceil(submenu.items.length / 7),
                          },
                          (_, colIndex) => (
                            <Typography
                              component='div'
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
                                    target={
                                      item.href.startsWith('https://')
                                        ? '_blank'
                                        : '_self'
                                    }
                                    className={`menuSecondaryItem ${
                                      activeItem === item.label ? 'active' : ''
                                    }`}
                                    onClick={() => {
                                      setActiveItem(item.label);
                                      setDropdownOpen(null);
                                    }}
                                  >
                                    {item.label}
                                    {item.badge && (
                                      <LinkLabel>{item.badge}</LinkLabel>
                                    )}
                                    <ArrowForwardIcon className='arrowIcon' />
                                  </a>
                                ))}
                            </Typography>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </Dropdown>
          ))}

        <MobileMenu
          paddingTop={2}
          id='mobileMenu'
          className={mobileMenuOpen ? 'open' : ''}
        >
          {menuItems.map((menuItem: MegaMenuItem, index) => (
            <React.Fragment key={index}>
              <Stack
                className={`mobileMenuPrimaryItem ${
                  dropdownOpen === `mobile${menuItem.primary}` ? 'active' : ''
                }`}
                onClick={(e) =>
                  handleClick(e as any, `mobile${menuItem.primary}`)
                }
              >
                <Typography>{menuItem.primary}</Typography>
                <KeyboardArrowDownIcon
                  style={{
                    transform:
                      dropdownOpen === `mobile${menuItem.primary}`
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    color: palette.custom.primaryColorDark,
                  }}
                />
              </Stack>
              <Stack
                className={`dropdownMobile ${
                  dropdownOpen === `mobile${menuItem.primary}` ? 'open' : ''
                }`}
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
                        target={
                          item.href.startsWith('https://') ? '_blank' : '_self'
                        }
                        className={`mobileMenuSecondaryItem ${
                          activeItem === item.label ? 'active' : ''
                        }`}
                        onClick={() => {
                          setActiveItem(item.label);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <Typography variant='body2' fontSize={14}>
                          {item.label}
                        </Typography>
                        {item.badge && <LinkLabel>{item.badge}</LinkLabel>}
                        <ArrowForwardIcon className='arrowIcon' />
                      </a>
                    ))}
                  </div>
                ))}
              </Stack>
            </React.Fragment>
          ))}
          {activeCta && (
            <CtaButtons
              ctaButtons={[
                {
                  ...activeCta,
                  sx: {
                    backgroundColor: '#0B3EE3',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: 2,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    margin: '30px',
                    fontSize: '16px!important',
                    fontWeight: '700!important',
                    letterSpacing: '0.3px',
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
                  },
                },
              ]}
            />
          )}
        </MobileMenu>
      </Container>
    </>
  );
};

export default MegaHeader;
