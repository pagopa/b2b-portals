import {
  Box,
  Link,
  Stack,
  Typography,
  Divider,
  useTheme,
  Theme,
  Chip,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ArrowDropDown } from '@mui/icons-material';
import { useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import {
  HeaderProps,
  MenuDropdownProp,
  DropdownItem,
  HeaderTitleProps,
  NavigationProps,
  DialogBubbleProps,
} from '@react-components/types/Header/Header.types';
import {
  BackgroundColor,
  TextAlternativeColor,
  TextColor,
} from '@react-components/components/common/Common.helpers';
import { CtaButtons } from '../common/Common';
import { useState, useEffect } from 'react';

const useStyles = ({ theme, active }: MenuDropdownProp, { spacing }: Theme) => {
  const textColor = TextAlternativeColor(theme);

  return {
    menu: {
      borderColor: textColor,
      borderBottomStyle: 'solid',
      width: '100%',
      borderBottomWidth: 3,
      borderBottomColor: {
        md: active ? textColor : 'transparent',
        xs: 'transparent',
      },
      backgroundColor: { xs: 'white', md: 'transparent' },
      height: '100%',
    },
    link: {
      textIndent: { xs: spacing(2), md: 0 },
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      padding: '0 8px',
    },
    arrowAnimate: {
      transition: 'transform 0.2s',
    },
  };
};

const DialogBubble = ({ children, ...stackProps }: DialogBubbleProps) => {
  const muiTheme = useTheme();
  const styles = {
    bubbleContainer: {
      position: 'absolute',
      marginTop: muiTheme.spacing(8),
      padding: muiTheme.spacing(2),
      direction: 'ltr',
      textAlign: { xs: 'right', md: 'left' },
      borderRadius: '4px',
      zIndex: 1,
    },
  };

  return (
    <Stack
      sx={{
        ...styles.bubbleContainer,
        bgcolor: 'common.white',
        boxShadow: { xs: 'custom.boxShadow', md: 'custom.otMenuMobile' },
      }}
      aria-haspopup='true'
      {...stackProps}
    >
      {children}
    </Stack>
  );
};

const HamburgerMenu = ({
  open,
  onOpen,
  onClose,
}: {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const muiTheme = useTheme();

  return open ? (
    <CloseIcon
      sx={{ color: muiTheme.palette.text.secondary }}
      cursor='pointer'
      onClick={onClose}
      aria-label='chiudi'
      aria-haspopup='true'
      aria-expanded='true'
    />
  ) : (
    <MenuIcon
      sx={{ color: muiTheme.palette.text.secondary }}
      cursor='pointer'
      onClick={onOpen}
      aria-label='apri'
      aria-haspopup='true'
      aria-expanded='false'
    />
  );
};

const MenuDropdown = (props: MenuDropdownProp) => {
  const { label, active, theme, items, isOpen, onClick, isMobile, ...button } = props;
  const muiTheme = useTheme();
  const styles = useStyles(props, muiTheme);
  const hasLinks = items?.length;

  return (
    <Stack sx={styles.menu}>
      <Box
        sx={{
          width: '100%',
          minWidth: 'max-content',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: { xs: 'left', md: 'center' },
          alignItems: 'center',
        }}
      >
        <Link
          sx={styles.link}
          style={{
            color: active
              ? muiTheme.palette.primary.main
              : muiTheme.palette.text.secondary,
            textDecoration: 'none',
          }}
          {...button}
          onClick={onClick}
        >
          <Typography
            variant='sidenav'
            color='inherit'
            sx={{
              display: 'flex',
              textDecoration: 'none',
              fontSize: '1em',
              padding: 0,
            }}
          >
            {label}
            {hasLinks && (
              <ArrowDropDown
                color='inherit'
                fontSize='small'
                sx={{
                  transition: 'transform 0.2s',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  marginLeft: '4px',
                  cursor: 'pointer',
                }}
              />
            )}
          </Typography>
        </Link>
      </Box>
      {hasLinks && isOpen && (
        isMobile ? (
          <List component="div" disablePadding>
            {items?.map((item: DropdownItem, index) => (
              <ListItem button key={item.key ?? index} sx={{ pl: 4 }}>
                <ListItemText primary={item.label} primaryTypographyProps={{ style: { color: muiTheme.palette.text.secondary } }} />
              </ListItem>
            ))}
          </List>
        ) : (
          <DialogBubble>
            <Stack gap={1}>
              {items?.map((item: DropdownItem, index) => (
                <Link
                  variant='body1'
                  underline='none'
                  key={item.key ?? index}
                  sx={styles.link}
                  style={{
                    color: muiTheme.palette.text.secondary,
                    textDecoration: 'none',
                    fontSize: '1em',
                    fontWeight: 600,
                    padding: 0,
                  }}
                  {...item}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </DialogBubble>
        )
      )}
    </Stack>
  );
};

const Navigation = ({ menu, theme, isMobile }: NavigationProps & { isMobile: boolean }) => (
  <Stack
    gap={{ md: 4, xs: 0 }}
    direction={{ md: 'row', xs: 'column' }}
    component='nav'
    aria-label='main'
    className='desktop-menu'
    sx={{
      width: { xs: '100%', md: 'auto' },
      height: '100%',
      alignItems: 'flex-end',
    }}
  >
    {menu.map((menu, index) => (
      <MenuDropdown
        key={index}
        {...menu}
        theme={theme}
        isMobile={isMobile}
        sx={{ py: { xs: 1, sm: 0 }, alignItems: 'flex-end' }}
      />
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
    <Stack
      direction='row'
      alignItems='center'
      gap={1}
      paddingX={0}
      paddingY={0}
    >
      {logo && (
        <Link
          alignItems='center'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 0,
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
          variant='h5'
        >
          {productHref ? (
            <Link href={productHref} underline='none' color='text.primary'>
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
          color='primary'
          sx={{ height: 20, width: 45 }}
          size='small'
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
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

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
      <Stack direction='column' gap={{ xs: 0, md: 0 }} sx={{ width: '100%' }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ padding: '16px 24px' }}
        >
          <HeaderTitle
            theme={theme}
            product={product}
            {...(beta ? { beta } : {})}
            {...(logo ? { logo } : {})}
          />
          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            gap={2}
            sx={{
              display: { xs: 'flex', md: 'flex' },
              height: '100%',
            }}
          >
            <Link
              href='#serve-aiuto'
              underline='none'
              sx={{
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: '14px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 8px',
              }}
            >
              Serve aiuto?
            </Link>
            <Box
              component='a'
              href='#serve-aiuto'
              sx={{
                bgcolor: 'primary.main',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                textDecoration: 'none',
                '&:hover': {
                  bgcolor: 'primary.main',
                },
              }}
            >
              <ChatBubbleOutlineIcon style={{ color: 'white', fontSize: 18 }} />
            </Box>
          </Stack>
        </Stack>

        <Divider />

        {!isMobile && (
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              height: '64px',
              padding: '0px 24px',
            }}
          >
            <Navigation
              menu={menu.map((menu, index) => ({
                ...menu,
                isOpen: openDropdownIndex === index,
                onClick: () =>
                  setOpenDropdownIndex(
                    openDropdownIndex === index ? null : index
                  ),
              }))}
              theme={theme}
              isMobile={false}
            />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <HeaderCtas />
            </Box>
          </Stack>
        )}

        {isMobile && (
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
              padding: '8px 24px',
            }}
          >
            <Stack direction='row' alignItems='center' gap={1}>
              <HamburgerMenu
                onOpen={openHeader}
                onClose={closeHeader}
                open={menuOpen}
              />
              <Typography variant='body1' color='text.secondary' sx={{ fontWeight: 600 }}>
                Menu
              </Typography>
            </Stack>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <HeaderCtas />
            </Box>
          </Stack>
        )}

        {isMobile && menuOpen && (
          <Stack
            direction='column'
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
              alignItems: 'flex-start',
              padding: '8px 24px',
            }}
          >
            <Navigation
              menu={menu.map((menu, index) => ({
                ...menu,
                isOpen: openDropdownIndex === index,
                onClick: () =>
                  setOpenDropdownIndex(
                    openDropdownIndex === index ? null : index
                  ),
              }))}
              theme={theme}
              isMobile={true}
            />
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
