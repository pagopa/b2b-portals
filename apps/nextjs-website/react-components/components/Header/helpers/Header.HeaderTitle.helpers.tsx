import React from 'react';
import { Link, Stack, Typography, useTheme, SxProps } from '@mui/material';
import { HeaderTitleProps } from '@react-components/types/Header/Header.types';

export const HeaderTitle = ({
  product: { name: productName, href: productHref },
  logo,
  mobileLogo,
  isMobile,
}: HeaderTitleProps & { isMobile: boolean }) => {
  const { spacing } = useTheme();

  const linkStyle: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    color: 'inherit',
    alignItems: 'center',
  };

  return (
    <Stack
      direction='row'
      alignItems='center'
      gap={1}
      paddingX={0}
      paddingY={0}
    >
      {!isMobile && logo && (
        <Link sx={linkStyle} href={logo.href}>
          <img src={logo.src} alt={logo.alt} style={{ height: 56 }} />
        </Link>
      )}
      {isMobile && mobileLogo && (
        <Link sx={linkStyle} href={mobileLogo.href}>
          <img
            src={mobileLogo.src}
            alt={mobileLogo.alt}
            style={{ height: 40 }}
          />
        </Link>
      )}
      {!logo && !mobileLogo && (
        <Typography
          color='inherit'
          fontSize={{ xs: spacing(3), sm: spacing(3.5) }}
          noWrap
          variant='h5'
        >
          {productHref ? (
            <Link href={productHref} underline='none' color='inherit'>
              <b>{productName}</b>
            </Link>
          ) : (
            <b>{productName}</b>
          )}
        </Typography>
      )}
    </Stack>
  );
};
