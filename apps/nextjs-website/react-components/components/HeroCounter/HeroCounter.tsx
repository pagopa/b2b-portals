import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContainerRC from '../common/ContainerRC';
import { HeroCounterProps } from '@react-components/types/HeroCounter/HeroCounter.types';
import { TextColor } from '../common/Common.helpers';
import { useTheme } from '@mui/material/styles';
import { resolveThemeVariant } from '../../theme';
import { isValidExternalLink, LinkIcon } from '../common/Common';

const HeroCounter = ({
  theme,
  themeVariant,
  title,
  subtitle,
  link,
  counter,
  background,
  sectionID,
}: HeroCounterProps) => {
  const { palette } = useTheme();
  const ctx = { palette, theme };

  const backgroundColor = resolveThemeVariant<string>(
    'sectionBackgroundColor',
    themeVariant,
    ctx,
  );

  const textColor = TextColor(theme, themeVariant);

  const linkColor = resolveThemeVariant<string>(
    'contentLinkColor',
    themeVariant,
    ctx,
  );
  const linkHoverColor = resolveThemeVariant<string>(
    'richTextLinkHoverColor',
    themeVariant,
    ctx,
  );

  const counterColor = resolveThemeVariant<string>(
    'heroCounterNumberColor',
    themeVariant,
    ctx,
  );

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
          sizes={background.sizes}
          alt=''
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
      sxInner={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'flex-start',
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
          alignItems: 'flex-start',
        }}
      >
        <Typography
          variant='h1'
          color={textColor}
          mb={2}
          sx={{ fontSize: { xs: '2.25rem!important', md: '3.5rem!important' } }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            component='div'
            variant='body2'
            sx={{
              textAlign: 'left',
              '& a': {
                color: linkColor,
                textDecoration: 'underline',
                '&:hover': {
                  color: linkHoverColor,
                },
              },
              '& p': {
                color: textColor,
                fontSize: '16px',
              },
            }}
          >
            {subtitle}
          </Typography>
        )}

        {link && (
          <Typography
            component='a'
            href={link.href}
            {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: linkColor,
              mt: 2,
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
              position: 'relative',
            }}
            {...(isValidExternalLink(link.href) && {
              target: '_blank',
            })}
          >
            {link.label}
            <LinkIcon
              showExternalLinkIcon={isValidExternalLink(link.href)}
              internalLinkIcon={
                <ArrowForwardIcon
                  sx={{
                    display: 'inline-block',
                    ml: 1,
                    fontSize: '1rem',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateX(2px)',
                    },
                  }}
                />
              }
              {...(isValidExternalLink(link.href) && {
                externaLinkIconTarget: '_blank',
              })}
            />
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { lg: 'flex-end', xs: 'flex-start' },
          justifyContent: 'center',
          textAlign: { lg: 'right', xs: 'left' },
        }}
      >
        <Typography
          component='div'
          color={counterColor}
          sx={{
            fontSize: { xs: '5.625rem', md: '8rem' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            lineHeight: 1.1,
          }}
        >
          {counter.number}
          <Typography
            variant='body1'
            color={textColor}
            sx={{
              fontSize: '1.125rem',
              fontWeight: 600,
              padding: '0px 10px',
            }}
          >
            {counter.text}
          </Typography>
        </Typography>
      </Box>
    </ContainerRC>
  );
};

export default HeroCounter;
