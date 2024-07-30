import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(AppBar)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
  backgroundColor: '#ffffff',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
  boxShadow: '0 4px 16px 0 rgba(14, 15, 19, 0.06)',
});

export const Content = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
});

export const Logo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginRight: 20,
  '& img': {
    height: 34,
    marginRight: 4,
  },
});

export const Nav = styled('ul')({
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
      letterSpacing: '-0.0090em',
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
    visibility: 'visible',
    opacity: 100,
  },
  '& .menuSecondaryItem.active': {
    fontWeight: 600,
  },
  '& .menuSecondaryItem.active .arrowIcon': {
    visibility: 'visible',
    opacity: 0,
  },
  '& .arrowIcon': {
    visibility: 'visible',
    opacity: 0,
    marginLeft: 5,
    color: '#0B3EE3',
    verticalAlign: 'middle',
  },
});

export const Dropdown = styled(Box)({
  display: 'none',
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#fff',
  padding: '50px 70px',
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
    whiteSpace: 'nowrap',
    letterSpacing: 'normal',
  },
  '& a:hover, & a.active': {
    fontWeight: 600,
    letterSpacing: '-0.0090em',
  },
  '& a:hover .arrowIcon, & a.active .arrowIcon': {
    visibility: 'visible',
    opacity: 1,
  },
  '& .arrowIcon': {
    visibility: 'visible',
    opacity: 0,
    marginLeft: 5,
    color: '#0B3EE3',
    verticalAlign: 'middle',
    fontSize: '18px',
  },
});

export const DropdownTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 14,
  color: 'black',
  padding: '10px 20px',
  cursor: 'default',
  [theme.breakpoints.down('md')]: {
    padding: '10px 30px',
  },
}));

export const ButtonStyled = styled(Button)({
  backgroundColor: '#0B3EE3',
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

export const MobileMenu = styled(Box)({
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
    visibility: 'visible',
    opacity: 100,
  },
  '& a.active': {
    fontWeight: 600,
  },
  '& a.active .arrowIcon': {
    visibility: 'visible',
    opacity: 0,
  },
  '& .arrowIcon': {
    visibility: 'visible',
    opacity: 0,
    marginLeft: 5,
    color: '#0B3EE3',
    verticalAlign: 'middle',
    fontSize: '16px',
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
