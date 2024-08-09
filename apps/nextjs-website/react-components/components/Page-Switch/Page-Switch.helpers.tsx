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
  useMediaQuery,
  useTheme,
  Theme,
  styled,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

const customStyles = (theme: Theme) => {
  const { palette } = theme;
  return {
    dark: {
      'a': {
        color: `${palette.primary.contrastText} !important`,
        fontWeight: '700 !important',
        textDecorationColor: `${palette.primary.contrastText} !important`,
        '&:hover': {
          color: `${palette.primary.contrastText} !important`,
        },
      },
    },
    light: {
      'a': {
        color: `${palette.primary.main} !important`,
        fontWeight: '700 !important',
        textDecorationColor: `${palette.primary.main} !important`,
        '&:hover': {
          color: `${palette.primary.main} !important`,
        },
      },
    },  
  };
};

const CustomLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: '700',
  textDecorationColor: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const DarkCustomLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontWeight: '700',
  textDecorationColor: theme.palette.primary.contrastText,
  '&:hover': {
    color: theme.palette.primary.contrastText,
  },
}));

export const TitleSubtitleBlock = ({
  title,
  subtitle,
  theme,
}: PageSwitchBaseProps) => {
  const textColor = TextColor(theme);
  const muiTheme = useTheme();

  return (
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        ...customStyles(muiTheme)[theme],
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
                theme === 'light' ? (
                  <CustomLink href={item.link}>
                    {item.text}
                  </CustomLink>
                ) : (
                  <DarkCustomLink href={item.link}>
                    {item.text}
                  </DarkCustomLink>
                )
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
            backgroundColor: 'transparent',
            color:
              theme === 'light' ? muiTheme.palette.primary.main : muiTheme.palette.primary.contrastText,
            borderColor:
              theme === 'light' ? muiTheme.palette.primary.main : muiTheme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: 'transparent',
              color:
                theme === 'light' ? muiTheme.palette.primary.main : muiTheme.palette.primary.contrastText,
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
            backgroundColor: 'transparent',
            color:
              theme === 'light' ? muiTheme.palette.primary.main : muiTheme.palette.primary.contrastText,
            borderColor:
              theme === 'light' ? muiTheme.palette.primary.main : muiTheme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: 'transparent',
              color:
                theme === 'light' ? muiTheme.palette.primary.main : muiTheme.palette.primary.contrastText,
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
        PaperProps={{
          sx: {
            bgcolor: theme === 'light' ? 'background.paper' : 'background.default',
            color: theme === 'light' ? 'text.primary' : 'text.secondary',
          }
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
              backgroundColor: 'transparent',
              color:
                theme === 'light' ? muiTheme.palette.primary.main : muiTheme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: 'transparent',
                color: muiTheme.palette.primary.main,
              },
              '&.Mui-selected': {
                backgroundColor: palette.custom.editorialSwitchButtonsBackgroundLightBlue,
                color: theme === 'dark' ? muiTheme.palette.primary.main : muiTheme.palette.primary.main,
              },
              '&.Mui-selected:hover': {
                backgroundColor: palette.custom.editorialSwitchButtonsBackgroundLightBlue,
                color: theme === 'dark' ? muiTheme.palette.primary.main : muiTheme.palette.primary.main,
              },
              '&:not(.Mui-selected)': {
                color: muiTheme.palette.primary.main,
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
              theme === 'light' ? muiTheme.palette.primary.main : muiTheme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor:
                button.id === selectedButton.id
                  ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
                  : 'transparent',
              color:
                theme === 'light' ? muiTheme.palette.primary.main : muiTheme.palette.primary.contrastText,
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