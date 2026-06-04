import Image from 'next/image';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { CtaButtons, Subtitle, Title } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { resolveThemeVariant } from '../../theme';
import { SimpleCardsProps } from '../../types/SimpleCards/SimpleCards.types';
import SimpleCardsItem from './SimpleCardsItem';

const SimpleCards = ({
  items,
  theme,
  themeVariant,
  title,
  subtitle,
  body,
  ctaButtons,
  imageURL,
  imageAlt,
  textAlign,
  sectionID,
  customBgColor,
}: SimpleCardsProps) => {
  const { palette } = useTheme();
  const ctx = { palette, theme };

  const backgroundColor =
    customBgColor ??
    resolveThemeVariant<string>('sectionBackgroundColor', themeVariant, ctx);

  const textColor = TextColor(theme);
  const isCentered = textAlign === 'center';
  const isNone = textAlign === 'none';
  const editorialTextAlign = isCentered ? 'center' : 'left';
  const shouldShowImage = Boolean(imageURL && !isCentered && !isNone);
  const shouldShowEditorial = Boolean(
    !isNone &&
      (title || subtitle || body || ctaButtons?.length || shouldShowImage),
  );

  return (
    <ContainerRC
      background={backgroundColor}
      py={8}
      size='lg'
      sxInner={{
        width: '100%',
        maxWidth: '1156px',
        mx: 'auto',
        px: 0,
        boxSizing: 'border-box',
      }}
      {...(sectionID && { sectionID })}
    >
      <Box sx={{ width: '100%' }}>
        {shouldShowEditorial && (
          <Stack
            direction={{
              xs: 'column-reverse',
              md: shouldShowImage ? 'row' : 'column',
            }}
            alignItems={{
              xs: isCentered ? 'center' : 'flex-start',
              md: shouldShowImage
                ? 'center'
                : isCentered
                  ? 'center'
                  : 'flex-start',
            }}
            justifyContent='space-between'
            spacing={{ xs: 4, md: shouldShowImage ? 8 : 0 }}
            mb={6}
            color={textColor}
            textAlign={editorialTextAlign}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: shouldShowImage ? 448 : 684 },
              }}
            >
              <Stack
                spacing={2}
                color='inherit'
                sx={{
                  alignItems: isCentered ? 'center' : 'flex-start',
                  '& h1, & h2, & h3, & h4, & h5, & h6, & p': {
                    margin: 0,
                    color: 'inherit',
                  },
                  '& *': {
                    color: 'inherit',
                  },
                  '& a': {
                    color: 'inherit',
                    textDecoration: 'underline',
                  },
                }}
              >
                {title && (
                  <Title
                    component='h2'
                    variant='h4'
                    textColor='inherit'
                    title={title}
                    textAlign={editorialTextAlign}
                    marginBottom={0}
                  />
                )}

                {subtitle && (
                  <Subtitle
                    variant='h6'
                    textColor='inherit'
                    subtitle={subtitle}
                    textAlign={editorialTextAlign}
                    marginBottom={0}
                  />
                )}

                {body && (
                  <Typography
                    component='div'
                    variant='body1'
                    color='inherit'
                    textAlign={editorialTextAlign}
                    sx={{
                      '& p': {
                        margin: 0,
                        color: 'inherit',
                      },
                      '& strong': {
                        color: 'inherit',
                      },
                    }}
                  >
                    {body}
                  </Typography>
                )}
              </Stack>

              {ctaButtons?.length ? (
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  alignItems={isCentered ? 'center' : 'flex-start'}
                  justifyContent={isCentered ? 'center' : 'flex-start'}
                  mt={4}
                  sx={{
                    '& .MuiButton-root': {
                      width: 'auto',
                      alignSelf: isCentered ? 'center' : 'flex-start',
                    },
                  }}
                >
                  {CtaButtons({
                    ctaButtons: ctaButtons.map((button) => ({
                      ...button,
                      fullWidth: false,
                      sx: {
                        width: 'auto',
                        alignSelf: isCentered ? 'center' : 'flex-start',
                      },
                    })),
                    theme,
                    themeVariant,
                  })}
                </Stack>
              ) : null}
            </Box>

            {shouldShowImage && imageURL && (
              <Box
                sx={{
                  width: { xs: '100%', md: 260 },
                  display: 'flex',
                  justifyContent: { xs: 'flex-start', md: 'center' },
                  alignItems: 'center',
                  flexShrink: 0,
                  mt: { xs: 2, md: 0 },
                }}
              >
                <Image
                  src={imageURL}
                  alt={imageAlt ?? ''}
                  width={220}
                  height={220}
                />
              </Box>
            )}
          </Stack>
        )}

        <Box
          component='ul'
          sx={{
            m: 0,
            p: 0,
            width: '100%',
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(3, minmax(0, 1fr))',
            },
            gap: '20px',
          }}
        >
          {items.map((item, index) => (
            <SimpleCardsItem
              key={`${item.title}-${index}`}
              {...item}
              themeVariant={themeVariant}
            />
          ))}
        </Box>
      </Box>
    </ContainerRC>
  );
};

export default SimpleCards;
