import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { PreFooterContentProps } from '@react-components/types/PreFooter/PreFooter';
import { Title } from '../common/Common';
import { TextColor } from '../common/Common.helpers';

export const Content = ({ title, theme }: PreFooterContentProps) => {
  const { spacing } = useTheme();
  const textColor = TextColor(theme);

  return (
    <Stack textAlign='center' gap={spacing(2)} sx={{ flex: 1 }}>
      <Title variant='h4' textColor={textColor} title={title} />
    </Stack>
  );
};