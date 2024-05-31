import {
  Stack,
  type StackProps,
  Typography,
  useTheme,
  useMediaQuery,
  Link,
  type Theme,
  Box,
} from '@mui/material';
import { useState } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import { DialogBubble } from '../Header.helpers';
import { DropdownItem, MenuDropdownProp } from '../../../types/Header/Header.types';
import { TextAlternativeColor } from '@react-components/components/common/Common.helpers';

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
      color: textColor,
      textIndent: { xs: spacing(2), md: 0 },
    },
    arrowAnimate: {
      transition: 'transform 0.2s',
      transform: { xs: 'rotate(-180deg)', md: '' },
    },
  };
};

export const MenuDropdown = (props: MenuDropdownProp) => {
  // props
  const { label, active, theme, items, ...button } = props;

  // state
  const [menuHover, setMenuHover] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);

  const hoverOnMenu = () => {
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

  // style
  const hasLinks = items?.length;
  const muiTheme = useTheme();
  const md = useMediaQuery(muiTheme.breakpoints.up('md'));
  const styles = useStyles(props, muiTheme);

  const dropdownVisible = menuHover || dropdownHover;

  const menuEventsHandlers = md
    ? {
        onMouseEnter: hoverOnMenu,
        onMouseLeave: leavesMenu,
      }
    : {
        onClick: toggleMenu,
      }
  ;

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
        <Link sx={{ justifyContent: { xs: 'left', md: 'center' }, alignContent: { xs: 'left', md: 'center' }}} style={{ color:muiTheme.palette.text.secondary, textDecoration: 'none' }} {...button}>
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
