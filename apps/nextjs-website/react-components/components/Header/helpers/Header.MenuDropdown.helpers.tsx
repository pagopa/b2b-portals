import React from 'react';
import { Box, Link, Stack, Typography, useTheme, Theme } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import {
  MenuDropdownProp,
  DropdownItem,
} from '@react-components/types/Header/Header.types';
import { DialogBubble } from './Header.DialogBubble.helpers';

const useStyles = ({ active }: MenuDropdownProp, { spacing }: Theme) => {
  const muiTheme = useTheme();

  return {
    menu: {
      width: '100%',
      backgroundColor: active ? '#0073E614' : 'transparent',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    menuItem: {
      width: '100%',
      minWidth: 'max-content',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: { xs: 'left', md: 'center' },
      alignItems: 'center',
      position: 'relative',
      '::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: active ? '100%' : '0%',
        borderBottom: `3px solid ${muiTheme.palette.primary.main}`,
        transition: 'width 0.5s ease, left 0.5s ease',
      },
    },
    link: {
      textIndent: { xs: spacing(2), md: 0 },
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      padding: '0 8px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    arrowAnimate: {
      transition: 'transform 0.2s',
    },
    dropdownMenu: {
      backgroundColor: 'transparent',
    },
  };
};

export const MenuDropdown = (props: MenuDropdownProp) => {
  const {
    label,
    active,
    theme,
    items,
    isOpen,
    onClick,
    onDropdownClick,
    isMobile,
    ...button
  } = props;
  const muiTheme = useTheme();
  const styles = useStyles(props, muiTheme);
  const hasLinks = items?.length;

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    if (button.href) {
      window.location.href = button.href;
    }
    if (onClick) onClick();
  };

  const handleArrowClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (onDropdownClick) onDropdownClick();
  };

  return (
    <Stack sx={styles.menu}>
      <Box sx={styles.menuItem}>
        <Link
          sx={styles.link}
          style={{
            color: active
              ? muiTheme.palette.primary.main
              : muiTheme.palette.text.secondary,
            textDecoration: 'none',
          }}
          href={button.href ? button.href : `#${label}`}
          onClick={handleLinkClick}
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
          </Typography>
        </Link>
        {hasLinks && (
          <Box
            onClick={handleArrowClick}
            sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <ArrowDropDown
              color='inherit'
              fontSize='small'
              sx={{
                transition: 'transform 0.2s',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                color: active
                  ? muiTheme.palette.primary.main
                  : muiTheme.palette.text.secondary,
              }}
            />
          </Box>
        )}
      </Box>
      {hasLinks && isOpen && (
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
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </DialogBubble>
      )}
    </Stack>
  );
};
