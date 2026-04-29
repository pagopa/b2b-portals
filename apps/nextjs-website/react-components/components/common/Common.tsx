import React, { ReactElement } from 'react';
import { Box, Button, Typography, TypographyProps } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import { CtaButtonProps, ThemeVariant } from '../../types/common/Common.types';
import { useMixpanelTracking } from './tracking';
import {
  ctaContainedBackgroundColorMap,
  ctaContainedTextColorMap,
  ctaOutlinedBorderColorMap,
  ctaOutlinedTextColorMap,
  resolveByThemeVariant,
  variantAccentColorMap,
} from '../../theme';

const CtaButton = ({
  trackEvent,
  openInNewTab,
  ariaLabel,
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
      {...(randomID && { id: randomID })}
      {...(trackedOnClick && { onClick: trackedOnClick })}
      {...(ariaLabel && { 'aria-label': ariaLabel })}
    >
      {buttonProps.text}
    </Button>
  );
};

export const CtaButtons = ({
  ctaButtons,
  theme = 'light',
  themeVariant = 'IO',
  disableRipple = false,
  trackEvent,
}: {
  ctaButtons: ReadonlyArray<CtaButtonProps | JSX.Element>;
  theme?: 'dark' | 'light';
  themeVariant?: ThemeVariant;
  disableRipple?: boolean;
  trackEvent?: string;
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
            style={{
              ...(button.variant === 'contained' && {
                backgroundColor: resolveByThemeVariant(
                  ctaContainedBackgroundColorMap,
                  themeVariant,
                  ctx,
                ),
                color: resolveByThemeVariant(
                  ctaContainedTextColorMap,
                  themeVariant,
                  ctx,
                ),
              }),
              ...(button.variant === 'outlined' && {
                borderColor: resolveByThemeVariant(
                  ctaOutlinedBorderColorMap,
                  themeVariant,
                  ctx,
                ),
                color: resolveByThemeVariant(
                  ctaOutlinedTextColorMap,
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
    {...(id && { id })}
  >
    {title}
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
          variant,
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
          variant,
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

  const variantColor = resolveByThemeVariant(
    variantAccentColorMap,
    themeVariant,
    {
      palette,
      theme,
    },
  );

  return {
    backgroundColor: isSelected
      ? theme === 'light'
        ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
        : palette.background.paper
      : 'transparent',
    color:
      theme === 'light'
        ? variantColor
        : isSelected
          ? variantColor
          : palette.primary.contrastText,
    borderColor: theme === 'light' ? variantColor : palette.background.paper,
    '&:hover': {
      backgroundColor:
        theme === 'light'
          ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
          : palette.background.paper,
      color: variantColor,
      borderColor: theme === 'light' ? variantColor : palette.background.paper,
    },
  };
};
