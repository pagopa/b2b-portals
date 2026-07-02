import { Grid, Stack, Button, Typography, useTheme } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { HighlightBoxProps } from '../../types/HighlightBox/HighlightBox.types';
import { ExternalLinkIcon, isValidExternalLink } from '../common/Common';
import { resolveThemeVariant, ThemeContext } from '../../theme';

const HighlightBox = ({
  title,
  body,
  image,
  eyelet,
  link,
  sectionID,
  themeVariant,
}: HighlightBoxProps) => {
  const { palette } = useTheme();
  const ctx: ThemeContext = {
    palette,
    theme: 'light',
  };

  const backgroundColor = resolveThemeVariant<string>(
    'highlightBoxBackgroundColor',
    themeVariant,
    ctx,
  );

  const eyeletBackgroundColor = resolveThemeVariant<string>(
    'highlightBoxEyeletBackgroundColor',
    themeVariant,
    ctx,
  );

  const eyeletTextColor = resolveThemeVariant<string>(
    'highlightBoxEyeletTextColor',
    themeVariant,
    ctx,
  );

  const buttonBackgroundColor = resolveThemeVariant<string>(
    'ctaContainedBackgroundColor',
    themeVariant,
    ctx,
  );

  const buttonBackgroundHoverColor = resolveThemeVariant<string>(
    'ctaContainedBackgroundHoverColor',
    themeVariant,
    ctx,
  );

  const buttonTextColor = resolveThemeVariant<string>(
    'ctaContainedTextColor',
    themeVariant,
    ctx,
  );

  return (
    <ContainerRC
      py={4}
      sxInner={{
        justifyContent: { xs: 'start', md: 'start' },
        borderRadius: '24px',
        padding: { xs: '48px', md: '0 48px' },
        backgroundColor,
      }}
      {...(sectionID && { sectionID })}
    >
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            {eyelet && (
              <Typography
                variant='subtitle2'
                component='p'
                color='textSecondary'
                sx={{
                  backgroundColor: eyeletBackgroundColor,
                  color: eyeletTextColor,
                  borderRadius: '100px',
                  display: 'inline-block',
                  px: 2,
                  py: 1,
                  width: 'fit-content',
                  fontSize: '12px',
                }}
              >
                {eyelet}
              </Typography>
            )}

            <Typography
              variant='h6'
              component='h2'
              color='textPrimary'
              fontWeight={700}
              sx={{ fontSize: { xs: '22px', md: '24px' } }}
            >
              {title}
            </Typography>

            <Typography variant='body1' color='textPrimary' fontSize='16px'>
              {body}
            </Typography>

            {link && (
              <Button
                variant='contained'
                href={link.href}
                {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
                size='small'
                sx={{
                  width: 'fit-content',
                  px: 3,
                  py: 1,
                  backgroundColor: buttonBackgroundColor,
                  color: buttonTextColor,
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: 400,
                  '&.MuiButton-contained:hover': {
                    backgroundColor: buttonBackgroundHoverColor,
                    color: buttonTextColor,
                  },
                }}
                {...(isValidExternalLink(link.href) && {
                  target: '_blank',
                })}
              >
                {link.label}
                <ExternalLinkIcon
                  show={isValidExternalLink(link.href)}
                  {...(isValidExternalLink(link.href) && {
                    target: '_blank',
                  })}
                />
              </Button>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Stack sx={{ width: '100%' }}>
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes={image.sizes}
              alt={'Highlight'}
              width={300}
              height={200}
              style={{
                height: 'auto',
                width: '100%',
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </ContainerRC>
  );
};

export default HighlightBox;
