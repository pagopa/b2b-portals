import { Box, Link, useMediaQuery } from '@mui/material';
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
  const muiTheme = useTheme();
  const { palette } = muiTheme;
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'));

  const ctx = { palette, theme };

  const backgroundColor = resolveThemeVariant<string>(
    'sectionBackgroundColor',
    themeVariant,
    ctx,
  );

  const renderLogo = (item: LogoWallItemProps, key: string) => {
    const image = (
      <Image
        src={'https://staging.wallet.b2bportals.pagopa.it' + item.logoURL}
        alt={item.title}
        width={0}
        height={0}
        style={{
          width: '100%',
          height: isTablet ? '48px' : '64px',
          objectFit: 'contain',
          objectPosition: isMobile ? 'center center' : 'left center',
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
        <Link
          underline='none'
          {...(item.href && {
            href: item.href,
            'aria-label': item.title,
            ...(isValidExternalLink(item.href) && {
              target: '_blank',
              rel: 'noopener noreferrer',
            }),
          })}
          sx={{
            display: 'inline-flex',
            width: '100%',
            maxWidth: isMobile ? '300px' : '100%',
          }}
        >
          {image}
        </Link>
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

  return !firstGroup.length ? null : (
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
