import React from 'react';
import { Box, Link, Stack, Typography, useTheme, Theme } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { MenuDropdownProp, DropdownItem } from '@react-components/types/Header/Header.types';
import { DialogBubble } from './Header.DialogBubble.helpers';
import { TextAlternativeColor } from '@react-components/components/common/Common.helpers';

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
      cursor: 'pointer',
    },
    arrowAnimate: {
      transition: 'transform 0.2s',
    },
  };
};

export const MenuDropdown = (props: MenuDropdownProp) => {
  const { label, active, theme, items, isOpen, onClick, isMobile, ...button } = props;
  const muiTheme = useTheme();
  const styles = useStyles(props, muiTheme);
  const hasLinks = items?.length;

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    if (button.href) {
      window.location.href = button.href;
    }
  };

  const handleArrowClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

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
            color: active ? muiTheme.palette.primary.main : muiTheme.palette.text.secondary,
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
                color: active ? muiTheme.palette.primary.main : muiTheme.palette.text.secondary,
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


