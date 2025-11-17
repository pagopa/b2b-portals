import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  LinkProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMixpanelTracking } from '../common/tracking';

export const Container = styled(AppBar)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
  backgroundColor: '#ffffff',
  position: 'sticky',
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
  marginBlock: '6px',
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
    color: '#2B2E38',
    padding: '10px',
    fontWeight: 400,
    height: 'min-content',
    transition: 'none',
    '&:hover, &.open': {
      color: '#0B3EE3',
      fontWeight: 600,
      letterSpacing: '-0.003em',
      backgroundColor: '#F4F4F4 !important',
      borderRadius: 6,
    },
    '&.active': {
      color: '#0B3EE3',
      fontWeight: 600,
      letterSpacing: '-0.0090em',
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
    width: 'calc(100% - 140px)', // Take padding into account
    boxShadow: '0 16px 16px 0px rgba(14, 15, 19, 0.06)',
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
  '& a:hover': {
    fontWeight: 600,
    letterSpacing: '-0.0090em',
  },
  '& a.active': {
    fontWeight: 600,
    letterSpacing: '-0.0090em',
    color: '#0B3EE3',
  },
  '& a:hover .arrowIcon': {
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
  letterSpacing: 1,
  textTransform: 'uppercase',
  color: 'black',
  padding: '10px 20px',
  cursor: 'default',
  [theme.breakpoints.down('md')]: {
    fontSize: 12,
    padding: '10px 30px',
  },
}));

export const MobileMenu = styled(Box)({
  display: 'none',
  position: 'relative',
  top: '100%',
  left: 0,
  width: '100%',
  height: 'calc(100dvh - 76px)', // Take sticky header into account
  backgroundColor: '#ffffff',
  zIndex: 999,
  flexDirection: 'column',
  alignItems: 'flex-start',
  overflowY: 'auto',
  boxShadow: 'inset 0 4px 16px 0 rgba(14, 15, 19, 0.06)',
  'body.sb-main-fullscreen & .storybook-mobilemenu-padding-bottom': {
    paddingBottom: '0 !important',
  },
  '&.open': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    width: 'calc(100% - 60px)', // Take padding into account
    justifyContent: 'space-between',
    padding: '10px 30px',
    cursor: 'pointer',
    '&.active': {
      fontWeight: 600,
    },
  },
  '& .mobileMenuSecondaryItem': {
    fontSize: 12,
    fontWeight: 400,
    color: '#555C70',
    paddingLeft: '30px',
    display: 'flex',
    alignItems: 'center',
  },
});

export const Overlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  zIndex: 998,
  display: 'none',
  '&.open': {
    display: 'block',
  },
});

export const LinkLabel = styled('span')({
  color: '#009EA2',
  fontWeight: 600,
  fontSize: 10,
  lineHeight: '10px',
  marginLeft: 5,
  marginBottom: 8,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  fontFamily: '"Readex Pro", sans-serif',
});

export const Sublink = ({
  trackEvent,
  trackingProperties,
  ...linkProps
}: LinkProps & {
  trackEvent?: string | undefined;
  trackingProperties?: Record<string, string> | undefined;
}) => {
  const { randomID } = useMixpanelTracking({
    isLink: true,
    trackEvent,
    trackingProperties,
  });

  return <Link {...(randomID && { id: randomID })} {...linkProps} />;
};
