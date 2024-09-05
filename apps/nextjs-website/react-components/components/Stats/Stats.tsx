import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import {
  StatsItemProps,
  StatsProps,
} from '@react-components/types/Stats/Stats.types';

const StatsItem = ({ title, description, iconURL }: StatsItemProps) => {
  const { palette } = useTheme();

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
        color={palette.custom.primaryColorDark}
        mb={0}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          fontSize={14}
          fontWeight='bold'
          color={palette.custom.primaryColorDark}
          sx={{ marginTop: '0px!important' }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
};

const Stats = ({ eyelet, title, body, stats, sectionID }: StatsProps) => {
  const { palette } = useTheme();

  return (
    <Box
      component='section'
      {...(sectionID && { id: sectionID })}
      py={{ xs: 3, sm: 3, md: 6 }}
      overflow='hidden'
      sx={{
        px: { xs: 4, md: 16 },
      }}
    >
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        gap={2}
        mb={4}
        alignItems='start'
      >
        <Box flex={1} textAlign='left' sx={{ mb: 4 }}>
          {eyelet && (
            <Typography
              variant='overline'
              fontSize={14}
              color={palette.text.secondary}
              sx={{ marginBottom: '16px!important' }}
            >
              {eyelet}
            </Typography>
          )}
          <Typography
            variant='h4'
            fontSize={{ xs: 28, md: 32 }}
            color={palette.text.primary}
            sx={{ mb: 2, mt: 2 }}
          >
            {title}
          </Typography>
          {body && (
            <Typography
              variant='body1'
              fontSize={{ xs: 14, md: 16 }}
              color={palette.text.primary}
            >
              {body}
            </Typography>
          )}
        </Box>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent='center'
          flex={1}
        >
          {stats.slice(0, 3).map((stat, index) => (
            <StatsItem key={index} {...stat} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Stats;
