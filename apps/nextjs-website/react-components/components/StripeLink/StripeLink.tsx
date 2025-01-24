import { Grid, Stack, Button, Box, useTheme, Typography } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { StripeLinkProps } from '../../types/StripeLink/StripeLink.types';
import {
  SendExtraBackgroundColor,
  IoExtraBackgroundColor,
  TextColor,
} from '../common/Common.helpers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

const StripeLink = ({
  iconURL,
  subtitle,
  theme,
  themeVariant,
  link,
  sectionID,
}: StripeLinkProps) => {
  const textColorWhiteOnly = TextColor('dark');

  const extraBackgroundColor =
    themeVariant === 'SEND'
      ? SendExtraBackgroundColor(theme)
      : IoExtraBackgroundColor(theme);

  const { palette } = useTheme();
  return (
    <ContainerRC
      background={extraBackgroundColor}
      py={2}
      sx={{ justifyContent: { xs: 'start', md: 'start' } }}
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
            sx={{
              backgroundColor:
                theme === 'light'
                  ? palette.custom.white
                  : themeVariant === 'SEND'
                  ? palette.primary.main
                  : palette.custom.blueIO[500],
              color:
                theme === 'light'
                  ? themeVariant === 'SEND'
                    ? palette.primary.main
                    : palette.custom.blueIO[500]
                  : palette.custom.white,
              '&:hover': {
                backgroundColor:
                  theme === 'light'
                    ? palette.custom.white
                    : themeVariant === 'SEND'
                    ? palette.primary.main
                    : palette.custom.blueIO[500],
              },
            }}
            endIcon={<ArrowForwardIcon color='inherit'></ArrowForwardIcon>}
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
