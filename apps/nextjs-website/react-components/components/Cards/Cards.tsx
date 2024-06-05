import { Box, Stack, Typography, useTheme } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import Item from './CardsItem';
import { CardsProps } from '../../types/Cards/Cards.types';
import { CtaButtonProps } from '../../types/common/Common.types';
import { CtaButtons } from '../common/Common';
import { Title, Subtitle, Body } from '../common/Common';
import { CardsItemContainer } from './Cards.helpers';

const Cards = ({ items, theme, text, ctaButtons }: CardsProps) => {
  const { palette } = useTheme();
  const background = theme === 'dark' ? palette.custom.backgroundColorDark : 'background.paper';
  const textColor = theme === 'dark' ? 'primary.contrastText' : 'text.primary';

  const isMasonry = !!text?.body;

  return (
    <ContainerRC
      background={background}
      py={8}
      sx={{
        display: 'flex',
        flexDirection: { md: 'row' },
        width: '100%',
        gap: { md: isMasonry ? '60px' : 0 },
        justifyContent: 'center',
      }}
    >
      <Typography
        color={textColor}
        sx={{
          width: { md: isMasonry ? '30%' : '100%', xs: '100%' },
          textAlign: isMasonry ? 'left' : 'center',
        }}
        component={'div'}
      >
        <Title
          variant='h2'
          textColor={'inherit'}
          title={text.title}
          textAlign={isMasonry ? 'left' : 'center'}
          marginBottom={5}
        />

        {text.subtitle && (
          <Subtitle
            variant='h6'
            textColor={'inherit'}
            subtitle={text.subtitle}
            textAlign={isMasonry ? 'left' : 'center'}
            marginBottom={5}
          />
        )}
        {text.body && (
          <Body
            variant='body1'
            textColor={'inherit'}
            body={text.body}
            marginBottom={5}
          />
        )}
        {ctaButtons?.length ? (
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            mb={{ xs: 8, lg: 0 }}
          >
            {ctaButtons?.length &&
              CtaButtons({
                ctaButtons: ctaButtons.map((button: CtaButtonProps) => ({
                  ...button,
                  sx: { width: { md: 'auto', xs: '100%' } },
                })),
                theme,
              })}
          </Stack>
        ) : null}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          width: { xs: '100%', sm: '100%', md: isMasonry ? '60%' : '100%' },
          gap: '20px',
          '@media screen and (max-width: 600px)': {
            display: 'grid',
          },
        }}
      >
        {isMasonry ? (
          <>
            <CardsItemContainer masonry={isMasonry}>
              {items.slice(0, Math.ceil(items.length / 2)).map((item, i) => (
                <Item
                  key={`${item.title}-${i}`}
                  {...item}
                  textAlign={isMasonry ? 'left' : 'center'}
                  masonry={isMasonry}
                />
              ))}
            </CardsItemContainer>
            <CardsItemContainer masonry={isMasonry}>
              {items.slice(Math.ceil(items.length / 2)).map((item, i) => (
                <Item
                  key={`${item.title}-${i}`}
                  {...item}
                  textAlign={isMasonry ? 'left' : 'center'}
                  masonry={isMasonry}
                />
              ))}
            </CardsItemContainer>
          </>
        ) : (
          <CardsItemContainer masonry={isMasonry}>
            {items.map((item, i) => (
              <Item
                key={`${item.title}-${i}`}
                {...item}
                textAlign={isMasonry ? 'left' : 'center'}
                masonry={isMasonry}
              />
            ))}
          </CardsItemContainer>
        )}
      </Box>
    </ContainerRC>
  );
};

export default Cards;