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
import { isJSX } from '../../../types/common/Common.types';
import { DropdownItem, MenuDropdownProp } from '../../../types/Header/Header.types';
import { TextAlternativeColor } from '@react-components/components/common/Common.helpers';

const TIMEOUT_LENGTH = 100;

const useStyles = ({ theme, active, items }: MenuDropdownProp, { spacing }: Theme) => {
  const textColor = TextAlternativeColor(theme);

  return {
    menu: {
      borderColor: textColor,
      borderBottomStyle: 'solid',
      width: '100%',
      borderBottomWidth: { md: active ? 3 : 0, xs: 0 },
      zIndex: 10,
    },
    item: {
      cursor: {
        md: items?.length ? 'default' : 'pointer',
        xs: 'pointer',
      },
      color: textColor,
      textDecoration: 'none',
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
      };

  const Dropdown = ({
    children,
    ...stackProps
  }: { children: JSX.Element[] } & StackProps) =>
    md ? (
      <DialogBubble
        {...stackProps}
        onMouseEnter={hoverOnDropdown}
        onMouseLeave={leavesDropdown}
      >
        {children}
      </DialogBubble>
    ) : (
      <Stack {...stackProps} onClick={toggleMenu}>
        {children}
      </Stack>
    );

  return (
    <Stack sx={styles.menu} {...menuEventsHandlers}>
      <Box sx={{ width: '100%', minWidth:'max-content', height:'100%', gap:1.5, display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center'}} >
        <Link sx={styles.item} {...button} style={{ justifyContent:'center', alignContent:'center', }}>
          <Typography variant="sidenav" color="inherit" sx={{ display:'flex', }}>
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
            }}
          />
        )}
      </Box>
      {hasLinks && dropdownVisible && (
        <Dropdown gap={1}>
          {items?.map((item: DropdownItem, index) =>
            isJSX(item) ? (
              item
            ) : (
              <Link
                variant="body1"
                underline="none"
                key={item.key ?? index}
                sx={styles.link}
                {...item}
              >
                {item.label}
              </Link>
            )
          )}
        </Dropdown>
      )}
    </Stack>
  );
};
