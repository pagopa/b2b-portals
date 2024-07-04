import React, { useState, useEffect, MouseEvent } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, useTheme } from '@mui/material/styles';
import { MenuItem, SocialMediaLink } from '@react-components/types/MegaHeader/MegaHeader.types';
import { defaultMenuItems } from '../../../stories/MegaHeader/megaheaderCommon';

type MegaHeaderProps = {
  menuItems?: MenuItem[];
  socialMediaLinks?: SocialMediaLink[];
};

const Container = styled(AppBar)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
  backgroundColor: '#ffffff',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const Content = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
});

const Logo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& img': {
    height: 34,
    marginRight: 4,
  },
});

const Nav = styled('ul')({
  display: 'flex',
  listStyleType: 'none',
  padding: 0,
  position: 'relative',
  '& li': {
    marginRight: 20,
    position: 'relative',
  },
  '& a': {
    textDecoration: 'none',
    color: '#0073e6',
    padding: 10,
    cursor: 'pointer',
  },
  '& .menuPrimaryItem': {
    fontSize: 16,
    fontWeight: 600,
  },
  '& .menuSecondaryItem': {
    fontSize: 16,
    fontWeight: 300,
    color: '#0073e6',
  },
});

const Dropdown = styled(Box)({
  display: 'none',
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#fff',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  padding: 24,
  borderRadius: 6,
  '&.open': {
    display: 'block',
    width: 'max-content',
  },
  '& a': {
    display: 'block',
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#0073e6',
  },
  '& a:hover': {
    backgroundColor: '#f1f1f1',
  },
});

const DropdownTitle = styled(Typography)({
  fontWeight: 'bold',
  color: 'black',
  padding: '10px 20px',
  cursor: 'default',
});

const ButtonStyled = styled(Button)({
  backgroundColor: '#0073e6',
  color: 'white',
  padding: '10px 20px',
  borderRadius: 5,
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
});

const MobileMenu = styled(Box)({
  display: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffff',
  zIndex: 999,
  flexDirection: 'column',
  alignItems: 'flex-start',
  overflowY: 'auto',
  paddingTop: '80px', // Added padding to ensure visibility
  '&.open': {
    display: 'flex',
  },
  '& .button': {
    color: 'white',
  },
  '& a': {
    padding: '10px 20px',
    fontSize: 18,
    color: '#0073e6',
    textDecoration: 'none',
    display: 'block',
  },
  '& .dropdownMobile': {
    display: 'none',
    flexDirection: 'column',
  },
  '& .dropdownMobile.open': {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: '100%',
    borderBottom: '1px solid #ddd',
  },
  '& .mobileMenuPrimaryItem': {
    fontSize: 18,
    fontWeight: 600,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    width: '100%',
    justifyContent: 'space-between',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  '& .mobileMenuSecondaryItem': {
    fontSize: 16,
    fontWeight: 300,
    color: '#0073e6',
    paddingLeft: '30px',
    display: 'block',
  },
});

const MegaHeader = (props: MegaHeaderProps) => {
  const {
    menuItems = defaultMenuItems,
  } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, menu: string) => {
    event.preventDefault();
    setDropdownOpen(prev => (prev === menu ? null : menu));
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
      <Container position="static">
        <Content>
          <Logo>
            <img src="https://io.italia.it/assets/img/io-it-logo-blue.svg" alt="Logo" />
            <span style={{ backgroundColor: '#0073e6', color: 'white', borderRadius: 5, fontSize: 9, padding: '4px 6px', margin: '6px 0 0 2px' }}>
              BETA
            </span>
          </Logo>
          {!isMobile && (
            <>
              <Nav>
                {menuItems.map((menuItem: MenuItem, index) => (
                  <li key={index}>
                    <a href="#" className="menuPrimaryItem" onClick={(e) => handleClick(e, menuItem.primary)}>{menuItem.primary}</a>
                    <Dropdown className={dropdownOpen === menuItem.primary ? 'open' : ''}>
                      {menuItem.secondary.map((submenu, subIndex) => (
                        <div key={subIndex}>
                          {submenu.title && <DropdownTitle>{submenu.title}</DropdownTitle>}
                          {submenu.items.map((item, itemIndex) => (
                            <a key={itemIndex} href="#" className="menuSecondaryItem">{item}</a>
                          ))}
                        </div>
                      ))}
                    </Dropdown>
                  </li>
                ))}
              </Nav>
              <ButtonStyled href="#">Gestisci accesso</ButtonStyled>
            </>
          )}
          <IconButton className="hamburger" onClick={handleMobileMenuToggle} sx={{ display: { md: 'none' }, color: '#0073e6' }}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Content>
      </Container>
      <MobileMenu id="mobileMenu" className={mobileMenuOpen ? 'open' : ''}>
        {menuItems.map((menuItem: MenuItem, index) => (
          <React.Fragment key={index}>
            <Box className="mobileMenuPrimaryItem" onClick={(e) => handleClick(e as any, `mobile${menuItem.primary}`)}> {/* Type casting to any */}
              {menuItem.primary}
              <KeyboardArrowDownIcon style={{ transform: dropdownOpen === `mobile${menuItem.primary}` ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </Box>
            <Box className={`dropdownMobile ${dropdownOpen === `mobile${menuItem.primary}` ? 'open' : ''}`}>
              {menuItem.secondary.map((submenu, subIndex) => (
                <div key={subIndex}>
                  {submenu.title && <DropdownTitle>{submenu.title}</DropdownTitle>}
                  {submenu.items.map((item, itemIndex) => (
                    <a key={itemIndex} href="#" className="mobileMenuSecondaryItem">{item}</a>
                  ))}
                </div>
              ))}
            </Box>
          </React.Fragment>
        ))}
        <ButtonStyled href="#">Gestisci accesso</ButtonStyled>
      </MobileMenu>
    </>
  );
};

export default MegaHeader;
