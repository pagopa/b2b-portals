import {
  Stack,
  type StackProps,
  Typography,
  useTheme,
  useMediaQuery,
  Link,
  type Theme,
} from '@mui/material';
import { useState } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import { DialogBubble } from '../Header.helpers';
import { isJSX } from '../../../types/common/Common.types';
import { DropdownItem, MenuDropdownProp } from '../../../types/Header/Header.types';
import { TextAlternativeColor } from '@react-components/components/common/Common.helpers';

const TIMEOUT_LENGTH = 100;

const useStyles = ({ theme, active, items }: MenuDropdownProp, { palette, spacing }: Theme) => {
  const textColor = TextAlternativeColor(theme);

  return {
    menu: {
      paddingY: { md: 2 },
      borderColor: textColor,
      borderBottomStyle: 'solid',
      borderBottomWidth: { md: active ? 3 : 0, xs: 0 },
    },
    item: {
      cursor: {
        md: items?.length ? 'default' : 'pointer',
        xs: 'pointer',
      },
      flexDirection: 'row',
      color: textColor,
      textDecoration: 'none',
    },
    link: {
      color: { xs: textColor, md: palette.primary.contrastText },
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
      <Link sx={styles.item} {...button}>
        <Typography variant="sidenav" color="inherit">
          {label}
        </Typography>
        {hasLinks && (
          <ArrowDropDown
            color="inherit"
            fontSize="small"
            sx={{
              ...(!md && dropdownVisible && styles.arrowAnimate),
            }}
          />
        )}
      </Link>
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
