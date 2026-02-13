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
}: PressReleaseListProps) => (
  <ContainerRC
    {...(sectionID && { sectionID })}
    direction='column'
    sxInner={{ marginY: { xs: 8, md: 12 } }}
  >
    <Typography variant='h4' component='h2' maxWidth='100%'>
      {title}
    </Typography>

    <Stack
      direction='row'
      flexWrap='wrap'
      my={4}
      rowGap={6}
      columnGap={7}
      maxWidth='100%'
      component={'ul'}
      style={{ paddingInlineStart: 0 }}
    >
      {pressReleases.map((pressRelease, index) => (
        <PressReleasePreview
          key={`press-release-${index}`}
          {...pressRelease}
          themeVariant={themeVariant}
        />
      ))}
    </Stack>
  </ContainerRC>
);

export default PressReleaseList;
