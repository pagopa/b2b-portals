import React from 'react';
import {
  Box,
  Link,
  Stack,
  Typography,
  useTheme,
  Theme,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import {
  MenuDropdownProp,
  DropdownItem,
} from '@react-components/types/Header/Header.types';
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
    },
    arrowAnimate: {
      transition: 'transform 0.2s',
    },
  };
};

export const MenuDropdown = (props: MenuDropdownProp) => {
  const { label, active, theme, items, isOpen, onClick, isMobile, ...button } =
    props;
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
      {hasLinks &&
        isOpen &&
        (isMobile ? (
          <List component='div' disablePadding>
            {items?.map((item: DropdownItem, index) => (
              <ListItem button key={item.key ?? index} sx={{ pl: 4 }}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    style: { color: muiTheme.palette.text.secondary },
                  }}
                />
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
        ))}
    </Stack>
  );
};
