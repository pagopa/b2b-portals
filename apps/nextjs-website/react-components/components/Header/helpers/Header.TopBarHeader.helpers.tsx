import { Box, Typography } from '@mui/material';
import LangSwitch from './Header.LangSwitch.helpers';
import { LangSwitchProps } from '@react-components/types/Footer/Footer.types';

interface Props extends LangSwitchProps {
  topBarHeaderLogo?: {
    src: string;
    alt: string;
    href: string;
  };
  topBarHeaderTitle?: string;
  topBarHeaderTitleMobile?: string;
  isMobile: boolean;
}

export const TopBarHeader = ({
  topBarHeaderLogo,
  topBarHeaderTitle,
  topBarHeaderTitleMobile,
  isMobile,
  languages,
  activeLanguage,
}: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#004D99',
        color: '#FFFFFF',
        p: { xs: '14px 24px', sm: '12px 60px' },
      }}
    >
      {topBarHeaderLogo && (
        <img
          src={topBarHeaderLogo.src}
          {...(topBarHeaderLogo.alt && { alt: topBarHeaderLogo.alt })}
          style={{ marginRight: 8, height: 24 }}
        />
      )}
      {!isMobile && topBarHeaderTitle && (
        <Typography sx={{ color: 'inherit', fontWeight: 600, fontSize: 14 }}>
          {topBarHeaderTitle}
        </Typography>
      )}
      {isMobile && topBarHeaderTitleMobile && (
        <Typography sx={{ color: 'inherit', fontWeight: 600, fontSize: 14 }}>
          {topBarHeaderTitleMobile}
        </Typography>
      )}
      <LangSwitch
        isMobile={isMobile}
        activeLanguage={activeLanguage}
        languages={languages}
      />
    </Box>
  );
};
