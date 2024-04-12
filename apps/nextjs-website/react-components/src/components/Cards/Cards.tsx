import { Box, Grid, Stack, Typography } from '@mui/material';
import EContainer from '../EContainer';
import Item from './item';
import { type ReactNode } from 'react';
import { CardsProps, CtaButtonProps } from '../../utils/Components.types';
import {
  RenderButtons,
  RenderGenericBody,
  RenderGenericSubtitle,
  RenderGenericTitle,
} from '../../utils/Components.helpers';

const ItemsContainer = ({
  masonry,
  children,
}: {
  masonry: boolean;
  children: ReactNode[];
}) => {
  return masonry ? (
    <Stack
      sx={{
        display: 'flex',
        flexFlow: 'column wrap',
        gap: '20px',
        alignItems: 'center',
        width: { xs: '100%', sm: '50%' },
      }}
    >
      {children}
    </Stack>
  ) : (
    <Grid container justifyContent='center' gap={2.5}>
      {children}
    </Grid>
  );
};

const Cards = ({ items, theme, text, ctaButtons }: CardsProps) => {
  const background = theme === 'dark' ? 'primary.dark' : 'background.paper';
  const textColor = theme === 'dark' ? 'primary.contrastText' : 'text.primary';

  const isMasonry = !!text?.body && !!text?.subtitle;

  return (
    <EContainer
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
        <RenderGenericTitle
          variant='h2'
          color={'inherit'}
          title={text.title}
          textAlign='left'
          marginBottom={5}
        />

        {isMasonry && (
          <RenderGenericSubtitle
            variant='h6'
            textColor={'inherit'}
            subtitle={text.subtitle}
            textAlign='left'
            marginBottom={5}
          />
        )}
        {isMasonry ? (
          <RenderGenericBody
            variant='body1'
            textColor={'inherit'}
            body={text.body}
            marginBottom={5}
          />
        ) : null}
        {ctaButtons?.length ? (
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            mb={{ xs: 8, lg: 0 }}
          >
            {ctaButtons?.length &&
              RenderButtons({
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
            <ItemsContainer masonry={isMasonry}>
              {items.slice(0, Math.ceil(items.length / 2)).map((item, i) => (
                <Item
                  key={`${item.title}-${i}`}
                  {...item}
                  textAlign={isMasonry ? 'left' : 'center'}
                  masonry={isMasonry}
                />
              ))}
            </ItemsContainer>
            <ItemsContainer masonry={isMasonry}>
              {items.slice(Math.ceil(items.length / 2)).map((item, i) => (
                <Item
                  key={`${item.title}-${i}`}
                  {...item}
                  textAlign={isMasonry ? 'left' : 'center'}
                  masonry={isMasonry}
                />
              ))}
            </ItemsContainer>
          </>
        ) : (
          <ItemsContainer masonry={isMasonry}>
            {items.map((item, i) => (
              <Item
                key={`${item.title}-${i}`}
                {...item}
                textAlign={isMasonry ? 'left' : 'center'}
                masonry={isMasonry}
              />
            ))}
          </ItemsContainer>
        )}
      </Box>
    </EContainer>
  );
};

export default Cards;
