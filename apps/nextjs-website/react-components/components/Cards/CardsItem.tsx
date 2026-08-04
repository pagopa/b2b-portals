import { Card, CardContent, Typography, Stack, Link, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardsItemProps } from '../../types/Cards/Cards.types';
import { Title, isValidExternalLink, LinkIcon } from '../common/Common';
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
  alignLinkIconLeft = true,
  sx,
}: CardsItemProps) => {
  const { palette } = useTheme();

  const linkColor = resolveThemeVariant<string>('actionColor', themeVariant, {
    palette,
    theme: 'light',
  });
  const linkHoverColor = resolveThemeVariant<string>(
    'richTextLinkHoverColor',
    themeVariant,
    {
      palette,
      theme: 'light',
    },
  );

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
          <Typography
            mb='5px'
            component='div'
            variant='body2'
            color={'inherit'}
            textAlign={textAlign}
            sx={{
              '& a': {
                color: linkColor,
                textDecoration: 'underline',
                '&:hover': {
                  color: linkHoverColor,
                },
              },
              '& p': {
                marginBottom: '0px',
                color: 'inherit',
                fontSize: '16px',
              },
            }}
          >
            {text}
          </Typography>
          {links?.length
            ? links.map((link, index) => (
                <Stack
                  key={index}
                  alignItems='center'
                  direction='row'
                  color={linkColor}
                  mt={2}
                  width='100%'
                  sx={{
                    '&:hover': {
                      color: linkHoverColor,
                    },
                  }}
                >
                  <Link
                    alignItems='center'
                    color='inherit'
                    display='inline-flex'
                    fontSize={16}
                    fontWeight={700}
                    href={link.href}
                    justifyContent={
                      alignLinkIconLeft ? 'flex-start' : 'space-between'
                    }
                    title={link.title}
                    underline='none'
                    width={alignLinkIconLeft ? 'auto' : '100%'}
                    {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
                    {...(isValidExternalLink(link.href) && {
                      target: '_blank',
                    })}
                  >
                    {link.label}
                    <LinkIcon
                      {...(isValidExternalLink(link.href) && {
                        externaLinkIconTarget: '_blank',
                      })}
                      showExternalLinkIcon={isValidExternalLink(link.href)}
                      internalLinkIcon={
                        <ArrowForwardIcon
                          sx={{
                            color: 'inherit',
                            height: 24,
                            marginLeft: 1,
                            width: 24,
                          }}
                        />
                      }
                    />
                  </Link>
                </Stack>
              ))
            : null}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardsItem;
