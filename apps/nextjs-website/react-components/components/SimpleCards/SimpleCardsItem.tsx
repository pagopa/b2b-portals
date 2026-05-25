import Image from 'next/image';
import {
  Box,
  Card,
  CardContent,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
import { SimpleCardsItemProps } from '../../types/SimpleCards/SimpleCards.types';
import { isValidExternalLink } from '../common/Common';
import { resolveThemeVariant } from '../../theme';

const SimpleCardsItem = ({
  label,
  title,
  text,
  href,
  ariaLabel,
  iconURL,
  themeVariant,
}: SimpleCardsItemProps) => {
  const { palette } = useTheme();

  const titleColor = resolveThemeVariant<string>('actionColor', themeVariant, {
    palette,
    theme: 'light',
  });

  return (
    <Card
      component='li'
      elevation={0}
      sx={{
        display: 'flex',
        height: '100%',
        minHeight: { xs: 180, md: 176 },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '16px',
        listStyle: 'none',
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          '&:last-child': {
            pb: 3,
          },
        }}
      >
        {iconURL && (
          <Box mb={2}>
            {href ? (
              <Link
                href={href}
                color={titleColor}
                underline='always'
                aria-label={ariaLabel}
                {...(isValidExternalLink(href) && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                sx={{ display: 'inline-flex' }}
              >
                <Image src={iconURL} alt='' width={40} height={40} />
              </Link>
            ) : (
              <Image src={iconURL} alt='' width={40} height={40} />
            )}
          </Box>
        )}

        <Box mb={1}>
          {href ? (
            <Link
              href={href}
              color={titleColor}
              underline='always'
              aria-label={ariaLabel}
              fontSize='18px'
              fontWeight={700}
              {...(isValidExternalLink(href) && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {title}
            </Link>
          ) : (
            <Typography
              component='h3'
              fontSize='18px'
              fontWeight={700}
              color={titleColor}
              m={0}
            >
              {title}
            </Typography>
          )}
        </Box>

        {text && (
          <Typography variant='body2' mb={2}>
            {text}
          </Typography>
        )}

        {label && (
          <Typography
            mt='auto'
            textTransform='uppercase'
            fontSize='12px'
            fontWeight={600}
            color='text.secondary'
          >
            {label}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default SimpleCardsItem;
