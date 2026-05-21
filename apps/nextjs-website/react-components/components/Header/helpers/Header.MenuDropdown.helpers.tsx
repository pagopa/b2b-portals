import React from 'react';
import { Box, Link, Stack, Typography, useTheme, Theme } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import {
  MenuDropdownProp,
  DropdownItem,
} from '@react-components/types/Header/Header.types';
import { DialogBubble } from './Header.DialogBubble.helpers';
import {
  ExternalLinkIcon,
  isValidExternalLink,
} from '@react-components/components/common/Common';
import { TextColor } from '@react-components/components/common/Common.helpers';
import { usePathname } from 'next/navigation';

const useStyles = (
  { active, alignRight }: MenuDropdownProp,
  { spacing }: Theme,
) => {
  return {
    menu: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      ...(alignRight && { marginLeft: 'auto' }),
    },
    menuItem: {
      height: '100%',
      minWidth: 'max-content',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: { xs: 'left', md: 'center' },
      position: 'relative',
      '::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: active ? '100%' : '0%',
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
    alignRight,
    ...button
  } = props;
  const muiTheme = useTheme();
  const styles = useStyles(props, muiTheme);
  const hasLinks = items?.length;
  const pathname = usePathname();
  const textColor = TextColor(theme);
  const inverseTextColor = TextColor(theme === 'dark' ? 'light' : 'dark');
  const isCurrentLink = (url?: string) => {
    if (url && url.indexOf('/') >= 0) {
      const urlPathname = url.substring(url.indexOf('/'));
      return pathname === urlPathname;
    }
    return false;
  };

  return (
    <Stack sx={styles.menu}>
      <Box sx={styles.menuItem}>
        <Link
          sx={{
            color: textColor,
            ...(isCurrentLink(button.href) && { textDecoration: 'underline' }),
            '&:hover': {
              textDecoration: 'none',
            },
          }}
          href={button.href ? button.href : `#${label}`}
          target={isValidExternalLink(button.href) ? '_blank' : '_self'}
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
            <ExternalLinkIcon
              show={isValidExternalLink(button.href)}
              {...(isValidExternalLink(button.href) && { target: '_blank' })}
            />
          </Typography>
        </Link>
        {hasLinks && (
          <Box
            onClick={onDropdownClick}
            sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <ArrowDropDown
              fontSize='small'
              sx={{
                transition: 'transform 0.2s',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                color: textColor,
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
                sx={{
                  color: inverseTextColor,
                  ...(isCurrentLink(item.href) && {
                    textDecoration: 'underline',
                  }),
                  fontSize: '1em',
                  fontWeight: 600,
                  padding: 0,
                }}
                href={item.href}
                target={isValidExternalLink(button.href) ? '_blank' : '_self'}
              >
                {item.label}
                <ExternalLinkIcon
                  show={isValidExternalLink(item.href)}
                  {...(item.href?.startsWith('https://') && {
                    target: '_blank',
                  })}
                />
              </Link>
            ))}
          </Stack>
        </DialogBubble>
      )}
    </Stack>
  );
};
