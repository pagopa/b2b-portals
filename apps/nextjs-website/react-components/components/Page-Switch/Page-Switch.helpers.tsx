import React from 'react';
import {
  ButtonSwitchRowBlockProps,
  PageSwitchBaseProps,
} from '../../types/Page-Switch/Page-Switch.types';
import { CtaButtons, Title } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { resolveThemeVariant } from '../../theme';
import { ThemeVariant } from '../../types/common/Common.types';

export const TitleSubtitleBlock = ({
  title,
  subtitle,
  theme,
  themeVariant,
}: PageSwitchBaseProps) => {
  const textColor = TextColor(theme, themeVariant);

  const { palette } = useTheme();

  const ctx = { palette, theme };

  const linkColor = resolveThemeVariant<string>(
    'contentLinkColor',
    themeVariant,
    ctx,
  );

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      gap='1rem'
      marginTop='1rem'
      marginBottom='1rem'
    >
      <Title
        variant='h4'
        textColor={textColor}
        title={title}
        component='h1'
        textAlign='center'
        marginTop={3}
        marginBottom={3}
      />

      <Typography
        component='div'
        variant='body2'
        color={textColor}
        sx={{
          fontSize: '18px',
          '& a': {
            fontWeight: 700,
            color: linkColor,
            textDecoration: 'underline',
            '&:hover': {
              color: linkColor,
            },
          },
          '& p': {
            marginBottom: '4px',
            color: textColor,
          },
        }}
      >
        {subtitle}
      </Typography>
    </Stack>
  );
};

const SplitButton = ({
  buttons,
  selectedButton,
  onButtonClick,
  theme,
  themeVariant,
}: ButtonSwitchRowBlockProps) => {
  const muiTheme = useTheme();

  const { palette } = muiTheme;

  const ctx = { palette, theme };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [open, setOpen] = React.useState(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (button: { id: number; text: string }) => {
    onButtonClick(button.id);
    setOpen(false);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const anchorRef = React.useRef<HTMLDivElement>(null);

  const buttonBackgroundColor = resolveThemeVariant<string>(
    'switchButtonBackgroundColor',
    themeVariant,
    ctx,
  );

  const buttonTextColor = resolveThemeVariant<string>(
    'switchButtonTextColor',
    themeVariant,
    ctx,
  );

  const buttonBorderColor = resolveThemeVariant<string>(
    'switchButtonBorderColor',
    themeVariant,
    ctx,
  );

  const menuTextColor = resolveThemeVariant<string>(
    'switchMenuTextColor',
    themeVariant,
    ctx,
  );

  const menuItemBackgroundColor = resolveThemeVariant<string>(
    'switchMenuItemBackgroundColor',
    themeVariant,
    ctx,
  );

  return (
    <React.Fragment>
      <ButtonGroup
        variant='outlined'
        ref={anchorRef}
        aria-label='Split button'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          borderColor: buttonBorderColor,
        }}
      >
        <Button
          onClick={() => onButtonClick(selectedButton.id)}
          sx={{
            backgroundColor: buttonBackgroundColor,
            color: buttonTextColor,
            borderColor: buttonBorderColor,
            '&:hover': {
              backgroundColor: buttonBackgroundColor,
              color: buttonTextColor,
              borderColor: buttonBorderColor,
            },
          }}
        >
          {selectedButton.text}
        </Button>

        <Button
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='menu'
          onClick={handleButtonClick}
          sx={{
            backgroundColor: buttonBackgroundColor,
            color: buttonTextColor,
            borderColor: buttonBorderColor,
            '&:hover': {
              backgroundColor: buttonBackgroundColor,
              color: buttonTextColor,
              borderColor: buttonBorderColor,
            },
          }}
        >
          <ArrowDropDown sx={{ color: buttonBorderColor }} />
        </Button>
      </ButtonGroup>

      <Menu
        id='split-button-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        MenuListProps={{
          'aria-labelledby': 'split-button',
        }}
        PaperProps={{
          sx: {
            bgcolor:
              theme === 'light' ? 'background.paper' : 'background.default',
          },
        }}
      >
        {buttons.map((button) => (
          <MenuItem
            key={button.id}
            selected={button.id === selectedButton.id}
            onClick={() => handleMenuItemClick(button)}
            sx={{
              backgroundColor:
                button.id === selectedButton.id
                  ? buttonBackgroundColor
                  : 'transparent',
              color: menuTextColor,
              '&:hover': {
                backgroundColor: buttonBackgroundColor,
                color: menuTextColor,
              },
              '&.Mui-selected': {
                backgroundColor: menuItemBackgroundColor,
                color: menuTextColor,
              },
              '&.Mui-selected:hover': {
                backgroundColor: menuItemBackgroundColor,
                color: menuTextColor,
              },
            }}
          >
            {button.text}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export const ButtonSwitchRowBlock = ({
  buttons,
  onButtonClick,
  theme,
  themeVariant,
  selectedButton,
}: ButtonSwitchRowBlockProps & {
  themeVariant: ThemeVariant;
}) => {
  const muiTheme = useTheme();

  const { palette } = muiTheme;

  const ctx = { palette, theme };

  const isLarge = useMediaQuery(muiTheme.breakpoints.up('lg'));

  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const buttonBackgroundColor = resolveThemeVariant<string>(
    'switchButtonBackgroundColor',
    themeVariant,
    ctx,
  );

  const buttonTextColor = resolveThemeVariant<string>(
    'switchButtonTextColor',
    themeVariant,
    ctx,
  );

  return isLarge ? (
    <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={2}>
      {CtaButtons({
        ctaButtons: buttons.map((button) => ({
          text: button.text,
          sx: {
            width: { md: 'auto', xs: '100%' },
            backgroundColor:
              button.id === selectedButton.id
                ? buttonBackgroundColor
                : 'transparent',
            color: buttonTextColor,
            '&:hover': {
              backgroundColor: buttonBackgroundColor,
              color: buttonTextColor,
            },
          },
          variant: 'outlined',
          onClick: () => onButtonClick(button.id),
        })),
        theme,
        themeVariant,
      })}
    </Stack>
  ) : (
    <SplitButton
      buttons={buttons}
      selectedButton={selectedButton}
      onButtonClick={onButtonClick}
      theme={theme}
      themeVariant={themeVariant}
    />
  );
};
