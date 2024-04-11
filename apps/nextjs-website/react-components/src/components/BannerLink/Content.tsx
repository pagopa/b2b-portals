import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { BannerLinkContentProps } from '../../utils/Components.types';
import {
  RenderGenericBody,
  RenderGenericTitle,
  useTextColor,
} from '../../utils/Components.helpers';

export const Content = ({ title, body, theme }: BannerLinkContentProps) => {
  const { spacing } = useTheme();
  const textColor = useTextColor(theme);

  return (
    <Stack textAlign='center' gap={spacing(2)}>
      <RenderGenericTitle variant='h6' color={textColor} title={title} />
      <RenderGenericBody variant='body2' textColor={textColor} body={body} />
    </Stack>
  );
};
