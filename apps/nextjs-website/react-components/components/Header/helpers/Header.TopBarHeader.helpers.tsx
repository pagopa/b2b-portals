import { Box, Typography } from '@mui/material';
import {
  ExtraBackgroundColor,
  TextColor,
} from '@react-components/components/common/Common.helpers';
import { Theme } from '@react-components/types/common/Common.types';

interface Props {
  topBarHeaderLogo?: {
    src: string;
    alt: string;
    href: string;
  };
  topBarHeaderTitle?: string;
  topBarHeaderTitleMobile?: string;
  isMobile: boolean;
  theme: Theme;
}

export const TopBarHeader = ({
  topBarHeaderLogo,
  topBarHeaderTitle,
  topBarHeaderTitleMobile,
  isMobile,
  theme,
}: Props) => {
  const backgroundColor = ExtraBackgroundColor(theme);
  const color = TextColor(theme);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor,
        color,
        p: { xs: '14px 24px', sm: '14px 60px' },
      }}
    >
      {topBarHeaderLogo && (
        <img
          src={topBarHeaderLogo.src}
          {...(topBarHeaderLogo.alt && { alt: topBarHeaderLogo.alt })}
          style={{ marginRight: 8 }}
        />
      )}
      {!isMobile && topBarHeaderTitle && (
        <Typography sx={{ color, fontWeight: 600, fontSize: 14 }}>
          {topBarHeaderTitle}
        </Typography>
      )}
      {isMobile && topBarHeaderTitleMobile && (
        <Typography sx={{ color, fontWeight: 600, fontSize: 14 }}>
          {topBarHeaderTitleMobile}
        </Typography>
      )}
    </Box>
  );
};
