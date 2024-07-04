import React, { useState, useEffect, MouseEvent } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
  marginRight: 20,
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
  flex: 1,
  '& li': {
    marginRight: 20,
    position: 'relative',
  },
  '& a': {
    textDecoration: 'none',
    padding: 10,
    cursor: 'pointer',
    color: '#2B2E38',
    fontSize: 16,
    fontWeight: 400,
  },
  '& .menuPrimaryItem': {
    '&:hover, &.active': {
      color: '#0B3EE3',
      fontWeight: 600,
      backgroundColor: '#F4F4F4',
      borderRadius: 6,
    },
  },
  '& .menuSecondaryItem': {
    fontSize: 14,
    fontWeight: 400,
    color: '#555C70',
    display: 'flex',
    alignItems: 'center',
  },
  '& .menuSecondaryItem:hover': {
    fontWeight: 600,
  },
  '& .menuSecondaryItem:hover .arrowIcon': {
    display: 'inline-block',
  },
  '& .menuSecondaryItem.active': {
    fontWeight: 600,
  },
  '& .menuSecondaryItem.active .arrowIcon': {
    display: 'none',
  },
  '& .arrowIcon': {
    display: 'none',
    marginLeft: 5,
    color: '#0B3EE3',
    verticalAlign: 'middle',
  },
});

const Dropdown = styled(Box)({
  display: 'none',
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#fff',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  padding: '50px 70px',
  borderRadius: 6,
  '&.open': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  '& .dropdownSection': {
    marginRight: 56,
  },
  '& a': {
    padding: '10px 20px',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 400,
    color: '#555C70',
    display: 'flex',
    alignItems: 'center',
  },
  '& a:hover': {
    fontWeight: 600,
    color: '#555C70',
  },
  '& a:hover .arrowIcon': {
    display: 'inline-block',
  },
  '& a.active': {
    fontWeight: 600,
  },
  '& a.active .arrowIcon': {
    display: 'none',
  },
  '& .arrowIcon': {
    display: 'none',
    marginLeft: 5,
    color: '#0B3EE3',
    verticalAlign: 'middle',
    fontSize: '18px',
  },
});

const DropdownTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 14,
  color: 'black',
  padding: '10px 20px',
  cursor: 'default',
  [theme.breakpoints.down('md')]: {
    padding: '10px 30px',
  },
}));

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
  paddingTop: '100px',
  '&.open': {
    display: 'flex',
  },
  '& .button': {
    color: 'white',
  },
  '& a': {
    padding: '10px 30px',
    fontSize: 14,
    color: '#555C70',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
  },
  '& a:hover': {
    fontWeight: 600,
  },
  '& a:hover .arrowIcon': {
    display: 'inline-block',
  },
  '& a.active': {
    fontWeight: 600,
  },
  '& a.active .arrowIcon': {
    display: 'none',
  },
  '& .arrowIcon': {
    display: 'none',
    marginLeft: 5,
    color: '#0B3EE3',
    verticalAlign: 'middle',
    fontSize: '18px',
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
    borderBottom: 'none',
  },
  '& .mobileMenuPrimaryItem': {
    fontSize: 18,
    fontWeight: 400,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    width: '100%',
    justifyContent: 'space-between',
    padding: '10px 30px',
    cursor: 'pointer',
    '&.active': {
      fontWeight: 600, 
    },
  },
  '& .mobileMenuSecondaryItem': {
    fontSize: 14,
    fontWeight: 400,
    color: '#555C70',
    paddingLeft: '30px',
    display: 'block',
  },
  '& .mobileMenuButton': {
    margin: '30px',
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
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (event: MouseEvent<HTMLAnchorElement | HTMLDivElement>, menu: string) => {
    event.preventDefault();
    setDropdownOpen(prev => (prev === menu ? null : menu));
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
      <Container position="static">
        <Content>
          <Logo>
            <img src="https://io.italia.it/assets/img/io-it-logo-blue.svg" alt="Logo" />
          </Logo>
          {!isMobile && (
            <>
              <Nav>
                {menuItems.map((menuItem: MenuItem, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`menuPrimaryItem ${dropdownOpen === menuItem.primary ? 'active' : ''}`}
                      onClick={(e) => handleClick(e, menuItem.primary)}
                    >
                      {menuItem.primary}
                    </a>
                  </li>
                ))}
              </Nav>
              <ButtonStyled href="#">Entra in IO</ButtonStyled>
            </>
          )}
          <IconButton className="hamburger" onClick={handleMobileMenuToggle} sx={{ display: { md: 'none' }, color: '#0073e6' }}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Content>
      </Container>
      {!isMobile && (
        <Box id="desktopMenu" sx={{ position: 'absolute', top: '56px', width: '100%', zIndex: 999 }}>
          {menuItems.map((menuItem: MenuItem, index) => (
            <Dropdown key={index} className={dropdownOpen === menuItem.primary ? 'open' : ''}>
              {dropdownOpen === menuItem.primary && menuItem.secondary.map((submenu, subIndex) => (
                <div key={subIndex} className="dropdownSection">
                  {submenu.title && <DropdownTitle>{submenu.title}</DropdownTitle>}
                  {submenu.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href="#"
                      className={`menuSecondaryItem ${activeItem === item ? 'active' : ''}`}
                      onClick={() => setActiveItem(item)}
                    >
                      {item}
                      <ArrowForwardIcon className="arrowIcon" />
                    </a>
                  ))}
                </div>
              ))}
            </Dropdown>
          ))}
        </Box>
      )}
      <MobileMenu id="mobileMenu" className={mobileMenuOpen ? 'open' : ''}>
        {menuItems.map((menuItem: MenuItem, index) => (
          <React.Fragment key={index}>
            <Box
              className={`mobileMenuPrimaryItem ${dropdownOpen === `mobile${menuItem.primary}` ? 'active' : ''}`}
              onClick={(e) => handleClick(e as any, `mobile${menuItem.primary}`)}
            >
              {menuItem.primary}
              <KeyboardArrowDownIcon
                style={{ transform: dropdownOpen === `mobile${menuItem.primary}` ? 'rotate(180deg)' : 'rotate(0deg)', color: '#0073e6' }}
              />
            </Box>
            <Box className={`dropdownMobile ${dropdownOpen === `mobile${menuItem.primary}` ? 'open' : ''}`}>
              {menuItem.secondary.map((submenu, subIndex) => (
                <div key={subIndex}>
                  {submenu.title && <DropdownTitle>{submenu.title}</DropdownTitle>}
                  {submenu.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href="#"
                      className={`mobileMenuSecondaryItem ${activeItem === item ? 'active' : ''}`}
                      onClick={() => setActiveItem(item)}
                    >
                      {item}
                      <ArrowForwardIcon className="arrowIcon" />
                    </a>
                  ))}
                </div>
              ))}
            </Box>
          </React.Fragment>
        ))}
        <ButtonStyled className="mobileMenuButton" href="#">Entra in IO</ButtonStyled>
      </MobileMenu>
    </>
  );
};

export default MegaHeader;
