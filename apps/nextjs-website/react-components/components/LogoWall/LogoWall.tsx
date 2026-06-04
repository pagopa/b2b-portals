import { Box, Link } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import ContainerRC from '../common/ContainerRC';
import { isValidExternalLink } from '../common/Common';
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
  if (!firstGroup.length) {
    return null;
  }

  const { palette } = useTheme();

  const ctx = { palette, theme };

  const backgroundColor = resolveThemeVariant<string>(
    'sectionBackgroundColor',
    themeVariant,
    ctx,
  );

  const renderLogo = (item: LogoWallItemProps, key: string) => {
    const image = (
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
    );

    return (
      <Box
        key={key}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: {
            xs: 'center',
            sm: 'flex-start',
          },
          width: '100%',
          minWidth: 0,
        }}
      >
        {item.href ? (
          <Link
            href={item.href}
            aria-label={item.title}
            underline='none'
            {...(isValidExternalLink(item.href) && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            sx={{
              display: 'inline-flex',
              maxWidth: '100%',
            }}
          >
            {image}
          </Link>
        ) : (
          image
        )}
      </Box>
    );
  };

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
        gap: {
          xs: 4,
          md: 6,
        },
      }}
    >
      {renderGroup(firstGroup, 'first')}
      {!!secondGroup.length && renderGroup(secondGroup, 'second')}
    </ContainerRC>
  );
};

export default LogoWall;
