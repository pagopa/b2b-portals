import { Card, CardContent, Typography, Stack, Link, Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CardsItemProps } from '../../types/Cards/Cards.types';
import { Title, Body } from '../common/Common';
import Image from 'next/image';

const CardsItem = ({
  title,
  text,
  iconURL,
  links,
  textAlign,
  label,
  masonry,
}: CardsItemProps) => {
  return (
    <Card
      elevation={16}
      sx={{
        display: 'flex',
        minHeight: '100px',
        width: '100%',
        flex: { md: masonry ? '0 0 auto' : '1 1 0' },
        borderRadius: '16px',
      }}
    >
      <CardContent>
        <Stack px={4} justifyContent='flex-start' alignItems='flex-start' fontFamily='"Titillium Web",sans-serif'>
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
          <Title
            variant='h6'
            textColor={'inherit'}
            title={title}
            marginBottom={1}
            textAlign='left'
          />
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
                  color='primary.main'
                  justifyContent='flex-start'
                >
                  <Link
                    color='primary.main'
                    underline='none'
                    href={link.href}
                    title={link.title}
                    fontSize={14}
                    fontWeight={600}
                  >
                    {link.label}
                  </Link>
                  <ArrowRightAltIcon sx={{ color: 'inherit', fontSize: 18, marginLeft: 1 }} />
                </Stack>
              ))
            : null}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardsItem;