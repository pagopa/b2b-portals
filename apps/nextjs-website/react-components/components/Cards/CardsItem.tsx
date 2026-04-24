import { Card, CardContent, Typography, Stack, Link, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CardsItemProps } from '../../types/Cards/Cards.types';
import {
  Title,
  Body,
  ExternalLinkIcon,
  isValidExternalLink,
} from '../common/Common';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

const CardsItem = ({
  title,
  text,
  iconURL,
  links,
  textAlign,
  label,
  themeVariant,
  masonry,
}: CardsItemProps) => {
  const { palette } = useTheme();
  const linkColor = (() => {
    switch (themeVariant) {
      case 'SEND':
        return palette.primary.main;
      case 'IO':
        return palette.custom.blueIO[500];
      case 'WALLET':
        return palette.custom.blueIO[500];
    }
  })();

  return (
    <Card
      component='li'
      elevation={16}
      sx={{
        display: 'flex',
        minHeight: '200px',
        width: '100%',
        flex: { md: masonry ? '0 0 auto' : '1 1 0' },
        borderRadius: '16px',
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '200px',
        }}
      >
        <Stack
          px={4}
          justifyContent='flex-start'
          alignItems='flex-start'
          fontFamily='"Titillium Web",sans-serif'
        >
          <Box mb={2} color='primary.dark'>
            {iconURL && <Image src={iconURL} alt='' height={40} width={40} />}
          </Box>
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
              textColor={'inherit'}
              title={title}
              marginBottom={1}
              textAlign='left'
            />
          </Typography>
          <Body
            variant='body2'
            textColor={'inherit'}
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
                  justifyContent='flex-start'
                >
                  <Link
                    color={linkColor}
                    underline='none'
                    href={link.href}
                    title={link.title}
                    fontSize={14}
                    fontWeight={600}
                    {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
                    {...(link.href.startsWith('https') && { target: '_blank' })}
                  >
                    {link.label}
                    <ExternalLinkIcon show={isValidExternalLink(link.href)} />
                  </Link>
                  <ArrowRightAltIcon
                    sx={{ color: linkColor, fontSize: 18, marginLeft: 1 }}
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
