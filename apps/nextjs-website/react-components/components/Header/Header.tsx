import { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Chip,
  Link,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Theme,
  StackProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { ArrowDropDown } from '@mui/icons-material';
import { HeaderProps, MenuDropdownProp, DropdownItem, HeaderTitleProps, NavigationProps, DialogBubbleProps } from '@react-components/types/Header/Header.types';
import { BackgroundColor, TextAlternativeColor, TextColor } from '@react-components/components/common/Common.helpers';
import { CtaButtons } from '../common/Common';

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
        alignItems: { xs: 'center', md: 'center' },
        paddingLeft: { xs: 2, md: 0 },
      }}>
        <Link sx={{ justifyContent: { xs: 'left', md: 'center' }, alignContent: { xs: 'left', md: 'center' }}} style={{ color: active ? muiTheme.palette.primary.dark : muiTheme.palette.text.secondary, textDecoration: 'none' }} {...button}>
          <Typography variant="sidenav" color="inherit" sx={{ display:'flex', textDecoration: 'none', fontSize: '1em' }}>
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
                  style={{ color: active ? muiTheme.palette.primary.dark : muiTheme.palette.text.secondary, textDecoration: 'none', fontSize: '1em', fontWeight: 600 }}
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
    sx={{ width: { xs: '100%', md: 'auto' }, height: { xs: 'auto', md: '100%' } }}
  >
    {menu.map((menu, index) => (
      <MenuDropdown key={index} {...menu} theme={theme} sx={{ py: { xs: 1, sm: 0 } }} />
    ))}
  </Stack>
);

const HeaderTitle = ({
  avatar,
  beta,
  product: { name: productName, href: productHref },
  theme,
  logo,
}: HeaderTitleProps) => {
  const { spacing } = useTheme();
  const textColor = TextColor(theme);
  const label = 'beta';

  return (
    <Stack direction="row" alignItems="center" gap={1} paddingX={3} paddingY={2}>
      {logo && (
        <Link  
          alignItems="center" 
          sx={{ 
            display: 'flex',
            justifyContent: 'center'
          }} 
          href={logo.href}
        >
          <img src={logo.src} alt={logo.alt} style={{ height:70 }}/>
        </Link>
      )}
      {!logo && (
      <>
        {avatar && <Avatar {...avatar} />}
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
      </>
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
  avatar,
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
      sx={{ height: { xs: 'auto', md: 130 } }}
    >
      <Stack
        direction={{ md: 'row' }}
        paddingY={{ xs: 1, sm: 3, md: 0 }}
        gap={{ xs: 2, md: 2 }}
        sx={{ height:'100%' }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <HeaderTitle
            theme={theme}
            product={product}
            {...(beta ? { beta } : {})}
            {...(avatar ? { avatar } : {})}
            {...(logo ? { logo } : {})}
          />

          <Stack
            sx={{ 
              display: { md: 'none' },
              marginRight: { xs: 4, md: 0 },
            }}
            direction='row'
            alignItems='center'
            gap={2}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' }, backgroundColor:'red' }}>
              <HeaderCtas />
            </Box>

            <HamburgerMenu
              onOpen={openHeader}
              onClose={closeHeader}
              open={menuOpen}
            />
          </Stack>
        </Stack>

        <Stack
          sx={{
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center', xs: 'flex-start' },
            gap: { xs: 2 },
            display: { xs: menuOpen ? 'flex' : 'none', md: 'flex' }
          }}
        >
          <Navigation {...{ menu, theme }} />

          <Box sx={{ display: { sm: 'none', md: 'block' } }}>
            <HeaderCtas />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
