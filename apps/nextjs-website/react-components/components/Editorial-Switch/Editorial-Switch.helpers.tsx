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
}: {
  buttons: string[];
  selectedButton: string;
  onButtonClick: (button: string) => void;
  theme: string;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (button: string) => {
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
        >
          {selectedButton}
        </Button>
        <Button
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='menu'
          onClick={handleButtonClick}
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
            key={button}
            selected={button === selectedButton}
            onClick={() => {
              handleMenuItemClick(button);
            }}
          >
            {button}
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
}: ButtonSwitchRowBlockProps & { selectedButton: string }) => {
  const muiTheme = useTheme();
  const isLarge = useMediaQuery(muiTheme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  return isLarge ? (
    <Stack
      direction={isSmallScreen ? 'column' : 'row'}
      justifyContent='left'
    >
      {CtaButtons({
        ctaButtons: buttons.map((button) => ({
          text: button,
          sx: { width: { md: 'auto', xs: '100%' } },
          variant: 'outlined',
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
