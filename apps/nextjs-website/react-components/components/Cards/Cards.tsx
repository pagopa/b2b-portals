import { Box, Stack, Typography } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import Item from './CardsItem';
import { CardsProps } from '../../types/Cards/Cards.types';
import { CtaButtonProps } from '../../types/common/Common.types';
import { CtaButtons } from '../common/Common';
import { Title, Subtitle, Body } from '../common/Common';
import { CardsItemContainer } from './Cards.helpers';
import { BackgroundColor, TextColor } from '../common/Common.helpers';

const Cards = ({
  items,
  theme,
  text,
  ctaButtons,
  textPosition,
  sectionID,
}: CardsProps) => {
  const backgroundColor = BackgroundColor(theme);
  const textColor = TextColor(theme);

  const flexDirection = textPosition === 'right' ? 'row-reverse' : 'row';
  const isCenter = textPosition === 'center';

  return (
    <ContainerRC
      background={backgroundColor}
      py={8}
      sx={{
        display: 'flex',
        flexDirection: isCenter ? 'column' : { md: flexDirection },
        width: '100%',
        gap: { md: isCenter ? '40px' : '60px' },
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
          <Title
            variant='h4'
            textColor={'inherit'}
            title={text.title}
            textAlign={isCenter ? 'center' : 'left'}
            marginBottom={5}
            
          />
        )}
        {text.subtitle && (
          <Subtitle
            variant='h6'
            textColor={'inherit'}
            subtitle={text.subtitle}
            textAlign={isCenter ? 'center' : 'left'}
            marginBottom={5}
          />
        )}
        {text.body && (
          <Body
            variant='body1'
            textColor={'inherit'}
            body={text.body}
            marginBottom={5}
            textAlign={isCenter ? 'center' : 'left'}
          />
        )}
        {ctaButtons?.length ? (
          <Stack
            direction={{ xs: 'column', md: isCenter ? 'column' : 'row' }}
            spacing={2}
            mb={{ xs: 8, lg: 0 }}
            alignItems={isCenter ? 'center' : 'flex-start'}
          >
            {ctaButtons?.length &&
              CtaButtons({
                ctaButtons: ctaButtons.map((button: CtaButtonProps) => ({
                  ...button,
                  sx: { width: 'auto' },
                })),
                theme,
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
