import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { CtaButtons } from '../common/Common';
import {
  SendBackgroundColor,
  IoBackgroundColor,
  TextColor,
} from '../common/Common.helpers';
import { BannerLinkProps } from '../../types/BannerLink/BannerLink.types';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

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
  const backgroundColor =
    themeVariant === 'SEND'
      ? SendBackgroundColor(theme)
      : IoBackgroundColor(theme);

  const lightBackgrounds = [
    muiTheme.palette.grey[100],
    muiTheme.palette.grey[50],
  ];
  const darkBackgroundsIo = [
    muiTheme.palette.custom.bannerLinkDarkBlueIO,
    muiTheme.palette.custom.bannerLinkLightBlueIO,
  ];
  const darkBackgroundsSend = [
    muiTheme.palette.custom.bannerLinkDarkBlueSend,
    muiTheme.palette.custom.bannerLinkLightBlueSend,
  ];

  const textColor =
    theme === 'dark' ? muiTheme.palette.primary.contrastText : TextColor(theme);

  const { palette } = useTheme();

  const linkColor =
    theme === 'dark'
      ? palette.custom.white
      : themeVariant === 'SEND'
        ? palette.primary.main
        : palette.custom.primaryColorDark;

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
                    : themeVariant === 'SEND'
                      ? darkBackgroundsSend[index % 2]
                      : darkBackgroundsIo[index % 2],
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
                        })
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
