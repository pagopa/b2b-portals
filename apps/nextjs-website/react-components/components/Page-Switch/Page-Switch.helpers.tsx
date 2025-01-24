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

export const TitleSubtitleBlock = ({
  title,
  subtitle,
  theme,
  themeVariant,
}: PageSwitchBaseProps) => {
  const textColor = TextColor(theme);
  const { palette } = useTheme();

  const linkColor =
    theme === 'dark'
      ? palette.custom.white
      : themeVariant === 'SEND'
      ? palette.primary.main
      : palette.custom.primaryColorDark;

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
  const { palette } = useTheme();
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

  const borderColor =
    theme === 'light'
      ? themeVariant === 'SEND'
        ? muiTheme.palette.primary.main
        : palette.custom.primaryColorDark
      : muiTheme.palette.primary.contrastText;

  const textColor =
    theme === 'light'
      ? themeVariant === 'SEND'
        ? muiTheme.palette.primary.main
        : palette.custom.primaryColorDark
      : muiTheme.palette.primary.main;

  const externalButtonTextColor =
    theme === 'dark' ? muiTheme.palette.primary.contrastText : textColor;

  return (
    <React.Fragment>
      <ButtonGroup
        variant='outlined'
        ref={anchorRef}
        aria-label='Split button'
        sx={{ display: 'flex', justifyContent: 'center', borderColor }}
      >
        <Button
          onClick={() => onButtonClick(selectedButton.id)}
          sx={{
            backgroundColor:
              theme === 'light'
                ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                : 'transparent',
            color: externalButtonTextColor,
            borderColor,
            '&:hover': {
              backgroundColor:
                theme === 'light'
                  ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                  : 'transparent',
              color: externalButtonTextColor,
              borderColor,
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
            backgroundColor:
              theme === 'light'
                ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                : 'transparent',
            color: externalButtonTextColor,
            borderColor,
            '&:hover': {
              backgroundColor:
                theme === 'light'
                  ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                  : 'transparent',
              color: externalButtonTextColor,
              borderColor,
            },
          }}
        >
          <ArrowDropDown sx={{ color: borderColor }} />
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
                  ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                  : 'transparent',
              color: textColor,
              '&:hover': {
                backgroundColor:
                  palette.custom.editorialSwitchButtonsBackgroundLightBlue,
                color: textColor,
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(224, 242, 255, 0.7)',
                color: textColor,
              },
              '&.Mui-selected:hover': {
                backgroundColor: 'rgba(224, 242, 255, 0.7)',
                color: textColor,
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
}: ButtonSwitchRowBlockProps & { themeVariant: 'SEND' | 'IO' }) => {
  const muiTheme = useTheme();
  const { palette } = useTheme();
  const isLarge = useMediaQuery(muiTheme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  return isLarge ? (
    <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={2}>
      {CtaButtons({
        ctaButtons: buttons.map((button) => ({
          text: button.text,
          sx: {
            width: { md: 'auto', xs: '100%' },
            backgroundColor:
              button.id === selectedButton.id
                ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                : 'transparent',
            color:
              theme === 'light'
                ? themeVariant === 'SEND'
                  ? muiTheme.palette.primary.main
                  : palette.custom.primaryColorDark
                : muiTheme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor:
                button.id === selectedButton.id
                  ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                  : 'transparent',
              color:
                theme === 'light'
                  ? themeVariant === 'SEND'
                    ? muiTheme.palette.primary.main
                    : palette.custom.primaryColorDark
                  : muiTheme.palette.primary.contrastText,
            },
          },
          variant: 'outlined',
          onClick: () => onButtonClick(button.id),
        })),
        theme,
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
