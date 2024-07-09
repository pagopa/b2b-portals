import Stack from '@mui/material/Stack';
import { BannerLinkSectionProps } from '../../types/BannerLink/BannerLink.types';
import { Title, Body } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { useTheme } from '@mui/material/styles';

export const Content = ({ title, normalText, boldText, extraNormalText, link, theme }: BannerLinkSectionProps & { theme: 'light' | 'dark' }) => {
  const { spacing } = useTheme();
  const { palette } = useTheme();
  const textColor = theme === 'dark' ? palette.primary.contrastText : TextColor(theme);

  return (
    <Stack textAlign='center' gap={spacing(2)} alignItems='center'>
      <Title variant='h4' textColor={textColor} title={title} />
      <Body variant='body2' textColor={textColor} body={
        <>
          <span style={{ color: textColor }}>{normalText}</span>{' '}
          <a href={link} style={{ fontWeight: 'bold', textDecoration: 'none', color: textColor }}>
            {boldText}
          </a>
          {extraNormalText && <span style={{ color: textColor }}> {extraNormalText}</span>}
        </>
      } />
    </Stack>
  );
};
