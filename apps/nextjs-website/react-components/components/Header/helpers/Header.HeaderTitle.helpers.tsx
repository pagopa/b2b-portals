import React from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import { HeaderTitleProps } from '@react-components/types/Header/Header.types';
import { resolveThemeVariant } from '@react-components/theme';

export const HeaderTitle = ({
  product: { name: productName, href: productHref },
  logo,
  logoMobile,
  theme,
  themeVariant,
  isMobile,
}: HeaderTitleProps & { isMobile: boolean }) => {
  const { palette } = useTheme();
  const textColor = resolveThemeVariant<string>(
    'bannerLinkTextColor',
    themeVariant,
    { palette, theme },
  );
  const activeLogo = isMobile ? logoMobile : logo;
  return (
    <Stack
      direction='row'
      alignItems='center'
      gap={1}
      paddingX={0}
      paddingY={0}
    >
      <Stack
        component='a'
        direction='row'
        alignItems='center'
        justifyContent='flex-start'
        gap={1}
        href={productHref}
        sx={{ textDecoration: 'none' }}
      >
        {activeLogo ? (
          <img
            src={activeLogo.src}
            alt={activeLogo.alt}
            height={isMobile ? 40 : 56}
          />
        ) : (
          <Typography variant='h4' component={'span'} color={textColor}>
            {productName}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};
