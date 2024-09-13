import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { StatsProps } from '@react-components/types/Stats/Stats.types';
import { StatsItem } from './Stats.helpers';

const Stats = ({ eyelet, title, body, items, sectionID }: StatsProps) => {
  const { palette } = useTheme();

  return (
    <Box
      component='div'
      {...(sectionID && { id: sectionID })}
      py={{ xs: 3, sm: 3, md: 6 }}
      overflow='hidden'
      sx={{
        px: { xs: 4, md: 16 },
        backgroundColor: 'background.paper',
      }}
    >
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        gap={2}
        alignItems='center'
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
          {items.map((item, index) => (
            <StatsItem key={index} {...item} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Stats;
