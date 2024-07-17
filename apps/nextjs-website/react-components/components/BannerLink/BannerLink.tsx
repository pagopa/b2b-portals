import { Box, Stack } from '@mui/material';
import { CtaButtons } from '../common/Common';
import { BackgroundColor } from '../common/Common.helpers';
import { Content as BannerLinkContent } from './Content';
import { BannerLinkProps } from '../../types/BannerLink/BannerLink.types';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { EIcon } from '../common/EIcon';

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

const BannerLink = ({ theme, sections }: BannerLinkProps) => {
  const { palette } = useTheme();
  const backgroundColor = BackgroundColor(theme);

  const iconColor =
    theme === 'dark' ? palette.primary.contrastText : palette.primary.dark;
  const lightBackgrounds = [palette.grey[100], palette.grey[50]];
  const darkBackgrounds = [
    palette.custom.bannerLinkDarkBlue,
    palette.custom.bannerLinkLightBlue,
  ];

  return (
    <Box
      bgcolor={backgroundColor}
      component='section'
      sx={{ width: '100%', padding: 0, margin: 0 }}
    >
      <Stack sx={sections.length > 1 ? styles.twoColumns : styles.main}>
        {sections.map((section, index) => (
          <Stack
            key={index}
            gap={2}
            sx={{
              ...styles.main,
              backgroundColor:
                theme === 'light'
                  ? lightBackgrounds[index % 2]
                  : darkBackgrounds[index % 2],
              padding: { md: '64px 24px', xs: '32px 24px' },
              width: '100%',
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <EIcon
              {...section.icon}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                color: iconColor,
                mr: 1,
              }}
            />
            {section.decoration && <img {...section.decoration} />}
            <BannerLinkContent {...section} theme={theme} />
            {section.ctaButtons &&
              section.ctaButtons.length > 0 &&
              CtaButtons({
                ctaButtons: section.ctaButtons.map((button) => ({
                  ...button,
                  sx: { width: 'auto' },
                  variant: 'outlined',
                })),
                theme,
              })}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default BannerLink;
