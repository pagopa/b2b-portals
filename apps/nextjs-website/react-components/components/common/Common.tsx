import React, { ReactElement, useContext } from 'react';
import { Box, Button, Typography, TypographyProps } from '@mui/material';
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

  return ctaButtons.map((button, i) =>
    React.isValidElement(button)
      ? button
      : isCtaButtonProps(button) && (
          <CtaButton
            key={`${button.text}-${i}`}
            color={theme === 'dark' ? 'negative' : 'primary'}
            variant={button.variant || 'contained'}
            disableRipple={disableRipple}
            showExternalLinkIcon={showExternalLinkIcon}
            style={{
              ...(button.variant === 'contained' && {
                backgroundColor: resolveThemeVariant<string>(
                  'ctaContainedBackgroundColor',
                  themeVariant,
                  ctx,
                ),
                color: resolveThemeVariant<string>(
                  'ctaContainedTextColor',
                  themeVariant,
                  ctx,
                ),
              }),
              ...(button.variant === 'outlined' && {
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
            }}
            {...button}
            {...(trackEvent && { trackEvent })}
          >
            {button.text}
          </CtaButton>
        ),
  );
};

const normalizeTitleLineBreaks = (title: string) =>
  title.replace(/<br\s*\/?>|\\n|\r?\n/gi, '\n');

const StringTitle = (
  title: string,
  textColor: string,
  variant: TypographyProps['variant'] = 'body1',
  component: TypographyProps['component'] = 'p',
  textAlign: TypographyProps['align'] = 'center',
  marginTop: number | string = 0,
  marginBottom: number | string = 0,
  id?: string,
) => (
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

const ElementTitle = (
  title: JSX.Element,
  textColor: string,
  variant: TypographyProps['variant'] = 'body1',
  component: TypographyProps['component'] = 'p',
  textAlign: TypographyProps['align'] = 'center',
  marginTop: number | string = 0,
  marginBottom: number | string = 0,
  id?: string,
) =>
  React.isValidElement(title)
    ? React.cloneElement(
        title as ReactElement<
          TypographyProps & { style?: React.CSSProperties }
        >,
        {
          ...(id && { id }),
          variant,
          component,
          align: textAlign,
          style: { color: textColor, marginTop, marginBottom },
        },
      )
    : null;

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
  title: string | JSX.Element;
  textColor: string;
  variant?: TypographyProps['variant'];
  component?: TypographyProps['component'];
  textAlign?: TypographyProps['align'];
  marginTop?: number | string;
  marginBottom?: number | string;
  id?: string;
}) => {
  return typeof title === 'string'
    ? StringTitle(
        title,
        textColor,
        variant,
        component,
        textAlign,
        marginTop,
        marginBottom,
        id,
      )
    : ElementTitle(
        title,
        textColor,
        variant,
        component,
        textAlign,
        marginTop,
        marginBottom,
        id,
      );
};

const StringSubtitle = (
  subtitle: string,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body1',
  marginBottom: number | string = 0,
) => (
  <Typography
    variant={variant}
    style={{ color: textColor, marginBottom }}
    align={textAlign}
  >
    {subtitle}
  </Typography>
);

const ElementSubtitle = (
  subtitle: JSX.Element,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body1',
  marginBottom: number | string = 0,
) =>
  React.isValidElement(subtitle)
    ? React.cloneElement(
        subtitle as ReactElement<
          TypographyProps & { style?: React.CSSProperties }
        >,
        {
          style: { color: textColor, marginBottom },
          align: textAlign,
          variant: variant,
        },
      )
    : null;

export const Subtitle = ({
  subtitle,
  textColor,
  textAlign = 'center',
  variant = 'body1',
  marginBottom = 0,
}: {
  subtitle: string | JSX.Element | undefined;
  textColor: string;
  textAlign?: TypographyProps['align'];
  variant?: TypographyProps['variant'];
  marginBottom?: number | string;
}) => {
  if (!subtitle) {
    return null;
  }

  return typeof subtitle === 'string'
    ? StringSubtitle(subtitle, textColor, textAlign, variant, marginBottom)
    : ElementSubtitle(subtitle, textColor, textAlign, variant, marginBottom);
};

const StringBody = (
  body: string,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body2',
  marginBottom: number | string = 0,
) => (
  <Typography
    variant={variant}
    style={{ color: textColor, marginBottom }}
    align={textAlign}
    sx={{
      a: {
        color: textColor,
        '&:hover': {
          color: textColor,
        },
      },
    }}
  >
    {body}
  </Typography>
);

const ElementBody = (
  body: JSX.Element,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body2',
  marginBottom: number | string = 0,
) =>
  React.isValidElement(body) ? (
    <Box
      sx={{
        a: {
          color: textColor,
          '&:hover': {
            color: textColor,
          },
        },
      }}
    >
      {React.cloneElement(
        body as ReactElement<TypographyProps & { style?: React.CSSProperties }>,
        {
          style: { color: textColor, marginBottom },
          align: textAlign,
          variant: variant,
        },
      )}
    </Box>
  ) : null;

export const Body = ({
  body,
  textColor,
  textAlign = 'inherit',
  variant = 'body2',
  marginBottom = 0,
}: {
  body: string | JSX.Element | undefined;
  textColor: string;
  textAlign?: TypographyProps['align'];
  variant?: TypographyProps['variant'];
  marginBottom?: number | string;
}) => {
  if (!body) {
    return null;
  }

  return typeof body === 'string'
    ? StringBody(body, textColor, textAlign, variant, marginBottom)
    : ElementBody(body, textColor, textAlign, variant, marginBottom);
};

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
