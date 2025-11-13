import React, { useState, useEffect, MouseEvent, useRef } from 'react';
import {
  IconButton,
  useMediaQuery,
  Typography,
  Stack,
  Button,
} from '@mui/material';
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
  Sublink,
} from './MegaHeader.Helpers';
import { CtaButtons } from '../common/Common';
import { usePathname } from 'next/navigation';
import SideDrawer from '../Header/helpers/Header.SideDrawer.helpers';

const MegaHeader = ({
  logo,
  ctaButton,
  mobileCtaButton,
  trackSublinkClickEvent,
  menuItems,
  drawer,
  socialLinks,
}: MegaHeaderProps) => {
  const pathname = usePathname();
  const { palette, ...theme } = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Sublink is active if it points to the current page or one of its parents
  // .slice(1) is needed because (assuming a relative url built like /example-slug or /parent/child)
  // the first item in the array is always going to be an empty string, which matches with the homepage
  // We can safely assume a relative url because an external one will simply never strike a match
  const isActiveSubLink = (href: string): boolean =>
    pathname
      ? pathname.split('/').slice(1).includes(href.replace('/', ''))
      : false;

  // Returns true if any one of the link's sublinks is active
  const isActiveLink = (menuItem: MegaMenuItem): boolean =>
    menuItem.secondary
      .flatMap((sublinkGroup) =>
        sublinkGroup.items.map((item) => isActiveSubLink(item.href)),
      )
      .reduce((acc, curr) => acc || curr);

  const activeCta =
    menuItems.find(isActiveLink)?.ctaButton ??
    (isMobile && mobileCtaButton ? mobileCtaButton : ctaButton);

  const handleClick = (
    event: MouseEvent<HTMLElement | HTMLDivElement>,
    menu: string,
  ) => {
    event.preventDefault();
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

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
            <a href={logo.href}>
              <img src={logo.src} alt={logo.alt} />
            </a>
          </Logo>
          {!isMobile && (
            <>
              <Nav>
                {menuItems.map((menuItem: MegaMenuItem, index) => (
                  <Typography component='li' key={index}>
                    <button
                      type='button'
                      className={`menuPrimaryItem ${dropdownOpen === menuItem.primary ? 'open' : ''
                        } ${isActiveLink(menuItem) ? 'active' : ''}`}
                      aria-expanded={dropdownOpen === menuItem.primary}
                      aria-controls={`submenu-${index}`}
                      onClick={(e) => handleClick(e, menuItem.primary)}
                    >
                      {menuItem.primary}
                    </button>
                  </Typography>
                ))}
              </Nav>
              {socialLinks && socialLinks.length > 0 && (
                <Stack
                  direction='row'
                  spacing={3}
                  alignItems='center'
                  sx={{
                    ml: 2,
                    mr: 5,
                  }}
                >
                  {socialLinks.map(({ iconURL, href, ariaLabel }, i) => (
                    <a
                      key={i}
                      href={href}
                      title={ariaLabel}
                      aria-label={ariaLabel}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel='noopener noreferrer'
                      style={{ display: 'inline-flex', alignItems: 'center' }}
                    >
                      <img
                        src={iconURL}
                        alt={ariaLabel}
                        width={24}
                        height={24}
                        style={{ display: 'block' }}
                      />
                    </a>
                  ))}
                </Stack>
              )}
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
              {!activeCta && drawer && (
                <CtaButtons
                  ctaButtons={[
                    {
                      text: drawer.buttonText,
                      onClick: openDrawer,
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
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobileMenu"
            onClick={handleMobileMenuToggle}
            sx={{
              display: { lg: 'none' },
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
                                  <Sublink
                                    key={itemIndex}
                                    href={item.href}
                                    target={
                                      item.href.startsWith('https://')
                                        ? '_blank'
                                        : '_self'
                                    }
                                    {...(isActiveSubLink(item.href) && {
                                      className: 'active',
                                    })}
                                    onClick={() => setDropdownOpen(null)}
                                    trackEvent={trackSublinkClickEvent}
                                    trackingProperties={{
                                      Tab: menuItem.primary,
                                      Link: item.href,
                                    }}
                                  >
                                    {item.label}
                                    {item.badge && (
                                      <LinkLabel>{item.badge}</LinkLabel>
                                    )}
                                    <ArrowForwardIcon className='arrowIcon' />
                                  </Sublink>
                                ))}
                            </Typography>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </Dropdown>
          ))}

        <MobileMenu
          paddingTop={2}
          role='navigation'
          id='mobileMenu'
          className={mobileMenuOpen ? 'open' : ''}
        >
          {menuItems.map((menuItem: MegaMenuItem, index) => (
            <React.Fragment key={index}>
              <Stack
                component={Button}
                sx={{ width: '100% !important' }}
                className={`mobileMenuPrimaryItem ${dropdownOpen === `mobile${menuItem.primary}` ? 'active' : ''
                  }`}
                onClick={(e) =>
                  handleClick(e as any, `mobile${menuItem.primary}`)
                }
                aria-expanded={dropdownOpen === `mobile${menuItem.primary}`}
                aria-controls={`mobile-submenu-${index}`}
              >
                <Typography
                  {...(isActiveLink(menuItem) && {
                    fontWeight: 600,
                    color: palette.custom.primaryColorDark,
                  })}
                >
                  {menuItem.primary}
                </Typography>
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
                id={`mobile-submenu-${index}`}
                className={`dropdownMobile ${dropdownOpen === `mobile${menuItem.primary}` ? 'open' : ''
                  }`}
              >
                {menuItem.secondary.map((submenu, subIndex) => (
                  <div key={subIndex}>
                    {submenu.title && (
                      <DropdownTitle>{submenu.title}</DropdownTitle>
                    )}
                    {submenu.items.map((item, itemIndex) => (
                      <Sublink
                        key={itemIndex}
                        href={item.href}
                        target={
                          item.href.startsWith('https://') ? '_blank' : '_self'
                        }
                        className={`mobileMenuSecondaryItem ${isActiveSubLink(item.href) ? 'active' : ''
                          }`}
                        onClick={() => setMobileMenuOpen(false)}
                        trackEvent={trackSublinkClickEvent}
                        trackingProperties={{
                          Tab: menuItem.primary,
                          Link: item.href,
                        }}
                      >
                        <Typography
                          variant='body2'
                          fontSize={14}
                          {...(isActiveSubLink(item.href) && {
                            fontWeight: 600,
                            color: palette.custom.primaryColorDark,
                          })}
                        >
                          {item.label}
                        </Typography>
                        {item.badge && <LinkLabel>{item.badge}</LinkLabel>}
                        <ArrowForwardIcon className='arrowIcon' />
                      </Sublink>
                    ))}
                  </div>
                ))}
              </Stack>
            </React.Fragment>
          ))}
          {activeCta && (
            <div style={{ padding: '0px 0px 90px 0px', width: 'max-content' }}>
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
            </div>
          )}
          {!activeCta && drawer && (
            <div style={{ padding: '0px 0px 90px 0px', width: 'max-content' }}>
              <CtaButtons
                ctaButtons={[
                  {
                    text: drawer.buttonText,
                    onClick: openDrawer,
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
            </div>
          )}
          {socialLinks && socialLinks.length > 0 && (
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              sx={{
                mt: 4,
                mb: 6,
                px: 4,
                gap: '30px',
                flexWrap: 'wrap',
              }}
            >
              {socialLinks.map(({ iconURL, href, ariaLabel }, i) => (
                <a
                  key={i}
                  href={href}
                  title={ariaLabel}
                  aria-label={ariaLabel}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel='noopener noreferrer'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <img
                    src={iconURL}
                    alt={ariaLabel}
                    width={32}
                    height={32}
                    style={{ display: 'block' }}
                  />
                </a>
              ))}
            </Stack>
          )}
        </MobileMenu>

        {drawer && (
          <SideDrawer
            isOpen={isDrawerOpen}
            onClose={closeDrawer}
            anchor='right'
            theme='light'
            drawerMenuTitle={drawer.title}
            {...(drawer.subtitle && { drawerMenuSubtitle: drawer.subtitle })}
            ctaCard={drawer.ctaCard}
            linkCards={drawer.linkCards}
          />
        )}
      </Container>
    </>
  );
};

export default MegaHeader;
