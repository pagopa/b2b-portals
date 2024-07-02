import { Stack, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { HeroCounterTextProps } from '@react-components/types/HeroCounter/HeroCounter.types';
import { Subtitle, Title } from '../common/Common';
import { TextColor } from '../common/Common.helpers';

export const HeroCounterTextContent = ({
  title,
  subtitle,
  theme,
  linkText,
  linkUrl,
}: HeroCounterTextProps) => {
  const textColor = TextColor(theme);

  return (
    <Stack
      justifyContent='center'
      alignItems='inherit'
      sx={{ minHeight: 'inherit' }}
      mt={{ xs: 9, lg: 0 }}
      component='section'
      spacing={2}
    >
      <Stack spacing={2} mb={{ xs: 6, md: 4 }}>
        <Title
          variant='h1'
          textColor={textColor}
          title={title}
          textAlign='left'
          marginBottom={2}
        />
        <Subtitle
          variant='body1'
          textColor={textColor}
          subtitle={subtitle}
          textAlign='left'
        />
        {linkText && linkUrl && (
          <Link
            href={linkUrl}
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: theme === 'dark' ? '#fff' : '#0062c3',
              mt: 2,
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            {linkText}
            <ArrowForwardIcon
              sx={{
                display: 'inline-block',
                ml: 1,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateX(2px)',
                },
              }}
            />
          </Link>
        )}
      </Stack>
    </Stack>
  );
};
