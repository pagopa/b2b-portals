import { Grid, Stack, Button, Box, useTheme, Typography } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { StripeLinkProps } from '../../types/StripeLink/StripeLink.types';
import { TextColor } from '../common/Common.helpers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import {
  resolveByThemeVariant,
  stripeLinkButtonBackgroundColorMap,
  stripeLinkButtonTextColorMap,
  variantExtraBackgroundColorMap,
} from '../../theme';
import { isValidExternalLink, LinkIcon } from '../common/Common';

const StripeLink = ({
  iconURL,
  subtitle,
  theme,
  themeVariant,
  link,
  sectionID,
}: StripeLinkProps) => {
  const textColorWhiteOnly = TextColor('dark');
  const { palette } = useTheme();
  const ctx = { palette, theme };

  const extraBackgroundColor = resolveByThemeVariant(
    variantExtraBackgroundColorMap,
    themeVariant,
    ctx,
  );

  const buttonBackgroundColor = resolveByThemeVariant(
    stripeLinkButtonBackgroundColorMap,
    themeVariant,
    ctx,
  );

  const buttonTextColor = resolveByThemeVariant(
    stripeLinkButtonTextColorMap,
    themeVariant,
    ctx,
  );

  return (
    <ContainerRC
      background={extraBackgroundColor}
      py={2}
      sxInner={{ justifyContent: { xs: 'start', md: 'start' } }}
      {...(sectionID && { sectionID })}
    >
      <Grid item>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent={{ md: 'flex-start' }}
          spacing={3}
          alignItems={{ md: 'center', xs: 'flex-start' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              width: 'auto',
              alignItems: 'center',
              gap: '.5rem',
            }}
          >
            {iconURL && <Image src={iconURL} alt='' height={28} width={28} />}

            <Typography
              component='div'
              variant='body2'
              color={textColorWhiteOnly}
              sx={{
                fontSize: '18px',
                textAlign: 'left',
                '& a': {
                  fontWeight: 700,
                  color: textColorWhiteOnly,
                  textDecoration: 'underline',
                  '&:hover': {
                    color: textColorWhiteOnly,
                  },
                },
                '& p': {
                  color: textColorWhiteOnly,
                },
              }}
            >
              {subtitle}
            </Typography>
          </Box>

          <Button
            variant='contained'
            size='small'
            {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
            sx={{
              backgroundColor: buttonBackgroundColor,
              color: buttonTextColor,
              '&:hover': {
                backgroundColor: buttonBackgroundColor,
              },
            }}
            endIcon={
              <LinkIcon
                sxExternalLinkIcon={{ ml: 0 }}
                showExternalLinkIcon={isValidExternalLink(link.href)}
                internalLinkIcon={<ArrowForwardIcon color='inherit' />}
              />
            }
            href={link.href}
          >
            {link.label}
          </Button>
        </Stack>
      </Grid>
    </ContainerRC>
  );
};

export default StripeLink;
