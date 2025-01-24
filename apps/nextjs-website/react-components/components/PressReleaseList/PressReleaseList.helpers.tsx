import { ArrowRightAlt } from '@mui/icons-material';
import { Link, Stack, Typography, useTheme } from '@mui/material';
import { PressReleasePreviewProps } from '@react-components/types/PressReleaseList/PressReleaseList.types';

export const PressReleasePreview = ({
  date,
  title,
  link,
  themeVariant,
}: PressReleasePreviewProps) => {
  const { palette } = useTheme();

  const linkColor =
    themeVariant === 'SEND'
      ? palette.primary.main
      : palette.custom.primaryColorDark;

  return (
    <Stack gap={2} width={330}>
      <Typography variant='overline' color='text.secondary'>
        {date}
      </Typography>
      <Typography variant='h6' fontWeight={700}>
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
        <Link href={link.href} color='inherit' sx={{ textDecoration: 'none' }}>
          {link.label}
        </Link>
        <ArrowRightAlt color='inherit' />
      </Typography>
    </Stack>
  );
};
