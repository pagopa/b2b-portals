import { ArrowRightAlt } from '@mui/icons-material';
import { Box, Link, Stack, Typography, useTheme } from '@mui/material';
import { PressReleasePreviewProps } from '@react-components/types/PressReleaseList/PressReleaseList.types';

export const PressReleasePreview = ({
  date,
  dateIso,
  title,
  link,
  themeVariant,
}: PressReleasePreviewProps) => {
  const { palette } = useTheme();

  const linkColor = (() => {
    switch (themeVariant) {
      case 'SEND':
        return palette.primary.main;
      case 'IO':
        return palette.custom.primaryColorDark;
      case 'WALLET':
        return palette.custom.primaryColorDark;
    }
  })();

  return (
    <Box
      component={'li'}
      style={{ listStyleType: 'none' }}
      maxWidth={330}
      width={'100%'}
    >
      <Stack component={'article'} gap={2}>
        <Typography
          variant='overline'
          color='text.secondary'
          component={'time'}
          dateTime={dateIso}
        >
          {date}
        </Typography>
        <Typography component='h3' variant='h6' fontWeight={700}>
          {title}
        </Typography>
        <Typography
          variant='body2'
          fontWeight={700}
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='flex-start'
          gap={1}
          color={linkColor}
        >
          <Link
            href={link.href}
            color='inherit'
            sx={{ textDecoration: 'none' }}
            aria-label={`${link.label} "${title}"`}
          >
            {link.label}
          </Link>
          <ArrowRightAlt color='inherit' />
        </Typography>
      </Stack>
    </Box>
  );
};
