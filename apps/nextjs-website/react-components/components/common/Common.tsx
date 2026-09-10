import React, { useContext } from 'react';
import { Button, Typography, TypographyProps } from '@mui/material';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import { CtaButtonProps, ThemeVariant } from '../../types/common/Common.types';
import { useMixpanelTracking } from './tracking';
import { resolveThemeVariant } from '../../theme';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { LabelsContext } from '../LabelsProvider/LabelsProvider';

const CtaButton = ({
  trackEvent,
  openInNewTab,
  ariaLabel,
  showExternalLinkIcon = true,
  ...buttonProps
}: CtaButtonProps & {
  trackEvent?: string;
}) => {
  const { randomID, trackedOnClick } = useMixpanelTracking({
    isLink: buttonProps.href !== undefined,
    trackEvent,
    onClick: buttonProps.onClick,
  });

  return (
    <Button
      {...{
        ...buttonProps,
        icon: undefined,
        text: undefined,
        themevariant: undefined,
      }}
      {...(openInNewTab && { target: '_blank' })}
      {...(randomID && { id: randomID })} // Random ID used by Mixpanel to track links (overrides any existing ID)
      {...(trackedOnClick && { onClick: trackedOnClick })} // Override onClick (if present) to add tracking
      {...(ariaLabel && { 'aria-label': ariaLabel })}
    >
      {buttonProps.text}
      <ExternalLinkIcon
        show={showExternalLinkIcon && isValidExternalLink(buttonProps.href)}
      />
    </Button>
  );
};

export const CtaButtons = ({
  ctaButtons,
  theme = 'light',
  themeVariant = 'IO',
  disableRipple = false,
  trackEvent,
  showExternalLinkIcon = true,
}: {
  ctaButtons: ReadonlyArray<CtaButtonProps | JSX.Element>;
  theme?: 'dark' | 'light';
  themeVariant?: ThemeVariant;
  disableRipple?: boolean;
  trackEvent?: string;
  showExternalLinkIcon?: boolean;
}) => {
  const { palette } = useTheme();
  const ctx = { palette, theme };

  const isCtaButtonProps = (
    button: CtaButtonProps | JSX.Element,
  ): button is CtaButtonProps => {
    return (button as CtaButtonProps).text !== undefined;
  };

  return ctaButtons.map((button, i) => {
    if (React.isValidElement(button)) {
      return button;
    }

    if (!isCtaButtonProps(button)) {
      return null;
    }

    const buttonVariant = button.variant || 'contained';
    const containedBackgroundColor = resolveThemeVariant<string>(
      'ctaContainedBackgroundColor',
      themeVariant,
      ctx,
    );
    const containedTextColor = resolveThemeVariant<string>(
      'ctaContainedTextColor',
      themeVariant,
      ctx,
    );

    return (
      <CtaButton
        key={`${button.text}-${i}`}
        color={theme === 'dark' ? 'negative' : 'primary'}
        variant={buttonVariant}
        disableRipple={disableRipple}
        showExternalLinkIcon={showExternalLinkIcon}
        {...button}
        sx={{
          ...(buttonVariant === 'contained' && {
            backgroundColor: containedBackgroundColor,
            color: containedTextColor,
            '&.MuiButton-contained:hover': {
              backgroundColor: resolveThemeVariant<string>(
                'ctaContainedBackgroundHoverColor',
                themeVariant,
                ctx,
              ),
              color: containedTextColor,
            },
          }),
          ...(buttonVariant === 'outlined' && {
            borderColor: resolveThemeVariant<string>(
              'ctaOutlinedBorderColor',
              themeVariant,
              ctx,
            ),
            color: resolveThemeVariant<string>(
              'ctaOutlinedTextColor',
              themeVariant,
              ctx,
            ),
          }),
          ...(button.sx as object),
        }}
        {...(trackEvent && { trackEvent })}
      >
        {button.text}
      </CtaButton>
    );
  });
};

const normalizeTitleLineBreaks = (title: string) =>
  title.replace(/<br\s*\/?>|\\n|\r?\n/gi, '\n');

export const Title = ({
  title,
  textColor,
  variant = 'body1',
  component = 'p',
  textAlign = 'center',
  marginTop = 0,
  marginBottom = 0,
  id,
}: {
  title: string;
  textColor: string;
  variant?: TypographyProps['variant'];
  component?: TypographyProps['component'];
  textAlign?: TypographyProps['align'];
  marginTop?: number | string;
  marginBottom?: number | string;
  id?: string;
}) => (
  <Typography
    color={textColor}
    variant={variant}
    component={component}
    align={textAlign}
    style={{ marginTop, marginBottom }}
    sx={{ whiteSpace: 'pre-line' }}
    {...(id && { id })}
  >
    {normalizeTitleLineBreaks(title)}
  </Typography>
);

export const getButtonStyles = (
  theme: 'light' | 'dark',
  themeVariant: ThemeVariant,
  sectionId: number,
  currentSectionId: number,
  palette: Theme['palette'],
) => {
  const isSelected = sectionId === currentSectionId;
  const ctx = { palette, theme };

  const variantColor = resolveThemeVariant<string>(
    'accentColor',
    themeVariant,
    ctx,
  );

  const selectedBackgroundColor = resolveThemeVariant<string>(
    'switchButtonSelectedBackgroundColor',
    themeVariant,
    ctx,
  );

  return {
    backgroundColor: isSelected ? selectedBackgroundColor : 'transparent',
    color:
      theme === 'light'
        ? variantColor
        : isSelected
          ? variantColor
          : palette.primary.contrastText,
    borderColor: theme === 'light' ? variantColor : palette.background.paper,
    '&:hover': {
      backgroundColor: selectedBackgroundColor,
      color: variantColor,
      borderColor: theme === 'light' ? variantColor : palette.background.paper,
    },
  };
};

export const isValidExternalLink = (URL?: string): boolean => {
  if (!URL) {
    return false;
  }

  return (
    URL.toLowerCase().startsWith('http:') ||
    URL.toLowerCase().startsWith('https:')
  );
};

interface ExternalLinkIconProps {
  show?: boolean;
  className?: string;
  sx?: SxProps;
  target?: string;
}

export const ExternalLinkIcon = ({
  show = true,
  className,
  sx,
  target,
}: ExternalLinkIconProps) => {
  const { externalLinkIconLabel } = useContext(LabelsContext);
  return show ? (
    <ArrowOutwardIcon
      aria-label={
        target === '_blank'
          ? externalLinkIconLabel.targetBlank
          : externalLinkIconLabel.default
      }
      role='img'
      sx={{ ml: 1, width: 24, height: 24, verticalAlign: 'middle', ...sx }}
      {...(className && { className })}
    />
  ) : null;
};

interface LinkIconProps {
  showExternalLinkIcon?: boolean;
  internalLinkIcon: JSX.Element;
  sxExternalLinkIcon?: SxProps;
  externaLinkIconTarget?: React.HTMLAttributeAnchorTarget;
}

export const LinkIcon = ({
  showExternalLinkIcon,
  internalLinkIcon,
  sxExternalLinkIcon,
  externaLinkIconTarget,
}: LinkIconProps) =>
  showExternalLinkIcon ? (
    <ExternalLinkIcon
      {...(sxExternalLinkIcon && { sx: sxExternalLinkIcon })}
      {...(externaLinkIconTarget && { target: externaLinkIconTarget })}
    />
  ) : (
    internalLinkIcon
  );
