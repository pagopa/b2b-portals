import React from 'react';
import { PressReleaseListProps } from '@react-components/types';
import { Stack, Typography } from '@mui/material';
import { PressReleasePreview } from './PressReleaseList.helpers';
import ContainerRC from '../common/ContainerRC';

const PressReleaseList = ({
  sectionID,
  title,
  pressReleases,
  themeVariant,
  locale,
}: PressReleaseListProps & { locale: string }) => (
  <ContainerRC
    {...(sectionID && { sectionID })}
    direction='column'
    sx={{ marginY: { xs: 8, md: 12 } }}
  >
    <Typography variant='h4' maxWidth='100%'>
      {title}
    </Typography>

    <Stack
      direction='row'
      flexWrap='wrap'
      my={4}
      rowGap={6}
      columnGap={7}
      maxWidth='100%'
    >
      {pressReleases.map((pressRelease, index) => (
        <PressReleasePreview
          key={`press-release-${index}`}
          {...pressRelease}
          themeVariant={themeVariant}
          locale={locale}
        />
      ))}
    </Stack>
  </ContainerRC>
);

export default PressReleaseList;
