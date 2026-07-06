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

  const linkColor = resolveThemeVariant<string>('actionColor', themeVariant, {
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
        minHeight: '80px',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '16px',
        listStyle: 'none',
      }}
    >
      <CardContent
        sx={{
          width: '100%',
          py: 3,
          px: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
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
                color={linkColor}
                underline='always'
                aria-label={ariaLabel}
                {...(isValidExternalLink(href) && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                sx={{ display: 'inline-flex' }}
              >
                <Image src={iconURL} alt='' width={56} height={56} />
              </Link>
            ) : (
              <Image src={iconURL} alt='' width={56} height={56} />
            )}
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: 32,
            mb: text || label ? 1 : 0,
          }}
        >
          <Typography
            component='h3'
            fontSize='24px'
            fontWeight={700}
            color='text.primary'
            m={0}
            lineHeight={1.33}
          >
            {href ? (
              <Link
                href={href}
                color={linkColor}
                underline='always'
                aria-label={ariaLabel}
                fontSize='24px'
                fontWeight={700}
                {...(isValidExternalLink(href) && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </Typography>
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
            fontSize='14px'
            fontWeight={400}
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
