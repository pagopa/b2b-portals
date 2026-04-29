import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { StatsItemProps } from '@react-components/types/Stats/Stats.types';
import { resolveByThemeVariant, variantAccentColorMap } from '../../theme';

export const StatsItem = ({
  title,
  description,
  iconURL,
  themeVariant,
}: StatsItemProps) => {
  const { palette } = useTheme();

  const textColor = resolveByThemeVariant(variantAccentColorMap, themeVariant, {
    palette,
    theme: 'light',
  });

  return (
    <Stack
      spacing={1}
      alignItems='flex-start'
      textAlign='left'
      sx={{
        flex: 1,
      }}
    >
      {iconURL && (
        <Box height={36} width={36} position='relative'>
          <Image src={iconURL} alt={title} fill={true} />
        </Box>
      )}
      <Typography
        fontSize={{ xs: 28, md: 32 }}
        fontWeight='bold'
        color={textColor}
        mb={0}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          fontSize={14}
          fontWeight='bold'
          color={textColor}
          sx={{ marginTop: '0px!important' }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
};
