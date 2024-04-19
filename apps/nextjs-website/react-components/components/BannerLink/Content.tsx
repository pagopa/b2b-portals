import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { BannerLinkContentProps } from '@react-components/types/BannerLink/BannerLink.types';
import { Title, Body } from '../common/Common';
import { TextColor } from '../common/Common.helpers';

export const Content = ({ title, body, theme }: BannerLinkContentProps) => {
  const { spacing } = useTheme();
  const textColor = TextColor(theme);

  return (
    <Stack textAlign='center' gap={spacing(2)}>
      <Title variant='h6' textColor={textColor} title={title} />
      <Body variant='body2' textColor={textColor} body={body} />
    </Stack>
  );
};
