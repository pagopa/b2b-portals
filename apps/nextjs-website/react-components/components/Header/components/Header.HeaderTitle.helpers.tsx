import React from 'react';
import { Link, Stack, Typography, useTheme, Chip } from '@mui/material';
import { HeaderTitleProps } from '@react-components/types/Header/Header.types';
import { TextColor } from '@react-components/components/common/Common.helpers';

export const HeaderTitle = ({
  beta,
  product: { name: productName, href: productHref },
  theme,
  logo,
}: HeaderTitleProps) => {
  const { spacing } = useTheme();
  const textColor = TextColor(theme);
  const label = 'beta';

  return (
    <Stack
      direction='row'
      alignItems='center'
      gap={1}
      paddingX={0}
      paddingY={0}
    >
      {logo && (
        <Link
          alignItems='center'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 0,
          }}
          href={logo.href}
        >
          <img src={logo.src} alt={logo.alt} style={{ height: 70 }} />
        </Link>
      )}
      {!logo && (
        <Typography
          color={textColor}
          fontSize={{ xs: spacing(3), sm: spacing(3.5) }}
          noWrap
          variant='h5'
        >
          {productHref ? (
            <Link href={productHref} underline='none' color='text.primary'>
              <b>{productName}</b>
            </Link>
          ) : (
            <b>{productName}</b>
          )}
        </Typography>
      )}
      {beta && (
        <Chip
          label={label}
          color='primary'
          sx={{ height: 20, width: 45 }}
          size='small'
        />
      )}
    </Stack>
  );
};
