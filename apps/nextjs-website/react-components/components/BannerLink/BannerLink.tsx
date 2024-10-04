import { Box, Stack, Typography } from '@mui/material';
import { CtaButtons } from '../common/Common';
import { BackgroundColor, TextColor } from '../common/Common.helpers';
import { BannerLinkProps } from '../../types/BannerLink/BannerLink.types';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

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

const BannerLink = ({ theme, sections, sectionID }: BannerLinkProps) => {
  const { palette } = useTheme();
  const backgroundColor = BackgroundColor(theme);
  const lightBackgrounds = [palette.grey[100], palette.grey[50]];
  const darkBackgrounds = [
    palette.custom.bannerLinkDarkBlue,
    palette.custom.bannerLinkLightBlue,
  ];
  const textColor =
    theme === 'dark' ? palette.primary.contrastText : TextColor(theme);

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
                backgroundColor:
                  theme === 'light'
                    ? lightBackgrounds[index % 2]
                    : darkBackgrounds[index % 2],
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
                    alt={section.title}
                    width={60}
                    height={60}
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                )}

                <Typography
                  variant='h4'
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
                  sx={{
                    textAlign: 'center',
                    '& a': {
                      color: textColor,
                      textDecoration: 'underline',
                      '&:hover': {
                        color: textColor,
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
                {section.ctaButtons &&
                  section.ctaButtons.length > 0 &&
                  CtaButtons({
                    ctaButtons: section.ctaButtons.map((button) => ({
                      ...button,
                      sx: { width: 'auto', marginTop: '16px' },
                      variant: 'outlined',
                    })),
                    theme,
                  })}
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default BannerLink;
