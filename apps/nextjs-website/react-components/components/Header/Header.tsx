import {
  Box,
  Link,
  Stack,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Theme,
  IconButton,
  Chip,
  StackProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ArrowDropDown } from '@mui/icons-material';
import { HeaderProps, MenuDropdownProp, DropdownItem, HeaderTitleProps, NavigationProps, DialogBubbleProps } from '@react-components/types/Header/Header.types';
import { BackgroundColor, TextAlternativeColor, TextColor } from '@react-components/components/common/Common.helpers';
import { CtaButtons } from '../common/Common';
import { useState, useEffect } from 'react';

const TIMEOUT_LENGTH = 100;

const useStyles = ({ theme, active }: MenuDropdownProp, { spacing }: Theme) => {
  const textColor = TextAlternativeColor(theme);

  return {
    menu: {
      borderColor: textColor,
      borderBottomStyle: 'solid',
      width: '100%',
      borderBottomWidth: 3,
      borderBottomColor: { md: active ? textColor : 'transparent', xs: 'transparent' },
      backgroundColor: { xs: 'white', md: 'transparent' },
    },
    link: {
      textIndent: { xs: spacing(2), md: 0 },
    },
    arrowAnimate: {
      transition: 'transform 0.2s',
      transform: { xs: 'rotate(-180deg)', md: '' },
    },
  };
};

const DialogBubble = ({
  children,
  ...stackProps
}: DialogBubbleProps) => {
  const muiTheme = useTheme();
  const styles = {
    bubbleContainer: {
      transform: 'rotate(180deg)',
      position: 'absolute',
      marginTop: { xs: '0px', md: '-30px' },
      padding: muiTheme.spacing(2),
      direction: 'rtl',
      textAlign: { xs: 'right', md: 'left' },
      borderRadius: '4px',
      zIndex: 1,
    },
    bubble: { transform: 'rotate(180deg)' },
  };

  return (
    <Stack
      sx={{ 
        ...styles.bubbleContainer, 
        bgcolor: 'common.white', 
        boxShadow: { xs: 'custom.boxShadow', md: 'custom.otMenuMobile' } 
      }}
      aria-haspopup="true"
    >
      <Stack sx={styles.bubble} {...stackProps}>
        {children}
      </Stack>
    </Stack>
  );
};

const HamburgerMenu = ({ open, onOpen, onClose }: { open: boolean, onOpen: () => void, onClose: () => void }) =>
  open ? (
    <CloseIcon
      color="primary"
      cursor="pointer"
      onClick={onClose}
      aria-label="chiudi"
      aria-haspopup="true"
      aria-expanded="true"
    />
  ) : (
    <MenuIcon
      color="primary"
      cursor="pointer"
      onClick={onOpen}
      aria-label="apri"
      aria-haspopup="true"
      aria-expanded="false"
    />
  );

const MenuDropdown = (props: MenuDropdownProp) => {
  const { label, active, theme, items, ...button } = props;
  const [menuHover, setMenuHover] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);

  const clickOnMenu = () => {
    setMenuHover(true);
  };

  const leavesMenu = () => {
    setTimeout(() => {
      setMenuHover(false);
    }, TIMEOUT_LENGTH);
  };

  const hoverOnDropdown = () => {
    setDropdownHover(true);
  };

  const leavesDropdown = () => {
    setTimeout(() => {
      setDropdownHover(false);
    }, TIMEOUT_LENGTH);
  };

  const toggleMenu = () => {
    setMenuHover((status) => !status);
  };

  const hasLinks = items?.length;
  const muiTheme = useTheme();
  const md = useMediaQuery(muiTheme.breakpoints.up('md'));
  const styles = useStyles(props, muiTheme);

  const dropdownVisible = menuHover || dropdownHover;

  const menuEventsHandlers = md
  ? {
      onClick: clickOnMenu,
      onMouseLeave: leavesMenu,
    }
  : {
      onClick: toggleMenu,
    };

  const DropdownParent = ({
    children,
    ...props
  }: React.PropsWithChildren<Omit<StackProps, 'ref'>>) => (
    <Box
      component="div"
      {...props}
      onMouseEnter={hoverOnDropdown}
      onMouseLeave={leavesDropdown}
    >
      {children}
    </Box>
  );

  const Dropdown = ({
    children,
    ...stackProps
  }: React.PropsWithChildren<StackProps>) => (
    <DialogBubble
      {...stackProps}
      onMouseEnter={hoverOnDropdown}
      onMouseLeave={leavesDropdown}
    >
      {children}
    </DialogBubble>
  );

  return (
    <Stack sx={styles.menu}>
      <Box sx={{ 
        width: '100%', 
        minWidth:'max-content', 
        height:'100%', 
        gap: { xs: 1, md: 1.5 }, 
        display:'flex', 
        flexDirection:'row', 
        justifyContent: { xs: 'left', md: 'center' },
        alignItems: { xs: 'center', md: 'flex-end' },
        paddingLeft: { xs: 2, md: 0 },
      }}>
        <Link sx={{ justifyContent: { xs: 'left', md: 'center' }, alignContent: { xs: 'left', md: 'center' }, padding: 0 }} style={{ color: active ? muiTheme.palette.primary.dark : muiTheme.palette.text.secondary, textDecoration: 'none' }} {...button}>
          <Typography variant="sidenav" color="inherit" sx={{ display:'flex', textDecoration: 'none', fontSize: '1em', padding: 0 }}>
            {label}
          </Typography>
        </Link>
        {hasLinks && (
          <ArrowDropDown
            color="inherit"
            fontSize="small"
            sx={{
              ...(!md && dropdownVisible && styles.arrowAnimate),
              height:'100%',
              cursor: 'pointer',
            }}
            {...menuEventsHandlers}
          />
        )}
      </Box>
      {hasLinks && dropdownVisible && (
        <DropdownParent>
          {hasLinks && dropdownVisible && (
            <Dropdown gap={1}>
              {items?.map((item: DropdownItem, index) => (
                <Link
                  variant="body1"
                  underline="none"
                  key={item.key ?? index}
                  sx={styles.link}
                  style={{ color: active ? muiTheme.palette.primary.dark : muiTheme.palette.text.secondary, textDecoration: 'none', fontSize: '1em', fontWeight: 600, padding: 0 }}
                  {...item}
                >
                  {item.label}
                </Link>
              ))}
            </Dropdown>
          )}
        </DropdownParent>
      )}
    </Stack>
  );
};

