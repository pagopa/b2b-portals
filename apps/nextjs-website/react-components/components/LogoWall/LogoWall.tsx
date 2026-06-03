import { Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import ContainerRC from '../common/ContainerRC';
import { resolveThemeVariant } from '../../theme';
import { LogoWallProps } from '../../types/LogoWall/LogoWall.types';

const imageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
} as const;

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

  const backgroundColor = resolveThemeVariant<string>(
    'sectionBackgroundColor',
    themeVariant,
    ctx,
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
        {firstGroup.map((item, index) => (
          <Box
            key={`first-${index}`}
            sx={{
              gridRow: {
                md: 1,
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
            }}
          >
            <Image
              src={item.logoURL}
              alt={item.title}
              width={0}
              height={0}
              style={imageStyle}
            />
          </Box>
        ))}

        {secondGroup.map((item, index) => (
          <Box
            key={`second-${index}`}
            sx={{
              gridRow: {
                md: 2,
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
            }}
          >
            <Image
              src={item.logoURL}
              alt={item.title}
              width={0}
              height={0}
              style={imageStyle}
            />
          </Box>
        ))}
      </Box>
    </ContainerRC>
  );
};

export default LogoWall;
