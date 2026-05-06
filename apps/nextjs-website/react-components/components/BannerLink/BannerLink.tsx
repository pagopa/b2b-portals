import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { CtaButtons } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { BannerLinkProps } from '../../types/BannerLink/BannerLink.types';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { CtaButtonProps } from '@react-components/types/common/Common.types';
import {
  resolveByThemeVariant,
  variantContentLinkColorMap,
  variantSectionBackgroundColorMap,
  variantSectionStripeBackgroundsMap,
} from '../../theme';

const styles = {
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  twoColumns: {
    display: 'flex',
    flexDirection: { md: 'row', xs: 'column' },
    justifyContent: 'space-between',
    width: '100%',
  },
  section: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
};

const BannerLink = ({
  theme,
  sections,
  sectionID,
  themeVariant,
}: BannerLinkProps) => {
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('md'));
  const { palette } = muiTheme;
  const ctx = { palette, theme };

  const backgroundColor = resolveByThemeVariant(
    variantSectionBackgroundColorMap,
    themeVariant,
    ctx,
  );

  const sectionBackgrounds = resolveByThemeVariant(
    variantSectionStripeBackgroundsMap,
    themeVariant,
    ctx,
  );

  const textColor =
    theme === 'dark' ? muiTheme.palette.primary.contrastText : TextColor(theme);

  const linkColor = resolveByThemeVariant(
    variantContentLinkColorMap,
    themeVariant,
    ctx,
  );

  return (
    <Box
      bgcolor={backgroundColor}
      component='section'
      {...(sectionID && { id: sectionID })}
      sx={{ width: '100%', padding: 0, margin: 0 }}
    >
      <Stack sx={sections.length > 1 ? styles.twoColumns : styles.main}>
        {sections.map((section, index) => {
          return (
            <Stack
              key={index}
              gap={2}
              sx={{
                ...styles.main,
                backgroundColor: sectionBackgrounds[index % 2],
                width: '100%',
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Stack
                textAlign='center'
                alignItems='center'
                margin={{ md: '64px 24px', xs: '32px 24px' }}
              >
                {section.iconURL && (
                  <Image
                    src={section.iconURL}
                    alt=''
                    width={60}
                    height={60}
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                )}

                <Typography
                  variant='h4'
                  component='h2'
                  sx={{
                    color: textColor,
                    mt: 2,
                    textAlign: 'center',
                  }}
                >
                  {section.title}
                </Typography>

                <Typography
                  component='div'
                  variant='body2'
                  maxWidth={{ sm: '60%', xs: 'none' }}
                  sx={{
                    textAlign: 'center',
                    '& a': {
                      color: linkColor,
                      textDecoration: 'underline',
                      fontWeight: 'bold',
                      '&:hover': {
                        color: linkColor,
                        textDecoration: 'underline',
                      },
                    },
                    '& p': {
                      color: textColor,
                    },
                  }}
                >
                  {section.body}
                </Typography>

                {section.ctaButtons && section.ctaButtons.length > 0 && (
                  <Stack
                    direction={isSmallScreen ? 'column' : 'row'}
                    spacing={2}
                    sx={{ mt: 2 }}
                  >
                    {CtaButtons({
                      ctaButtons: section.ctaButtons.map(
                        (button: CtaButtonProps) => ({
                          ...button,
                          sx: {
                            width: 'auto',
                          },
                        }),
                      ),
                      theme,
                      themeVariant,
                    })}
                  </Stack>
                )}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default BannerLink;
