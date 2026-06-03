import { Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import ContainerRC from '../common/ContainerRC';
import { resolveThemeVariant } from '../../theme';
import { LogoWallProps } from '../../types/LogoWall/LogoWall.types';

const LogoWall = ({
  theme,
  sectionID,
  firstGroup,
  secondGroup,
  themeVariant,
}: LogoWallProps) => {
  const muiTheme = useTheme();
  const { palette } = muiTheme;

  const ctx = { palette, theme };
  const hasFirstGroup = firstGroup.length > 0;

  const backgroundColor = resolveThemeVariant<string>(
    'sectionBackgroundColor',
    themeVariant,
    ctx,
  );

  const renderLogo = (
    item: LogoWallProps['firstGroup'][number],
    key: string,
    index: number,
    row: number,
  ) => (
    <Box
      key={key}
      sx={{
        gridRow: {
          md: row,
        },
        gridColumn: {
          md: index + 1,
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: {
          xs: 'center',
          md: 'flex-start',
        },
        width: '100%',
        minWidth: 0,
      }}
    >
      <Image
        src={item.logoURL}
        alt={item.title}
        width={0}
        height={0}
        style={{
          width: 'auto',
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </Box>
  );

  return (
    <ContainerRC
      background={backgroundColor}
      py={8}
      size='xl'
      {...(sectionID && { sectionID })}
      sxInner={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          columnGap: {
            xs: 4,
            md: 8,
          },
          rowGap: {
            xs: 4,
            md: 6,
          },
          alignItems: 'center',
        }}
      >
        {firstGroup.map((item, index) =>
          renderLogo(item, `first-${index}`, index, 1),
        )}

        {secondGroup.map((item, index) =>
          renderLogo(item, `second-${index}`, index, hasFirstGroup ? 2 : 1),
        )}
      </Box>
    </ContainerRC>
  );
};

export default LogoWall;
