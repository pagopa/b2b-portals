import { ArrowRightAlt } from '@mui/icons-material';
import { Box, Link, Stack, Typography, useTheme } from '@mui/material';
import { PressReleasePreviewProps } from '@react-components/types/PressReleaseList/PressReleaseList.types';
import { resolveThemeVariant } from '../../theme';
import { isValidExternalLink, LinkIcon } from '../common/Common';

export const PressReleasePreview = ({
  date,
  dateIso,
  title,
  link,
  themeVariant = 'IO',
}: PressReleasePreviewProps) => {
  const { palette } = useTheme();

  const linkColor = resolveThemeVariant<string>(
    'contentLinkColor',
    themeVariant,
    { palette, theme: 'light' },
  );

  return (
    <Box
      component='li'
      style={{ listStyleType: 'none' }}
      maxWidth={330}
      width='100%'
    >
      <Stack component='article' gap={2}>
        <Typography
          variant='overline'
          color='text.secondary'
          component='time'
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
            {...(isValidExternalLink(link.href) && {
              target: '_blank',
            })}
          >
            {link.label}
          </Link>
          <LinkIcon
            sxExternalLinkIcon={{ ml: 0 }}
            showExternalLinkIcon={isValidExternalLink(link.href)}
            internalLinkIcon={<ArrowRightAlt color='inherit' />}
            {...(isValidExternalLink(link.href) && {
              externaLinkIconTarget: '_blank',
            })}
          />
        </Typography>
      </Stack>
    </Box>
  );
};
