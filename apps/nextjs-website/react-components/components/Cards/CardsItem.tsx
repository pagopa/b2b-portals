import { Card, CardContent, Typography, Stack, Link, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardsItemProps } from '../../types/Cards/Cards.types';
import { Title, Body, isValidExternalLink, LinkIcon } from '../common/Common';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { resolveThemeVariant } from '../../theme';

const CardsItem = ({
  title,
  text,
  iconURL,
  links,
  textAlign,
  label,
  themeVariant,
  masonry,
  alignLinkIconLeft,
  sx,
}: CardsItemProps) => {
  const { palette } = useTheme();

  const linkColor = resolveThemeVariant<string>('actionColor', themeVariant, {
    palette,
    theme: 'light',
  });

  const borderColor = resolveThemeVariant<string>('borderColor', themeVariant, {
    palette,
    theme: 'light',
  });

  return (
    <Card
      component='li'
      sx={{
        display: 'flex',
        width: '100%',
        border: `1px solid ${borderColor}`,
        flex: { md: masonry ? '0 0 auto' : '1 1 0' },
        borderRadius: '24px',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        ...sx,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Stack justifyContent='flex-start' alignItems='flex-start'>
          {iconURL && (
            <Box mb={2} color='primary.dark'>
              <Image src={iconURL} alt='' height={40} width={40} />
            </Box>
          )}
          {label && (
            <Typography
              mb={1}
              textTransform='uppercase'
              fontSize='12px'
              fontWeight='600'
              color='text.secondary'
            >
              {label}
            </Typography>
          )}
          <Typography mb={2} component='div'>
            <Title
              variant='h6'
              textColor='inherit'
              title={title}
              marginBottom={1}
              textAlign='left'
            />
          </Typography>
          <Body
            variant='body2'
            textColor='inherit'
            body={text}
            marginBottom={5}
            textAlign={textAlign}
          />
          {links?.length
            ? links.map((link, index) => (
                <Stack
                  key={index}
                  mt={2}
                  direction='row'
                  alignItems='center'
                  color={linkColor}
                  justifyContent={alignLinkIconLeft ? 'left' : 'space-between'}
                  width='100%'
                >
                  <Link
                    color={linkColor}
                    underline='none'
                    href={link.href}
                    title={link.title}
                    fontSize={14}
                    fontWeight={600}
                    {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
                    {...(isValidExternalLink(link.href) && {
                      target: '_blank',
                    })}
                  >
                    {link.label}
                  </Link>
                  <LinkIcon
                    {...(isValidExternalLink(link.href) && {
                      externaLinkIconTarget: '_blank',
                    })}
                    showExternalLinkIcon={isValidExternalLink(link.href)}
                    internalLinkIcon={
                      <ArrowForwardIcon
                        sx={{
                          color: linkColor,
                          height: 24,
                          marginLeft: 1,
                          width: 24,
                        }}
                      />
                    }
                  />
                </Stack>
              ))
            : null}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardsItem;