const Navigation = ({ menu, theme }: NavigationProps) => (
  <Stack
    gap={{ md: 4, xs: 0 }}
    direction={{ md: 'row', xs: 'column' }}
    component="nav"
    aria-label="main"
    sx={{ width: { xs: '100%', md: 'auto' }, height: { xs: 'auto', md: '100%' }, alignItems: 'flex-end' }}
  >
    {menu.map((menu, index) => (
      <MenuDropdown key={index} {...menu} theme={theme} sx={{ py: { xs: 1, sm: 0 }, alignItems: 'flex-end' }} />
    ))}
  </Stack>
);

const HeaderTitle = ({
  beta,
  product: { name: productName, href: productHref },
  theme,
  logo,
}: HeaderTitleProps) => {
  const { spacing } = useTheme();
  const textColor = TextColor(theme);
  const label = 'beta';

  return (
    <Stack direction="row" alignItems="center" gap={1} paddingX={0} paddingY={0}>
      {logo && (
        <Link  
          alignItems="center" 
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            padding: 0
          }} 
          href={logo.href}
        >
          <img src={logo.src} alt={logo.alt} style={{ height: 70 }} />
        </Link>
      )}
      {!logo && (
        <Typography
          color={textColor}
          fontSize={{ xs: spacing(3), sm: spacing(3.5) }}
          noWrap
          variant="h5"
        >
          {productHref ? (
            <Link href={productHref} underline="none" color="text.primary">
              <b>{productName}</b>
            </Link>
          ) : (
            <b>{productName}</b>
          )}
        </Typography>
      )}
      {beta && (
        <Chip
          label={label}
          color="primary"
          sx={{ height: 20, width: 45 }}
          size="small"
        />
      )}
    </Stack>
  );
};

const Header = ({
  product,
  theme,
  menu,
  ctaButtons,
  beta,
  logo,
}: HeaderProps) => {
  const backgroundColor = BackgroundColor(theme);

  const [menuOpen, setMenuOpen] = useState(false);

  const openHeader = () => {
    setMenuOpen(true);
  };

  const closeHeader = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', closeHeader);

    return () => {
      window.removeEventListener('resize', closeHeader);
    };
  }, []);

  const HeaderCtas = () => {
    return ctaButtons && ctaButtons.length > 0 ? (
      <Stack direction='row'>
        {CtaButtons({
          ctaButtons: ctaButtons.map((CtaButton) => ({
            ...CtaButton,
            sx: { width: { md: 'auto', xs: '100%' } },
          })),
          theme,
        })}
      </Stack>
    ) : null;
  };

  return (
    <Box
      bgcolor={backgroundColor}
      component='header'
      role='banner'
      sx={{ height: { xs: 'auto', md: 'auto' } }}
    >
      <Stack
        direction='column'
        gap={{ xs: 0, md: 0 }}
        sx={{ width: '100%' }}
      >
        <Stack
          direction='row'
          justifyContent="space-between"
          alignItems="center"
        >
          <HeaderTitle
            theme={theme}
            product={product}
            {...(beta ? { beta } : {})}
            {...(logo ? { logo } : {})}
          />
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
            sx={{
              display: { xs: 'flex', md: 'flex' },
            }}
          >
            <Link href="/help" underline="none" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Serve aiuto?
            </Link>
            <IconButton sx={{ bgcolor: 'primary.main' }}>
              <ChatBubbleOutlineIcon style={{ color: 'white' }} />
            </IconButton>
          </Stack>
        </Stack>

        <Divider />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flex: 1,
            width: '100%',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Navigation {...{ menu, theme }} />
          <Box>
            <HeaderCtas />
          </Box>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            display: { xs: 'flex', md: 'none' },
            width: '100%',
            paddingLeft: 2,
          }}
        >
          <HamburgerMenu
            onOpen={openHeader}
            onClose={closeHeader}
            open={menuOpen}
          />
          <Typography variant="body1" color="text.secondary">
            Menu
          </Typography>
          <Box>
            <HeaderCtas />
          </Box>
        </Stack>

        <Stack
          direction="column"
          sx={{
            display: { xs: menuOpen ? 'flex' : 'none', md: 'none' },
            width: '100%',
            alignItems: 'flex-start',
            paddingLeft: 2,
          }}
        >
          <Navigation {...{ menu, theme }} />
          <HeaderCtas />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
