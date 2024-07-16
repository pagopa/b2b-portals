import React from 'react';
import {
  ButtonSwitchRowBlockProps,
  TitleSubtitleBlockProps,
} from '../../types/Editorial-Switch/Editorial-Switch.types';
import { CtaButtons, Subtitle, Title } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

export const TitleSubtitleBlock = ({
  toptitle,
  topsubtitle,
  theme,
}: TitleSubtitleBlockProps) => {
  const textColor = TextColor(theme);

  return (
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Title
        variant='h4'
        textColor={textColor}
        title={toptitle}
        textAlign='left'
        marginTop={3}
        marginBottom={3}
      />
      <Subtitle
        variant='body2'
        textColor={textColor}
        subtitle={topsubtitle}
        textAlign='center'
        marginBottom={4}
      />
    </div>
  );
};

const SplitButton = ({
  buttons,
  selectedButton,
  onButtonClick,
  theme,
}: {
  buttons: { id: string; text: string }[];
  selectedButton: { id: string; text: string };
  onButtonClick: (button: { id: string; text: string }) => void;
  theme: string;
}) => {
  const muiTheme = useTheme();
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (button: { id: string; text: string }) => {
    onButtonClick(button);
    setOpen(false);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const anchorRef = React.useRef<HTMLDivElement>(null);

  return (
    <React.Fragment>
      <ButtonGroup
        variant='outlined'
        ref={anchorRef}
        aria-label='Split button'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Button
          onClick={() => {
            onButtonClick(selectedButton);
          }}
          sx={{
            backgroundColor: theme === 'light' ? palette.custom.editorialSwitchButtonsBackgroundLightBlue : 'transparent',
            color: theme === 'light' ? muiTheme.palette.primary.main : 'inherit',
            '&:hover': {
              backgroundColor: theme === 'light' ? palette.custom.editorialSwitchButtonsBackgroundLightBlue : 'transparent',
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
            backgroundColor: theme === 'light' ? palette.custom.editorialSwitchButtonsBackgroundLightBlue : 'transparent',
            color: theme === 'light' ? muiTheme.palette.primary.main : 'inherit',
            '&:hover': {
              backgroundColor: theme === 'light' ? palette.custom.editorialSwitchButtonsBackgroundLightBlue : 'transparent',
            },
          }}
        >
          <ArrowDropDown />
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
      >
        {buttons.map((button) => (
          <MenuItem
            key={button.id}
            selected={button.id === selectedButton.id}
            onClick={() => {
              handleMenuItemClick(button);
            }}
            sx={{
              backgroundColor: button.id === selectedButton.id ? palette.custom.editorialSwitchButtonsBackgroundLightBlue : 'transparent',
              color: theme === 'light' ? muiTheme.palette.primary.main : 'inherit',
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
  selectedButton,
}: ButtonSwitchRowBlockProps) => {
  const muiTheme = useTheme();
  const { palette } = useTheme();
  const isLarge = useMediaQuery(muiTheme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  return isLarge ? (
    <Stack direction={isSmallScreen ? 'column' : 'row'} justifyContent='left' spacing={2}>
      {CtaButtons({
        ctaButtons: buttons.map((button) => ({
          text: button.text,
          sx: {
            width: { md: 'auto', xs: '100%' },
            backgroundColor: button.id === selectedButton.id ? palette.custom.editorialSwitchButtonsBackgroundLightBlue : 'transparent',
            color: theme === 'light' ? muiTheme.palette.primary.main : 'inherit',
            '&:hover': {
              backgroundColor: palette.custom.editorialSwitchButtonsBackgroundLightBlue,
            },
          },
          variant: 'outlined',
          onClick: () => onButtonClick(button),
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
    />
  );
};
