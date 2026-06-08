import React from 'react';
import { Link, Stack, Typography } from '@mui/material';
import { HeaderTitleProps } from '@react-components/types/Header/Header.types';

export const HeaderTitle = ({
  product: { name: productName, href: productHref },
  logo,
  mobileLogo,
  isMobile,
}: HeaderTitleProps & { isMobile: boolean }) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      className='header-title'
      sx={{
        padding: { xs: '16px 24px 16px 24px', md: '16px 32px 0 32px' },
        overflow: 'hidden',
      }}
    >
      <Link
        href={productHref}
        underline='none'
        color='inherit'
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        {!isMobile && logo && (
          <img src={logo.src} alt={logo.alt} style={{ height: 56 }} />
        )}
        {isMobile && mobileLogo && (
          <img
            src={mobileLogo.src}
            alt={mobileLogo.alt}
            style={{ height: 40 }}
          />
        )}
        <Typography
          color='inherit'
          noWrap
          sx={{ ml: 1, fontWeight: 700, fontSize: isMobile ? 28 : 40 }}
        >
          <b>{productName}</b>
        </Typography>
      </Link>
    </Stack>
  );
};
