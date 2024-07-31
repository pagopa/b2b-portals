import React from 'react';
import {
  ButtonSwitchRowBlockProps,
  EditorialSwitchBaseProps,
} from '../../types/Editorial-Switch/Editorial-Switch.types';
import { CtaButtons, Title } from '../common/Common';
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
  title,
  subtitle,
  theme,
}: EditorialSwitchBaseProps) => {
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
        title={title}
        marginTop={3}
        marginBottom={3}
      />
      {subtitle && (
        <div
          style={{
            marginBottom: '0.5rem',
            marginTop: '0.5rem',
            color: textColor,
          }}
        >
          {subtitle.map((item, index) => (
            <React.Fragment key={index}>
              {item.link ? (
                <a
                  href={item.link}
                  style={{ color: textColor, textDecoration: 'underline' }}
                >
                  {item.text}
                </a>
              ) : (
                item.text
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

const SplitButton = ({
  buttons,
  selectedButton,
  onButtonClick,
  theme,
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
            onButtonClick(selectedButton.id);
          }}
          sx={{
            backgroundColor:
              theme === 'light'
                ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                : 'transparent',
            color:
              theme === 'light' ? muiTheme.palette.primary.main : 'inherit',
            '&:hover': {
              backgroundColor:
                theme === 'light'
                  ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                  : 'transparent',
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
            color:
              theme === 'light' ? muiTheme.palette.primary.main : 'inherit',
            '&:hover': {
              backgroundColor:
                theme === 'light'
                  ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                  : 'transparent',
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
              backgroundColor:
                button.id === selectedButton.id
                  ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                  : 'transparent',
              color:
                theme === 'light' ? muiTheme.palette.primary.main : 'inherit',
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
    <Stack
      direction={isSmallScreen ? 'column' : 'row'}
      spacing={2}
    >
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
              theme === 'light' ? muiTheme.palette.primary.main : 'inherit',
            '&:hover': {
              backgroundColor:
                palette.custom.editorialSwitchButtonsBackgroundLightBlue,
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
    />
  );
};
