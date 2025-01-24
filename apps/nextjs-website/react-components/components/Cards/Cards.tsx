import { Box, Stack, Typography, useTheme } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import Item from './CardsItem';
import { CardsProps } from '../../types/Cards/Cards.types';
import { CtaButtonProps } from '../../types/common/Common.types';
import { CtaButtons } from '../common/Common';
import { Title, Subtitle } from '../common/Common';
import { CardsItemContainer } from './Cards.helpers';
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
}: CardsProps) => {
  const backgroundColor =
    themeVariant === 'SEND'
      ? SendBackgroundColor(theme)
      : IoBackgroundColor(theme);

  const textColor = TextColor(theme);
  const flexDirection = textPosition === 'right' ? 'row-reverse' : 'row';
  const isCenter = textPosition === 'center';
  const { palette } = useTheme();

  const linkColor =
    theme === 'dark'
      ? palette.custom.white
      : themeVariant === 'SEND'
      ? palette.primary.main
      : palette.custom.primaryColorDark;

  return (
    <ContainerRC
      background={backgroundColor}
      py={8}
      sx={{
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
      <Box
        sx={{
          display: 'flex',
          width: isCenter ? '100%' : { xs: '100%', sm: '100%', md: '60%' },
          gap: '20px',
          flexWrap: isCenter ? 'wrap' : 'nowrap',
          justifyContent: isCenter ? 'center' : 'flex-start',
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <>
          {isCenter ? (
            items.map((item, i) => (
              <Box
                key={`${item.title}-${i}`}
                sx={{
                  flex: '1 1 auto',
                  maxWidth: 'calc(33.333% - 20px)',
                  minWidth: '300px',
                  '@media (max-width: 600px)': {
                    maxWidth: '100%',
                    minWidth: 'auto',
                  },
                }}
              >
                <Item
                  {...item}
                  textAlign='left'
                  masonry={true}
                  themeVariant={themeVariant}
                />
              </Box>
            ))
          ) : (
            <>
              <CardsItemContainer masonry={true}>
                {items.slice(0, Math.ceil(items.length / 2)).map((item, i) => (
                  <Item
                    key={`${item.title}-${i}`}
                    {...item}
                    textAlign='left'
                    masonry={true}
                    themeVariant={themeVariant}
                  />
                ))}
              </CardsItemContainer>
              <CardsItemContainer masonry={true}>
                {items.slice(Math.ceil(items.length / 2)).map((item, i) => (
                  <Item
                    key={`${item.title}-${i}`}
                    {...item}
                    textAlign='left'
                    masonry={true}
                    themeVariant={themeVariant}
                  />
                ))}
              </CardsItemContainer>
            </>
          )}
        </>
      </Box>
    </ContainerRC>
  );
};

export default Cards;
