import { Box, Stack, Typography, useTheme } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import Item from './CardsItem';
import { CardsProps } from '../../types/Cards/Cards.types';
import { CtaButtonProps } from '../../types/common/Common.types';
import { CtaButtons } from '../common/Common';
import { Title, Subtitle } from '../common/Common';
import {
  SendBackgroundColor,
  IoBackgroundColor,
  TextColor,
} from '../common/Common.helpers';

const Cards = ({
  items,
  theme,
  themeVariant,
  text,
  ctaButtons,
  textPosition,
  sectionID,
  bottomCTA,
  titleTag,
}: CardsProps) => {
  const backgroundColor =
    themeVariant === 'SEND'
      ? SendBackgroundColor(theme)
      : IoBackgroundColor(theme);

  const textColor = TextColor(theme);
  const flexDirection = textPosition === 'right' ? 'row-reverse' : 'row';
  const isCenter = textPosition === 'center';
  const isNone = textPosition === 'none';
  const muiTheme = useTheme();
  const { palette } = muiTheme;
  const isStackLayout = isCenter || isNone;

  const linkColor =
    theme === 'dark'
      ? palette.custom.white
      : themeVariant === 'SEND'
        ? palette.primary.main
        : palette.custom.primaryColorDark;

  // isStackLayout (center|none text) uses full-width cards; otherwise a 60% two-column grid.
  const cardListStyles = {
    width: isStackLayout ? '100%' : { xs: '100%', md: '60%' },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: isStackLayout ? 'center' : 'flex-start',
    alignItems: 'stretch',
    gap: '20px',
    padding: 0,
    margin: 0,
    listStyle: 'none',
    [muiTheme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    '& > li': isStackLayout
      ? {
        flex: '1 1 auto',
        maxWidth: 'calc(33.333% - 20px)',
        minWidth: '300px',
        [muiTheme.breakpoints.down('sm')]: {
          maxWidth: '100%',
          minWidth: 'auto',
        },
      }
      : {
        flex: '1 1 calc(50% - 20px)',
        maxWidth: 'calc(50% - 20px)',
        [muiTheme.breakpoints.down('sm')]: {
          maxWidth: '100%',
          flex: '1 1 100%',
        },
      },
  } as const;

  return (
    <ContainerRC
      background={backgroundColor}
      tabIndex={0}
      py={8}
      sxInner={{
        display: 'flex',
        flexDirection: isCenter ? 'column' : { md: flexDirection },
        width: '100%',
        gap: { md: isCenter ? '0px' : '60px' },
        justifyContent: 'center',
        alignItems: isCenter ? 'center' : 'flex-start',
        textAlign: isCenter ? 'center' : 'left',
      }}
      {...(sectionID && { sectionID })}
    >
      {!isNone && (
        <Typography
          color={textColor}
          sx={{
            width: { md: isCenter ? '100%' : '30%', xs: '100%' },
          }}
          component={'div'}
        >
          {text.title && (
            <Typography mb={3} component='div' color={'inherit'}>
              <Title
                component={titleTag ?? 'h2'}
                variant='h4'
                textColor={'inherit'}
                title={text.title}
                textAlign={isCenter ? 'center' : 'left'}
                marginBottom={0}
              />
            </Typography>
          )}
          {text.subtitle && (
            <Typography mb={3} component='div' color={'inherit'}>
              <Subtitle
                variant='h6'
                textColor={'inherit'}
                subtitle={text.subtitle}
                textAlign={isCenter ? 'center' : 'left'}
                marginBottom={0}
              />
            </Typography>
          )}
          {text.body && (
            <Typography
              mb={4}
              component='div'
              variant='body1'
              color={'inherit'}
              textAlign={isCenter ? 'center' : 'left'}
              sx={{
                '& a': {
                  color: linkColor,
                  textDecoration: 'underline',
                  '&:hover': {
                    color: linkColor,
                  },
                },
                '& p': {
                  marginBottom: '0px',
                  color: textColor,
                  fontSize: '18px',
                },
              }}
            >
              {text.body}
            </Typography>
          )}
          {ctaButtons?.length ? (
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              mb={4}
              justifyContent={isCenter ? 'center' : 'flex-start'}
              alignItems={isCenter ? 'center' : 'flex-start'}
              sx={{
                width: '100%',
                textAlign: isCenter ? 'center' : 'left',
              }}
            >
              {CtaButtons({
                ctaButtons: ctaButtons.map((button: CtaButtonProps) => ({
                  ...button,
                  sx: {
                    width: 'auto',
                  },
                })),
                theme,
                themeVariant,
              })}
            </Stack>
          ) : null}
        </Typography>
      )}
      <Box component='ul' sx={cardListStyles}>
        {items.map((item, i) => (
          <Item
            key={`${item.title}-${i}`}
            {...item}
            textAlign='left'
            masonry={true}
            themeVariant={themeVariant}
          />
        ))}
      </Box>
      {bottomCTA && (
        <Box
          sx={{
            textAlign: 'center',
            width: '100%',
            mt: isCenter ? 6 : { xs: 6, md: 0 },
          }}
        >
          {CtaButtons({ ctaButtons: [bottomCTA], theme, themeVariant })}
        </Box>
      )}
    </ContainerRC>
  );
};

export default Cards;
