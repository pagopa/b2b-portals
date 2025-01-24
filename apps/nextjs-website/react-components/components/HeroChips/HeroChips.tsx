import React from 'react';
import { Box, Typography } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import {
  SendBackgroundColor,
  IoBackgroundColor,
  TextColor,
  LinkColor,
} from '../common/Common.helpers';
import { HeroChipsProps } from '@react-components/types/HeroChips/HeroChips.types';
import { ChipsBlock } from './HeroChips.helpers';

const HeroChips = (props: HeroChipsProps) => {
  const {
    background,
    theme = 'dark',
    themeVariant,
    title,
    subtitle,
    chips,
    sectionID,
  } = props;

  const backgroundColor =
    themeVariant === 'SEND'
      ? SendBackgroundColor(theme)
      : IoBackgroundColor(theme);

  const textColor = TextColor(theme);
  const linkColor = LinkColor(theme);

  const BackgroundImage = (
    <Box
      role='presentation'
      sx={{
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        height: '100%',
        width: '100%',
      }}
    >
      {background && (
        <img
          src={background.src}
          srcSet={background.srcSet}
          width={0}
          height={0}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
    </Box>
  );

  return (
    <ContainerRC
      size='xl'
      background={!background ? backgroundColor : BackgroundImage}
      direction='row'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 4,
      }}
      {...(sectionID && { sectionID })}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h1'
          color={textColor}
          mb={2}
          sx={{ fontSize: { xs: '2.25rem!important', md: '3.5rem!important' } }}
          textAlign='center'
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            component='div'
            variant='body1'
            color={textColor}
            mb={2}
            sx={{
              fontSize: '1rem',
              '& p': {
                color: textColor,
              },
              '& a': {
                color: linkColor,
              },
            }}
            textAlign='center'
          >
            {subtitle}
          </Typography>
        )}
        {chips.length > 0 && <ChipsBlock chips={chips} theme={theme} />}
      </Box>
    </ContainerRC>
  );
};

export default HeroChips;
