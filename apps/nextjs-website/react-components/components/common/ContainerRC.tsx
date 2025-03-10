import React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';
import Grid, { type GridProps } from '@mui/material/Grid';
import { Container } from '@mui/system';
import { type Generic } from '../../types/common/Common.types';
import { isJSX } from '../../types/common/Common.types';

interface ContainerProps {
  alignItems?: GridProps['alignItems'];
  background?: string | Generic;
  children: React.ReactNode;
  direction?: GridProps['direction'];
  py?: BoxProps['py'];
  px?: BoxProps['px'];
  spacing?: GridProps['spacing'];
  sx?: GridProps['sx'];
  size?: 'lg' | 'xl';
  sectionID?: string;
}

const ContainerRC = (props: ContainerProps) => {
  const {
    alignItems,
    background,
    children,
    direction = 'row',
    py = {},
    px,
    spacing = 0,
    sx = {},
    size = 'lg',
    sectionID,
  } = props;
  const backgroundIsJSX = isJSX(background);

  return (
    <Box
      component='section'
      id={sectionID}
      sx={{ px: { xs: 4 }, position: 'relative', overflow: 'hidden' }}
      py={py}
      px={px}
      bgcolor={!backgroundIsJSX ? background : undefined}
    >
      {backgroundIsJSX && background}
      <Container maxWidth={size} disableGutters>
        <Grid
          container
          direction={direction}
          spacing={spacing}
          alignItems={alignItems}
          sx={sx}
        >
          {children}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContainerRC;
