import { Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import ContainerRC from '../common/ContainerRC';
import { resolveThemeVariant } from '../../theme';
import {
  LogoWallItemProps,
  LogoWallProps,
} from '../../types/LogoWall/LogoWall.types';

const LogoWall = ({
  theme,
  sectionID,
  firstGroup,
  secondGroup,
  themeVariant,
}: LogoWallProps) => {
  const { palette } = useTheme();

  const ctx = { palette, theme };

  const backgroundColor = resolveThemeVariant<string>(
    'sectionBackgroundColor',
    themeVariant,
    ctx,
  );

  if (!firstGroup.length) {
    return null;
  }

  const renderLogo = (item: LogoWallItemProps, key: string) => (
    <Box
      key={key}
      sx={{
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

  const renderGroup = (items: LogoWallItemProps[], keyPrefix: string) => (
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
      {items.map((item, index) => renderLogo(item, `${keyPrefix}-${index}`))}
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
      {renderGroup(firstGroup, 'first')}

      {!!secondGroup.length && (
        <Box
          sx={{
            width: '100%',
            mt: {
              xs: 4,
              md: 6,
            },
          }}
        >
          {renderGroup(secondGroup, 'second')}
        </Box>
      )}
    </ContainerRC>
  );
};

export default LogoWall;
